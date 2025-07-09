import styled from "styled-components";

export const Container = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8vh;
  background-color: #141c16;
  z-index: 211;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(-100%)"};

  @media (max-width: 768px) {
    height: 10vh;
  }
`;

export const Element = styled.div<{ isActive: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Altura proporcional ao header: ativo maior, inativo menor */
  height: ${({ isActive }) => (isActive ? "80%" : "60%")};
  width: auto;       /* largura fica automática para respeitar proporção da img */
  overflow: hidden;  /* garante que nada vaze */

  transition: height 0.3s ease;
  cursor: pointer;

  @media (max-width: 768px) {
    height: ${({ isActive }) => (isActive ? "85%" : "65%")};
  }

  &:hover {
    height: ${({ isActive }) => (isActive ? "85%" : "65%")};
  }
`;

export const StyledImg = styled.img<{ isActive: boolean }>`
  height: 100%;      /* preenche a altura do Element */
  width: auto;       /* largura ajusta para manter proporção */
  object-fit: contain;
  transition: filter 0.3s ease;

  filter: ${({ isActive }) =>
    isActive ? "none" : "grayscale(100%) brightness(60%)"};
`;
