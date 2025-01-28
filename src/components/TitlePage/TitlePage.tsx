import React from 'react';
import { MediaContainer, TitleContainer, Title, Text} from './TitlePageStyled';

interface TitlePageProps {
  titleText?: string;
  text?: string;
  titleColor?: string;
  textColor?: string;
  backgroundColor?: string;
  isMobile?: boolean;
}

const TitlePage: React.FC<TitlePageProps> = ({ titleText, text, titleColor, textColor, backgroundColor, isMobile }) => {
  return (
    <MediaContainer backgroundColor={backgroundColor}>
      <TitleContainer>
        <Title isMobile={isMobile} titleColor={titleColor}>
          {titleText}
        </Title>
        <Text textColor={textColor}>
          {text}
        </Text>
      </TitleContainer>
    </MediaContainer>
  );
};

export default TitlePage;
