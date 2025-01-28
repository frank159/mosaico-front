import styled from "styled-components";

interface ColorProps {
  backgroundColor?: string;
  textColor?: string;
}

interface SlideProps {
  gradient?: string;
  backgroundColor?: string;
  backgroundColor2?: string;
  hoverBackgroundColor?: string;
}

export const Container = styled.div<ColorProps>`
  padding: 40px 0;
  height: 60vh;
  width: 100%;
  align-content: center;
  text-align: center;
  color: ${props => props.textColor || 'white'};
  background-color: ${props => props.backgroundColor || '#062400'};
  overflow: hidden;
  max-width: 100%;
  position: relative;

  /* Responsividade */
  @media (max-width: 768px) {
    width: 100%;  /* Garantir que o container ocupe toda a largura no mobile */
    padding: 20px 0;  /* Ajuste de padding para mobile */
  }
`;

export const Title = styled.h2<ColorProps>`
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: bold;
  color: ${props => props.textColor || 'white'};
`;

export const Subtitle = styled.p<ColorProps>`
  font-size: 16px;
  margin-bottom: 30px;
  color: ${props => props.textColor || 'white'};
`;

export const SlidComtainer = styled.div<SlideProps>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${props => props.backgroundColor || '#68cc79ae'};
  transition: all 0.3s ease-in-out;

  &:hover {
    width: 97%;
    height: 97%;
    background-color: ${props => props.hoverBackgroundColor || '#68cc797b'};
  }
`;

export const CarouselWrapper = styled.div<SlideProps>`
  .keen-slider {
    overflow: hidden;
  }
  background-color: ${props => props.backgroundColor2 || '#0000007a'};
  padding-top: 3vh;
  padding-bottom: 3vh;
  .keen-slider__slide {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 300px;
    width: 100vw; /* Largura padrão para desktop */
  }

  /* Adicionando responsividade */
  @media (max-width: 768px) {
    .keen-slider__slide {
      width: 80vw;  /* Ajuste a largura dos slides no mobile */
      height: 200px;  /* Ajuste a altura também se necessário */
    }
  }
`;


export const Slide = styled.div<SlideProps>`
  background: ${props => props.gradient};
  border-radius: 10px;
  width: 100vw;
  &:hover {
    background-color: ${props => props.hoverBackgroundColor || '#68cc797b'};
  }
`;

export const Img = styled.img<{ isMobile?: boolean }>`
  transform: scale(1.1);
  transition: transform 0.7s ease-in-out;
  width: 100%;  /* Garantindo que a imagem ocupe toda a largura do slide */
  object-fit: cover;  /* A imagem ocupará toda a área do slide sem distorcer */
  height: 100%;  /* Garantindo que a imagem ocupe toda a altura do slide */

  &:hover {
    transition: transform 0.7s ease-in-out;
    transform: scale(1.2);
  }

  ${({ isMobile }) =>
    isMobile &&
    `
      transform: scale(1.1);  /* Aumenta o tamanho da imagem */
      transition: transform 0.7s ease-in-out; /* Transição suave */
      width: 100%;  /* Imagem ocupará toda a largura do slide */
      object-fit: cover; /* A imagem ocupará toda a área no mobile também */
  `};
`;
