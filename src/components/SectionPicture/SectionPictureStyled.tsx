import styled from 'styled-components';

interface ColorProps {
  backgroundColor?: string;
  titleColor?: string;
  textColor?: string;
  borderColor?: string;
  scale?: string;
  backgroundColorHover?: string;
  height?: string;
  width?: string;
}

export const Container = styled.div<ColorProps>`
  height: ${(props) => props.height || '60vh'};
  width: ${(props) => props.width || '85vw'};
  display: flex;
`;


export const ContentContainer = styled.div<ColorProps>`
  height: 99%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor || '#dfdfdf6f'};
  transition: transform 0.7s ease-in-out, transform 0.2s ease-in-out; // Adiciona animação de escala suave
  
  &:hover {
    transition: transform 0.7s ease-in-out, transform 0.2s ease-in-out; // Adiciona animação de escala suave
    transform: scale(${(props) => props.scale || 1.2});
    background-color: ${(props) => props.backgroundColorHover || '#dfdfdf'};
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40vw;
  margin-top: 25vh;
  justify-content: flex-start;
`;

export const RightContent = styled.div`
  height: 100%;
  width: 53%;
  display: flex;
  margin-top: 25vh;
  margin-right: 2vw;
  justify-content: end;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  box-sizing: border-box;
`;

export const ImageFrame = styled.div<ColorProps>`
  height: 60%;
  width: 90%;
  background-color: transparent;
  border: 1px solid ${props => props.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box; 
`;

export const Title = styled.text<ColorProps>`
  width: auto;
  font-size: 40px;
  font-weight: bold;
  color: ${props => props.titleColor || 'black'};
  text-align: left;
  padding-left: 1rem;
  margin-bottom: 2vh;
`;

export const TitleSmall = styled.h3<ColorProps>`
  width: 70%;
  padding: 30px 30px 0 30px;
  color: ${props => props.color};
`;

export const Text = styled.text<ColorProps>`
  width: 100%;
  color: ${props => props.textColor};
  font-size: 18px;
  text-align: left;
  padding-left: 1rem;
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