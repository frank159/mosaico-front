import { Button } from "@mui/material";
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
`;

export const Body = styled.div`
  margin-top: 5vh;
  width: auto;
  height: auto;
  padding-left: 12rem;
  padding-right: 12rem;

  @media (max-width: 1224px) {
    padding: 0 1rem !important; /* Reduz o padding lateral para telas pequenas */
  }
`;

export const ContainerSubA = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  align-items: start;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10vh;

  @media (max-width: 1224px) {
    margin-bottom: 0;
    margin-top: 10vh;
    width: auto;
    height: auto;
  }

  @media (max-width: 768px) {
    margin-top: 10vh;
    width: 100%;
    flex-direction: column;
  }
`;

export const ContainerLeftA = styled.div`
  width: 60%;
  height: 100% !important;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  @media (max-width: 1224px) {
    width: 100%;
    height: auto !important;
    align-items: start;
    text-align: start;
    margin-bottom: 1rem;
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
  justify-content: start;
  align-items: start;
  margin-top: 4rem;
  padding-right: 3rem;
  gap: 3rem;

  @media (max-width: 768px) {
    justify-content: center;

    padding-right: 0;
    margin-top: 2rem;
  }
`;

export const TextoA = styled.p`
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 1.2rem !important;
  }
`;

export const Stro = styled.strong``;

export const ContainerRightA = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 1224px) {
    height: auto;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const ImgFoto = styled.img`
  width: 100%;
  object-fit: contain;
  object-position: end;
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
  height: 20vh;
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
  }
`;

export const BodyB = styled.div`
  margin-top: 5vh;
  width: auto;
  height: auto;
  padding-left: 7rem;
  padding-right: 7rem;
  color: white;
  background-color: #252525;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1224px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const TitleB = styled.h1`
  line-height: 1;
  padding-top: 5vh;
  padding-bottom: 5vh;
  width: 100%;

  @media (max-width: 1224px) {
    padding-top: 5vh;
    padding-bottom: 5vh;
  }
`;

export const TitleC = styled.h1`
  line-height: 1;
  width: 100%;
`;

export const BigCard = styled.div<Props>`
  height: ${(props) => props.height || "80vh"};
  width: 60vw;
  margin-bottom: 10vh;
  background-color: black;
  border-radius: 21px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: 4rem;

  @media (max-width: 1224px) {
    padding: 2rem;
    width: 80vw;
  }

  @media (max-width: 768px) {
    width: 70vw;
  }
`;

export const ContainerBigCardFoto = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 1224px) {
    width: 100%;
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
  gap: 1rem;

  @media (max-width: 1224px) {
    flex-direction: ${(props) =>
      props.InvertCard ? "column-reverse" : "column"};
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
  position: relative;
`;

export const CardlindText = styled.div<Props>`
  width: 1px;

  width: 0.3rem; /* Define a largura da linha */
  height: 100%; /* Altura total ou personalizada */
  border-radius: 10px;
  background-color: #253529; /* Cor da linha */
  position: absolute; /* Necessário para o tamanho máximo da linha */
  top: 0;
  bottom: 0;
`;

export const TextoAContinerBigCard = styled.div`
  width: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const TextoBigCardSection = styled.div`
  display: flex;
  margin-left: 1rem;
  flex-direction: column;
`;

export const TitleBigcardB = styled.h1``;

export const TextoB = styled.p`
  line-height: 1;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1.2rem !important;
  }
`;

export const CardButton = styled(Button)`
  background-color: #2f2e29 !important;
  color: white !important;
  border-radius: 40px !important;
  text-transform: none !important;
  font-weight: lighter !important;
  width: 20vw;
  font-size: 1.2rem !important;

  @media (max-width: 1224px) {
    width: 100%;
  }
`;

export const TopSectionCardC = styled.div`
  width: 100%;
  margin-top: 3vh;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const BodyC = styled.div`
  width: auto;
  height: auto;
  padding-left: 7rem;
  padding-right: 7rem;
  padding-bottom: 4rem;
  color: white;
  background-color: #252525;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const VideoWrapper = styled.div`
  width: 70%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  @media (max-width: 1224px) {
    width: 100%;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const GalleryContainer = styled.div`
  background: #0f0f0f;
  padding: 2rem;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

export const GalleryImage = styled.img`
  width: 40vh;
  height: auto;
  object-fit: cover;
  background-color: none;
  border-radius: 5px;
  transition: 1s;

  &:hover {
    transition: 0.5s;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 80vh;
  }
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

export const VideoContainer = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const VideoGrid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  height: 100%;
  width: 100%;
  &:hover {
    transform: scale(1.03);
  }
`;

export const VideoThumbnail = styled.div`
  height: 100%;
`;
