import ReactPlayer from 'react-player';
import styled from 'styled-components';
  
interface QuinSecaoProps {
  width: string;
}

export const Container = styled.div`
    background: #F8F6E6;
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


interface Props{
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
  background-color: #e4ebdd;
  width: 100%;
  position: relative;

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
  width: auto;
  margin-top: 4vh;

  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const BodyListCard = styled.div`

`;

export const Card = styled.div`
  width: 80vw;
  height: 17vh;
  margin: 2rem 2rem 2rem 2rem;

  color: #e4ebdd;
  background-color: #000000;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
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

export const TitleCard = styled.div`
  font-weight: bolder;
  font-size: 2rem;
  font-style: italic;
  color: #C2CFB4;
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
`;

export const CardIcon = styled.div`

`;

export const CardIconImg = styled.img`
  height: 4rem;
`;

export const CardText = styled.div`
margin-left: 1rem;
font-size: 1.3rem;

`;

export const Faixa = styled.div`
  width: 100%;
  height: 20vh;

  margin-top: 4vh;
  background-color: #000000;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FaixaText = styled.div`
  color: #C2CFB4;
  font-size: 1.3rem;
  margin-left: 15rem;
  padding-right: 10rem;
`;

export const Esclamacao = styled.img`
 height: 14rem;
 position: absolute;
 left: 10%;

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
  height: 170vh;
  display: flex;
  padding: 5rem;
  gap: 2rem;

  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #E4EBDD;
`;

export const Img = styled.img<QuinSecaoProps>`
  width: ${props => props.width};
  transition: 0.8s;

  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 6vh;
`;

export const VideoWrapper = styled.div`
  width: 70vw;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const VideoTitle = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.7rem;
  font-weight: bolder;
  margin-top: 6vh;
  justify-content: start;
  align-items: start;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  pointer-events: none; /* Permite que o player receba cliques */
`;

export const NavButton = styled.button`
  pointer-events: all; /* Habilita cliques nos botões */
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const ArrowLeft = styled.span`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

export const ArrowRight = styled.span`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
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


export const CardImgFremeProjeto = styled.div<Props>`
    background-color: #d9d9d967;
    height: 28vh;
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

