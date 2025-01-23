import React from 'react';
import { 
  Container, 
  ContentContainer, 
  LeftContent, 
  RightContent, 
  Image, 
  Title, 
  Text,
  ImageFrame
} from './SectionPictureStyled';

interface SectionPictureProps {
  backgroundColorHover?: string;
  backgroundColor?: string;
  textColor?: string;
  titleColor?: string;
  borderColor?: string;
  mainTitle?: string;
  mainText?: string;
  height?: string;
  width?: string;
  scale?: string;
  subheading1?: {
    title: string;
    text: string;
  };
  subheading2?: {
    title: string;
    text: string;
  };
  imageSrc?: string;
}

const SectionPicture: React.FC<SectionPictureProps> = ({
  backgroundColor = 'none',
  textColor = 'none',
  titleColor = 'none',
  borderColor = 'none',
  backgroundColorHover = 'none',
  height = 'none',
  width = 'none',
  scale = 'none',
  mainTitle = 'Long heading is what you see here in this feature section',
  mainText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  imageSrc
}) => {
  
  return (
    <Container 
      height={height}
      width={width}
    >
      <ContentContainer
        scale={scale}
        backgroundColor={backgroundColor}
        backgroundColorHover={backgroundColorHover}
      >
        <LeftContent>
          <Title color={titleColor}>
            {mainTitle}
          </Title>
          <Text textColor={textColor} dangerouslySetInnerHTML={{ __html: mainText }}>
          </Text>
        </LeftContent>
        <RightContent>
          <ImageFrame borderColor={borderColor}>
            <Image src={imageSrc} alt="Feature section image" />
          </ImageFrame>
        </RightContent>
      </ContentContainer>
    </Container>
  );
};

export default SectionPicture;
