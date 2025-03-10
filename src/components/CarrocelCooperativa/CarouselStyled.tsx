import styled from "styled-components";
import { Button } from '@mui/material';

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
  height: auto;
  align-content: center;
  text-align: center;
  color: ${props => props.textColor || 'white'};
  overflow: hidden;
  max-width: 100%;
  position: relative;

  /* Responsividade */
  @media (max-width: 820px) {
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
    align-items: start;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 300px;
    width: 100vw !important; /* Largura padrão para desktop */
  }

`;




export const CardContainer = styled.div<SlideProps>`
  height: 100%;
  width: 100% !important;
  display: flex;
  flex-direction: column;
  justify-content: start;
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

export const CardCarrocelImg = styled.img`
  width: 90%;
  height: 50%;
  margin-top: 1.5rem;
  object-fit: cover;
  object-position: bottom; /* Adiciona a posição da imagem ao final */
`;

export const ContainerCarrocelTitle = styled.div`
  height: 12% !important;
  display: flex !important;
  align-items: flex-end !important;
`;

export const CardCarrocelTitle = styled.h3`
  font-size: 2rem !important;
  padding: 0 !important;
  margin: 0 !important;
`;

interface CardCarrocelTextContainerProps {
  alignStart?: boolean;
}

export const CardCarrocelTextContainer = styled.div<CardCarrocelTextContainerProps>`
    display: flex;
    width: 90%;
    height: 100%;
    justify-content: space-between;
    align-items: ${props => (props.alignStart ? 'flex-start' : 'center')};  /* Condicional para alinhar ao início */
    flex-direction: row;
    gap: 10px;
    overflow: hidden;  /* Adiciona overflow hidden para o efeito de sobra */
    position: relative;  /* Necessário para o efeito de sobra */

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20px;  /* Ajuste conforme necessário */
        background: linear-gradient(to top, #1F1D1D, rgba(255, 255, 255, 0));  /* Efeito de sobra */
        pointer-events: none;  /* Permite interação com o texto */
    }
`;

export const Slide = styled.div<SlideProps & { isMobile?: boolean }>`
  background: #1F1D1D;
  border-radius: 10px;
  width: 100vw  !important;
  height: 65vh !important;
  cursor: grab;

  &:hover {
    background-color: ${props => props.hoverBackgroundColor || '#2c2a2a'};
  }

  &:hover ${CardCarrocelTextContainer}::after {
    background: linear-gradient(to top, #2c2a2a, rgba(255, 255, 255, 0));  /* Efeito de sobra */
  }

  &:active {
    cursor: grabbing;
  }

  ${({ isMobile }) =>
    isMobile &&
    `
      height: 70vh !important;  /* Ajuste a altura dos slides no mobile */
  `};
`;

export const CardCarrocelLineContainer = styled.div`
    height: 100%;
    width: 1px;
    background-color: #2F2E29;
    border: solid 2px #2F2E29;
`;

export const CardCarrocelText = styled.p`
    font-size: 1.3rem !important;
    margin-left: 1rem !important;
    margin-right: 1rem !important;
    @media (max-width: 768px) {
    font-size: 0.9rem !important;
  }
`;

export const CardCarrocelContent = styled.div`
    display: flex;
    height: 90%;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;

export const ContainerCarrocelButton = styled.div`
display: flex;
justify-content: center;
align-items: start;
  height: 10%;
  padding-top: 0.5rem;
`;

export const CardCarrocelButton = styled(Button)<{ isMobile?: boolean }>`
    background-color: #2F2E29 !important;
    color: white !important;
    border-radius: 40px !important;
    text-transform: none !important;
    font-weight: lighter !important;
    width: 10vw !important;

    ${({ isMobile }) =>
    isMobile &&
    `
      width: 60vw !important;
    `
  };
`;

