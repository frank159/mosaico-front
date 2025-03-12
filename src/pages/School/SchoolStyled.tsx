import PlaceIcon from '@mui/icons-material/Place';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface QuinSecaoProps {
  width: string;
}

export const Container = styled.div`
    background: #E4EBDD;;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    overflow-x: hidden
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

export const LocalIcon = styled.img`
  width: 1.2rem;
  margin-right: 0.7rem;
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


interface Props {
  src?: string;
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
  width: 100vw;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 2.2rem;
  font-style: italic;
  margin-left: 4vw;
  margin-right: 4vw;
  margin-top: 2vw;
`;

export const SubTitle = styled.div`
  width: 100%;
  font-size: 1.4rem;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  margin-left: 4vw;
  margin-right: 4vw;
  font-style: italic;
  color: #919191;
`;

export const ImgLogo = styled.img`
  height: 15rem;
  position: absolute;
  top: -4.5%;
  left: 5%;
`;

export const BodyText = styled.div`
  margin-top: 6vh;
  margin-left: 4vw;
  margin-right: 4vw;

  font-size: 1.5rem;
  color: #141c16;
`;

export const BodyListCardContainer = styled.div`
  width: 100%;
  margin-top: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BodyListCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  `;

export const Card = styled.div`
  width: 50vw;
  height: 17vh;
  margin-bottom: 10vh;
  color: #000000;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  @media (max-width: 1224px) {
    width: auto;
    height: auto;
  }
  
`;

export const Line = styled.div`
  width: 0.5rem; /* Define a largura da linha */
  height: auto; /* Altura total ou personalizada */
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

export const TitleCard = styled.h1`
  font-weight: bolder;

`;

export const SUbText = styled.div`
  font-size: 1.3rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 1.5rem;
  width: 100%;
  
  @media (max-width: 1224px) {
    margin-top: 2rem;

  }
  @media (max-width: 768px) {
    margin-top: 2rem;
    align-items: start;
    flex-direction: column;
  }
`;

export const CardIcon = styled.div`
  margin-right: 2rem;

  @media (max-width: 1224px) {
    margin-bottom: 2rem;
  }
`;

export const CardIconImg = styled.img`
  height: 5rem;
  filter: invert(1);
`;

export const CardText = styled.div`
margin-left: 1rem;
font-size: 1.3rem;
width: 100% !important;
`;

export const Faixa = styled.div`
  width: 100%;
  height: 20vh;

  margin-top: 4vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FaixaText = styled.div`
  color: #141C16;
  font-size: 1.3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  z-index: 2;
  text-align: center;
  font-weight: bolder;
`;

export const Esclamacao = styled.img`
 height: 14rem;
 position: absolute;
 left: 50%;
  z-index: 1;
 transform: translateX(-50%)
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
  display: flex;
  padding: 5rem;
  gap: 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #E4EBDD;
`;

export const Img = styled.img`
  width: 25rem;
  transition: 0.8s;

  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }

  @media (max-width: 1224px) {
    margin-top: 2rem;
    align-items: start;
    flex-direction: column;
    width: 20rem;
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
  width: 85%;
  display: flex;
  font-size: 1.7rem;
  font-weight: bolder;
  margin-top: 6vh;
  margin-bottom: 2vh;
  justify-content: start;
  align-items: start;
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

export const VideoWrapperA = styled.div`
  width: 80vw;
  height: 80vh;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const ArrowLeft = styled(ArrowBackIosIcon)`
margin-left: 3rem;

`;

export const ArrowRight = styled(ArrowBackIosIcon)`
transform: rotate(-180deg);

margin-right: 3rem;
`;

export const TitleSection1 = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
  font-style: italic;
  color: #323D09;
  font-family: 'Montserrat', sans-serif;
  `;

export const ProjectoSectionContainer = styled.div`
  background-color: #C2CFB4;
  width: 100%;
`

export const ProjectoSection = styled.div`
  background-color: #C2CFB4;
  padding-top: 3vh;
  padding-bottom: 3vh;
  color: #141C16;
  padding-left: 7rem;
  padding-right: 7rem;
  padding-bottom: 7rem;
`

export const CardProjeto = styled.div`
    background-color: #4E5C2C;
    display: flex;
    margin-top: 3vh;
    justify-content: start;
    align-items: start;
    margin-right: 1vw;
    flex-direction: column;
    height: auto;
    width: 100%;
    transition: 0.3s;
    border-radius: 10px;
    padding-bottom: 2rem;
    &:hover  {
      border: 1px solid #C2CFB4;
        cursor: pointer;
        transition: 0.6s;
        transform: scale(1.05);
    }
`;


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


export const CardImgFremeProjetoA = styled.div<Props>`
    height: auto;
    width: 10rem;
    left: 85%;
    bottom: 0;
    overflow: hidden;
    position: absolute;
`;

export const CardImgProjetoA = styled.img<Props>`
    height: 100%; /* Faz com que a imagem preencha a altura do contêiner */
    width: 100%; /* Faz com que a imagem preencha a largura do contêiner */
    object-fit: cover; /* Garante que a imagem mantenha proporções e preencha o contêiner */
    object-position: center; /* Centraliza a imagem dentro do contêiner */
`;

export const CardImgProjetoB = styled.img<Props>`
    height: 100%; /* Faz com que a imagem preencha a altura do contêiner */
    width: 100%; /* Faz com que a imagem preencha a largura do contêiner */
    object-fit: cover; /* Garante que a imagem mantenha proporções e preencha o contêiner */
    object-position: center; /* Centraliza a imagem dentro do contêiner */
`;


export const CardImgProjeto = styled.img<Props>`
    height: 100%; /* Faz com que a imagem preencha a altura do contêiner */
    width: 100%; /* Faz com que a imagem preencha a largura do contêiner */
    object-fit: cover; /* Garante que a imagem mantenha proporções e preencha o contêiner */
    object-position: center; /* Centraliza a imagem dentro do contêiner */
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

export const InicialSecao = styled.div`
  background-color: #E4EBDD;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


export const LogoEcoacao = styled.img`
  width: 17rem;
  margin-bottom: 5vh;
`;

export const TitleSectio = styled.h1`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: end;
    position: relative;
`;

export const TitleInicial = styled.h1`
  font-size: 10rem !important;
  margin-top: 5vh;
  color: #000000;

  @media (max-width: 1224px) {
    font-size: 6rem !important;
  }
`;

export const CardImgFremeProjeto = styled.div<Props>`
    height: 26vh;
    width: 100% !important;
    padding-top: 2rem;
    margin-left: 1rem;
    overflow: hidden; /* Corta o conteúdo que exceder os limites do contêiner */
    position: relative; /* Garante que o posicionamento seja relativo ao contêiner */
`;


export const TextoSubInicial = styled.p`
  color: #000000;
  text-align: center;
  margin: 0 2rem !important;
`;

export const TextoSubInicialContainer = styled.div`
  font-size: 1.4rem !important;
  color: #988041;
  font-style: italic;
  display: flex;
  flex-direction: row;
  margin: 0 2rem !important;
`;

export const TextoSubInicialA = styled.p`
  font-size: 1.4rem !important;
  color: #988041;
  font-style: italic;
  display: flex;
  flex-direction: row;
  text-align: center;

`;

export const PlaceIconA = styled(PlaceIcon)`
  color: #988041;
`;

export const TextImgCardMain = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  padding-left: 7rem;
  padding-right: 7rem;
  justify-content: end;
  align-items: center;
`;

export const TextImgCard = styled.div`
  position: relative; /* Necessário para que os pseudo-elementos se posicionem em relação a esse container */
  width: 96%;
  height: 97%;
    padding-right: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  z-index: 0;

  @media (max-width: 1224px) {
    flex-direction: column-reverse;

  }

  /* Borda de cima: 96% da largura, alinhada à direita */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 98%;
    border-top: 4px solid #C6BAAF;
    z-index: 0;
  }

  /* Borda de baixo: 40% da largura, alinhada à esquerda */
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    border-bottom: 4px solid #C6BAAF;
    z-index: 0;

    @media (max-width: 1224px) {
    width: 100%;
  }
  }
`;

export const ImgCard = styled.div`
  position: relative; /* Necessário para o posicionamento absoluto do ::before */
  height: 99%;
  width: 88%;



  /* Borda esquerda com pequenas extensões para cima e para baixo */
  /* Borda direita que não afeta os demais elementos */
  &::before {
    content: "";
    position: absolute; /* Permite que a borda fique fixa na viewport */
    left: 0;
    top: -100px; /* Faz a borda "vazar" um pouco para cima */
    height: 140%; /* Ocupa a altura total da viewport */
    width: 4px;
    background: #C6BAAF;
    z-index: 999; /* Garante que fique sobre outros elementos, se necessário */
  }

  /* Borda direita que não afeta os demais elementos */
  &::after {
    content: "";
    position: absolute; /* Permite que a borda fique fixa na viewport */
    right: 0;
    top: -60px; /* Faz a borda "vazar" um pouco para cima */
    height: 500vh; /* Ocupa a altura total da viewport */
    width: 4px;
    background: #C6BAAF;
    z-index: 999; /* Garante que fique sobre outros elementos, se necessário */
  }
`;


export const TextCard = styled.p`
width: 70%;
font-size: 1.4rem !important;
padding-left: 10rem !important;
padding-right: 4rem !important;
padding-bottom: 2rem !important;
padding-top: 1rem !important;

@media (max-width: 1224px) {

  padding-left: 2rem !important;
  padding-right: 5rem !important;
  }
`;

export const StyledListItem = styled.li`
  list-style: none; /* Remove o marcador padrão */
  position: relative;
  font-size: 1.4rem !important;
  padding-left: 1.2em; /* Espaço para o marcador customizado */
  padding-right: 2rem;
  &::before {
    content: "•";
    position: absolute;
    left: 0;
    top: 0;
    /* Ajuste o 'top' para alinhar verticalmente se necessário */
  }
`;
