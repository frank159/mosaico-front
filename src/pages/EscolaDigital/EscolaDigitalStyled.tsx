import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';

interface QuinSecaoProps {
  width: string;
}

export const Container = styled.div`
  overflow-x: hidden;
  background-color: #4E5C2C;
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

/* export const Body = styled.div`
  height: auto;
  min-height: 100vh;
  background-color: #4E5C2C;
  width: 100%;

  display: flex;
  flex-direction: column;
  color: #C2CFB4;
  padding-left: 7rem;
  padding-right: 7rem;
`; */
export const Body = styled.div`
  background-color: #4E5C2C;

  padding-left: 7rem;
  padding-right: 7rem;
  color:  #C2CFB4;
`;

export const Title = styled.div`
  font-size: 2.2rem;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 1rem;
`;

export const LocalIcon = styled.img`
  height: 1.4rem;
  margin-right: 0.5rem;
`;

export const SubTitle = styled.div`
  font-size: 1.4rem;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  color: #8AA88A;
  margin-top: 1rem;
  font-style: italic;
  `;

export const ImgLogo = styled.img`
  height: 15rem;
  position: absolute;
  top: -4.5%;
  left: 5%;
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
`;

export const BodyListCard = styled.div`

`;

export const Card = styled.div`
  width: 80vw;
  height: 17vh;
  margin: 2rem 2rem 2rem 2rem;

  font-size: 1.3rem;

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
  height: 145vh; /* Altura total ou personalizada */
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
  margin-top: 1.5rem;
`;

export const CardIcon = styled.div`

`;

export const CardIconImg = styled.img`
  height: 4rem;
`;

export const CardText = styled.div`
margin-left: 1rem;
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
  font-size: 1.2rem;
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 6vh;
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

export const ContainerCard1 = styled.div`
  width: 100%;
  margin-top: 4rem;
  font-size: 1.6rem;
  word-spacing: 5px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  background-color: #25352930;
`;

export const ContainerCard2 = styled.div`
  width: 100%;
  height: 13vh;
  word-spacing: 5px;
  margin-top: 2rem;
  font-size: 1.6rem;
  padding-top: 2rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background-color: #253529;
`;

export const IconCad = styled.img`
  height: 3.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const SpaceContainer = styled.div`
  height: 1.6rem;
`;

export const TextContainer = styled.div`
  font-size: 1.6rem;
`;

export const ContainerCard3 = styled.div`
  width: 100%;
  height: 13vh;
  word-spacing: 5px;
  margin-top: 2rem;
  font-size: 1.6rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
`;

export const ContainerCard4 = styled.div`
  width: 100%;
  height: 13vh;
  word-spacing: 5px;
  margin-top: 2rem;
  font-size: 1.4rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
`;

export const IconCad3 = styled.img`
  height: 5rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const TextContainer3 = styled.div`
  font-size: 1.6rem;
`;

export const TextSectionContainer = styled.div`

`;

export const TitleSection = styled.div`
  font-size: 2.2rem;
  font-weight: bolder;
  font-style: italic;
  `;
  
export const TitleSection1 = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
  font-style: italic;
  color: #C2CFB4;
  font-family: 'Montserrat', sans-serif;
  `;
  
export const TextSection = styled.div`
  font-size: 1.4rem;
  margin-left: 1.3rem;
`;

export const TextSection1 = styled.div`
  font-size: 1.4rem;
  margin-top: 1.3rem;
`;

export const MinContainerSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 42vh;
  justify-content: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
  align-items: center;
  gap: 20px;
`;

export const MinContainerList = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
font-size: 1.4rem;

`;

export const MinContainerLine = styled.div`
  border: 2px solid #FCA827;
  width: 0;
  transition: height 0.3s ease; /* Adiciona transição suave */
`;

export const MinContainer1 = styled.div`
  background-color: #253529;
  border-radius: 8px;
  height: 15vh;
  width: 60vw;
  display: flex;
  padding-left: 2rem;
  justify-content: start;
  align-items: center;
  transition: 0.3s;

  
  &:hover {
    transition: 0.3s;
    color: #627533;
    transform: scale(1.01);
  }
`;

export const MinContainer2 = styled.div`
  background-color: #253529;
  border-radius: 8px;
  height: 15vh;
  width: 60vw;
  display: flex;
  padding-left: 2rem;
  justify-content: start;
  align-items: center;
`;

export const FinalText = styled.div`
  background-color: #C2CFB4;
  padding-top: 3vh;
  padding-bottom: 3vh;
  color: #141C16;
  padding-left: 7rem;
  padding-right: 7rem;
  padding-bottom: 7rem;
`


export const TextSectionCheckContainer = styled.div`
  font-size: 1.4rem;
  margin-top: 1.3rem;
  margin-left: 5vw;

  display: flex;
  justify-content: start;
  align-items: center;
`;

export const TextSectionCheck = styled.div`

`;

export const TextSectionCheckIcon = styled(CheckIcon)`
  height: 1.5rem;
  margin-right: 1rem;
`;

export const ProjectoSection = styled.div`
  background-color: #141C16;
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
    margin-top: 5vh;
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
    color: #C2CFB4;
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;


`;

export const CardTextProjeto = styled.div`
    color: #ffffff;
    font-size: 1.3rem;
    word-spacing: 10px;
    font-family: 'Montserrat', sans-serif;
`;
