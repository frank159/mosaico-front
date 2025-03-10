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
  margin-top: 10vh;
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
  justify-content: space-between;
  align-items: start;
  padding-right: 3rem;
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
  height: ${(props)=> props.height || '80vh'};
  width: 60vw;
  margin-bottom: 10vh;
  background-color: black;
  border-radius: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem;

  @media (max-width: 1224px) {
    padding: 1rem;
    width: 80vw;
  }
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
    flex-direction: ${(props)=> props.InvertCard ? 'column-reverse' : 'column'};
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
  position: relative;
`



export const CardlindText = styled.div<Props>`
  width: 1px;

  width: 0.3rem; /* Define a largura da linha */
  height: 100%; /* Altura total ou personalizada */
  border-radius: 10px;
  background-color: #253529; /* Cor da linha */
  position: absolute;  /* Necessário para o tamanho máximo da linha */
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
  padding-left: 1rem;
`;

export const TextoBigCardSection = styled.div`
  display: flex;
  margin-left: 1rem;
  flex-direction: column;
`;



export const TitleBigcardB = styled.h1`

`;

export const TextoB = styled.p`
  line-height: 1;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1.2rem !important; 
  }
`;

export const CardButton = styled(Button)`
    background-color: #2F2E29 !important;
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
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;


export const VideoWrapper = styled.div`
  width: 70vw;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;