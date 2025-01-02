import styled from "styled-components";

interface ColorProps {
  backgroundColor?: string;
  textColor?: string;
  titleColor?: string;
  borderColor?: string;
}

export const Container = styled.div<ColorProps>`
  height: 95vh;
  color: ${props => props.textColor || '#0e0a0a'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div<ColorProps>`
  width: 85%;
  height: 95%;
  background-color: ${props => props.backgroundColor || '#F8F6E6'};
  border-radius: 2cap;
  display: flex;
  flex-direction: column;
`;

export const FlexContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50%;
`;

export const FlexContainerINTER1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
`;

export const FlexContainer2 = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
`;

export const LongTextContainer = styled.text<ColorProps>`
  display: flex;
  justify-content: flex-start;
  width: 70%;
  font-size: 24px;
  margin-left: 1.3vw;
  color: ${props => props.textColor || 'black'};
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: center;
`;

export const Title = styled.text<ColorProps>`
  width: 95%;
  font-size: 40px;
  font-weight: bold;
  padding: 30px 30px 0 30px;
  color: ${props => props.titleColor || 'black'};
`;

export const Text = styled.text<ColorProps>`
  width: 95%;
  padding: 0 30px 30px 30px;
  color: ${props => props.textColor || 'black'};
  font-size: 18px;
`;

export const TitleSmall = styled.h3<ColorProps>`
  width: 70%;
  padding: 30px 30px 0 30px;
  color: ${props => props.titleColor || 'black'};
`;

export const TopicsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Topics = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 50%;
`;

export const ImageFrame = styled.div<ColorProps>`
  height: 70%;
  width: 80%;
  background-color: transparent;
  border: 1px solid ${props => props.borderColor || 'black'};
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  box-sizing: border-box; 
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  box-sizing: border-box;
`;
