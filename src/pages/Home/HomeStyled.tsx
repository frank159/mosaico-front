import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import styled from 'styled-components';


export const MainContainer = styled.div`
  background: #C2CFB4;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  overflow-x: hidden;
`;

export const InicialSecao = styled.div`
  background-color: #C2CFB4;
  width: 100%;
  min-height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InicialSecao1 = styled.div`
  position: relative;
  background-color: #C2CFB4;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: row;
  min-height: 100vh; /* Ensure it takes at least the full viewport height */
  margin-bottom: 5vh;

  @media (max-width: 768px) {
    justify-content: center;
    min-height: auto; /* Allow it to grow based on content */
  }
`;

export const SubInicialSecao1 = styled.div`
 margin-right: 4rem;
 @media (max-width: 768px) {
   margin-right: 0;
    }
`;

export const TituloVertical = styled.h1`
  transform: rotate(90deg);
  white-space: nowrap;
  font-size: 20rem !important;
  color: rgba(228, 235, 221, 1);
  position: absolute;

  left: 10%;

  @media (max-width: 768px) {
    opacity: 0;

  }
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

export const Texto2 = styled.h1`
  color: #141C16;
  margin-top: 6vh !important;
  margin-bottom: 2vh !important;
  width: 90%; 
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const TextoSub1 = styled.div`
  color: white;
  font-size: 1.6rem;
  margin-left: 5vw;
`;

export const SecSecao = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const QuarSecao = styled.div`
  background-color: #000000;
  width: 100%;
  height: auto;
  margin-top: 10vh;
`;

interface QuinSecaoProps {
  bgImage: string;
}

export const QuinSecao = styled.div`
  background-color: #C2CFB4;
  padding: 2rem;
  width: 96.5%;
  height: auto;
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
  height: auto;
  
  @media (max-width: 1224px) {
    width: auto;
  }
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
  font-size: 1rem !important;
  
  
  @media (max-width: 768px) {
    font-size: 0.6rem !important;
  }


`

export const Card4Button = styled(Button)`
  margin-top: 5vh !important;
  margin-bottom: 2vh !important;
  width: 30vw !important;
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

  @media (max-width: 1224px) {
    width: 60vw !important;
  }

`;

export const Card4Logo = styled.div`
  width: 100%;
  margin-top: 3vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card4Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

export const LogoFundacao = styled.p`
  height: 10vh;
  width: 20vh;
  background-color: #4E5C2C;
  display: flex;
  font-size: 1.2rem !important;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50px;
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

interface PropCard {
  width?: string;
}

export const Card4LogoImg = styled.img<PropCard>`
  width: ${(props) => props.width || '10vw'};
`;

export const Card3Text = styled.p`
  color: white;
  padding-left: 2rem !important;
  padding-right: 2rem !important;
  text-align: start !important;
  width: 100% !important;
  height: auto;
  box-sizing: border-box;

  @media (max-width: 1224px) {
    font-size: 1.2rem !important;
  }
`;



export const SubTitleCard3 = styled.div`
  color: white;
  padding-top: 1rem;
  font-weight: bolder;
  text-align: start;
  width: 100%;
  font-size: 1.2rem;
  margin-left: 4rem;
`;

export const SubTextCard3 = styled.div`
  color: white;
  text-align: start;
  font-size: 1.2rem;
  width: 100%;
  padding-left: 8rem;
  padding-bottom: 1rem;
  box-sizing: border-box; /* Ensure padding is included in the element's total width and height */

  @media (max-width: 1224px) {
    padding-left: 3rem;
  }
`;

export const Card3Title = styled.h2`
  color: #C2CFB4;
  width: 100%;
  margin-left: 4rem !important;
`;

export const Card3Img = styled.img`
  width: 35%;
  margin: 2rem;

  @media (max-width: 820px) {
    width: 80%;
  }
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 6vh;
  margin-top: 10vh;
`;

export const CardSection2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 6vh;
  margin-top: 10vh;

  @media (max-width: 1224px) {
    flex-direction: column;

  }
`;

export const TextCard = styled.div`
  display: flex;
  margin-top: 4vh;
  text-align: center;
  font-size: 1.4rem;
  color: #ffffff;
  padding: 1rem;
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
  background-color: #141C16;
  border-radius: 6px;
  min-height: 20vh;
  min-width: 25vw;
  max-width: 90%;
  @media (max-width: 768px) {
   margin-right: 0;
    }
`;

export const Card2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #141C16;
  border-radius: 6px;
  min-height: 20vh;
  width: 17vw;

  
  @media (max-width: 1224px) {
    margin-right: 0;
    width: 90%;
  }
`;

export const IconCard = styled.img`
  position: absolute;
  top: -3.5vh;
  left: 2vh;
  height: 5vh;
`;

export const LogoEcoacao = styled.img`
  width: 17rem;
  margin-bottom: 5vh;
  @media (max-width: 768px) {
    margin-top: 8vh;
    width: 10rem;
  }
`;

export const Plantinha = styled.img`
  position: absolute;
  height: 100vh;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.2;
  
  @media (max-width: 1224px) {
    object-fit: contain;
    width: auto;

  }
`;

export const Aspas = styled.img`
margin-top: 15vh;
  width: 3rem;
`;

export const TitleInicial = styled.h1`
font-size: 7rem;
  margin-top: 5vh;
  color: #000000;
  text-align: center;
`;

export const TextoSubInicial = styled.p`
  font-size: 3rem;
  color: #000000;
`;

export const TextoInicial = styled.p`
  color: #000000;
  text-align: center;
`;

export const Hr = styled.hr`
  margin-top: 7vh;
  width: 97%;
  border: 1px solid #1a3f136c;
`;

export const SubTitle = styled.p`
  color: #141C16;
  margin-top: 16vh !important;
  width: 90% !important;
  display: flex !important;
  justify-content: start !important;
  align-items: center !important;
  font-weight: bolder !important;
`;

export const MiniCardSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6vh;
  justify-content: space-around;
  gap: 1rem;
  width: 100%;
  @media (max-width: 1224px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const MinCardText = styled.div`
  font-size: 1.4rem;
  font-weight: bolder;
  padding-left: 7rem;
  color: #FFFFFF;
`;

export const MinCardText1 = styled.div`
  font-size: 1.4rem;
  font-weight: bolder;
  color: #FFFFFF;
`;

export const MiniCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const MiniCardEsfera = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  background-color: #4E5C2C;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
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
  background-color: #141C16;
  position: relative;
  border-radius: 50px;
  z-index: 0;
`;

export const MiniCard1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 7vh;
  padding-left: 7rem;
  padding-right: 1rem;
  background-color: #141C16;
  position: relative;
  border-radius: 50px;
  z-index: 0;
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
  display: flex;
  justify-content: center;
  align-items: start;
  height: 100%;
`;

export const LongCard = styled.div`
  width: 86.1vw;
  height: auto;
  margin-top: 13vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const LongCardText = styled.div`
  color: #141C16;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
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
    display: flex;
    justify-content: center;
`;

export const BigCard = styled.div`
  width:  90%;
  min-height: 30vh;
  position: relative;

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

export const BigIconTextCard = styled.p`
    font-size: 40vh !important;
    font-style: italic!important;
    color: rgba(78, 92, 44, 1) !important;
    font-weight: bolder !important;
    font-family: 'Arimo' !important;
    transform: translate(-50%, -50%);

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 8%;
    top: 36%;
    
    z-index: 1;
    
    @media (max-width: 1224px) {
      left: 5%;
      top: 10%;
    }
`;

export const BigCardTextSection = styled.div`
  width: 100%;
`;

export const BigCardTitle = styled.h1`
  color: #C2CFB4;
  margin-bottom: 10px;
`;

export const BigCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 11;
  margin-left: 14rem;
  
  @media (max-width: 1224px) {
    margin-left: 4rem;
    margin-bottom: 4rem;
    margin-top: 4rem;
  }

`;

export const BigCardText = styled.p`
  font-weight: lighter;
  color: #D8D6D3;
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