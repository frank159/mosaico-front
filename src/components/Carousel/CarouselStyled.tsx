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
  background-color: ${props => props.backgroundColor || '#062400'};
  overflow: hidden;
  max-width: 100%;
  position: relative;
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

export const CarouselWrapper = styled.div`
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
    height: 300px;
    max-height: 100vh;
  }
`;

export const Slide = styled.div<SlideProps>`
  background: ${props => props.gradient};
`;