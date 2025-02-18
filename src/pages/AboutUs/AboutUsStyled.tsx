import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import { Button } from '@mui/material';

interface Props {
    width?: string;
}

export const MainContainer = styled.div`
    background: #030504;
    display: flex;
    flex-direction: column;
    height: auto;
    margin-top: 5vh;
    padding: 80px;

`;

export const TitleContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 8vh;
`;

export const TexteContainer = styled.div`
    z-index: 111;
`;

export const TitleLogo = styled.div`

`;

export const LogoImg = styled.img`
    height: 45px;
`;

export const IconEsclamacaoCard = styled.div`
    position: absolute;
    z-index: 1111;
    left: 20.5vw;
    top: 0px;
`;

export const TitleText = styled.div`
    color: #253529;
    padding: none;
    margin-right: 13px;
    font-size: 2.9rem;
    font-weight: bolder;
`;

export const SubTextContainer = styled.div`
    
`;

export const SubTextText = styled.div`
    color: #C2CFB4;
    font-weight: 500;
    padding: none;
    margin: none;
    font-size: 1.35rem;
    font-family: 'Chocolates', sans-serif;

`;

export const SubTitleContainer = styled.div`

`;

export const SubTitleText = styled.div`
    margin-top: 5vh;
    font-size: 2rem;
    font-weight: bolder;
    color: #C2CFB4;
    font-style: italic;
`;

export const IconCardContainer = styled.div`
    margin-top: 9vh;

`;

export const IconCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: #141C16;
    height: 7rem;
    padding: 1rem;
    position: relative;
    border-radius: 0.2rem;
    width: 60vw;
`;

export const IconCardTextContainer = styled.div`

`;

export const IconCardTextTitle = styled.div`
    color: #C2CFB4;
    font-size: 2rem;
    padding: 10px;
    margin-left: 15px;
    font-weight: bolder;
`;

export const IconCardText = styled.div`
    color: #C2CFB4;
    font-size: 1.4rem;
`;

export const IconImgCardContainer = styled.div`

`;

export const IconImgCard = styled.img<Props>`
    width: ${props => props.width};
`;

export const PilaresListContainer = styled.div`
    display: flex;
    z-index: 1111111;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    height: auto;
    margin-top: 8vh;
`;

export const PilaresListItensContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 5vh;
    margin-left: 2rem;
    justify-content: start;
    height: auto;
`;

export const PilaresListLine = styled.div`
  width: 0.7rem; /* Define a largura da linha */
  height: 72vh; /* Altura total ou personalizada */
  background-color: #253529; /* Cor da linha */
`;


export const PilaresCard = styled.div`
    margin-bottom: 3vh;
`;

export const PilaresTitleIcon = styled.img<Props>`
    width: ${props => props.width};
`;

export const PilaresTitleText = styled.div`
    color: #C2CFB4;
    font-size: 2rem;
    margin-left: 10px;
    font-weight: bolder;
`;

export const PilaresTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
`;

export const PilaresTextContainer = styled.div`

`;

export const PilaresText = styled.div`
    color: #C2CFB4;
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
    margin-top: 6vh;
    z-index: 111;
`;

export const FinalContainer = styled.div`
    position: relative; /* Adicionado para criar um novo contexto de empilhamento */
    margin-top: 6vh;
    background-color: #C2CFB4;
    z-index: 1111111111111;
    padding: 80px;
`;

export const BigIconCard = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    background-color: #141C16;
    height: 35vh;
    padding: 1rem;
    position: relative;
    border-radius: 0.2rem;
    width: 85vw;
`;

export const BigIconCardTitleContainer = styled.div`
    display: flex;
    flex-wrap: row;
    justify-content: space-between;
    width: 100%;
`;

export const BigIconCardTitle = styled.div`
    color: #C2CFB4;
    font-size: 2rem;
    font-weight: bolder;
`;


export const BigIconImgCard = styled.img<Props>`
    width: ${props => props.width};
    position: relative;
    top: -40px; /* Ajuste a altura desejada */
`;

export const BigIconItenList = styled.div`
    font-family: 'Chocolates', sans-serif;
    font-weight: bolder;
    color: #C2CFB4;
    font-size: 1.3rem;
`;

export const BigIconText = styled.div`
    color: #C2CFB4;
    font-size: 1.4rem;
    margin-top: 5px;
    margin-bottom: 20px;
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
    justify-content: space-between;
    align-items: center;
    padding-top: 1vh;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    height: 20vh;
    margin-bottom: 2vh;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
`;

export const FinalButton = styled(Button)`
    font-size: 1rem !important;
    background-color: #141C16 !important;
    border-radius: 70px !important;
    padding: 1.3rem !important;
    color: white !important;
`

export const CheckCardsContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 38px;
    color: #141C16;
    font-weight: bolder;
    font-style: italic;
    z-index: 111;
    padding-top: 8vh;
    padding-bottom: 5vh;

    `;

export const CheckCardsContainerSubTitle = styled.div`
    color: #000000;
    font-weight: lighter;
    font-style: normal;
    font-size: 23px;
    padding-top: 8px;
`;

export const CheckCard1 = styled.div`
    position: relative;
    background-color: #4D1408;
    border-radius: 7px;
    height: 20vh;
    padding: 20px;
    width: 19vw;
`;

export const CheckCardIcon = styled(ClearIcon)`
  font-size: 30px !important;
  position: absolute;
  top: 17px;
  color: red;
`;

export const CheckCardIcon2 = styled(CheckIcon)`
  font-size: 30px !important;
  position: absolute;
  top: 17px;
  color: yellow;
`;

export const CheckCardTitleContainer = styled.div`
    font-size: 18px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-bottom: 10px;
`;

export const CheckCardTextTitle = styled.div`
    font-size: 18px;
    align-items: start;
    color: white;
    font-weight: bolder;
    margin-left: 1.6vw;
`;

export const CheckCardText = styled.div`
    font-size: 18px;
    color: white;
`;

export const CheckCard2 = styled.div`
    position: relative;
    background-color: #4E5C2C;
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
    color: #C2CFB4;
    font-weight: bolder;
    font-size: 1.4rem;
    font-family: 'Chocolates', sans-serif;
`;

export const ColaboradoresText = styled.div`
    color: #C2CFB4;
    width: 30vw;
    font-size: 1.4rem;
    font-family: 'Chocolates', sans-serif;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ImgColaboradorContainer = styled.div`
    margin-right: 10px;
`;

export const ImgColaborador = styled.img<Props>`
    width: ${props => props.width};
`;

export const VectorImage = styled.img`
  position: absolute;
  margin-right: 5vw;
  margin-top: 3vw;
  right: 0;
  top: 2;
  width: 35%; /* 30% da largura do carrossel */
  height: auto;
  z-index: 0; /* Coloca a imagem por trás do carrossel */
  pointer-events: none; /* Evita que a imagem interfira em interações do usuário */
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
  width: 3%; /* 30% da largura do carrossel */
  height: auto;
  margin-bottom: 15px;

`;

export const SecaoInicialText = styled.div`
    color: #C2CFB4;
    font-size: 1.6rem;
    text-align: center;
    font-style: italic;
`;

export const InitialText = styled.div`
    color: #C2CFB4;
    font-size: 26px;
    margin: 20px;
`;

export const InitialTextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 56px;
    z-index: 1111111;
`;

export const Line = styled.div`
    height: 90px;
    width: 3px;
    background-color: #C2CFB4;
    border-radius: 10px;
`;

export const CardTextContainer = styled.div`
    width: 100%;
    margin-top: 4vh;
    z-index: 1111111;
`;

export const CardText = styled.div`
    width: 100%;
    font-size: 1.8rem;
    color: #C2CFB4;
`;

export const Card = styled.div`
    background-color: #4E5C2C;
    display: flex;
    justify-content: start;
    align-items: center;
    height: 10vh;
    width: 50vw;
`;

export const IconInicialCard = styled.img`
    width: 48px;
    height: 45px;
    margin-left: 1.5vw;
    margin-right: 1.5vw;
`;
