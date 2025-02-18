import { Button } from '@mui/material';
import styled, {keyframes} from 'styled-components';

interface Props {
    width?: string;
}

export const MainContainer = styled.div`
    background: #030504;
    display: flex;
    flex-direction: column;
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
`;

export const TitlePage = styled.div`
    z-index: 11;
    top: 4rem;
    left: 7rem;
    position: absolute;
    font-family: 'Voga', sans-serif;
    font-size: 8rem;
    color: #C2CFB4;
`;

export const Line = styled.div`
  position: relative;
  left: 6rem;
  top: -1rem;
  width: 0.5rem;
  height: 153vh;
  border-radius: 10px;
  background-color: #253529;
`;

export const ProjetosContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
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
    display: flex;
    justify-content: start;
    align-items: start;
    margin-right: 1vw;
    flex-direction: column;
    height: auto;
    width: 100%;
    padding-bottom: 2rem;
    transition: 0.3s;
    border-radius: 10px;
    
    &:hover ${ButtonCard} {
      border: 1px solid #C2CFB4;
        cursor: pointer;
        transition: 0.3s;
        transform: scale(1.05);
    }

    &:hover  {
      border: 1px solid #C2CFB4;
        cursor: pointer;
        transition: 0.6s;
        transform: scale(1.05);
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
    background-color: #4E5C2C;
    display: flex;
    border-radius: 10px;

    justify-content: start;
    align-items: start;
    margin-right: 1vw;
    flex-direction: row;
    height: auto;
    width: 100%;
`;

export const CardImgFremeProjeto = styled.div<Props>`
    background-color: #d9d9d967;
    height: 26vh;
    width: 20vw;
    margin-top: 2rem;
    margin-left: 1rem;
    overflow: hidden; /* Corta o conteúdo que exceder os limites do contêiner */
    position: relative; /* Garante que o posicionamento seja relativo ao contêiner */
`;

export const CardImgProjeto = styled.img<Props>`
    height: 100%; /* Faz com que a imagem preencha a altura do contêiner */
    width: 100%; /* Faz com que a imagem preencha a largura do contêiner */
    object-fit: cover; /* Garante que a imagem mantenha proporções e preencha o contêiner */
    object-position: center; /* Centraliza a imagem dentro do contêiner */
`;

export const ProjetosListContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 100%;
    height: auto;
    gap: 30px;
    padding: 0rem 7rem 7rem 7rem;

`;


export const CardTextContainerProjeto = styled.div`
    height: 100%;
    margin-left: 1rem;
    width: auto;
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
`;

export const CardTitleProjeto = styled.div`
    font-size: 1.3rem;
    margin-top: 0.5rem;
    color: #C2CFB4;
    font-family: 'Montserrat', sans-serif;
`;

export const CardTextProjeto = styled.div`
    color: #ffffff;
    margin-top: 0.5rem;
    font-size: 1.3rem;
    word-spacing: 10px;
`;
