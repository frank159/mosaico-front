import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { gsap } from 'gsap';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils';

const MosaicoContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const CanvasWrapper = styled.canvas`
  width: 100% !important;
  height: 100% !important;
  display: block;
  max-width: 100%;
`;

const interactiveIds = [13, 23];

const calculateTotalLength = (geometry) => {
  let total = 0;
  const positions = geometry.attributes.position.array;
  
  for (let i = 0; i < positions.length - 3; i += 6) {
    const x1 = positions[i];
    const y1 = positions[i + 1];
    const z1 = positions[i + 2];
    const x2 = positions[i + 3];
    const y2 = positions[i + 4];
    const z2 = positions[i + 5];
    
    total += Math.sqrt(
      Math.pow(x2 - x1, 2) +
      Math.pow(y2 - y1, 2) +
      Math.pow(z2 - z1, 2)
    );
  }
  
  return total;
};

const getTopFaceEdges = (geometry) => {
  const positions = geometry.attributes.position.array;
  const topY = Math.max(...Array.from({length: positions.length/3}, (_, i) => positions[i*3 + 1]));
  const edges = [];
  
  for (let i = 0; i < positions.length; i += 9) {
    const y1 = positions[i + 1];
    const y2 = positions[i + 4];
    const y3 = positions[i + 7];
    
    if (Math.abs(y1 - topY) < 0.1 && 
        Math.abs(y2 - topY) < 0.1 && 
        Math.abs(y3 - topY) < 0.1) {
      
      edges.push(
        positions[i], positions[i + 1], positions[i + 2],
        positions[i + 3], positions[i + 4], positions[i + 5],
        positions[i + 3], positions[i + 4], positions[i + 5],
        positions[i + 6], positions[i + 7], positions[i + 8],
        positions[i + 6], positions[i + 7], positions[i + 8],
        positions[i], positions[i + 1], positions[i + 2]
      );
    }
  }
  
  return new THREE.BufferGeometry().setAttribute(
    'position', 
    new THREE.Float32BufferAttribute(edges, 3)
  );
};

const createBorderMaterial = () => {
  return new THREE.LineDashedMaterial({
    color: 0x000000,
    dashSize: 1000,
    gapSize: 0,
    transparent: true,
    opacity: 0,
    linewidth: 2
  });
};

const Scene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 50);
    camera.lookAt(0, 0, 0);
  
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0xffffff);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NoToneMapping;

    // Configuração do Raycaster
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const animatingMeshes = new Map(); // Rastreia todas as meshes em animação

    // Após a configuração inicial da cena, adicione:
    const hoverLight = new THREE.PointLight(0xffffff, 2, 20);
    hoverLight.visible = false;
    scene.add(hoverLight);

    // Função para lidar com o movimento do mouse
    function onMouseMove(event) {
      const rect = canvasRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);
      const newHoveredMesh = intersects.length > 0 ? intersects[0].object : null;

      // Reseta todas as meshes que não estão mais em hover
      animatingMeshes.forEach((isHovered, mesh) => {
        if (mesh !== newHoveredMesh && isHovered) {
          animatingMeshes.set(mesh, false);
          gsap.to(mesh.position, {
            z: 0,
            duration: 0.3,
            delay: 0.2,
            onComplete: () => {
              animatingMeshes.delete(mesh);
            }
          });
        }
      });

      // Anima novo elemento em hover
      if (newHoveredMesh instanceof THREE.Mesh) {
        if (!animatingMeshes.get(newHoveredMesh)) {
          animatingMeshes.set(newHoveredMesh, true);
          
          // Altura extra para elementos interativos
          const hoverHeight = interactiveIds.includes(newHoveredMesh.userData.id) ? 50 : 30;
          
          gsap.to(newHoveredMesh.position, {
            z: hoverHeight,
            duration: 0.3
          });

          // Anima a borda se for elemento interativo
          if (newHoveredMesh.userData.border) {
            const border = newHoveredMesh.userData.border;
            border.visible = true;
            border.position.z = hoverHeight + 0.1;
            
            // Anima a opacidade da borda
            gsap.to(border.material, {
              opacity: 1,
              duration: 0.5,
              ease: "power2.inOut"
            });
            
            // Anima o progresso da borda ao redor do elemento
            gsap.fromTo(border.material,
              { 
                dashOffset: border.userData.totalLength 
              },
              {
                dashOffset: 0,
                duration: 1,
                ease: "power2.inOut"
              }
            );
          }
        }
      } else {
        // Esconde a luz quando não há hover
        hoverLight.visible = false;
      }
    }

    // Configuração das luzes
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(0, 1, 1);
    scene.add(ambientLight, directionalLight);

    // Configuração dos controles
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableRotate = false;
    controls.enabled = false;
    controls.minDistance = 840;
    controls.maxDistance = 840;
    controls.minPolarAngle = Math.PI / 2.5;
    controls.maxPolarAngle = Math.PI / 1.5;
    controls.minAzimuthAngle = -Math.PI / 6;
    controls.maxAzimuthAngle = Math.PI / 6;
    
    controls.target.set(0, 0, 0);
    controls.update();

    // Materiais
    const fillMaterial = new THREE.MeshPhongMaterial({ 
      color: "#F3FBFB",
      side: THREE.DoubleSide,
      transparent: false,
      opacity: 1,
      wireframe: false
    });
    

    const keepColorIds = [13, 23];

    // Vamos criar materiais diferentes para os elementos em cinza
    const grayMaterial = new THREE.MeshPhongMaterial({ 
      color: "#D3D3D3", // Cinza claro
      side: THREE.DoubleSide,
      transparent: false,
      opacity: 1,
      wireframe: false
    });

    const darkGrayMaterial = new THREE.MeshPhongMaterial({ 
      color: "#808080", // Cinza médio
      side: THREE.DoubleSide,
      transparent: false,
      opacity: 1,
      wireframe: false
    });

    const lightGrayMaterial = new THREE.MeshPhongMaterial({ 
      color: "#F5F5F5", // Cinza muito claro
      side: THREE.DoubleSide,
      transparent: false,
      opacity: 1,
      wireframe: false
    });

    // Função de renderização do SVG
    const renderSVG = (svgData) => {
      const svgGroup = new THREE.Group();
      svgGroup.scale.y *= -1;
      
      let meshId = 0;
      
      svgData.paths.forEach((path) => {
        const shapes = SVGLoader.createShapes(path);
        
        shapes.forEach(shape => {
          const options = {
            depth: 5,
            bevelEnabled: false,
          };
          const meshGeometry = new THREE.ExtrudeGeometry(shape, options);
          
          // Escolha o material baseado no ID
          let material;
          if (keepColorIds.includes(meshId)) {
            material = fillMaterial;
          } else {
            // Alterna entre os três tons de cinza
            const grayIndex = meshId % 3;
            switch(grayIndex) {
              case 0:
                material = grayMaterial;
                break;
              case 1:
                material = darkGrayMaterial;
                break;
              case 2:
                material = lightGrayMaterial;
                break;
            }
          }
          
          const mesh = new THREE.Mesh(meshGeometry, material);
          mesh.userData.id = meshId++;
          
          // Cria borda para elementos interativos
          if (interactiveIds.includes(meshId)) {
            const topEdgesGeometry = getTopFaceEdges(meshGeometry);
            const borderLine = new THREE.LineSegments(
              topEdgesGeometry,
              createBorderMaterial()
            );
            
            // Configura a borda
            borderLine.computeLineDistances(); // Necessário para LineDashedMaterial
            borderLine.visible = false;
            borderLine.position.z = 0.1;
            
            // Calcula o comprimento total da borda
            const totalLength = calculateTotalLength(topEdgesGeometry);
            borderLine.userData.totalLength = totalLength;
            
            mesh.userData.border = borderLine;
            svgGroup.add(borderLine);
          }
          
          svgGroup.add(mesh);
        });
      });

      // Centralização do objeto
      const box = new THREE.Box3().setFromObject(svgGroup);
      const size = box.getSize(new THREE.Vector3());
      const yOffset = size.y / -2;
      const xOffset = size.x / -2;

      svgGroup.children.forEach((item) => {
        item.position.x = xOffset;
        item.position.y = yOffset;
      });
      
      return {
        group: svgGroup
      };
    };

    // Carregar o SVG
    const loader = new SVGLoader();
    loader.load('../../assets/images/products/final.svg', (data) => {
      const { group } = renderSVG(data);
      scene.add(group);
    });

    // Adiciona o listener de mouse
    canvasRef.current.addEventListener('mousemove', onMouseMove);

    // Função de redimensionamento
    function resize(renderer) {
      const canvas = renderer.domElement;
      const parent = canvas.parentElement;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    // Função de renderização
    function render() {
      if (!canvasRef.current) return;

      if (resize(renderer)) {
        camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
        camera.updateProjectionMatrix();
      }
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }

    // Listener para redimensionamento da janela
    const handleResize = () => {
      if (!canvasRef.current) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    render();

    // Limpeza
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <MosaicoContainer>
      <CanvasWrapper ref={canvasRef} />
    </MosaicoContainer>
  );
};

export default Scene;