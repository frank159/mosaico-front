import styled from 'styled-components';

interface ColorProps {
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
}

export const Container = styled.div<ColorProps>`
  height: 100vh;
  display: flex;
  background-color: ${props => props.backgroundColor};
`;

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 40vw;
  justify-content: center;
`;

export const RightContent = styled.div`
  height: 100vh;
  width: 53vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  box-sizing: border-box;
`;

export const ImageFrame = styled.div<ColorProps>`
  height: 70vh;
  background-color: transparent;
  border: 1px solid ${props => props.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box; 
`;

export const Title = styled.text<ColorProps>`
  width: 95%;
  font-size: 40px;
  font-weight: bold;
  padding: 30px 30px 0 30px;
  color: ${props => props.color};
`;

export const TitleSmall = styled.h3<ColorProps>`
  width: 70%;
  padding: 30px 30px 0 30px;
  color: ${props => props.color};
`;

export const Text = styled.text<ColorProps>`
  width: 95%;
  padding: 0 30px 30px 30px;
  color: ${props => props.color};
  font-size: 18px;
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