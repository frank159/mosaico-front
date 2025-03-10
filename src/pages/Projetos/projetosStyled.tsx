import { Button } from '@mui/material';
import styled, { keyframes } from 'styled-components';

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
    z-index: 11;
    top: 4rem;
    left: 7rem;
    position: absolute;
    font-size: 8rem !important;
    color: #C2CFB4;

    @media (max-width: 1072px) {
      font-size: 4rem !important;
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
  position: absolute;  /* Necessário para o tamanho máximo da linha */
  top: 0;
  left: 3%;
  bottom:  0;
`;

export const ProjetosContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-bottom: 3rem;
    padding-top: 3rem;
    margin-bottom: 3rem;
`;

export const ButtonCard = styled(Button)`
  background-color: #253529 !important;
  border-radius: 60px !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  width: 15vw;
  color: white !important;

  
  &:hover  {
    transition: 0.6s !important;
        transform: scale(1.150) !important;
    }
`


export const CardProjeto = styled.div`
  background-color: #4E5C2C;
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
      background: linear-gradient(to top, #4E5C2C, rgba(255, 255, 255, 0));  /* Efeito de sobra */
      pointer-events: none;  /* Permite interação com o texto */
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`


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

export const ProjetosListContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 2rem;
    width: 100%;
    height: auto;
    gap: 30px;
    padding-left: 7rem;
    padding-right: 7rem;
    margin-bottom: 4rem;

    @media (max-width: 1072px) {
      font-size: 4rem !important;
      padding-left: 3rem;
      padding-right: 3rem;
      margin-bottom: 0rem;
    }
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
    color: #C2CFB4;
    line-height: 1;
    font-family: 'Montserrat', sans-serif;
`;

export const CardTextProjeto = styled.p`
    color: #ffffff;
    margin-top: 0.5rem;
    max-width: 95%;

    @media (max-width: 1072px) {
      font-size: 1rem !important;
  }
`;
