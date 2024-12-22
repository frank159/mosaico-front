import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import points from '../Mosaico/points';  // Lista de pontos importada
import { Container } from '../Mosaico/HomeStyled';
const boat = require('../../assets/images/products/boat.jpg');

export default function Mosaico() {
  const ref = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Defina o fator de dispersão para maior espaçamento entre os pontos
    const spacingFactor = 50;  // Quanto maior, maior o espaçamento entre os pontos
    const scaleFactor = 1.5;   // Fator de escala para aumentar o espaçamento

    // Ajuste os pontos com base no fator de dispersão
    let adjustedPoints = points;

    // Criar o nonágono perfeito no centro da tela
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 150; // Raio constante para o nonágono

    // Calcular os pontos do nonágono
    const nonagonPoints = Array.from({ length: 9 }).map((_, i) => {
      const angle = (i * 2 * Math.PI) / 9;
      return [
        centerX + radius * Math.cos(angle),
        centerY + radius * Math.sin(angle),
      ];
    });

    // Adicionar os pontos do nonágono ao array adjustedPoints
    adjustedPoints.push(...nonagonPoints);

    // Criar Voronoi a partir dos pontos ajustados
    const voronoi = d3.Delaunay.from(adjustedPoints).voronoi([0, 0, width, height]);

    const svgContainer = d3.select(ref.current);
    svgContainer.selectAll("*").remove();  // Limpar conteúdo anterior

    const svg = svgContainer
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Adiciona os polígonos Voronoi
    svg
      .selectAll("path")
      .data(voronoi.cellPolygons())
      .enter()
      .append("path")
      .attr("d", (d) => {
        // Calcula o centroide e o fator de escala para diminuir o polígono
        const centroid = d3.polygonCentroid(d);
        const menosscaleFactor = 0.9;

        const menosenlargedPolygon = d.map(([x, y]) => [
          centroid[0] + (x - centroid[0]) * menosscaleFactor,
          centroid[1] + (y - centroid[1]) * menosscaleFactor,
        ]);
        
        return `M${menosenlargedPolygon.join("L")}Z`; // Define a forma do polígono
      })
      .attr("fill", () => {
        const lightness = Math.random() * 60 + 20; // Luminosidade entre 20% e 80%
        return `hsl(0, 0%, ${lightness}%)`; // Tons de cinza
      })
      .style("transition", "all 0.2s ease-in-out")
      .on("mouseover", function (event, d) {
        const centroid = d3.polygonCentroid(d);
        const scaleFactor = 1.2;

        const enlargedPolygon = d.map(([x, y]) => [
          centroid[0] + (x - centroid[0]) * scaleFactor,
          centroid[1] + (y - centroid[1]) * scaleFactor,
        ]);
  
        d3.select(this)
          .raise()
          .transition()
          .duration(30)
          .attr("d", `M${enlargedPolygon.join("L")}Z`)
          .attr("fill", "#333");  // Cor mais escura ao passar o mouse
      })
      .on("mouseout", function (event, d) {
        d3.select(this)
          .transition()
          .duration(50)
          .attr("d", (d) => {
            const centroid = d3.polygonCentroid(d);
            const menosscaleFactor = 0.9;
            const menosenlargedPolygon = d.map(([x, y]) => [
              centroid[0] + (x - centroid[0]) * menosscaleFactor,
              centroid[1] + (y - centroid[1]) * menosscaleFactor,
            ]);
            
            return `M${menosenlargedPolygon.join("L")}Z`; // Define a forma do polígono
          })
          .attr("fill", () => {
            const lightness = Math.random() * 60 + 20;
            return `hsl(0, 0%, ${lightness}%)`;  // Retorna a cor original
          });
      });

    // Encontrar o polígono do caco com o índice 94
    const targetPolygon = voronoi.cellPolygons()[94];
    if (targetPolygon) {
      const centroid = d3.polygonCentroid(targetPolygon);
      const clipPathId = "clip-boat";

      // Criar o clipPath para a imagem
      svg
        .append("defs")
        .append("clipPath")
        .attr("id", clipPathId)
        .append("path")
        .attr("d", `M${targetPolygon.join("L")}Z`);

      // Adicionar a imagem no caco 94
      svg
        .append("image")
        .attr("x", centroid[0] - 50)
        .attr("y", centroid[1] - 50)
        .attr("width", 100)
        .attr("height", 100)
        .attr("xlink:href", boat)
        .attr("clip-path", `url(#${clipPathId})`);  // Aplica o clipPath no caco
    }
  }, []);

  return <Container ref={ref}></Container>;
}
