import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 0;
  height: 100vh;
  align-content: center;
  text-align: center;
  color: white;
  background-color: #062400;
  overflow: hidden;
  max-width: 100%;
  position: relative;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;

export const SlidComtainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #68cc79ae;

  transition: all 0.3s ease-in-out; /* Transição suave para todas as propriedades */

  &:hover {
    width: 97%;
    height: 97%;
    background-color: #68cc797b;
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

export const Slide = styled.div<{ gradient: string }>`
  background: ${(props) => props.gradient};
`;