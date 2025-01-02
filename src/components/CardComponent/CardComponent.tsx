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
  LongTextContainer
} from "./CardComponentStyled"

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
  imageSrc: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
  backgroundColor = '#ffffff',
  textColor = '#000000',
  titleColor = '#000000',
  borderColor = '#000000',
  mainTitle,
  mainText,
  subheading1,
  subheading2,
  longText,
  imageSrc
}) => {
  return (
    <Container textColor={textColor}>
      <CardContainer backgroundColor={backgroundColor}>
        <FlexContainer1>
          <FlexContainerINTER1>
            <LeftContent>
              <Title titleColor={titleColor}>
                {mainTitle}
              </Title>
              <Text textColor={textColor}>
                {mainText}
              </Text>
              <TopicsContainer>
                <Topics>
                  <TitleSmall titleColor={titleColor}>
                    {subheading1.title}
                  </TitleSmall>
                  <Text textColor={textColor}>
                    {subheading1.text}
                  </Text>
                </Topics>
                <Topics>
                  <TitleSmall titleColor={titleColor}>
                    {subheading2.title}
                  </TitleSmall>
                  <Text textColor={textColor}>
                    {subheading2.text}
                  </Text>
                </Topics>
              </TopicsContainer>
            </LeftContent>
          </FlexContainerINTER1>
          <FlexContainerINTER1>
            <RightContent>
              <ImageFrame borderColor={borderColor}>
                <Image src={imageSrc} alt="Card media" />
              </ImageFrame>
            </RightContent>
          </FlexContainerINTER1>
        </FlexContainer1>
        <FlexContainer2>
          <LongTextContainer textColor={textColor}>
            {longText}
          </LongTextContainer>
        </FlexContainer2>
      </CardContainer>
    </Container>
  );
};

export default CardComponent;
