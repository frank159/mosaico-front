import React from 'react';
import { 
  Container, 
  ContentContainer, 
  LeftContent, 
  RightContent, 
  Image, 
  Title, 
  Text, 
  Topics, 
  TopicsContainer, 
  TitleSmall, 
  ImageFrame
} from './SectionPictureStyled';

interface SectionPictureProps {
  backgroundColor?: string;
  textColor?: string;
  titleColor?: string;
  borderColor?: string;
  mainTitle?: string;
  mainText?: string;
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
  backgroundColor = '#000000',
  textColor = '#F8F6E6',
  titleColor = '#F8F6E6',
  borderColor = '#FFFFFF',
  mainTitle = 'Long heading is what you see here in this feature section',
  mainText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  subheading1 = {
    title: 'Subheading one',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
  },
  subheading2 = {
    title: 'Subheading two',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
  },
  imageSrc = require('../../assets/images/products/boat2.jpg')
}) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <ContentContainer>
        <LeftContent>
          <Title color={titleColor}>
            {mainTitle}
          </Title>
          <Text color={textColor}>
            {mainText}
          </Text>
          <TopicsContainer>
            <Topics>
              <TitleSmall color={titleColor}>
                {subheading1.title}
              </TitleSmall>
              <Text color={textColor}>
                {subheading1.text}
              </Text>
            </Topics>
            <Topics>
              <TitleSmall color={titleColor}>
                {subheading2.title}
              </TitleSmall>
              <Text color={textColor}>
                {subheading2.text}
              </Text>
            </Topics>
          </TopicsContainer>
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
