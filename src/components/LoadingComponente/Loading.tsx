// LoadingOverlay.tsx
import styled, { keyframes } from "styled-components";

export const FullScreenLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0); /* fundo semitransparente */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* sempre por cima */
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Img = styled.img`
  width: 5rem;
  animation: ${rotate} 4s linear infinite;
  /* 4s = duração da rotação, linear = velocidade constante, infinite = nunca para */
`;
const img =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324730/mosaicoIconeMonoW_sqiexp.png";

const LoadingOverlay = () => (
  <FullScreenLoader>
    <Img alt="Loading..." src={img} />
  </FullScreenLoader>
);

export default LoadingOverlay;
