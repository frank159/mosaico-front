import styled from "styled-components";

interface BigTextStyledProps {
  backgroundColor?: string;
  colorCont?: string;
  isExpanded?: boolean;
  expandedMax?: string;
  height?: string;
  expandedMin?: string;
  textAlign?: string;
  isRotated?: boolean;
  portfo?: boolean;
}

export const ImgIcon = styled.img<BigTextStyledProps & { isRotated?: boolean }>`
  filter: invert(100%);
  height: 4vh;
  transform: rotate(${(props) => (props.isRotated ? "270deg" : "90deg")});

  margin-right: 2vw;
  margin-bottom: 2vh;
  transition: transform 0.3s ease-in-out, transform 0.2s ease-in-out; // Adiciona animação de escala suave
`;

export const Title = styled.h1`
  margin-top: 3vh;
  height: auto;
  display: flex;
  align-items: start;
  justify-content: center;
  text-align: start;
  margin: 3vh auto;
  margin-bottom: 5vh;
  line-height: 1.5;
  color: #ffffff;
`;

export const Text = styled.div<BigTextStyledProps>`
  height: auto;
  width: 80%;
  font-size: 18px;
  display: flex;
  align-items: start;
  justify-content: center;
  text-align: ${(props) => (props.textAlign)};
  margin: 0 auto;
  margin-bottom: 5vh;
  line-height: 1.5;
  color: #ffffff;
`;

export const AuthorSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  margin-top: 7vh;
  margin-bottom: 3vh;
`;

export const AuthorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  text-align: center;
`;

export const AuthorImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10%;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const AuthorDescription = styled.div`
  color: #ffffff;
  width: 50%;
  h3 {
    margin: 0;
    font-size: 20px;
  }

  p {
    margin: 10px 0 0;
    font-size: 16px;
    line-height: 1.4;
  }
`;

export const Container = styled.div<BigTextStyledProps>`
  position: relative; /* Necessário para que a sombra seja posicionada dentro do Container */
  height: ${(props) => (props.isExpanded ? props.expandedMax : props.expandedMin)};
  color: ${props => props.colorCont || "white"};
  background-color: ${props => props.backgroundColor || "#062400"};
  cursor: ${props => props.portfo ? 'pointer' : 'default' };

  transition: height 0.5s ease-in-out;
  
  &:hover ${ImgIcon} {
    scale: 1.3;
    transition: transform 0.5s ease-in-out;
  }
`;

export const ShadowDiv = styled.div`
  position: absolute; /* Fixa a sombra dentro do Container */
  bottom: 0; /* Posiciona a sombra na parte inferior do container */
  width: 100%; /* A sombra vai ocupar toda a largura do container */
  height: 30vh; /* Altura da sombra */
  background: linear-gradient(
    to top, /* Gradiente para cima */
    rgba(0, 0, 0, 0.5) 10%, /* Parte mais escura no fundo */
    rgba(48, 48, 48, 0.048) 70%,
    rgba(0, 0, 0, 0) 90% /* Parte transparente no topo */
  );
  
  pointer-events: none; /* Impede que a sombra interfira na interação do usuário */
  z-index: 999; /* Coloca a sombra acima de outros elementos, mas abaixo do header */
`;

export const Hr = styled.hr`
  margin-top: 10px;
  border: 1px solid #ffffff29;
  width: 90%;
`;

export const ArrowButton = styled.div`
  position: absolute; // Fixa o botão na posição desejada
  bottom: 10px; // Distância da parte inferior
  width: 100%; // Centraliza o botão horizontalmente
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const LogosContainer = styled.div`
  width: 100%;
  height: 8vh;
  margin-top: 5vh;
  display: flex;
  justify-content: space-around;
`;

export const Logo = styled.img<BigTextStyledProps>`
  height: ${(props) => (props.height || "5vh")};
`;