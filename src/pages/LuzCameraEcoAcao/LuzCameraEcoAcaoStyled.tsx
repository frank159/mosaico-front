import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "styled-components";

export const MainContainer = styled.div`
  background: #c2cfb4;
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
  background-color: #c2cfb4;
  width: 100%;
  min-height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-height: 820px) {
    margin-top: 7vh;
  }
`;

export const InicialSecao1 = styled.div`
  position: relative;
  background-color: #c2cfb4;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: row;
  /* min-height: 100vh;  */
  margin-bottom: 15vh;
  padding: 3rem;
  @media (max-height: 820px) {
    margin-top: 15vh;
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 15vh;
    min-height: auto; /* Allow it to grow based on content */
  }
`;

export const SubInicialSecao1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const TituloVertical = styled.h1`
  transform: rotate(90deg);
  white-space: nowrap;
  font-size: 20rem !important;
  color: rgba(228, 235, 221, 1);

  @media (max-height: 820px) {
    font-size: 15rem !important;
  }

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
  color: #c2cfb4;
  font-weight: bolder;
  font-style: italic;
  font-size: 2rem;
  margin-left: 4vw;
`;

export const Texto2 = styled.h1`
  color: #141c16;
  margin-top: 6vh !important;
  margin-bottom: 2vh !important;
  width: 90%;
  display: flex;
  justify-content: start;
  align-items: center;
  @media (max-width: 1224px) {
    font-size: 2.5rem !important;
  }
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
  width: 100%;
  margin-top: 10vh;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column; /* Stack children vertically */
  justify-content: center;
  align-items: center;
  position: relative; /* Ensure child elements are positioned relative to this container */
  height: auto; /* Allow height to adjust dynamically based on content */
`;

export const QuinSecao = styled.div`
  background-color: #000000;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const QuinSecaoContainer = styled.div`
  display: grid;
  width: 100%;
  background-color: red;
  grid-template-columns: repeat(3, 1fr);
  gap: 0; /* Remove gap to use borders for separation */
  justify-items: center;
  align-items: start;
  margin-top: 15vh;
  margin-bottom: 15vh;

  @media (max-width: 1224px) {
    grid-template-columns: 1fr; /* Stack items vertically on smaller screens */
    align-items: center; /* Center items in the column layout */
  }
`;

export const Card3 = styled.div<{
  height?: number;
}>`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
  flex: 1;
  width: 100%;
  padding: 4rem 2rem; // Reduzido o padding
  box-sizing: border-box;

  &:not(:last-child) {
    border-right: 2px solid #323232;
  }

  @media (max-width: 1220px) {
    padding: 1.5rem 1rem;
    max-width: 100%;
    border-right: none;
  }
`;

export const Card3Text = styled.p`
  color: white;
  font-size: 1.1rem !important; // Reduzido o tamanho da fonte
  text-align: start !important;
  width: 100% !important;
  height: auto;
  box-sizing: border-box;
  word-break: break-word; // Garante quebra de linha

  @media (max-width: 1220px) {
    font-size: 1rem !important;
  }
  @media (max-width: 768px) {
    font-size: 0.95rem !important;
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
`;

export const ButtonCard = styled(Button)`
  margin-top: 2vh !important;
  background-color: #253529 !important;
  color: #c2cfb4 !important;
  border-radius: 25px !important;
  margin-top: 0.5rem 1rem !important;
  padding: 0.5rem 1rem !important;
  font-size: 1rem !important;
  text-transform: none !important;
  width: 40%;
  font-weight: bolder !important;
  font-family: "Arsenal", sans-serif !important;
  &:hover {
    background-color: #1e2e23 !important; /* Slightly darker shade for hover */
    transition: 0.3s ease-in-out;
  }
  @media (max-width: 1224px) {
    width: 60%;
  }
`;

export const Card4Button = styled(Button)`
  margin-top: 5vh !important;
  margin-bottom: 2vh !important;
  width: 80% !important;
  display: flex !important;
  flex-direction: column !important;
  font-weight: bolder !important;
  justify-content: center !important;
  text-align: center !important;
  align-items: center !important;
  border-radius: 7px !important;
  height: 8vh !important;
  color: #c2cfb4 !important;
  background-color: #253529 !important;
  font-size: 15px !important;

  &:hover {
    transition: 0.6s;
    border: 1px solid #c2cfb4;
  }

  &:hover ${TextLink} {
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
  background-color: #4e5c2c;
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
  width: ${(props) => props.width || "10vw"};

  @media (max-width: 1220px) and (min-width: 861px) {
    width: 15% !important;
  }
`;

// export const Card3Text = styled.p`
//   color: white;
//   font-size: 1.2rem !important;
//   text-align: start !important;
//   width: 100% !important;
//   height: auto;
//   box-sizing: border-box;
// `;

export const SubTitleCard3 = styled.div`
  color: white;
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-weight: bolder;
  text-align: start;
  width: 100%;
  font-size: 1.2rem;
`;

export const SubTextCard3 = styled.div`
  color: white;
  text-align: start;
  font-size: 1.2rem;
  width: 100%;
  padding-bottom: 2rem;
  box-sizing: border-box;
`;

export const Card3Title = styled.h2`
  color: #c2cfb4;
  width: 100%;
`;

export const Card3Img = styled.img`
  width: 50%;
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
  width: 50%;
  @media (max-width: 1224px) {
    align-items: center;
    margin-top: 5vh;
    width: auto;
  }
`;

export const CardSectionTitulo = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1224px) {
    align-items: center;
    width: 0%;
  }
`;

export const CardSection2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 6vh;
  margin-top: 3vh;

  @media (max-width: 1224px) {
    flex-direction: column;
  }
`;

export const TextCard = styled.div`
  display: flex;
  text-align: start;
  color: #ffffff;
  padding: 1rem;
  font-size: 1.2rem !important;
  @media (max-width: 1224px) {
    text-align: center;
  }
`;

export const CardTitle2 = styled.div`
  display: flex;
  margin-top: 4vh;
  text-align: center;
  font-weight: bolder;
  color: #ffffff;
  font-size: 1.5rem !important;

  @media (max-width: 1224px) {
    font-size: 1.6rem !important;
  }
`;

export const TextCard2 = styled.div`
  display: flex;
  margin-top: 2vh;
  text-align: center;
  font-size: ;
  color: #ffffff;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const Card = styled.div`
  position: relative;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #141c16;
  border-radius: 6px;
  min-height: 20vh;
  min-width: 25vw;
  max-width: 90%;
  @media (max-width: 768px) {
    margin-right: 0;
    width: 90%;
  }
`;

export const Card2 = styled.div<{
  height?: number;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #141c16;
  border-radius: 6px;
  min-height: 20vh;
  width: 17vw;
  height: ${({ height }) => (height ? `${height}px` : "auto")};

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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
  z-index: 0;
`;

export const Aspas = styled.img`
  margin-top: 15vh;
  margin-bottom: 1vh;
  width: 3rem;
`;

export const TitleInicial = styled.h1`
  margin-top: 5vh;
  color: #000000;
  text-align: center;
`;

export const TextoSubInicial = styled.p`
  font-size: 2rem !important;
  color: #000000;
  @media (max-width: 1224px) {
    font-size: 1.5rem !important;
  }
`;

export const TextoInicial = styled.p`
  color: #000000;
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Hr = styled.hr`
  margin-top: 7vh;
  width: 97%;
  border: 1px solid #1a3f136c;
`;

export const SubTitle = styled.p`
  color: #141c16;
  margin-top: 16vh !important;
  width: 90% !important;
  display: flex !important;
  justify-content: start !important;
  align-items: center !important;
  font-weight: bolder !important;
  font-size: 1.5rem !important;

  @media (max-width: 1224px) {
    font-size: 1.6rem !important;
  }
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

export const MinCardText = styled.p`
  font-weight: bolder;
  padding-left: 6rem;
  padding-right: 1rem;
  color: #ffffff;
  white-space: normal; /* Permite quebra de linha */
  word-break: break-word; /* Quebra palavras longas */
  font-size: 1.1rem !important;

  @media (max-width: 1720px) {
    font-size: 1rem !important;
  }

  @media (max-width: 720px) {
    font-size: 0.95rem !important;
    padding-right: 0.5rem;
  }
`;

export const MinCardText1 = styled.div`
  font-size: 1.4rem;
  font-weight: bolder;
  color: #ffffff;
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
  background-color: #4e5c2c;
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
  object-fit: contain;
`;

export const MiniCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 7vh;
  width: 20vw;
  background-color: #141c16;
  position: relative;
  border-radius: 50px;
  z-index: 0;

  @media (max-width: 1224px) {
    width: 85%;
  }
`;

export const MiniCard1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 7vh;
  padding-left: 7rem;
  padding-right: 1rem;
  background-color: #141c16;
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

export const LongCardText = styled.p`
  color: #141c16;
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
  background-color: #4e5c2c;
  margin-top: 6vh;
`;

export const BigCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto; /* Adjust height dynamically based on content */
`;

export const BigCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; /* Stack content vertically */
  justify-content: center;
  align-items: center;
  position: relative;
  height: auto; /* Allow height to adjust dynamically */
  padding: 2rem; /* Add padding for spacing */
  box-sizing: border-box; /* Include padding in width and height calculations */
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
  font-size: 10rem !important; /* Adjust font size as needed */
  font-style: italic;
  color: rgba(78, 92, 44, 1);
  font-weight: bolder;
  font-family: "Arimo", sans-serif;
  text-align: center;
  margin-bottom: 1rem; /* Add spacing below the icon */
  position: absolute;
  left: 1%;
  top: 0;

  @media (max-width: 1224px) {
    left: 1%;
    top: -8%;
  }
`;

export const BigCardTextSection = styled.div`
  width: 100%;
`;

export const BigCardTitle = styled.h2`
  color: #000000;
  text-align: start;
  margin-bottom: 1rem; /* Add spacing below the title */
  z-index: 10;
`;

export const BigCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: auto; /* Adjust height dynamically based on content */
  padding-left: 4rem;
  padding-right: 4rem;
  box-sizing: border-box;

  @media (max-width: 1224px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const BigCardText = styled.p`
  font-weight: lighter;
  color: #000000;
  text-align: start;
  z-index: 10;

  margin-bottom: 1rem; /* Add spacing below the text */
`;

export const TercSecao = styled.div`
  background-color: #c2cfb4;
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

export const LogoTercSecao = styled.img``;

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

export const TercSecaoSubInput = styled(TextField)``;

export const TercSecaoSubButton = styled(Button)`
  height: 100%;
  width: 5vw !important;
  background-color: #253529 !important;
  color: #ffffff !important;
  transition: all 0.3s ease-in-out !important;

  &:hover {
    background-color: #222c24 !important;
  }
  &:active {
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

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c2c2c2;
  margin: 2rem 0;
`;

export const ContactInfoContainer = styled.div`
  margin-top: 3vh;
  margin-bottom: 3vh;
  color: white;
  font-size: 1.2rem !important;
  padding-left: 2rem !important;
  padding-right: 2rem !important;
  text-align: start !important;
  width: 100% !important;
  height: auto;
  box-sizing: border-box;
`;

export const ContactInfo = styled.div``;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;

export const BoldText = styled.span<{ underline?: boolean }>`
  font-weight: bold;
  color: #c2cfb4;
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
`;
