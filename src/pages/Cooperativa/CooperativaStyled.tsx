import { Button } from '@mui/material';
import { motion } from 'motion/react';
import styled from 'styled-components';

// Containers principais
export const MainContainer = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
`;

export const FullImgFrame = styled.div`
  position: relative;
  margin-top: 5vh;
  height: 100vh;
  width: 100%;
  @media (max-width: 1224px) {
    height: 50vh;
  }
`;

export const FullImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

export const TitleOverlayContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 112;
  font-family: 'Montserrat';
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleLogo = styled.div``;

export const LogoImg = styled.img`
  height: 17vw;
  @media (max-width: 1224px) {
    height: 20vw;
  }
`;

// Texto de apresentação
export const SecaoTexto = styled.div`
  width: auto;
  height: auto;
  padding: 0 7rem;
  @media (max-width: 1224px) {
    padding: 0 2rem;
  }
`;

export const SecaoTextoCard = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1224px) {
    height: auto;
  }
`;

export const cardTextoImg = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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
  align-items: flex-start;
  @media (max-width: 1224px) {
    width: 100%;
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
`;

export const ContainerRightA = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 1224px) {
    width: 100%;
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
  }
`;

export const Stro = styled.strong``;

// Apresentação Homero
export const SecaoApresentacao = styled.div`
  width: auto;
  height: auto;
  position: relative;
  margin-top: 15vh;
  margin-bottom: 5vh;
  padding-left: 7rem;
  @media (max-width: 1224px) {
    padding: 0 2rem;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -5%;
  left: 7rem;
  width: 100%;
  z-index: -1;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #3b3b3b78;
  border-bottom: 1px solid #3b3b3b78;
  @media (max-width: 1224px) {
    display: block;
    border: none;
  }
`;

export const HomeroFullImgFrame = styled.div`
  position: relative;
  width: 75%;
  height: 80vh;
  overflow: hidden;
  margin-bottom: 8rem;
  z-index: 1;
  @media (max-width: 1224px) {
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
  }
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, black 100%);
  pointer-events: none;
`;

export const ImgStyled = styled.img<{ isMobile: boolean }>`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  object-position: 50% 30%;
  opacity: 0.2;
  z-index: 1;
  ${props => props.isMobile && `
    opacity: 0.1;
    object-position: right center;
  `}
`;

// Overlay Homero
export const OverlayContainer = styled.div<{ $isMobile?: boolean }>`
  display: flex;
  align-items: center;
  z-index: 1000;
  width: auto;
`;

export const OverlayContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  @media (max-width: 1224px) {
    padding-left: 0;
    gap: 4vw;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SmallImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 3vw;
  width: 30%;
  height: 100vh;
  padding-right: 3vw;
  margin-top: -1%;
  border-right: 1px solid #3b3b3b78;
  @media (max-width: 1224px) {
    border-right: none;
    width: 50%;
    gap: 3.5vw;
    height: auto;
  }
  @media (max-width: 768px) {
    width: 80%;
    gap: 3.5vw;
    height: auto;
  }
`;

export const SmallImage = styled.img`
  width: 100%;
  margin-top: 1rem;
`;

export const SmallImageText = styled.h1`
  font-weight: lighter;
  margin-top: 2rem;
  width: 100%;
  color: #ffffffb0;
  text-align: start;
  line-height: 1;
  @media (max-width: 1224px), (max-width: 768px) {
    margin-top: 1rem !important;
  }
`;

export const TextSection = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
    padding-right: 0 !important;
    font-size: 1.4rem !important;
  }
`;

export const SaibaMaisButton = styled(Button)`
  background-color: #1f1d1d !important;
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

// Filmes/Produções
export const MoviesContainer = styled.div`
  width: 100%;
  background-repeat: repeat-y;
  background-size: contain;
  background-position: center;
  background-image: url('https://res.cloudinary.com/djg8c78mb/image/upload/v1746324645/camerafundohomero_i3yjmv.png');
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh 0;
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
    background-image: url('https://res.cloudinary.com/djg8c78mb/image/upload/v1746324645/camerafundohomero_i3yjmv.png');
    opacity: 0.1;
    z-index: -1;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
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
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 1224px) {
    height: auto;
  }
`;

export const MovieButton = styled(Button)`
  background-color: #fca827 !important;
  color: #000 !important;
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
  margin: 0 5rem 5rem 5rem;
`;

export const Title = styled.h1`
  color: white;
  width: 100%;
  text-align: start;
  margin-bottom: 4vh !important;
  margin-left: 8vh !important;
`;

// Carrossel (mantido para referência futura, mas simplificado)
export const CarrocelSection = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardCarrocel = styled.div`
  width: 25vw;
  background-color: #1f1d1d;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 1vw;
  border-radius: 21px;
`;

export const CardCarrocelMotion = styled(motion.div)`
  width: 25vw;
  background-color: #1f1d1d;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 1vw;
  border-radius: 21px;
`;

export const CardCarrocelImg = styled.img`
  width: 90%;
  height: 50%;
  margin-top: 1.5rem;
  object-fit: cover;
  object-position: bottom;
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
  border: solid 2px #2f2e29;
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
  align-items: flex-start;
  height: 10%;
`;

export const CardCarrocelButton = styled(Button)`
  background-color: #2f2e29 !important;
  color: white !important;
  border-radius: 40px !important;
  text-transform: none !important;
  font-weight: lighter !important;
  width: 10vw !important;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
`;

export const CardCarrocelContent = styled.div`
  display: flex;
  height: 90%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;