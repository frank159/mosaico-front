import styled from "styled-components";

export const Container = styled.div`
  position: fixed; /* Fixa o header no topo */
  top: 0; /* Define a posição no topo da tela */
  left: 0; /* Alinha à esquerda */
  width: 100%; /* Ocupa toda a largura */
  height: 5vh; /* Ajusta a altura */
  background-color: #f0f0f0;
  z-index: 1000; /* Garante que o header fique acima de outros elementos */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Adiciona sombra para destaque */
  
  @media (max-width: 768px) {
    height: 8vh; /* Aumenta a altura em telas pequenas */
  }
`;

export const Element = styled.div<{ isActive: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  /* Ajuste da altura e tamanho da fonte em telas pequenas */
  @media (max-width: 768px) {
    font-size: 16px;
    height: 6vh;
  }

  &:hover {
    height: 4vh;
  }
`;

export const Img = styled.img`
  height: 3.5vh;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: 5vh; /* Ajusta o tamanho da imagem em telas pequenas */
  }
`;

export const ShadowDiv = styled.div`
  position: fixed; /* Mantém a sombra fixa abaixo do Header */
  top: 5vh; /* Posiciona logo abaixo do Header */
  left: 0;
  right: 0;
  height: 10px; /* Altura da sombra */
  background: linear-gradient(
    to bottom, /* Gradiente para baixo */
    rgba(0, 0, 0, 0.5) 10%, /* Parte mais escura no topo */
    rgba(0, 0, 0, 0.048) 70%,
    rgba(0, 0, 0, 0) 90% /* Parte transparente no final */
  );
  pointer-events: none; /* Impede que a sombra interfira na interação do usuário */
  z-index: 999; /* Coloca a sombra acima de outros elementos, mas abaixo do header */
`;
