import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';

const calqueti = require("../../assets/images/img/clacket.png")

interface QuinSecaoProps {
  width: string;
}

export const Container = styled.div`
    background: #E4EBDD;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;

    overflow-x: hidden;

`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    margin-top: 5vh;
    height: 50vh;
    padding-top: 10vh;
    width: 100%;

    @media (max-width: 1224px) {
    justify-content: center;
  }

`;

export const TitleContant = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    @media (max-width: 1224px) {
    flex-direction: column;
    justify-content: center;
  }

  
`;

export const TitleOverlayContainer = styled.div`
  position: absolute;
  top: 10%;
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

export const TextOverlay = styled.div`
  font-size: 10rem;
  font-weight: 900;
  color: #000000;
  letter-spacing: 0.6em;
  text-align: center;
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

export const TESTE = styled.div`

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
    background: linear-gradient(to top,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    pointer-events: none;
    z-index: 1;
  }
`;

export const Hr = styled.hr`
  margin-top: 7vh;
  width: 97%;
  border: 1px solid #1a3f136c
`;

export const ImgBuner = styled.img`
  width: 100%;
`;

export const ImgBuner2 = styled.img`
  width: 100%;

`;

export const FinalTextContainer = styled.div`
`;

export const FinalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImgContainer = styled.div`

`;

export const TitleSection = styled.div`
  font-size: 2rem;
  padding-top: 4vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 1224px) {
    align-items: center;
  }

`;

export const DivText = styled.div`
  font-size: 1.4rem;
  padding: 0 !important;
`;

export const DivTitle = styled.h1`
font-weight: lighter !important;
font-size: 8rem !important;

@media (max-width: 1224px) {
    font-size: 4rem !important;
  }
`;

export const DivBigText = styled.div`
  background-color: #e4ebdd;
  font-size: 1.7rem;
  margin-top: 20vh;
  margin-left: 10vh;
  width: 80%;
`;

export const DivBigTextAtencao = styled.div`
  background-color: #e4ebdd;
  font-size: 2rem;
  color: #8d8223;
  font-weight: bolder;
  margin-top: 3vh;
  width: 100%;
  text-align: center;
`;

interface Props {
  src?: string;
  backgroundColorCard?: string;
  top?: string;
  color?: string;
  color2?: string;
}

export const ImgContainer2 = styled.div<Props>`
  position: relative;
  height: 100%;
  width: 100%;
  height: 100vh; /* ou a altura desejada */
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  height: auto;
  background-color: #e4ebdd;
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
`;

export const ImgLogo = styled.img`
  border-radius: 50%;
  width: 22rem;
  height: 22rem;
  object-fit: cover;  
  overflow: hidden; 
  z-index: 0;
  margin-left: 3vw;
  
  @media (max-width: 1224px) {
    margin-left: 0;
    width: 12rem;
    height: 12rem;
  }
`;
export const BodyText = styled.div`
  margin-top: 20vh;
  margin-left: 8vw;

  font-size: 1.2rem;
  color: #141c16;
`;

export const BodyListCardContainer = styled.div`
  width: 100%;
  margin-top: 4vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  z-index: 11111;

`;

export const BodyListCard = styled.div`

`;

export const Card = styled.div`
  width: 100%;
  min-height: 10vh;
  margin-left: 10rem;
  margin-right: 10rem;
  margin-bottom: 2rem;
  font-size: 1.4rem;
  color: #000000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  transition: 1s;

  
  @media (max-width: 1224px) {
    margin-left: 1rem;
    margin-right: 1rem;  
  }

`;

export const Line = styled.div`
  width: 0.5rem; /* Define a largura da linha */
  height: 24vh; /* Altura total ou personalizada */
  background-color: #a71c13; /* Cor da linha */
`;

export const LineFinal = styled.div`
  
  transform: translateX(-50%);
  top: 50%;
  left: 30%;
  margin-right: 2rem;
  width: 0.5rem; /* Define a largura da linha */
  height: 30vh; /* Altura total ou personalizada */
  background-color: #a71c13; /* Cor da linha */
`;

export const CardTitleContainer = styled.div`

`;

export const TitleCard = styled.div`
  font-weight: bolder;
`;

export const SUbText = styled.div`

`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const CardIcon = styled.div`

`;

export const CardIconImg = styled.img`
  height: 5rem;
    
  @media (max-width: 1224px) {
    height: 3rem;
  }
`;

export const CardText = styled.p`
margin-left: 3rem !important;

@media (max-width: 1224px) {
    margin-left: 1rem !important;
    font-size: 1rem !important;
  }
`;

export const Esclamacao = styled.img`
 height: 14rem;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 transition: 1s;
`;

export const LinhaH = styled.div`
  width: auto;
  height: 3px;
  background-color: rgba(0, 0, 0, 1);
  margin: 7rem;

  @media (max-width: 1224px) {
    margin: 4rem 1rem;
  }
  `;

export const Faixa = styled.div`
  width: 100%;
  min-height: 30vh;
  margin-top: 18vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
`;

export const FaixaText = styled.p`
  color: #000000 !important;
  text-align: center !important;
  z-index: 111;
  
  padding: 0 10rem;
  @media (max-width: 1224px) {
    padding: 0 1rem;
  }
`;

export const TitleFinalContainer = styled.div`
  font-size: 1.7rem;
  font-weight: bolder;
  margin-bottom: 1rem;
`;

export const TextFinalContainer = styled.div`
  font-size: 1.3rem;
  font-weight: bolder;
`;

export const Galeria = styled.div`
  height: 170vh;
  display: flex;
  padding: 5rem;
  gap: 2rem;

  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #E4EBDD;
`;

export const Img = styled.img<QuinSecaoProps>`
  width: ${props => props.width};
  transition: 0.8s;

  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-bottom: 6vh;
  `;

export const VideoWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const VideoTitle = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.7rem;
  font-weight: bolder;
  margin-top: 6vh;
  margin-left: 6vh;
  margin-bottom: 2vh;
  justify-content: start;
  align-items: start;
`;

export const ProjetosContainer = styled.div`
    margin-top: 4vh;
    position: relative;
    display: flex;
    flex-direction: row;
`;

export const ProjetosListContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 100%;
    height: auto;
    gap: 20px;
    padding: 0rem 7rem 7rem 7rem;
    
    @media (max-width: 1224px) {
      padding: 0rem 3rem 3rem 3rem;
      font-size: 4rem !important;
  }
`;

export const ProjetosListContainerA = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: row;
    height: auto;
    width: 100%;
`;

export const ProjetosListContainerB = styled.div`

`;

export const ButtonCard = styled(Button)`
  margin-top: 4vh !important;
  background-color: #253529 !important;
  color: #C2CFB4 !important;
  font-family: 'Arsenal', sans-serif !important;
  text-transform: none !important;
  width: 10vw;
  border-radius: 20px !important;
  font-weight: bolder !important;
`;

export const CardProjeto = styled.div`
  background-color: #B6C8B6;
  padding: 1rem;
  display: flex;
  justify-content: start;
  align-items: start;
  margin-right: 1vw;
  flex-direction: column;
  transition: 0.3s;
  border-radius: 10px;
  width: 100%;
  max-width: 80vw;
  height: auto;
  box-sizing: border-box;
  overflow: hidden; /* Ensure content does not overflow */

  &:hover ${ButtonCard} {
    border: 1px solid #C2CFB4;
    cursor: pointer;
    transition: 0.3s;
    transform: scale(1.05);
  }

  &:hover {
    border: 1px solid #C2CFB4;
    cursor: pointer;
    transition: 0.6s;
    transform: scale(1.05);
  }

  @media (max-width: 1072px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  position: relative;

  
&::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 20px;  /* Ajuste conforme necessário */
      background: linear-gradient(to top, #B6C8B6, rgba(255, 255, 255, 0));  /* Efeito de sobra */
      pointer-events: none;  /* Permite interação com o texto */
  }
`;

export const CardImgFremeProjeto = styled.div<Props>`
  background-color: #d9d9d967;
  height: 100%;
  width: 27vw;
  max-width: 30vw; /* Adjust as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;

  @media (max-width: 1072px) {
    height: 25vh;
    width: 100%;
    max-width: none;
  }
`;

export const CardImgProjeto = styled.img<Props>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const CardTextContainerProjeto = styled.div`
  margin-left: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Ensure text does not overflow */
  text-overflow: ellipsis; /* Add ellipsis for overflowed text */

  @media (max-width: 1072px) {
    margin-left: 0;
    padding-top: 1rem;
  }

`;

export const CardTitleProjeto = styled.div`
    font-size: 1.3rem;
    color: #000000;
    line-height: 1;
    font-family: 'Montserrat', sans-serif;
`;


export const CardTextProjeto = styled.p`
    color: #000000;
    margin-top: 0.5rem;
    max-width: 95%;

    @media (max-width: 1072px) {
      font-size: 1rem !important;
  }
`;


export const BigImgContainer = styled.div`  
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-left: 7rem;
    padding-right: 7rem;
    
    @media (max-width: 1224px) {
      padding-left: 0;
      padding-right: 0;

  }

  @media (max-width: 768px) {
    justify-content: start;
    flex-direction: column;
  }
`;

export const TitleBigImg = styled.h1`
    margin-top: 4rem !important;
    margin-left: 8rem !important;

    
  @media (max-width: 1224px) {
    margin-left: 2rem !important;
  }
`;

export const TextBigImgContainer = styled.div`
@media (max-width: 1224px) {
    padding-bottom: 3rem;
  }
`;

export const TextBigImg = styled.div`
  font-size: 1.4rem;
  padding-left: 3rem;

  @media (max-width: 1224px) {
    padding-right: 3rem;
  }
`;

export const IconTextBigImgContainerList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 20vh;
    align-items: center;
    justify-content: center;

`;

export const IconTextBigImgContainerListB = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;  
    height: 20vh;

`;

export const IconTextBigImgContainer = styled.div`
  display: flex;
  flex-direction: row;  
  justify-content: center;
  align-items: center;
`;

export const IconBigImgCard = styled.img`
    height: 1.6rem;
`;

export const TextBigImgCard = styled.div`
  font-size: 1.1rem;
  font-weight: bolder;
  padding-left: 0.5rem;
  font-style: italic;
`;

export const PatrocinadorContainer = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: column;
  gap: 7rem;
  justify-content: center;
  align-items: center;
`;

export const PatrocinadorCard = styled.div<Props>`
    background-color: ${(prop) => prop.backgroundColorCard};
    width: 70vw;
    height: 20vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-radius: 15px;
`;

export const PatrocinadorText = styled.div<Props>`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bolder;
  color: ${(prop) => prop.color};
`;


export const PatrocinadorLogo = styled.img<Props>`
    position: absolute;
    left: 5%;
    top: ${(prop) => prop.top};
    height: 7rem;
`;

export const PatrocinadorTextLink = styled.span<Props>`
  color: ${(prop) => prop.color};
  font-weight: bolder;
  transition: 0.7s;
  font-size: 1.2rem;

  &:hover {
    transition: 0.6s;
    cursor: pointer;
    color: ${(prop) => prop.color2};
    transform: scale(1.1);
  }
`;

export const TitlePage = styled.h1`
    margin-top: 10rem !important;
    z-index: 11;
    font-size: 6rem !important;
    color: #000000;
    padding-left: 4rem;
    
    @media (max-width: 1224px) {
      padding-left: 2rem;
      font-size: 4rem !important;
    padding-top: 2rem;
  }
`;

export const SubTitlePage = styled.p`
    z-index: 11;
    font-size: 1.4rem;
    color: #000000;
`;

export const Line2 = styled.div`
  position: relative;
  left: 6rem;
  top: -1rem;
  width: 0.3rem;
  height: 74vh;
  border-radius: 10px;
  background-color: #323D09;
`;

export const BigTextSection = styled.div`
  padding-left: 7rem;
  padding-right: 7rem;
  padding-top: 4rem;
  padding-bottom: 7rem;

  font-size: 1.3rem;
  color: #141C16;
`;

export const BigTextTitle = styled.div`
  font-size: 1.8rem;
  font-weight: bolder;
`;

export const BigTextSpace = styled.div`
  height: 1.3rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavButton = styled.button`
  pointer-events: all; /* Habilita cliques nos botões */
  background-color: rgba(225, 225, 225, 0);
  border: none;
  color: #000000 !important;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    transform: scale(1.2);
  }

`;

export const ArrowLeft = styled(ArrowBackIosIcon)`
  
`;

export const ArrowRight = styled(ArrowBackIosIcon)`
transform: rotate(-180deg);
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 4vh;
  width: 80%;
`;

export const DescriptionSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 4vh;
  width: 100%;
`;

export const LineDescription = styled.div`
  width: 0.2rem ;
  height: 120%;
  margin-right: 1rem;
  border-radius: 4px;
  background-color: #AC1717;
`;

export const DescriptionTextContainer = styled.div`
  display: inline-block;
  background-color: #E4EBDD;

`;

export const DescrTitle = styled.h1`
  background-color: #E4EBDD;
  display: inline-block;
`;

export const DescrText = styled.p`
  width: 100%;
`;

export const CardMainContainer = styled.div`
  display: flex;
  border-radius: 10px;
  justify-content: start;
  align-items: start;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1072px) {
    flex-direction: column;
  }
`;