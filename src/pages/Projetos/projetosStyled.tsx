import styled, {keyframes} from 'styled-components';

interface Props {
    width?: string;
}

export const MainContainer = styled.div`
    background: #030504;
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin-top: 5vh;

`;

const slideLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

// Container principal que ficará responsável por ocultar as partes que ultrapassarem a área visível.
export const MosaicoWrapper = styled.div`
  position: relative;
  z-index: 1; /* Menor que o do TitlePage */
  overflow: hidden;
  width: 100%;
  height: 25%;
`;  

// Container que contém as duas imagens e é animado.
export const MosaicoImgContainer = styled.div`
  display: flex;
  width: 200%; /* Duas imagens lado a lado, cada uma com 100% da largura visível */
  height: 10    0%;
  animation: ${slideLeft} 40s linear infinite;
`;

// Cada imagem ocupa 50% do container, ou seja, a largura total do elemento visível.
export const MosaicoImg = styled.img`
  width: 50%;
  object-fit: cover; /* Ajusta a imagem para preencher seu espaço sem distorcer */
  pointer-events: none;
`;

export const TitlePage = styled.div`
    position: fixed;
    top: 4;
    left: 0;
    z-index: 11;
    font-family: 'Voga', sans-serif;
    font-size: 8rem;
    color: #C2CFB4;
    margin-top: 3vh;
    margin-left: 8vw;
`;

export const Line = styled.div`
  width: 0.7rem; /* Define a largura da linha */
  height: 65vh; /* Altura total ou personalizada */
  background-color: #253529; /* Cor da linha */
`;

export const ProjetosContainer = styled.div`
    margin-left: 3rem;
    display: flex;
    flex-direction: row;
`;

export const CardProjeto = styled.div`
    background-color: #141C16;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-right: 1vw;
    flex-direction: row;
    height: 22vh;
    width: 45vw;
    transition: 0.3s;

    &:hover {
        cursor: pointer;
        transition: 0.3s;
        border-radius: 10px;
        border: 1px solid #C2CFB4;
        transform: scale(1.05);
    }
`;

export const CardImgFremeProjeto = styled.div<Props>`
    height: 17vh;
    width: 13vw;
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
    flex-direction: row;
    flex-wrap: wrap;
    padding: 2rem;
    height: 50vh;
`;


export const CardTextContainerProjeto = styled.div`
    height: 17vh;
    margin-left: 5px;
    width: auto;
    display: flex;
    flex-direction: column;
`;

export const CardTitleProjeto = styled.div`
    font-size: 1.3rem;
    color: #C2CFB4;
    font-family: 'Chocolates', sans-serif;
    font-weight: bolder;


`;

export const CardTextProjeto = styled.div`
    color: #C2CFB4;
    font-size: 0.8rem;
`;
