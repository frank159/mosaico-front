import { Button } from '@mui/material';
import styled from 'styled-components';

interface Props {
  height?: string;
  InvertCard?: boolean;
}

export const MainContainer = styled.div`
  background: #000000;
  overflow-x: hidden;
  position: relative;
  overflow-y: hidden;
  margin-top: 5vh;
`;

export const Body = styled.div`
  width: auto;
  height: auto;

`;

export const ContainerSubA = styled.div`
  width: 100%;
  height: auto;
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
    flex-direction: column-reverse;

  }

  @media (max-width: 768px) {
    margin-top: 10vh;
    width: 100%;
    flex-direction: column-reverse;
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
  padding-top: 5rem;
  padding-left: 7rem;
  @media (max-width: 1224px) {
    width: 100%;
    padding-left: 2rem;
    padding-top: 2rem;
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
  justify-content: space-between;
  align-items: start;
  padding-right: 3rem;
`;

export const TextoA = styled.p`
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const TextoB = styled.p`
    font-size: 1.5rem;

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
`;

export const TitleB = styled.h1`
  line-height: 1;
  padding-top: 5vh;
  padding-bottom: 5vh;
  width: 100%;
`;

export const TitleC = styled.h1`
  line-height: 1;
  width: 100%;
`;

export const BigCard = styled.div<Props>`
  height: ${(props) => props.height || '80vh'};
  width: 60vw;
  margin-bottom: 10vh;
  background-color: black;
  border-radius: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem;
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
    flex-direction: ${(props) => props.InvertCard ? 'column-reverse' : 'column'};
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
`

export const CardlindText = styled.div<Props>`
  height: ${(props) => props.height || '100%'};
  width: 1px;

    border: solid 2px #2F2E29;
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



export const TitleBigcardB = styled.h1`

`;



export const CardButton = styled(Button)`
    background-color: #2F2E29 !important;
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
  width: auto;
  min-height: 100vh;
  padding-left: 7rem;
  padding-right: 7rem;
  color: white;
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1224px) {
    padding-left: 2rem;
    min-height: 60vh;
    padding-right: 2rem;
  }
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

  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }

  @media (max-width: 1224px) {
    margin-top: 2rem;
    align-items: start;
    flex-direction: column;
    width: 20rem;
  }
`;

export const GalleryContainer = styled.div`
  padding: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1224px) {
    padding: 2rem;
  }
`;

export const GalleryCard = styled.div`
    transition: 0.5s;
    z-index: 10;
  &:hover {
    z-index: 400;
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
    background-color: #ff0000;
  }

  & > div:nth-child(2),
  & > div:nth-child(3) {
    grid-column: span 2;
    background-color: #00ff00;
  }

  & > div:nth-child(4) {
    grid-column: span 1;
    background-color: #0000ff;
  }

  & > div:nth-child(5) {
    grid-column: span 1;
    background-color: #131310;
  }  
  & > div:nth-child(6) {
    grid-column: span 1;
    background-color: #ffff00;
  }


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;