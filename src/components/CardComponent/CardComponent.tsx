import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";

import {
  Container,
  CardContainer,
  FlexContainer1,
  FlexContainer2,
  FlexContainerINTER1,
  LeftContent,
  Title,
  Text,
  TopicsContainer,
  Topics,
  TitleSmall,
  RightContent,
  ImageFrame,
  Image,
  LongTextContainer,
  HiddenText,
  FlexContainerINTER,
  HrComp,
  VisibleComponent,
  ArrowButton,
  ImgIcon,
} from "./CardComponentStyled";

const rightArrow = require('../../assets/images/icons/rightArrow.png');

interface CardComponentProps {
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  titleColor?: string;
  mainTitle: string;
  mainText: string;
  subheading1: {
    title: string;
    text: string;
  };
  subheading2: {
    title: string;
    text: string;
  };
  longText: string;
  frameWidth?: string;
  frameHeight?: string;
  imageWidth?: string;
  click?: boolean;
  isMobile?: boolean;
  imageHeight?: string;
  imageSrc?: string;
  justify?: string;
  opacity?: string;
  hiddenText: string;
  expandedMin: string;
  expandedMax: string;
  width?: string;
  widthLongText?: string;
  imgMargin?: string;
  MobilePadding?: string;
  MobileHMax?: string;
  MobileHMin?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
  backgroundColor = "#ffffff",
  textColor = "#000000",
  titleColor = "#000000",
  borderColor = "#000000",
  click = true,
  opacity,
  width = '',
  mainTitle,
  mainText,
  subheading1,
  subheading2,
  longText,
  frameWidth,
  frameHeight,
  imageWidth,
  imageHeight,
  imageSrc,
  justify,
  hiddenText,
  expandedMin,
  expandedMax,
  imgMargin,
  widthLongText,
  MobileHMax,
  MobileHMin,
  MobilePadding,
  isMobile
}) => {
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar expansão
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar visibilidade do texto escondido
  const [isRotated, setIsRotated] = useState(false);

  const handleToggle = () => {
    if(click){
      setIsExpanded((prev) => !prev); // Alterna expansão
      setIsRotated((prev) => !prev); // Alterna rotação da seta
    }
  };

  // Adiciona um efeito para mostrar o texto escondido após a animação de expansão
  React.useEffect(() => {
    if (isExpanded) {
      setIsVisible(true); // Torna o texto visível após a expansão
    } else {
      setTimeout(() => {
        setIsVisible(false); // Torna o texto visível após a expansão
      }, 500); // Atraso de 500ms para garantir que a expansão tenha terminado

    }
  }, [isExpanded]);

  return (
    <Container textColor={textColor}>
      <CardContainer
        click={click}
        width={width}
        MobileHMax={MobileHMax}
        MobileHMin={MobileHMin}
        isMobile={isMobile}
        backgroundColor={backgroundColor}
        onClick={handleToggle}
        isRotated={isRotated}
        isExpanded={isExpanded}
        expandedMin={expandedMin}
        expandedMax={expandedMax}
      >
        <FlexContainer1>
          <FlexContainerINTER1>
            <LeftContent>
              <Title titleColor={titleColor} dangerouslySetInnerHTML={{ __html: mainTitle }} ></Title>
              <Text textColor={textColor} dangerouslySetInnerHTML={{ __html: mainText }}></Text>

            </LeftContent>
          </FlexContainerINTER1>
          {imageSrc && !isMobile && (
            <FlexContainerINTER>
              <RightContent>
                <ImageFrame
                  frameWidth={frameWidth}
                  frameHeight={frameHeight}
                  justify={justify}
                  borderColor={borderColor}
                  imgMargin={imgMargin}
                >
                  <Image
                    imageWidth={imageWidth}
                    imageHeight={imageHeight}
                    src={imageSrc}
                    opacity={opacity}
                    alt="Card media"
                  />
                </ImageFrame>
              </RightContent>
            </FlexContainerINTER>
          )}
        </FlexContainer1>
        <FlexContainer2  isExpanded={isExpanded}>
          <LongTextContainer MobilePadding={MobilePadding} widthLongText={widthLongText} isMobile={isMobile} textColor={textColor} dangerouslySetInnerHTML={{ __html: longText }}></LongTextContainer>
        </FlexContainer2>
        {isVisible && (
          <VisibleComponent>
            <HrComp />
            <HiddenText backgroundColor={backgroundColor} textColor={textColor} dangerouslySetInnerHTML={{ __html: hiddenText }} />
          </VisibleComponent>
        )}
        {hiddenText && (
          <ArrowButton>
            <ImgIcon
              src={rightArrow}
              alt="Expand"
              isRotated={isRotated}
            />
          </ArrowButton>
        )}
      </CardContainer>
    </Container>
  );
};


export default CardComponent;
