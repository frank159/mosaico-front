import styled from 'styled-components';

interface Props {
    width?: string;
}

export const MainContainer = styled.div`
    background: #030504;
    display: flex;
    flex-direction: column;
    height: auto;
    margin-top: 5vh;

`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10vh;
`;

export const TexteContainer = styled.div`
    margin-left: 8rem;
    margin-top: 3vh;
    z-index: 111;
`;

export const TitleLogo = styled.div`

`;

export const LogoImg = styled.img`
    height: 60px;
`;

export const TitleText = styled.p`
    color: #C2CFB4;
    padding: none;
    margin-right: 10px;
    font-size: 4rem;
    font-weight: bolder;
    font-family: 'Chocolates', sans-serif;
`;

export const SubTextContainer = styled.div`
    
`;

export const SubTextText = styled.div`
    color: #C2CFB4;
    font-weight: 500;
    padding: none;
    margin: none;
    font-size: 1.35rem;
    font-family: 'Chocolates', sans-serif;

`;

export const SubTitleContainer = styled.div`

`;

export const SubTitleText = styled.div`
margin-top: 5vh;
    font-size: 2rem;
    font-weight: bolder;
    color: #C2CFB4;
    font-family: 'Chocolates', sans-serif;
    font-style: italic;
`;

export const IconCardContainer = styled.div`
    margin-top: 9vh;

`;

export const IconCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: #141C16;
    height: 7rem;
    padding: 1rem;
    position: relative;
    border-radius: 0.2rem;
    width: 60vw;
`;

export const IconCardTextContainer = styled.div`

`;

export const IconCardTextTitle = styled.div`
    color: #C2CFB4;
    font-size: 2rem;
    padding: 10px;
    margin-left: 15px;
    font-weight: bolder;
`;

export const IconCardText = styled.div`
    color: #C2CFB4;
    font-size: 1.4rem;
`;

export const IconImgCardContainer = styled.div`

`;

export const IconImgCard = styled.img<Props>`
    width: ${props => props.width};
`;

export const PilaresListContainer = styled.div`
    display: flex;
    z-index: 111;
    flex-direction: row;
    align-items: start;
    margin-left: 6rem;
    justify-content: start;
    height: auto;
    margin-top: 8vh;
`;

export const PilaresListItensContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 5vh;
    margin-left: 2rem;
    justify-content: start;
    height: auto;
`;

export const PilaresListLine = styled.div`
  width: 0.7rem; /* Define a largura da linha */
  height: 75vh; /* Altura total ou personalizada */
  background-color: #253529; /* Cor da linha */
`;


export const PilaresCard = styled.div`
    margin-bottom: 3vh;
`;

export const PilaresTitleIcon = styled.img<Props>`
    width: ${props => props.width};
`;

export const PilaresTitleText = styled.div`
    color: #C2CFB4;
    font-size: 2rem;
    margin-left: 10px;
    font-weight: bolder;
`;

export const PilaresTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
`;

export const PilaresTextContainer = styled.div`

`;

export const PilaresText = styled.div`
    color: #C2CFB4;
    margin-top: 5px;
    margin-bottom: 20px;
`;

export const PilaresList = styled.ul`
  list-style-position: inside;
  padding-left: 0;
`;

export const SubItenList = styled.li`
    font-weight: bolder;
`;


export const BigIconCardContainer = styled.div`
    margin-left: 8rem;
    margin-top: 6vh;
    margin-bottom: 10vh;
    z-index: 111;
`;

export const BigIconCard = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    background-color: #141C16;
    height: auto;
    padding: 1rem;
    position: relative;
    border-radius: 0.2rem;
    width: 85vw;
`;

export const BigIconCardTitleContainer = styled.div`
    display: flex;
    flex-wrap: row;
`;

export const BigIconCardTitle = styled.div`
    color: #C2CFB4;
    font-size: 2rem;
    padding: 25px 0px 0px 0px;
    margin-left: 15px;
    font-weight: bolder;
`;


export const BigIconImgCard = styled.img<Props>`
    width: ${props => props.width};
    position: relative;
    top: -70px; /* Ajuste a altura desejada */
`;

export const BigIconItenList = styled.li`
    font-family: 'Chocolates', sans-serif;
    font-weight: bolder;
    color: #C2CFB4;
    font-size: 1.3rem;
`;

export const BigIconText = styled.div`
    color: #C2CFB4;
    font-size: 1.4rem;
    margin-top: 5px;
    margin-bottom: 20px;
`;

export const BigIconCardTextContainer = styled.div`

`;

export const ColaboradoresContainer = styled.div`
    width: 100%;
    z-index: 111;
    height: 57.3vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ColaboradoresCard = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ColaboradoresTitle = styled.div`
    color: #C2CFB4;
    font-weight: bolder;
    font-size: 1.4rem;
    font-family: 'Chocolates', sans-serif;
`;

export const ColaboradoresText = styled.div`
    color: #C2CFB4;
    width: 30vw;
    font-size: 1.4rem;
    font-family: 'Chocolates', sans-serif;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ImgColaboradorContainer = styled.div`
    margin-right: 10px;
`;

export const ImgColaborador = styled.img<Props>`
    width: ${props => props.width};
`;

export const VectorImage = styled.img`
  position: absolute;
  margin-right: 5vw;
  margin-top: 3vw;
  right: 0;
  top: 2;
  width: 35%; /* 30% da largura do carrossel */
  height: auto;
  z-index: 1; /* Coloca a imagem por trás do carrossel */
  pointer-events: none; /* Evita que a imagem interfira em interações do usuário */
`;
