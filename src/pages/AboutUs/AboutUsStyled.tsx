import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import { Button } from "@mui/material";

interface Props {
  width?: string;
  height?: string;
  isMobile?: boolean;
}

export const MainContainer = styled.div`
  background: #c2cfb4;
  display: flex;
  flex-direction: column;
  height: auto;
  padding-top: 5vh;
  padding: 80px;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px !important; /* Ajuste de padding para mobile */
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-top: 8vh;
  width: 100%;
`;

export const TitleContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-top: 8vh;
  width: 100%;
`;

export const TexteContainer = styled.div`
  z-index: 111;
  margin-bottom: 3rem;
`;

export const TitleLogo = styled.div`
  margin-left: 17vw;
`;

export const TitleLogo1 = styled.div``;

export const LogoImg = styled.img`
  width: 50vw;
  opacity: 0.05;
`;

export const IconEsclamacaoCard = styled.div`
  position: absolute;
  z-index: 1111;
  left: 20.5vw;
  top: 0px;
`;

export const TitleText = styled.h1`
  color: #141c16;
  padding: none;
  margin-right: 13px;
`;

export const TitleText2 = styled.h1`
  color: #141c16;
  padding: none;
  font-size: 5rem !important;
  margin-right: 13px;

  @media (max-width: 768px) {
    font-size: 3rem !important; /* Ajuste de fonte para mobile */
  }
`;

export const TitleText1 = styled(TitleText)`
  font-size: 30vh !important;
  font-style: italic !important;
  color: rgba(78, 92, 44, 0.3) !important;
  font-weight: 1000 !important;
  font-family: "Arimo" !important;
  left: 0% !important;
  top: 50% !important;

  @media (max-width: 768px) {
    font-size: 20vh !important; /* Ajuste de fonte para mobile */
  }
`;

export const SubTextContainer = styled.div``;

export const SubTextText = styled.p`
  color: #141c16;
  font-weight: 500;
  padding: none;
  margin: none;
`;

export const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 13vh;
`;

export const ContainerTitleA = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SubTitleText = styled.h1`
  color: #141c16;
  font-style: normal;
`;

export const IconCardContainer = styled.div`
  margin-top: 9vh;
`;

export const IconCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #141c16;
  height: 7rem;
  padding: 1rem;
  position: relative;
  border-radius: 0.2rem;
  width: 60vw;
`;

export const IconCardTextContainer = styled.div``;

export const IconCardTextTitle = styled.div`
  color: #c2cfb4;
  font-size: 2rem;
  padding: 10px;
  margin-left: 15px;
  font-weight: bolder;
`;

export const IconCardText = styled.div`
  color: #c2cfb4;
  font-size: 1.4rem;
`;

export const IconImgCardContainer = styled.div``;

export const IconImgCard = styled.img<Props>`
  width: ${(props) => props.width};
`;

export const PilaresListContainer = styled.div`
  display: flex;
  z-index: 1111111;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  height: auto;
  position: relative; /* Necessário para o tamanho máximo da linha */
  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const PilaresListContainer1 = styled.div`
  display: flex;
  z-index: 1111111;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  height: 70vh;
  position: relative; /* Necessário para o tamanho máximo da linha */
  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const PilaresListItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 2rem;
  justify-content: start;
  height: auto;
`;

export const PilaresListLine = styled.div`
  width: 0.1rem; /* Define a largura da linha */
  height: 100%; /* Altura total ou personalizada */
  border-radius: 10px;
  background-color: #000000; /* Cor da linha */
  position: absolute; /* Necessário para o tamanho máximo da linha */
  top: 0;
  bottom: 0;
`;

export const PilaresListLine1 = styled(PilaresListLine)``;

export const PilaresCard = styled.div`
  margin-bottom: 3vh;
  margin-top: 3vh;
`;

export const PilaresCard1 = styled.div`
  margin-top: 6vh;
`;

export const PilaresTitleIcon = styled.img<Props>`
  height: ${(props) => props.height};
  margin-right: 1rem;
`;

export const PilaresTitleText = styled.h1`
  color: #141c16;
  margin-left: 10vw;
  @media (max-width: 768px) {
    font-size: 2.5rem !important;
  }
`;

export const PilaresTitleText1 = styled.h2`
  color: #141c16;
  margin-left: 10vw;
`;

export const PilaresTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

export const PilaresTextContainer = styled.div``;

export const PilaresText = styled.p`
  color: #141c16;
  max-width: 70vw;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const PilaresList = styled.ul`
  list-style-position: inside;
  padding-left: 0;
`;

export const SubItenList = styled.li`
  font-weight: bolder;
`;

export const BigIconCardContainer = styled.div`
  z-index: 111;
  width: 100%;
  background-color: #c2cfb4;
`;

export const FinalContainer = styled.div`
  position: relative; /* Adicionado para criar um novo contexto de empilhamento */
  padding-top: 6vh;
  background-color: #c2cfb4;
  z-index: 1111111111111;
  padding: 80px 80px 0 80px;

  @media (max-width: 768px) {
    padding: 20px !important;
  }
`;

export const BigIconCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #b8bca4;
  height: 28vh;
  position: relative;
  width: 100%;
`;

export const BigIconCardTitleContainer = styled.div`
  display: flex;
  flex-wrap: row;
  justify-content: space-between;
  width: 100%;
`;

export const BigIconCardTitle = styled.h1`
  color: #141c16;
  position: relative;
  margin-right: 2rem !important;
  margin-left: 2rem !important;
`;

export const BigIconImgCard = styled.div<Props>`
  transform: translate(-50%, -50%) !important;
  position: absolute !important;
  top: 50% !important;
  left: 95% !important;
  z-index: 0;
`;

export const BigIconTextCard = styled.p<Props>`
  font-size: 30vh !important;
  font-style: italic !important;
  color: rgba(78, 92, 44, 0.3) !important;
  font-weight: 1000 !important;
  font-family: "Arimo" !important;
`;

export const BigIconItenList = styled.div`
  font-family: "Chocolates", sans-serif;
  font-weight: bolder;
  color: #c2cfb4;
  font-size: 1.3rem;
`;

export const BigIconText = styled.p`
  color: #141c16;
`;

export const BigIconCardTextContainer = styled.div`
  position: relative;
  top: -80px;
`;

export const CheckCardsContainer = styled.div`
  width: 100%;
  z-index: 111;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3vw;
  align-items: center;
  padding-top: 1vh;

  @media (max-width: 768px) {
    flex-direction: column !important;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  background-color: rgba(102, 112, 77, 0.10);
  height: 20vh;
  margin-bottom: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FinalButton = styled(Button)`
  font-size: 1.2rem !important;
  background-color: #4E5C2C !important;
  border-radius: 70px !important;
  padding: 0.5rem !important;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
  color: white !important;
  font-family: 'Arsenal', sans-serif !important;

  @media (max-width: 768px) {
    font-size: 0.8rem !important;
  }
`;

export const CheckCardsContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 38px;
  color: #141c16;
  font-weight: bolder;
  font-style: italic;
  z-index: 111;
  padding-top: 8vh;
  padding-bottom: 5vh;
  font-size: 2.5rem !important;
  @media (max-width: 1224px) {
    font-size: 1.5rem !important;
  }
`;

export const CheckCardsContainerSubTitle = styled.div`
  color: #000000;
  font-weight: lighter;
  font-style: normal;
  font-size: 23px;
  padding-top: 8px;
`;
export const CheckCard = styled.div<Props>`
  position: relative;
  border: 1px solid #8f1919;
  border-radius: 7px;

  flex-grow: 1;
  @media (max-width: 768px) {
    width: ${(prop) => (prop.width ? prop.width : "fit-content")};
  }
`;

export const CheckCard1 = styled.div`
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
`;

export const CheckCardIcon = styled(ClearIcon)`
  font-size: 2.5rem !important;
  color: red;
`;

export const CheckCardIcon2 = styled(CheckIcon)`
  font-size: 2.5rem !important;
  color: green;
`;

export const CheckCardTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 10px;
  width: fit-content;
`;

export const MidCardTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 30vw;
`;

export const CheckCardTextTitle = styled.h2`
  align-items: start;
  color: #141c16;
  margin: 0 !important;
  line-height: 1 !important;
`;

export const CheckCardTextTitleA = styled.h2`
  align-items: start;
  color: #141c16;
  margin: 0 !important;
  line-height: 1 !important;
  font-size: 2.5rem !important;
`;

export const CheckCardText = styled.p`
  color: #141c16;
  padding-bottom: 1rem;
`;

export const CheckCard2 = styled.div`
  position: relative;
  background-color: #4e5c2c;
  border-radius: 7px;
  height: 20vh;
  padding: 20px;
  width: 19vw;
`;

export const ColaboradoresCard = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColaboradoresTitle = styled.div`
  color: #c2cfb4;
  font-weight: bolder;
  font-size: 1.4rem;
  font-family: "Chocolates", sans-serif;
`;

export const ColaboradoresText = styled.div`
  color: #c2cfb4;
  width: 30vw;
  font-size: 1.4rem;
  font-family: "Chocolates", sans-serif;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgColaboradorContainer = styled.div`
  margin-right: 10px;
`;

export const ImgColaborador = styled.img<Props>`
  width: ${(props) => props.width};
`;

export const VectorImage = styled.img<Props>`
  position: absolute;
  margin-right: 5vw;
  margin-top: 3vw;
  right: 0;
  top: 100%;
  width: 36%; /* 30% da largura do carrossel */
  height: auto;
  opacity: 0.2;
  z-index: 0; /* Coloca a imagem por trás do carrossel */
  pointer-events: none; /* Evita que a imagem interfira em interações do usuário */
  transform: translateY(-100%);
`;

export const SecaoInicialContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 111110;
`;

export const SecaoInicialIcon = styled.img`
  height: 2rem; /* 30% da largura do carrossel */
  padding-right: 1rem;
  padding-left: 1rem;
`;

export const SecaoInicialText = styled.div`
  color: #141c16;
  font-size: 1.6rem;
  text-align: center;
  font-style: italic;
`;

export const InitialText = styled.p`
  color: #141c16;
  margin: 20px;
`;

export const InitialTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15vh;
  z-index: 1111111;
`;

export const Line = styled.div`
  height: 90px;
  width: 3px;
  background-color: #c2cfb4;
  border-radius: 10px;
`;

export const CardTextContainer = styled.div`
  width: 100%;
  margin-top: 17vh;
  z-index: 1111111;
`;

export const CardText = styled.div`
  width: 100%;
  font-size: 1.8rem;
  color: #141c16;
`;

export const Card = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 4rem;
  width: 50vw;

  @media (max-width: 768px) {
    width: 90vw; /* Ajuste de fonte para mobile */
  }
`;

export const IconInicialCard = styled.img`
  height: 100%;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
`;

export const MidCardSection = styled.div`
  margin-bottom: 6vh;
  background-color: #c2cfb4;
  display: flex;
  flex-direction: column;
  gap: 4vh;
  width: 100%;
  z-index: 100000;
  position: relative;
`;

export const MidCardSection1 = styled.div`
  margin-bottom: 6vh;
  background-color: #c2cfb4;
  display: flex;
  flex-direction: column;
  gap: 4vh;
  align-items: end;
  width: 100%;
  z-index: 100000;
  position: relative;
`;

export const MidCard = styled.div`
  background-color: rgba(102, 112, 77, 0.19);
  border: 1px solid #6d9621;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  padding-right: 2rem;
`;

export const MidCard1 = styled(MidCard)`
  align-items: start;
`;
