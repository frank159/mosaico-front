import styled, { keyframes } from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button, ButtonBase } from "@mui/material";

interface QuinSecaoProps {
  width: string;
}

export const Container = styled.div`
  background: #e4ebdd;
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
  height: auto;
  padding-top: 10vh;
  width: 100%;

  @media (max-width: 1224px) {
    padding-bottom: 10vh;
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
  font-size: 1.3rem;
  padding: 0 !important;
`;

export const DivTitle = styled.h1`
  font-weight: lighter !important;
  font-size: 8rem !important;

  @media (max-width: 1224px) {
    font-size: 4rem !important;
  }
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

export const BodyListCardContainer = styled.div`
  width: 100%;
  margin-top: 4vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  z-index: 11;
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

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const CardIcon = styled.div``;

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
  margin-bottom: 18vh;
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

export const ProjetosContainer = styled.div`
  height: 60vh;
  margin-top: 4vh;
  position: relative;
  display: flex;
  flex-direction: row;
  padding-left: 8rem;
  padding-bottom: 4rem;
  @media (max-width: 1224px) {
    height: 50vh;

    align-items: center;
    padding-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 0;
  }
`;

export const BigImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 1224px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media (max-width: 768px) {
    justify-content: start;
    flex-direction: column;
  }
`;
export const BigImgContainerA = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: start;
    flex-direction: row;
  }
`;

export const TitleBigImg = styled.h1`
  margin-top: 4rem !important;
  margin-left: 10rem !important;

  @media (max-width: 1224px) {
    margin-left: 2rem !important;
  }
`;

export const TextBigImgContainer = styled.div`
  padding-left: 10rem;
  @media (max-width: 1224px) {
    padding-left: 2rem;
    padding-bottom: 3rem;
  }
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const TextBigImg = styled.p`

  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 1rem;
  }
`;

export const IconTextBigImgContainerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 8rem;
  align-items: center;
  justify-content: center;
  padding-right: 1rem;

  @media (max-width: 768px) {
    justify-content: start;
    padding-left: 2rem;
  }
`;

export const IconTextBigImgContainerListB = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  height: 8rem;
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

export const TitlePage = styled.h1`
  z-index: 11;
  font-size: 6rem !important;
  color: #000000;
  padding-left: 4rem;

  @media (max-width: 1224px) {
    padding-left: 2rem;
    font-size: 3rem !important;
  }
`;

export const LineDescription = styled.div`
  width: 0.2rem;
  height: 120%;
  margin-right: 1rem;
  border-radius: 4px;
  background-color: #ac1717;
`;

export const FloatingCard = styled.div`
  background-color: #c8deeb;
  padding: 2rem;
  border-radius: 10px;
  margin: 10vh auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const FilmeJoinButton = styled(ButtonBase)`
  width: 7rem;
  font-size: 1rem;
  margin-top: 2rem !important;
  background-color: #0894dc !important;
  padding: 0.5rem 1rem !important;
  border-radius: 20px !important;
  color: white !important;
`;

export const FloatingCardLogo = styled.img`
  height: 10vh;

  @media (max-width: 768px) {
    height: 7vh;
  }
`;


export const TextFloatingCard = styled.p`
  color: #000000;
  text-align: center;
  font-weight: bolder;
  font-style: italic;
  position: relative;
`;

export const CapLogo = styled.img`
  max-width: 100%;
  max-height: 100%;

  width: auto;
  height: auto;
  object-fit: contain;

  align-self: flex-start;

  @media (max-width: 1224px) {
    opacity: 0.2;
  }
`;

export const CapLogoList = styled.ul`
  max-width: 100%;
  max-height: 100%;

  width: auto;
  height: auto;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  top: -2rem; /* Adjust position slightly above the logo */
  @media (max-width: 1224px) {
    height: 40vh;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
`;

interface CapLogoListItemProps {
  index: number;
}

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const slowFloatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const CapLogoListItem = styled.li<CapLogoListItemProps>`
  display: flex;
  align-items: center;
  padding-left: ${(props) => (props.index % 2 === 0 ? "2rem" : "4rem")};
  font-size: 2rem;
  color: #000;
  animation: ${(props) =>
    props.index % 2 === 0 ? slowFloatAnimation : floatAnimation}
    3s ease-in-out infinite;
  white-space: nowrap; /* Impede a quebra do texto */

  @media (max-width: 1224px) {
    font-size: 1.5rem;
    flex-direction: column;
    align-items: start;
  }
`;

export const SaibaMaisButton = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background-color: #253529;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Arsenal", sans-serif;
  transition: 0.3s;
  font-weight: bolder;
  &:hover {
    background-color: #27352b;
    transform: scale(1.04);
  }
  @media (max-width: 1224px) {
    margin-top: 0.5rem;
  }
`;
