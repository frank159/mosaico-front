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
  portfo?: boolean;
}



const BigTextSection: React.FC<BigTextProps> = ({
  bigText = "",
  titleText,
  backgroundColor,
  colorCont,
  heighCont,
  expandedMax = '',
  expandedMin = '',
  textAlign = '',
  portfo
}) => {
  const homeroPic = require("../../assets/images/HomeroFoto.jpg")
  const palomaPic = require("../../assets/images/PalomaFoto.jpg")
  const cap = require("../../assets/images/logo/cap.png")
  const graciosa = require("../../assets/images/logo/graciosa.png")

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
      }, 300)
    } else {
      setTimeout(() => {
        setIsVisible(false);
      }, 200)
    }
  }, [isExpanded]);

  return (
    <Container
      onClick={handleToggle}
      isExpanded={isExpanded}
      backgroundColor={backgroundColor}
      colorCont={colorCont}
      expandedMax={expandedMax}
      expandedMin={expandedMin}
      portfo={portfo}
    >
      {titleText && <Title>{titleText}</Title>}
      <Text
        textAlign={textAlign}
        dangerouslySetInnerHTML={{ __html: bigText }}
      />
      {portfo && (
        <ArrowButton>
          <ImgIcon
            src={rightArrow}
            alt="Expand"
            isRotated={isExpanded}
          />
        </ArrowButton>
      )}
      {!isVisible && portfo  && (
        <ShadowDiv />
      )}
      {isVisible && portfo && (
        <>
          <Hr />
          <AuthorSection>
            <AuthorCard>
              <AuthorImage src={homeroPic} alt="Autor 1" />
              <AuthorDescription>
                <h3>Homero Camargo</h3>
                <p>Curabitur pharetra, quam vel molestie scelerisque, turpis velit facilisis ipsum, nec cursus justo nisl id augue. Etiam id felis eu ex fermentum vestibulum. Fusce congue tincidunt sapien, ac tincidunt justo elementum in. In hac habitasse platea dictumst. Vestibulum gravida mi eget mi malesuada, nec euismod ligula blandit. Integer consequat, magna et interdum sollicitudin, orci nisi ultrices purus, ac vestibulum nisl lorem a metus. Proin ac ligula id erat bibendum ultrices non nec elit.</p>
              </AuthorDescription>
            </AuthorCard>
            <AuthorCard>
              <AuthorImage src={palomaPic} alt="Autor 2" />
              <AuthorDescription>
                <h3>Paloma V. Vogt</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Suspendisse potenti. Phasellus et nunc ut tortor fringilla eleifend. Nam fermentum, sapien sit amet facilisis sagittis, elit est tristique nunc, sit amet tristique eros turpis id elit. Integer non libero at nisi mollis vestibulum. Proin varius augue nec mi hendrerit, sit amet sodales magna efficitur.</p>
              </AuthorDescription>
            </AuthorCard>
          </AuthorSection>
          <Hr />
          <LogosContainer>
            <Logo src={cap}/>
            <Logo height={'7vh'} src={graciosa}/>
          </LogosContainer>
        </>

      )}
    </Container>
  );
};

export default BigTextSection;
