import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

import styled from 'styled-components';

export const MainContainer = styled.div`
  background: #F8F6E6;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`;

export const InicialSecao = styled.div`
  background-color: #c2cfb4;
  width: 100%;
  height: 45vh;
  margin-top: 5vh;
`;

export const SecaoTexto1 = styled.div`
  background-color: #141c16;
  padding-top: 7vh;
  width: 100%;
`;

export const Texto1 = styled.div`
  color: #C2CFB4;
  font-weight: bolder;
  font-style: italic;
  font-size: 2rem;
  margin-left: 4vw;

`;

export const Texto2 = styled.div`
  color: #C2CFB4;
  font-weight: bolder;
  font-style: italic;
  font-size: 2rem;
  margin-left: 4vw;
  margin-top: 6vh;
  margin-bottom: 2vh;
`;

export const TextoSub1 = styled.div`
  color: white;
  font-size: 1.6rem;
  margin-left: 5vw;
`;

export const SecSecao = styled.div`
  background-color: #141c16;
  width: 100%;
  height: 150vh;
`;

export const QuarSecao = styled.div`
  background-color: #253529;
  width: 100%;
  height: 45vh;
`;

interface QuinSecaoProps {
  bgImage: string;
}

export const QuinSecao = styled.div<QuinSecaoProps>`
  background: url(${props => props.bgImage}) center/cover no-repeat;
  background-color: #ffffff;
  padding: 2rem;
  width: 96.5%;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const QuinSecaoContainer = styled.div`
  display: flex;
  width: 80vw;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
`;

export const Card3 = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 37vw;
  height: 110vh;
`;

export const Card4 = styled.div`
  margin-top: 3rem;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 76.5vw;
  height: 58vh;
`;

export const TextLink = styled.span`
  font-size: 15px;

`

export const Card4Button = styled(Button)`
  margin-top: 5vh !important;
  width: 40vh !important;
  display: flex !important;
  flex-direction: column !important;
  font-weight: bolder !important;
  justify-content: center !important;
  text-align: center !important;
  align-items: center !important;
  border-radius: 7px !important;
  height: 8vh !important;
  color: #C2CFB4 !important;
  background-color: #253529 !important;
  font-size: 15px !important;

  &:hover  {
    transition: 0.6s;
    border: 1px solid #C2CFB4;
  }

  &:hover ${TextLink}  {
    transition: 0.4s !important;
    font-size: 18px !important;
  } 

`;

export const Card4Logo = styled.div`
  width: 100%;
  margin-top: 3vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card4Text = styled.div`
  width: 100%;
  font-size: 1.2rem;
  color: white;
  text-align: center;
  margin-top: 3vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card4LogoImg = styled.img`
  width: 5vw;
`;

export const Card3Text = styled.div`
  color: white;
  padding: 1rem;
  text-align: start;
  width: 100%;
  font-size: 1.2rem;
  margin-left: 4rem;

`;

export const SubTitleCard3 = styled.div`
  color: white;
  padding: 1rem;
  font-weight: bolder;
  text-align: start;
  width: 100%;
  font-size: 1.2rem;
  margin-left: 4rem;
`;

export const SubTextCard3 = styled.div`
  color: white;
  padding: 1rem;
  text-align: start;
  width: 100%;
  font-size: 1.2rem;
  margin-left: 6rem;

`;

export const Card3Title = styled.div`
  color: #C2CFB4;
  font-size: 2rem;
  font-weight: bolder;
  width: 100%;
  margin-left: 4rem;
`;

export const Card3Img = styled.img`
  width: 35%;
  margin: 2rem;
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 6rem;
  padding-right: 6rem;
  margin-top: 10vh;
`;

export const CardSection2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 6rem;
  padding-right: 6rem;
`;

export const TextCard = styled.div`
  display: flex;
  margin-top: 4vh;
  text-align: center;
  font-size: 1.4rem;
  color: #ffffff;
`;

export const CardTitle2 = styled.div`
  display: flex;
  margin-top: 4vh;
  text-align: center;
  font-size: 1.4rem;
  font-weight: bolder;
  color: #ffffff;
`;

export const TextCard2 = styled.div`
  display: flex;
  margin-top: 2vh;
  text-align: center;
  font-size: 1.4rem;
  color: #ffffff;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #4e5c2c;
  border-radius: 6px;
  height: 25vh;
  width: 25vw;
`;

export const Card2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #4e5c2c;
  border-radius: 6px;
  height: 45vh;
  width: 20vw;
`;

export const IconCard = styled.img`
  position: absolute;
  top: -4.5vh;
  left: 2vh;
  height: 7vh;
`;

export const LogoEcoacao = styled.img`
  width: 30rem;
  margin-top: 10vh;
  margin-left: 10vh;
`;

export const TextoInicial = styled.div`
  margin-top: 5vh;
  margin-left: 10vh;
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-style: italic;
  font-weight: bolder;
  color: #000000;
`;

export const Hr = styled.hr`
  margin-top: 7vh;
  width: 97%;
  border: 1px solid #1a3f136c;
`;

export const SubTitle = styled.div`
  color: #C2CFB4;
  font-size: 2rem;
  font-style: italic;
  font-weight: bolder;
  margin-top: 7vh;
  margin-left: 4vw;
`;

export const MiniCardSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3vh;
  justify-content: center;
  gap: 4rem;
  width: 100%;
`;

export const MinCardText = styled.div`
  font-size: 1.4rem;
  font-weight: bolder;
  color: #141c16;
  margin-left: 2rem;
`;

export const MiniCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 1rem;
`;

export const MiniCardEsfera = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #4e5c2c;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -1rem;
  z-index: 1;
`;

export const MiniCardEsferaIcon = styled.img`
  width: 2rem;
  height: 2rem;
  height: 6rem;
  object-fit: contain; /* Garante que o ícone mantenha a proporção */
`;

export const MiniCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 7vh;
  width: 16.5vw;
  background-color: #4e5c2c;
  position: relative;
  border-radius: 6px;
  z-index: 0;
  padding-left: 2rem;
`;


export const SubtextSection = styled.div`
  margin-top: 5vh;
  width: 100%;
  color: #e4e6da;
  font-size: 1.8em;
  font-weight: bold !important;
  display: flex;
  justify-content: center;
  font-weight: lighter;
`;

export const LongCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LongCard = styled.div`
  margin-top: 5vh;
  background-color: #4e5c2c;
  width: 86.1vw;
  border-radius: 10px;
  height: 10vh;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const LongCardText = styled.div`
  color: #e4e6da;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const LongCardIcon = styled.img`
  height: 8vh;
  margin: 1rem;
`;

export const Faixa = styled.div`
    width: 100%;
    height: 40vh;
    background-color: #4E5C2C;
    margin-top: 6vh;
`;

export const BigCardContainer = styled.div`
    width: 100%;
    margin-top: 7vh;
    display: flex;
    justify-content: center;
`;

export const BigCard = styled.div`
  width:  90%;
  height: 30vh;
  position: relative;

  background-color: #0f1410;
  display: flex;
  flex-direction: row;
`;

export const BigCardIcon = styled.img`
height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -1rem;
  top: -2rem;
  z-index: 1;

`;

export const BigCardTextSection = styled.div`
  width: 100%;
`;

export const BigCardTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  color: #C2CFB4;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;

`;

export const BigCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 6rem;

`;

export const BigCardText = styled.div`
margin-bottom: 2rem;
font-size: 1.4rem;
  font-weight: lighter;
  color: #D8D6D3;

  font-family: 'Montserrat', sans-serif;

`;


export const TercSecao = styled.div`
  background-color: #C2CFB4;
  width: 100%;
  height: 120vh;
  display: flex;
  flex-direction: column;

  position: relative;
`;

export const FullImg = styled.img`
  background-color: #c2cfba;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;

  position: relative;
`;


export const TercSecaoTitle = styled.div`
  color: #141c16;
  font-size: 2rem;
  font-style: italic;
  font-weight: bolder;
  padding: 4rem 4rem 1rem 4rem;
`;

export const TercSecaoText = styled.div`
  color: #141c16;
  font-size: 1.6rem;
  z-index: 110;
  font-weight: lighter;
  padding: 0rem 4rem 0rem 4rem;
`;

export const LogoTercSecao = styled.img`

`;

export const TercSecaoSubText = styled.div`
margin-top: 5vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bolder;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 2vh;
`;

export const TercSecaoSubInput = styled(TextField)`
  
`;

export const TercSecaoSubButton = styled(Button)`
  height: 100%;
  width: 5vw !important;
  background-color: #253529 !important;
  color: #ffffff !important;
  transition: all 0.3s ease-in-out !important;

  &:hover  {
    background-color: #222c24 !important;
  }
  &:active  {
    font-size: 1.1rem !important; // Aumenta 10% o tamanho da fonte
    background-color: #253529 !important;
  }
`;

export const Logao = styled.img`
  height: 50vh;
  opacity: 0.2;
  z-index: 0;

  position: absolute;
  transform: translate(-50%, -50%);

  left: 50%;
  bottom: 10%;
`;