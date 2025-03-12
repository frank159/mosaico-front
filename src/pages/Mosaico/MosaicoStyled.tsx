import styled, { keyframes } from 'styled-components';

interface Props {
  backgroundImage?: string;
  backgroundColor?: string;
}

export const Container = styled.div`
  position: relative;
  width: auto;
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Seta = styled.div`
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translateX(-50%); /* Isso vai garantir que a seta fique centralizada horizontalmente */
  z-index: 1111; /* Define a camada acima do vídeo */
`;


export const FullScreenVideo = styled.video`
  opacity: 0.7;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const ColorOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(208, 214, 119, 0.151); /* Cor e opacidade da camada */
  z-index: 1111; /* Define a camada acima do vídeo */
`;

export const LogoImg = styled.img`
  width: 40vw;
  
  @media (max-width: 768px) {
    width: 90vw;
  }

`;

export const BackImg = styled.img`
  position: absolute;
  opacity: 0.1;
  height: 70vh;
  bottom: 1%;
  left: 2%;
`;

export const SetaImg = styled.img`
  height: 40px;
  transition: 0.3s;

  &:hover{
    cursor: pointer;
    transition: 0.3s;
    transform: scale(1.4);
  }
`;

export const TitleLogo = styled.div``;

export const Line = styled.div`
  width: 0.7rem; /* Define a largura da linha */
  height: 50vh; /* Altura total ou personalizada */
  background-color: #253529; /* Cor da linha */
`;

export const TitleOverlayContainer = styled.div`
  position: absolute;
  top: 17%;
  left: 50%;
  width: auto;
  transform: translate(-50%, -50%);
  z-index: 112;
  font-family: 'Montserrat';
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextOverlay = styled.div`
  font-size: 1.2rem;
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

export const SectionBelowVideo = styled.div`
  height: 170vh; /* Ocupa a altura da tela */
  background-color: #C2CFB4; /* Cor de fundo (pode ser alterada) */
`;

export const BackgroundImage = styled.div<Props>`
  margin-top: 10vh;
  position: absolute;
  top: 0;
  right: 0; /* Ajuste a posição da imagem à direita */
  width: 60vw; /* Ajuste a largura da imagem */
  height: 130vh; /* Altura da imagem 100vh */
  opacity: 0.1; /* Opacidade da imagem */
  background-image: url(${props => props.backgroundImage});
  background-size: cover; /* Garantir que a imagem ocupe a área sem se repetir */
  background-position: center; /* Posiciona a imagem centralizada */
  z-index: 0; /* Garante que a imagem fique atrás dos outros conteúdos */
`;


export const SectionTextCard = styled.div`
  color: #C2CFB4;
  font-family: 'Montserrat', sans-serif;
  z-index: 110;

  margin-bottom: 4rem;
`;

export const IconContainer = styled.div`
  color: #C2CFB4;
  z-index: 110;
  display: flex;
  flex-direction: row;
  width: 40vw;
  justify-content: center;
  align-items: center;
  background-color: #141c16;
  font-family: 'Montserrat', sans-serif;
  margin: 8rem 2rem 2rem 5rem;
  height: 10vh;
`;

export const IconteTextContainer = styled.div`
  font-size: 1.4rem;
  font-weight: bolder;
`;

export const SectionTitle = styled.div`
  font-size: 2.2rem;
  font-weight: bolder;
  
  `;

export const SectionText = styled.div`
font-size: 1.5rem;
font-weight: lighter;
letter-spacing: 0.05em;

`;

export const BigIconImgCard = styled.img`
    width: 7.5vh;
    position: relative;
    top: -10px; /* Ajuste a altura desejada */
`;

export const CardContainer = styled.div`
padding: 2rem;
`;

export const PageCardContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin: 4rem;
`;

export const SetaFaixa = styled.div`
  position: absolute;
  transform: translateX(-50%); /* Isso vai garantir que a seta fique centralizada horizontalmente */

  left: 50%;
  bottom: 0%;
  margin-bottom: 6vh;
`;

export const FaixaTitle = styled.div`
  font-size: 1.6rem;
  font-weight: bolder;
  color: #C2CFB4;
  margin-left: 8rem;
`;

export const SetaImgPlus = styled.img`
  height: 40px;
  transition: 0.3s;

  &:hover{
    cursor: pointer;
    transition: 0.3s;
    transform: scale(1.4);
  }
`;


const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3); /* Pulsação mais sutil */
  }
`;

interface FaixaProps {
  isExpanded?: boolean;
}

export const FaixaContainer = styled.div<FaixaProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: ${props => props.isExpanded ? '90vh' : '16vh'};
  width: 100%;
  background-color: #0f1410a2;
  align-items: start;
  transition: height 0.5s ease-in-out;
  overflow: hidden;
`;

interface SetaProps {
  isExpanded?: boolean;
}

export const SetaPlusImg = styled.img<SetaProps>`
  height: 40px;
  transition: all 0.3s ease-in-out;
  filter: invert(1);
  transform: ${props => props.isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  animation: ${props => !props.isExpanded && pulseAnimation} 2.5s ease-in-out infinite;

  &:hover {
    cursor: pointer;
    animation: none;
    transform: ${props => props.isExpanded ? 'rotate(180deg) scale(1.3)' : 'scale(1.3)'};
  }
`;

export const FaixaTitleContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 6vh;
`;

export const FaixaBody = styled.div`
  margin-top: 6.6vh;
  width: 100%;
  height: 100%;
`;

export const FaixaBodyCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FaixaBodyCardsContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  position: relative;
`;

export const FaixaBodyCardsTitle = styled.div`
  margin-left: 8rem;
  color: #C2CFB4;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: end;
`;

export const FaixaBodyCardsTitle2 = styled.div`
  color: #C2CFB4;

  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: end;
  margin-bottom: 0.5rem;
`;

export const FaixaBodyCards = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const FaixaBodyCard = styled.div<Props>`
  background-color: ${props => props.backgroundColor};
  height: 21vh;
  width: 20vw;
  border-radius: 10px;
`;

export const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  justify-content: start;

  color: #C2CFB4;
  margin-left: 1rem;
  margin-top: 1rem;
`;

export const IconCard = styled.div`
  margin-right: 3px;

`;
export const IconCard2 = styled.div`
  color: #74b102;
  margin-right: 3px;
`;

export const SubTitleFaxaCard = styled.div`
  font-weight: bolder;
`;

export const SubCardFaixaText = styled.div`
  margin-left: 1rem;
  margin-top: 0.1rem;
  font-size: 1.13rem;
  padding: 5px;
  color: #C2CFB4;
`;

export const FaixaTilteBigText = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  color: #C2CFB4;
  margin-left: 8rem;

  z-index: 1000;
`;


export const FaixaLogoMosaicoContainer = styled.div`
`;

export const FaixaLogoMosaico = styled.img`
  height: 2rem;

`;

export const EsclamacaoFaixa = styled.div`
  position: absolute;
  left: 4.6%;
  top: -10%;
`;

export const Escaclamacao = styled.img`
  height: 6rem;
  filter: invert(1);
`;

