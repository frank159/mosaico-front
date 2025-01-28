import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: auto;
`;

export const TESTE = styled.div``;

export const PageButtonSection = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FullImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0.5;
`;

export const PageButton = styled.button`
  position: absolute;
  z-index: 1;
  background-color: rgb(0, 0, 0);
  color: white;
  border: 1px solid #ffffff;
  border-radius: 16px;
  padding: 12px 24px;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 7vh;
  animation: pulse 1.8s infinite ease-in-out;

  &:hover {
    background-color: rgb(24, 24, 24);
    font-size: 2.2rem;
    animation: none;
  }

  @keyframes pulse {
    0% {
      background-color: rgb(0, 0, 0);
    }
    50% {
      background-color: rgb(85, 85, 85);
    }
    100% {
      background-color: rgb(0, 0, 0);
    }
  }
`;

export const MosaicoWrapper = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    pointer-events: none;
    z-index: 1;
  }
`;

export const TitleOverlayContainer = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  width: auto;
  transform: translate(-50%, -50%);
  z-index: 2;
  font-family: 'Montserrat';
  color: white;
  pointer-events: none;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleOverlay = styled.div`
  display: inline-block;
  font-size: 3rem;
  font-weight: 900;
  color: #000000;
  letter-spacing: 50px;
  white-space: nowrap;
  text-align: center;
  animation: pulse 2s infinite ease-in-out;

  @keyframes pulse {
    0% {
      text-shadow: none;
    }
    50% {
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.747);
    }
    100% {
      text-shadow: none;
    }
  }

  /* Alterar cor da fonte em telas menores */
  @media (max-width: 768px) { /* Define o tamanho máximo da tela (por exemplo, 768px) */
    font-size: 3rem;
    font-weight: 900;
    color: #000000;
    letter-spacing: 5px;
    white-space: nowrap;
    text-align: center;
    animation: pulse 2s infinite ease-in-out;  
  }
`;


export const TextOverlay = styled.div`
  display: inline-block;
  font-size: 1rem;
  font-weight: 900;
  color: #000000;
  letter-spacing: 0.6em;
  white-space: nowrap;
  text-align: center;
  padding-right: 2.5em;
  @media (max-width: 768px) { /* Define o tamanho máximo da tela (por exemplo, 768px) */
    font-size: 1rem;
    font-weight: 900;
    color: #000000;
    margin-left: 10%;
    letter-spacing: 0.05rem;
    white-space: nowrap;
    text-align: center;
    padding-right: 2.5em;
  }
`;
