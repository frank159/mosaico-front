import styled from 'styled-components';
const calqueti = require("../../assets/images/img/clacket.png")

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
    font-family: 'Montserrat', sans-serif;
`;

export const TitleOverlayContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  width: auto;
  transform: translate(-50%, -50%);
  z-index: 112;
  font-family: 'Montserrat';
  color: white;

  display: flex;
  justify-content: center;

  flex-direction: column;
`;

export const TextOverlay = styled.div`
  font-size: 10rem;
  font-weight: 900;
  color: #000000;
  letter-spacing: 0.6em;
  text-align: center;
  @media (max-width: 768px) { /* Define o tamanho máximo da tela (por exemplo, 768px) */
    font-size: 1rem;
    font-weight: 900;
    color: #000000;
    margin-left: 10%;
    letter-spacing: 0.05rem;
    white-space: nowrap;
    text-align: center;
    padding-right: 2.5em;
  }
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

export const DivText = styled.div`
  background-color: #e4ebdd;
  font-style: italic;
  font-size: 2rem;
  padding-top: 4vh;
  margin-left: -30vw;
  z-index: 11111;

`;


export const DivBigText = styled.div`
  background-color: #e4ebdd;
  font-size: 1.7rem;
  margin-top: 20vh;
  margin-left: 10vh;
  width: 80%;
`;

export const DivBigTextAtencao = styled.div`
  background-color: #e4ebdd;
  font-size: 2rem;
  color: #8d8223;
  font-weight: bolder;
  margin-top: 3vh;
  width: 100%;
  text-align: center;
`;

interface Props {
  src?: string;
  backgroundColorCard?: string;
  top?: string;
  color?: string;
  color2?: string;
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

export const ImgLogo = styled.img`
  border-radius: 50%;
  width: 22rem;  // Adicionado
  height: 22rem;
  object-fit: cover;  // Adicionado
  overflow: hidden;  // Adicionado
  position: absolute;
  top: -8.5%;
  left: 2%;
  z-index: 0;
`;
export const BodyText = styled.div`
  margin-top: 20vh;
  margin-left: 8vw;

  font-size: 1.2rem;
  color: #141c16;
`;

export const BodyListCardContainer = styled.div`
  width: auto;
  margin-top: 4vh;

  display: flex;
  justify-content: center;
  flex-direction: row;
  z-index: 11111;

`;

export const BodyListCard = styled.div`

`;

export const Card = styled.div`
  width: 80vw;
  height: 10vh;
  margin: 2rem 2rem 2rem 2rem;

  font-size: 1.4rem;

  color: #e4ebdd;
  background-color: #000000;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  transition: 1s;

  &:hover {
    transition: 0.6s;
    transform: scale(1.02);
  }
`;

export const Line = styled.div`
  width: 0.5rem; /* Define a largura da linha */
  height: 24vh; /* Altura total ou personalizada */
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
`;

export const SUbText = styled.div`

`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const CardIcon = styled.div`

`;

export const CardIconImg = styled.img`
  height: 5rem;
`;

export const CardText = styled.div`
margin-left: 3rem;
word-spacing: 10px;

`;

export const Esclamacao = styled.img`
 height: 14rem;
 position: absolute;
 left: 3%;
 transition: 1s;

`;

export const Faixa = styled.div`
  width: 100%;
  height: 30vh;

  background-color: #000000;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  transition: 1s;

  &:hover {
    transition: 0.6s;
    transform: scale(1.05);
  }

  &:hover ${Esclamacao} {
    transition: 0.6s;
    transform: scale(1.1);
  }

`;

export const FaixaText = styled.div`
  color: #C2CFB4;
  font-size: 1.4rem;
  word-spacing: 10px;
  margin-left: 9vw;
  word-spacing: 10px;
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

export const VideoWrapper = styled.div`
  width: 80vw;
  height: 80%;
  margin-top: 2rem;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
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

export const ProjetosContainer = styled.div`
    margin-top: 4vh;
    position: relative;
    display: flex;
    flex-direction: row;
`;

export const ProjetosListContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 100%;
    height: auto;
    gap: 20px;
    padding: 0rem 7rem 7rem 7rem;

`;

export const CardProjeto = styled.div`
    background-color: #4E5C2C ;
    display: flex;
    justify-content: start;
    align-items: start;
    margin-right: 1vw;
    flex-direction: row;
    height: auto;
    padding-bottom: 2rem;
    width: 100%;
    transition: 0.3s;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        transition: 0.3s;
        border: 1px solid #C2CFB4;
        transform: scale(1.05);
    }
`;

export const CardImgFremeProjeto = styled.div<Props>`
    height: 26vh;
    width: 20vw;
    padding-top: 2rem;
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
    color: #C2CFB4;
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    padding-bottom: 5px;
`;

export const CardTextProjeto = styled.div`
    color: #C2CFB4;
    font-size: 1.3rem;
    word-spacing: 10px;
`;

export const BigImgContainer = styled.div`  
    padding-left: 7rem;
    padding-right: 7rem;
    padding-top: 4rem;
    margin-top: 5vh;
    background-image: url(${calqueti});
    background-size: cover; /* Ajusta a imagem para cobrir todo o container */
    background-position: center; /* Centraliza a imagem no container */


`;

export const TitleBigImg = styled.div`
    font-size: 2rem;
    font-style: italic;
    font-weight: bolder;
`;

export const TextBigImg = styled.div`
  font-size: 1.4rem;
`;

export const IconTextBigImgContainerList = styled.div`
    width: 100%;
    display: flex;
    height: 20vh;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;  
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

export const PatrocinadorContainer = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: column;
  gap: 7rem;
  justify-content: center;
  align-items: center;
`;

export const PatrocinadorCard = styled.div<Props>`
    background-color: ${(prop)=> prop.backgroundColorCard};
    width: 70vw;
    height: 20vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-radius: 15px;
`;
    
export const PatrocinadorText = styled.div<Props>`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bolder;
  color: ${(prop)=> prop.color};
`;
    

export const PatrocinadorLogo = styled.img<Props>`
    position: absolute;
    left: 5%;
    top: ${(prop)=> prop.top};
    height: 7rem;
`;

export const PatrocinadorTextLink = styled.span<Props>`
  color: ${(prop)=> prop.color};
  font-weight: bolder;
  transition: 0.7s;
  font-size: 1.2rem;

  &:hover {
    transition: 0.6s;
    cursor: pointer;
    color: ${(prop)=> prop.color2};
    transform: scale(1.1);
  }
`;
    
export const TitlePage = styled.div`
    margin-left: 7rem;
    z-index: 11;
    font-family: 'Voga', sans-serif;
    font-size: 6rem;
    color: #000000;
`;

export const SubTitlePage = styled.div`
    z-index: 11;
    font-size: 1.4rem;
    color: #000000;
    font-weight: bolder;
    font-style: italic;
`;

export const Line2 = styled.div`
  position: relative;
  left: 6rem;
  top: -1rem;
  width: 0.3rem;
  height: 74vh;
  border-radius: 10px;
  background-color: #323D09;
`;

export const BigTextSection = styled.div`
  padding-left: 7rem;
  padding-right: 7rem;
  padding-top: 4rem;
  padding-bottom: 7rem;

  font-size: 1.3rem;
  color: #141C16;
`;

export const BigTextTitle = styled.div`
  font-size: 1.8rem;
  font-weight: bolder;
`;

export const BigTextSpace = styled.div`
  height: 1.3rem;
`;