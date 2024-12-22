import React, { useRef, useEffect } from "react";
import p5 from "p5";
import Delaunator from 'delaunator';
import Voronoi from 'voronoi';

const VoronoiMosaic = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let voronoiPoints = [];
      let tiles = [];
      let images = [];

      p.preload = () => {
        // Carregar algumas imagens aleatórias
        for (let i = 0; i < 5; i++) {
          images.push(p.loadImage(`https://picsum.photos/200/200?random=${i}`));
        }
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.noLoop();

        // Gere pontos aleatórios para o diagrama de Voronoi
        const pointCount = 50;
        for (let i = 0; i < pointCount; i++) {
          voronoiPoints.push(p.createVector(p.random(p.width), p.random(p.height)));
        }

        generateVoronoi(voronoiPoints);
      };

      p.draw = () => {
        p.background(240);

        // Desenhe cada célula
        tiles.forEach((tile) => {
          const hasImage = p.random() < 0.3; // 30% das células terão imagens
          if (hasImage) {
            const img = p.random(images);
            p.fill("white");
            p.beginShape();
            tile.forEach(({ x, y }) => p.vertex(x, y));
            p.endShape(p.CLOSE);
            p.texture(img); // Aplica textura de imagem
            p.beginShape();
            tile.forEach(({ x, y }) => p.vertex(x, y));
            p.endShape(p.CLOSE);
          } else {
            p.fill(p.random(100, 200));
            p.stroke(255);
            p.beginShape();
            tile.forEach(({ x, y }) => p.vertex(x, y));
            p.endShape(p.CLOSE);
          }
        });
      };

      const generateVoronoi = (points) => {
        const delaunay = Delaunator.from(points.map((p) => [p.x, p.y]));
        
        // Verifique se o Delaunator gerou dados válidos
        if (!delaunay || !delaunay.hull || delaunay.hull.length === 0) {
          console.error("Erro ao gerar Delaunator.");
          return;
        }

        const voronoiDiagram = new Voronoi({
          delaunay,
          width: p.width,
          height: p.height,
        });

        // Verifique se o diagrama de Voronoi é válido
        if (voronoiDiagram && voronoiDiagram.edges) {
          // Aqui desenhamos os tiles do Voronoi corretamente
          voronoiDiagram.edges.forEach((edge) => {
            const { start, end } = edge;
            if (start && end) {
              tiles.push([start, end]);
            }
          });
        } else {
          console.error('Erro ao gerar o diagrama de Voronoi:', voronoiDiagram);
        }
      };

      // Cleanup do canvas ao desmontar o componente
      return () => {
        p.remove();
      };
    };

    // Inicializa o sketch
    new p5(sketch, sketchRef.current);

    // Cleanup quando o componente é desmontado
    return () => {
      sketchRef.current.innerHTML = "";
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default VoronoiMosaic;
