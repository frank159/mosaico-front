import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { gsap } from 'gsap';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils';

const CanvasWrapper = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
`;

const Scene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Configuração da cena
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

      // Anima a nova mesh em hover
      if (newHoveredMesh instanceof THREE.Mesh) {
        if (!animatingMeshes.get(newHoveredMesh)) {
          animatingMeshes.set(newHoveredMesh, true);
          
          // Posiciona a luz atrás do elemento
          const position = new THREE.Vector3();
          newHoveredMesh.getWorldPosition(position);
          hoverLight.position.copy(position);
          hoverLight.position.z -= 5;
          hoverLight.visible = true;

          gsap.to(newHoveredMesh.position, {
            z: 30, // Distância que o elemento sobe
            duration: 0.3
          });
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
    
    const strokeMaterial = new THREE.LineBasicMaterial({
      color: "#00A5E6",
      linewidth: 1,
      visible: false
    });

    // No início do arquivo, após os imports
    const textureLoader = new THREE.TextureLoader();

    // Primeiro, vamos criar um array com os IDs que devem manter a cor original
    const keepColorIds = [13, 10, 45, 73, 68, 46, 32, 74, 63, 30, 62, 10];

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
          
          const edgesGeometry = new THREE.EdgesGeometry(meshGeometry);
          const lines = new THREE.LineSegments(edgesGeometry, strokeMaterial);
          
          svgGroup.add(mesh);
          svgGroup.add(lines);
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
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    // Função de renderização
    function render() {
      if (resize(renderer)) {
        camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
        camera.updateProjectionMatrix();
      }
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }

    // Listener para redimensionamento da janela
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    render();

    // Limpeza
    return () => {
      canvas.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <CanvasWrapper ref={canvasRef} />;
};

export default Scene;