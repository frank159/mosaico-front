import { Button, ButtonBase } from "@mui/material";
import styled from "styled-components";

interface Props {
  height?: string;
  InvertCard?: boolean;
}

export const MainContainer = styled.div`
  background: #000000;
  overflow-x: hidden;
  position: relative;
  overflow-y: hidden;
  margin-top: 5rem;
  padding-bottom: 5rem;
`;

export const Body = styled.div`
  width: auto;
  height: auto;
  padding-top: 5rem;
`;

export const ContainerSubA = styled.div`
  width: auto;
  height: auto;
  display: flex;
  margin-bottom: 0;
  align-items: start;
  flex-direction: row;
  justify-content: center;
  padding-left: 3rem;

  @media (max-width: 900px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ContainerLeftA = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    width: 80%;
    padding-bottom: 3rem;
    flex-direction: column;
  }
`;

export const TitleA = styled.h1`
  line-height: 1;
  margin: 0 !important;
  padding: 0 !important;
`;

export const TextoAContiner = styled.div`
  height: 100% !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

export const TextoA = styled.p`
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const TextoB = styled.p`
  margin-top: 2rem !important;
  @media (max-width: 1224px) {
    font-size: 1.2rem !important;
  }
`;

export const TextoC = styled.p`
  margin-top: 2rem !important;
  font-size: 1.2rem !important;
  @media (max-width: 1224px) {
    margin-top: 0.5rem !important;
    font-size: 1rem !important;
  }
`;

export const Stro = styled.strong``;

export const ContainerRightA = styled.div`
  width: 70%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  text-align: start;
  margin-bottom: 5rem;
  padding-left: 3rem;
  padding-right: 3rem;

  @media (max-width: 900px) {
    padding-left: 0;
  }
`;

export const ImgList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ImgFotoDiv = styled.div`
  height: 17rem;
  width: 30rem;
  overflow: hidden;

  @media (max-width: 720px) {
    height: 9rem;
    width: 16rem;
  }
`;

export const ImgFoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* faz o corte para caber na div */
`;

export const ImgFotoA = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: end;
`;

export const ImgFotoB = styled.img`
  width: 80%;
  height: 80%;
  object-position: end;
`;

export const SubContainer = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const SubTextContainer = styled.p`
  width: 55%;
  text-align: center;

  @media (max-width: 1224px) {
    width: auto;
    text-align: start;
  }
`;

export const BodyB = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
`;

export const TextB = styled.p`
  color: white;
`;

export const TitleB = styled.h1`
  line-height: 1;
  padding-top: 1rem;
  width: 100%;
  color: white;
`;

export const ButtonB = styled(ButtonBase)`
  margin-top: 2rem !important;
  background-color: #253529 !important;
  color: #c2cfb4 !important;
  border-radius: 30px !important;
  padding: 1rem 2rem !important;
  font-weight: bold !important;
  font-size: 1.2rem;
  font-family: "Arsenal", sans-serif !important;
`;

export const TitleC = styled.h1`
  line-height: 1;
  color: white;
  width: 100%;
  white-space: nowrap;
`;

export const ContainerBigCardFoto = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 1224px) {
    width: 100%;
    margin-bottom: 3vh;
  }
`;

export const ContainerBigCardFotoB = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ImgBigCard = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: end;
`;

export const TopSectionCard = styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 1224px) {
    flex-direction: ${(props) =>
      props.InvertCard ? "column-reverse" : "column"};
    gap: 1vh;
  }
`;

export const TopSectionCardB = styled.div`
  width: 95%;
  height: auto;
  margin-top: 3vh;
  display: flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const CardlindText = styled.div<Props>`
  height: ${(props) => props.height || "100%"};
  width: 1px;

  border: solid 2px #2f2e29;
`;

export const TextoAContinerBigCard = styled.div`
  width: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding-left: 1rem;
`;

export const TextoBigCardSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleBigcardB = styled.h1``;

export const CardButton = styled(Button)`
  background-color: #2f2e29 !important;
  color: white !important;
  border-radius: 40px !important;
  text-transform: none !important;
  font-weight: lighter !important;
  width: 20vw;
  font-size: 1.5rem !important;

  @media (max-width: 1224px) {
    width: 100%;
  }
`;

export const TopSectionCardC = styled.div`
  width: 100%;
  margin-top: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BodyC = styled.div`
  margin-top: 5rem;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-bottom: 5rem;
`;

export const VideoWrapper = styled.div`
  width: 100vw;
  height: 80vh;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const Galeria = styled.div`
  display: flex;
  padding-top: 5rem;
  padding-bottom: 5rem;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 25rem;
  transition: 0.8s;

  @media (max-width: 1224px) {
    margin-top: 2rem;
    align-items: start;
    flex-direction: column;
    width: 20rem;
  }
`;

export const GalleryCard = styled.div`
  transition: 0.5s;
  z-index: 10;
  &:hover {
    z-index: 11;
    transition: 0.5s;
    transform: scale(1.1);
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0.6fr); /* 40% smaller */
  grid-template-rows: auto;
  gap: 6px; /* Adjust gap if needed */
  width: 60vw;
  & > div:nth-child(1) {
    grid-column: span 4;
  }

  & > div:nth-child(2),
  & > div:nth-child(3) {
    grid-column: span 2;
  }

  & > div:nth-child(4) {
    grid-column: span 1;
  }

  & > div:nth-child(5) {
    grid-column: span 1;
  }
  & > div:nth-child(6) {
    grid-column: span 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    gap: 12px;
    & > div {
      width: 90%;
      /* Garantir que todas as imagens tenham o mesmo tamanho */
      aspect-ratio: 1/1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 90%;
      height: 95%;
      object-fit: cover;
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
  border-radius: 50%;
  background-color: #2b2b2b;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto; /* altura base das células */
  gap: 12px;
  width: 100%;
  margin: 1rem 0;
  
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const GalleryItem = styled.div`
  display: flex;
  margin: 0.5rem 0.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  /* Definindo o estado inicial */
  transform: scale(1);
  transition: transform 0.3s ease-in-out; /* aplica para ambos os lados */
  z-index: 90;

  &:hover {
    z-index: 99;
    cursor: pointer;
    transform: scale(1.01);
  }
`;

export const GalleryImg = styled.img`
  max-width: 100%;
  max-height: 100%;

  object-fit: contain; /* garante que a imagem inteira aparece */
`;
