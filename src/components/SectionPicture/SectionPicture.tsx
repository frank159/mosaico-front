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

const mediaSrc = require('../../assets/images/products/boat2.jpg');

const SectionPicture: React.FC = () => {
  return (
    <Container>
      <ContentContainer>
        <LeftContent>
          <Title>
            Long heading is what you see here in this feature section
          </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </Text>
          <TopicsContainer>
            <Topics>
              <TitleSmall>
                Subheading one
              </TitleSmall>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </Text>
            </Topics>
            <Topics>
              <TitleSmall>
                Subheading two
              </TitleSmall>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </Text>
            </Topics>
          </TopicsContainer>
        </LeftContent>
        <RightContent>
          <ImageFrame>
            <Image src={mediaSrc} alt="Full screen media" />
          </ImageFrame>
        </RightContent>
      </ContentContainer>
    </Container>
  );
};

export default SectionPicture;
