import React from 'react';
import { MediaContainer, TitleContainer, Title, Text} from './TitlePageStyled';

interface TitlePageProps {
  titleText?: string;
  text?: string;
  titleColor?: string;
  textColor?: string;
  backgroundColor?: string;
}

const TitlePage: React.FC<TitlePageProps> = ({ titleText, text, titleColor, textColor, backgroundColor }) => {
  return (
    <MediaContainer backgroundColor={backgroundColor}>
      <TitleContainer>
        <Title titleColor={titleColor}>
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
