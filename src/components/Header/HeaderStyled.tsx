import styled from "styled-components";

export const Container = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5vh;
  background-color: #141C16;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Adiciona a transição para suavizar o efeito de esconder/mostrar */
  transition: transform 0.3s ease-in-out;

  /* Estilo para visibilidade do header */
  transform: ${(props) => (props.isVisible ? "translateY(0)" : "translateY(-100%)")};

  @media (max-width: 768px) {
    height: 8vh;
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
  height: 3.9vh;
  transition: all 0.3s ease;

  &:hover {
        cursor: pointer;
        transition: 0.3s;
        transform: scale(1.1);
  }

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
