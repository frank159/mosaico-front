import styled from "styled-components";

interface ColorProps {
  backgroundColor?: string;
  textColor?: string;
}

interface SlideProps {
  gradient?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
}

export const Container = styled.div<ColorProps>`
  padding: 40px 0;
  height: 100vh;
  align-content: center;
  text-align: center;
  color: ${props => props.textColor || 'white'};
  background-color: ${props => props.backgroundColor || '#ffffff0'};
  overflow: hidden;
  max-width: 100%;
  position: relative;
`;

export const CarouselWrapper = styled.div`
  position: relative;

  z-index: 2; /* Mantém o carrossel acima da imagem */
  .keen-slider {
    overflow: hidden;
  }

  .keen-slider__slide {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    max-height: 100vh;
  }
`;

export const Slide = styled.div<SlideProps>`
  background: ${props => props.gradient};
`;

export const VectorImage = styled.img`
  position: absolute;
  left: 0;
  top: 2;
  width: 20%; /* 30% da largura do carrossel */
  height: auto;
  rotate: -40deg;
  opacity: 10%;
  z-index: 1; /* Coloca a imagem por trás do carrossel */
  pointer-events: none; /* Evita que a imagem interfira em interações do usuário */
`;

export const ProgressCircle = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  z-index: 3;

  svg {
    transform: rotate(-90deg);
  }
`;