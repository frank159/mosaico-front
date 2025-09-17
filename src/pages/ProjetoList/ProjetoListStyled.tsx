import { Button } from "@mui/material";
import styled, { keyframes } from "styled-components";

interface Props {
  width?: string;
}

export const MainContainer = styled.div`
  background: #030504;
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  overflow-x: hidden; /* Bloqueia a rolagem lateral */

  @media (max-width: 768px) {
    margin-top: 8vh;
  }
`;

export const TopContainer = styled.div`
  width: 100%;
  margin-bottom: 10vh;
  position: relative;
`;

const slideLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const MosaicoWrapper = styled.div`
  z-index: 1; /* Menor que o do TitlePage */
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const MosaicoImgContainer = styled.div`
  display: flex;
  width: 200%;
  height: 100%;
  animation: ${slideLeft} 40s linear infinite;
`;

export const MosaicoImg = styled.img`
  width: 50%;
  object-fit: cover;
  pointer-events: none;
  height: 10vh !important;
`;

export const TitlePage = styled.h1`
  font-size: 5rem !important;
  color: #c2cfb4;
  padding-left: 1rem;
  line-height: 1;
  @media (max-width: 720px) {
    font-size: 3.5rem !important;
    left: 3rem;
  }
`;

export const Line1 = styled.div`
  left: 6rem;
  top: -1rem;
  width: 0.5rem;
  height: 153vh;
  border-radius: 10px;
  background-color: #253529;
`;

export const Line = styled.div`
  width: 0.3rem; /* Define a largura da linha */
  height: 100% !important; /* Altura total ou personalizada */
  border-radius: 10px;
  background-color: #253529; /* Cor da linha */
  position: absolute; /* Necessário para o tamanho máximo da linha */
  top: 0;
  left: 3%;
  bottom: 0;
`;

export const ProjetosContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
`;

export const ButtonCard = styled(Button)`
  background-color: #253529 !important;
  color: #c2cfb4 !important;
  border-radius: 25px !important;
  margin-top: 1rem !important;
  padding: 0.5rem 1rem !important;
  font-size: 1rem !important;
  text-transform: none !important;
  width: 20%;
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

export const CardProjeto = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: start;
  align-items: start;
  margin-right: 1vw;
  flex-direction: column;
  transition: 0.3s;
  border-radius: 10px;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  overflow: hidden; /* Ensure content does not overflow */

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  position: relative;
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

export const CardMainContainer = styled.div`
  display: flex;
  border-radius: 10px;
  justify-content: start;
  align-items: start;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const CardImgFremeProjeto = styled.div<Props>`
  background-color: #d9d9d967;
  width: 20rem;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 720px) {
  }
`;

export const CardImgAltProjeto = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #314536;
  color: white;
`;

export const CardImgProjeto = styled.img<Props>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ProjetosListContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 10px;
  padding-left: 4vw;

  @media (max-width: 720px) {
    font-size: 4rem !important;
    padding-left: 2rem;
    margin-bottom: 0rem;
  }
`;

export const ProjetosListContainer1 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 60px;

  @media (max-width: 720px) {
    font-size: 4rem !important;
  }
`;

export const CardTextContainerProjeto = styled.div`
  margin-left: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden; /* Ensure text does not overflow */
  text-overflow: ellipsis; /* Add ellipsis for overflowed text */

  @media (max-width: 720px) {
    margin-left: 0;
    height: 80%;
    padding-top: 1rem;
  }
`;

export const CardTitleProjeto = styled.div`
  color: #c2cfb4;
  line-height: 1;
`;

export const CardTextProjeto = styled.p`
  color: #ffffff;
  margin-top: 0.5rem !important;
  padding-right: 2rem;
  @media (max-width: 720px) {
    font-size: 1rem !important;
  }
`;
