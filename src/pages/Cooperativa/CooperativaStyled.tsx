import { Button } from '@mui/material';
import { motion } from 'motion/react';
import styled, { keyframes } from 'styled-components';

export interface Props {
  height?: string;
}

export const MainContainer = styled.div`
  background: #000000;
  overflow-x: hidden;
  position: relative;
  overflow-y: hidden;
`;

export const FullImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

export const FullImgFrame = styled.div`
  position: relative;
  margin-top: 5vh;
  height: 100vh;
  width: 100%;

  @media (max-width: 1224px) {
    height: 50vh; /* Apenas metade da altura em dispositivos menores */
  }
`;

export const TitleOverlayContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  width: auto;
  transform: translate(-50%, -50%);
  z-index: 112;
  font-family: 'Montserrat';
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TitleLogo = styled.div``;

export const LogoImg = styled.img`
  height: 17vw;

  @media (max-width: 1224px) {
    height: 20vw; /* Ajusta o tamanho da logo para dispositivos menores */
  }
`;

export const Body = styled.div`
  width: auto;
  height: auto;
  padding-left: 7rem;
  padding-right: 7rem;

  @media (max-width: 1224px) {
    padding: 0 2rem; /* Reduz o padding lateral para telas pequenas */
  }
`;

export const Stro = styled.strong``;

export const ContainerA = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1224px) {
    height: auto; /* Permite que o container se ajuste ao conteúdo */
  }
`;

export const ContainerSubA = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1224px) {
    margin-top: 10vh;
  }

  @media (max-width: 768px) {
    margin-top: 10vh;
    flex-direction: column;
  }
`;

export const ContainerLeftA = styled.div`
  width: 50%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  @media (max-width: 1224px) {
    width: 100%;
    align-items: start;
    text-align: start;
    margin-bottom: 1rem;
  }
`;

export const TitleA = styled.h1`
  line-height: 1;
  font-weight: lighter;
  margin: 0 !important;
  padding: 0 !important;
`;

export const TextoA = styled.p`
  line-height: 1;
  margin-top: 1rem !important;
  /* @media (max-width: 768px) {
    font-size: 1.4rem !important;
  } */
`;

export const ContainerRightA = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  @media (max-width: 1224px) {
    width: 100%;
    align-items: end;
    margin-top: 1rem;
  }
`;

export const ImgFotoA = styled.img`
  width: 70%;
  border-radius: 21px;
  object-fit: cover;
  object-position: end;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RightTextA = styled.h1`
  font-weight: lighter;
  margin-top: 2rem !important;
  width: 100%;
  color: #ffffff57;
  text-align: end;
  line-height: 1;

  @media (max-width: 1224px) {
    margin-top: 1rem !important;
    text-align: end;
  }
`;

export const BodyB = styled.div`
  width: auto;
  margin-top: 15vh;

  @media (max-width: 1224px) {
    padding: 0 2rem; /* Reduz o padding lateral para telas pequenas */
  }
`;

export const MargemCoo = styled.div<Props>`
  height: 0;

@media (max-width: 1224px) {
    height: ${(props) => props.height || 'auto'};
  }
`;

export const ContainerB = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1224px) {
    height: auto; /* Permite que o container se ajuste ao conteúdo */
  }
`;

//////

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: end;
    border-top: 1px solid #3b3b3b78;
    border-bottom: 1px solid #3b3b3b78;
    @media (max-width: 1224px) {
        border-bottom: none;
        border-top: none;
    }
`;

export const HomeroFullImgFrame = styled.div`
  width: 75%;
  height: 80vh;
  overflow: hidden;
  position: relative; /* Necessário para o posicionamento absoluto do pseudo-elemento */
  margin-bottom: 8rem;

`;

/* Imagem */
export const HomeroFullImg = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  object-position: 50% 30%;
  opacity: 0.2;
  @media (max-width: 1224px) {
    opacity: 0.1;
  }
`;

/* Gradiente sobreposto */
export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%; /* Largura do gradiente */
  height: 100%;
  background: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, black 100%);
  pointer-events: none; /* Permite interações através do gradiente */
`;


export const OverlayContainer = styled.div`
  position: absolute;
  top: -5%;
  left: 7rem;
  display: flex;
  align-items: center;
  z-index: 1;

  @media (max-width: 1224px) {
    width: 100vw;
    left: 0;
  }

`;

export const OverlayContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 1224px) {
    gap: 4vw;
    flex-direction: column;
    align-items: start;
  }
`;

export const SmallImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-right: 3vw;
  width: 30%;
  height: 100vh;
  padding-right: 3vw;
  margin-top: -1%;
  border-right: 1px solid #3b3b3b78;
  @media (max-width: 1224px) {
    width: 50%;
    gap: 3.5vw;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 80%;
    gap: 3.5vw;
    height: auto;
    flex-direction: column;
  }
`;

export const SmallImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 1rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const SmallImageText = styled.h1`
  font-weight: lighter;
  margin-top: 2rem;
  width: 100%;
  color: #ffffff57;
  text-align: start;
  line-height: 1;

  @media (max-width: 1224px) {
    margin-top: 1rem !important;
  }
  
  @media (max-width: 768px) {
    margin-top: 1rem !important;
  }
`;

export const TextSection = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: -5vh;
  @media (max-width: 1224px) {
    margin-top: 0;
    width: 100%;
    height: auto;
  }
`;

export const TextTitle = styled.h2`
  color: white;
  font-size: 3rem !important;
  font-weight: lighter;
  line-height: 1;
  margin: 0 !important;
  padding: 0 !important;

`;

export const TextContent = styled.p`
  color: white;
  line-height: 1;
  margin: 0 !important;
  padding-right: 7rem !important;
  @media (max-width: 768px) {
    font-size: 1.4rem !important;
  }
`;

export const SaibaMaisButton = styled(Button)`
    background-color: #1F1D1D !important;
    color: white !important;
    text-transform: none !important;
    font-weight: lighter !important;
    margin-top: 3vw !important;
    width: 15vw !important;
   
    @media (max-width: 1224px) {
        width: 20vw !important;
    }
  
    @media (max-width: 768px) {
        width: 50vw !important;
    }
`;


//////

export const CarrocelSection = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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

export const CardCarrocelTitle = styled.h2`
  padding: 0 !important;
  margin: 0 !important;
`;

export const CardCarrocelText = styled.p`
    font-size: 1rem !important;
`;

export const CardCarrocelLineContainer = styled.div`
    height: 80%;
    width: 1px;

    border: solid 2px #2F2E29;
`;

export const CardCarrocelTextContainer = styled.div`
    display: flex;
    width: 90%;
    height: 37%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 10px;
`;

export const ContainerCarrocelButton = styled.div`
display: flex;
justify-content: center;
align-items: start;
  height: 10%;
`;

export const CardCarrocelButton = styled(Button)`
    background-color: #2F2E29 !important;
    color: white !important;
    border-radius: 40px !important;
    text-transform: none !important;
    font-weight: lighter !important;
    width: 10vw !important;
`;



/////////////
// Crie o componente motion baseado no CardCarrocel
export const CardCarrocelMotion = styled(motion.div)`
    width: 25vw;
    height: 60vh !important;
    background-color: #1F1D1D;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    color: white;
    padding: 1vw;
    border-radius: 21px;
`;

export const CardCarrocelContent = styled.div`
    display: flex;
    height: 90%;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;


export const CardCarrocel = styled.div`
    width: 25vw;
    height: 60vh !important;
    background-color: #1F1D1D;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    color: white;
    padding: 1vw;
    border-radius: 21px;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
`;

export const Title = styled.h1`
  color: white;
  width: 100%;
  text-align: start;
  margin-bottom: 4vh !important;
  margin-left: 8vh !important;
`;

// Adicione estes estilos no arquivo CooperativaStyled.tsx
export const MoviesContainer = styled.div`
  width: 100%;
  background-repeat: repeat-y;
  background-size: contain;
  background-position: center;
  background-image: url(${require("../../assets/images/img/camerafundohomero.webP")});
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 70%;
  position: relative;
  @media (max-width: 1224px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

export const MovieCard = styled.div`
  background-color: #222020d8;
  padding: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${require("../../assets/images/img/camerafundohomero.webP")});
    opacity: 0.1;
    z-index: -1;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 2rem !important;
  text-align: center;
`;

export const MovieDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem !important;
  border-left: 4px solid #00000034;
  padding-left: 1rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  @media (max-width: 1224px) {
    height: auto;
  }
`;

export const MovieButton = styled(Button)`
  background-color: #FCA827 !important;
  color: #000000 !important;
  border-radius: 3px !important;
  text-transform: none !important;
  width: 30% !important;
  margin-top: auto !important;
  font-family: 'Arsenal', sans-serif !important;
  @media (max-width: 1224px) {
    width: 40% !important;
  }
`;

export const LinhaHorizontal = styled.div`
  width: auto;
  height: 1px;
  background-color: #3b3b3b78; /* Cor da linha */
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 5rem;
`;