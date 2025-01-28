import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";

import {
  Container,
  Text,
  Title,
  AuthorSection,
  AuthorCard,
  AuthorImage,
  AuthorDescription,
  ShadowDiv,
  Hr,
  ArrowButton,
  ImgIcon,
  LogosContainer,
  Logo,
} from "./BigTextSectionStyled";
const rightArrow = require('../../assets/images/icons/rightArrow.png');

interface BigTextProps {
  bigText?: string;
  titleText?: string;
  backgroundColor?: string;
  colorCont?: string;
  heighCont?: string;
  expandedMax?: string;
  expandedMin?: string;
  textAlign?: string;
  MobileHMax?: string;
  MobileHMin?: string;
  zIndex?: string;
  portfo?: boolean;
  Expanded?: boolean;
  isMobile?: boolean;
}

const BigTextSection: React.FC<BigTextProps> = ({
  bigText = "",
  titleText,
  backgroundColor,
  colorCont,
  heighCont,
  expandedMax = "",
  expandedMin = "",
  textAlign = "",
  MobileHMax = "",
  MobileHMin = "",
  isMobile,
  Expanded = false,
  portfo,
}) => {
  const homeroPic = require("../../assets/images/HomeroFoto.jpg");
  const palomaPic = require("../../assets/images/PalomaFoto.jpg");
  const cap = require("../../assets/images/logo/cap.png");
  const graciosa = require("../../assets/images/logo/graciosa.png");

  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar expansão
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar visibilidade do texto escondido
  const [isRotated, setIsRotated] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
    setIsRotated((prev) => !prev);
  };

  React.useEffect(() => {
    if (isExpanded) {
      setTimeout(() => {
        setIsVisible(true);
      }, 300);
    } else {
      setTimeout(() => {
        setIsVisible(false);
      }, 200);
    }
  }, [isExpanded]);

  // Função para truncar texto
  const getTruncatedText = (text: string, percentage: number): string => {
    const maxLength = Math.ceil(text.length * (percentage / 100));
    return text.slice(0, maxLength) + "...";
  };

  // Texto a ser exibido com base nos estados
  const displayedText = Expanded && !isExpanded 
    ? getTruncatedText(bigText, 30) // Exibir apenas 30% do texto se Expanded for true e isExpanded for false
    : bigText; // Exibir o texto completo caso contrário

  return (
    <Container
      onClick={handleToggle}
      isMobile={isMobile}
      isExpanded={isExpanded}
      backgroundColor={backgroundColor}
      colorCont={colorCont}
      expandedMax={expandedMax}
      expandedMin={expandedMin}
      MobileHMax={MobileHMax}
      MobileHMin={MobileHMin}
      portfo={portfo}
    >
      {titleText && <Title>{titleText}</Title>}
      <Text
        textAlign={textAlign}
        dangerouslySetInnerHTML={{ __html: displayedText }}
      />
      {portfo && (
        <ArrowButton>
          <ImgIcon src={rightArrow} alt="Expand" isRotated={isExpanded} />
        </ArrowButton>
      )}
      {!isVisible && portfo && !isExpanded && <ShadowDiv />}
      {isVisible && portfo && isExpanded && (
        <>
          <Hr />
          <AuthorSection>
            <AuthorCard>
              <AuthorImage src={homeroPic} alt="Autor 1" />
              <AuthorDescription>
                <h3>Homero Camargo</h3>
                <p>
                  Curabitur pharetra, quam vel molestie scelerisque, turpis velit facilisis ipsum, nec cursus justo nisl id augue.
                </p>
              </AuthorDescription>
            </AuthorCard>
            <AuthorCard>
              <AuthorImage src={palomaPic} alt="Autor 2" />
              <AuthorDescription>
                <h3>Paloma V. Vogt</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
                </p>
              </AuthorDescription>
            </AuthorCard>
          </AuthorSection>
          <Hr />
          <LogosContainer>
            <Logo src={cap} />
            <Logo height={"7vh"} src={graciosa} />
          </LogosContainer>
        </>
      )}
    </Container>
  );
};

export default BigTextSection;
