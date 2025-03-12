import React from "react";
import styled from "styled-components";

// Define as props do componente
interface SubACardProps {
  title: string;
  // Pode ser uma string única ou um array de parágrafos
  text: string | string[];
  image: string;
  imagePosition?: "left" | "right"; // default: right
  textJustify?: "space-between" | "flex-start"; // default: flex-start
}

// Componente reutilizável
const SubACard: React.FC<SubACardProps> = ({
  title,
  text,
  image,
  imagePosition = "right",
  textJustify = "flex-start",
}) => {
  return (
    <CardContainer>
      {imagePosition === "left" && (
        <ImageContainer>
          <img src={image} alt={title} />
        </ImageContainer>
      )}
      <TextContainer justify={textJustify}>
        <Title>{title}</Title>
        {Array.isArray(text)
          ? text.map((para, index) => (
              <Paragraph key={index}>{para}</Paragraph>
            ))
          : <Paragraph>{text}</Paragraph>}
      </TextContainer>
      {imagePosition === "right" && (
        <ImageContainer>
          <img src={image} alt={title} />
        </ImageContainer>
      )}
    </CardContainer>
  );
};

export default SubACard;

/* Styled Components */
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* Se desejar, adicione um background, borda ou padding no card */
  background: #1f1d1d;
  border-radius: 10px;
  overflow: hidden;
`;

interface TextContainerProps {
  justify: string;
}
const TextContainer = styled.div<TextContainerProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify};
  padding: 1rem;
  color: white;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const Title = styled.h2`
  margin: 0 0 1rem 0;
  padding: 0;
  color: white;
`;

const Paragraph = styled.p`
  margin: 0.5rem 0;
  line-height: 1.4;
  color: white;
`;
