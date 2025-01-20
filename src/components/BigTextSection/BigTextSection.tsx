import "keen-slider/keen-slider.min.css";

import {
  Container,
  Text,
  Title
} from "./BigTextSectionStyled"


interface BigTextProps {
  bigText?: string;
  titleText?: string;
  backgroundColor?: string;
  colorCont?: string;
  heighCont?: string;
}

const BigTextSection: React.FC<BigTextProps> = ({
  bigText,
  titleText,
  backgroundColor,
  colorCont,
  heighCont
}) => {

  return (
    <Container
      backgroundColor={backgroundColor}
      colorCont={colorCont}
      heighCont={heighCont}
    >
      {titleText && (
        <Title>
          {titleText}
        </Title>
      )}
      <Text>
        {bigText}
      </Text>
    </Container>
  );
};

export default BigTextSection;
