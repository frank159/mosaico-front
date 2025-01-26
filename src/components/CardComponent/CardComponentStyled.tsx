import styled from "styled-components";

interface CardProps {
  backgroundColor?: string;
  textColor?: string;
  titleColor?: string;
  borderColor?: string;
  expandedMax?: string;
  expandedMin?: string;
  width?: string;
  widthLongText?: string;
  isExpanded?: boolean;
  isVisible?: boolean;
  isRotated?: boolean;
  click?: boolean;
  justifyText?: boolean;
  isMobile?: boolean;
  MobileHMax?: string;
  MobileHMin?: string;
  MobilePadding?: string;
}

interface ImageProps {
  borderColor?: string;
  frameWidth?: string;
  frameHeight?: string;
  imageWidth?: string;
  imageHeight?: string;
  opacity?: string;
  justify?: string;
  imgMargin?: string;
  isMobile?: string;
}

export const ImgIcon = styled.img<CardProps & { isRotated?: boolean }>`
  filter: invert(100%);
  height: 4vh;
  transform: rotate(${(props) => (props.isRotated ? "270deg" : "90deg")});
  margin-right: 2vw;
  transition: transform 0.3s ease-in-out, transform 0.2s ease-in-out; // Adiciona animação de escala suave
`;

export const ArrowButton = styled.div`
  position: absolute; // Fixa o botão na posição desejada
  bottom: 10px; // Distância da parte inferior
  width: 100%; // Centraliza o botão horizontalmente
  display: flex;
  justify-content: end;
  align-items: center;
`;


export const Container = styled.div<CardProps>`
  color: ${(props) => props.textColor || "#0e0a0a"};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 7vh;
  margin-bottom: 4vh;
`;

export const CardContainer = styled.div<CardProps>`
  width: ${(props) => props.width || "85%"} ;
  height: ${(props) => {
    if (props.isMobile) {
      return `${props.isExpanded ? props.MobileHMax : props.MobileHMin}px`; 
    }

    return props.isExpanded ? props.expandedMax : props.expandedMin;
  }};


  background-color: ${(props) => props.backgroundColor || "#F8F6E6"};
  border-radius: 2cap;
  display: flex;
  flex-direction: column;
  cursor: ${(props) => (props.click ? "pointer" : "default")};
  transition: height 0.5s ease-in-out;
  overflow: hidden;
  align-items: flex-start;
  margin-bottom: ${(props) => (props.isExpanded ? "50px" : "20px")};
  position: relative;

  &:hover ${ImgIcon} {
    transform: scale(1.2) rotate(${(props) => (props.isRotated ? "270deg" : "90deg")});
    transition: transform 0.3s ease-in-out;
  }
`;

export const FlexContainerINTER1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-align: justify;

`;

export const FlexContainerINTER = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
`;

export const FlexContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  flex-grow: 0; // Parte superior não cresce
`;

export const FlexContainer2 = styled.div<CardProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  transition: height 0.3s ease-in-out;
`;

export const LongTextContainer = styled.text<CardProps>`
  display: flex;
  text-align: ${(props) => (props.isMobile ? 'left' : 'justify')};
  justify-content: flex-start;
  width: ${(props) => (props.isMobile ? '90%' : 'props.widthLongText')};
  font-size: ${(props) => (props.isMobile ? '20px' : '24px')};
  margin-left: ${(props) => (props.isMobile ? '8%' : '1%')};
  padding: ${(props) => props.MobilePadding};
  color: ${(props) => props.textColor || "black"};

  word-wrap: ${(props) => (props.isMobile ? 'break-word' : 'normal')};
  word-break: ${(props) => (props.isMobile ? 'break-word' : 'normal')};
`;

export const HiddenText = styled.div<CardProps>`
  padding: 1vh 5vh 5vh 5vh;
  font-size: 16px;
  color: ${(props) => props.textColor || "black"};
  background-color: ${(props) => props.backgroundColor || "black"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  transition: opacity 0.5s ease-in-out 0.5s; // Adiciona um atraso de 0.5s para a transição da opacidade
`;

export const HrComp = styled.hr<CardProps>`
  margin-top: 3vh;
  width: 97%;
  border: 1px solid #383838
`;

export const VisibleComponent = styled.div<CardProps>`

`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
`;

export const Title = styled.text<CardProps>`
  width: 95%;
  margin-top: 3vh;
  font-size: 40px;
  font-weight: bold;
  text-align: left;
  padding: ${(props) => (props.isMobile ? '30px 30px 0 30px' : '10px 20px 0 20px')};
  color: ${(props) => props.titleColor || "black"};
  font-size: ${(props) => (props.isMobile ? '40px' : '25px')};
`;

export const Text = styled.text<CardProps>`
  width: ${(props) => (props.isMobile ? '95%' : '90%')};
  padding: ${(props) => (props.isMobile ? '0 30px 30px 30px' : '10px 10px 10px 20px')};

  color: ${(props) => props.textColor || "black"};
  font-size: 18px;
`;

export const TopicsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Topics = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 50%;
`;

export const TitleSmall = styled.h3<CardProps>`
  width: 70%;
  padding: 30px 30px 0 30px;
  color: ${(props) => props.titleColor || "black"};
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: center;
`;

export const ImageFrame = styled.div<ImageProps>`
  height: auto;
  width: auto;
  padding: 3rem;
  background-color: transparent;
  border: 1px solid ${(props) => props.borderColor || "black"};
  display: flex;
  align-items: start;
  align-self: flex-end;
  justify-content: ${(props) => props.justify || "center"};
  padding: 10px;
  box-sizing: border-box;
  margin: ${(props) => props.imgMargin || "none"};
`;

export const Image = styled.img<ImageProps>`
  width: ${(props) => props.imageWidth || "5vw"};
  height: ${(props) => props.imageHeight || "5vh"};
  opacity: ${(props) => props.opacity || 'none'};
  object-fit: cover;
  object-position: center;
  box-sizing: border-box;
`;


