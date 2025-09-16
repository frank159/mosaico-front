import React, { useEffect } from 'react';
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
  heightMobile?: string;
  isMobile?: boolean;
}

const SectionPicture: React.FC<SectionPictureProps> = ({
  backgroundColor = 'none',
  isMobile = false,
  heightMobile = '',
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
      heightMobile={heightMobile}
      width={width}
      isMobile={isMobile}

    >
      <ContentContainer
        scale={scale}
        isMobile={isMobile}
        backgroundColor={backgroundColor}
        backgroundColorHover={backgroundColorHover}
      >
        <LeftContent
          isMobile={isMobile}
        >
          <Title
            isMobile={isMobile}
            color={titleColor}
          >
            {mainTitle}
          </Title>
          <Text isMobile={isMobile} textColor={textColor} dangerouslySetInnerHTML={{ __html: mainText }}>
          </Text>
        </LeftContent>
        {/* Renderiza a imagem somente se isMobile for false */}
        {!isMobile && (
          <RightContent>
            <ImageFrame borderColor={borderColor}>
              <Image src={imageSrc} alt="Feature section image" />
            </ImageFrame>
          </RightContent>
        )}
      </ContentContainer>
    </Container>
  );
};

export default SectionPicture;
