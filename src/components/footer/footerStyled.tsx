import styled from "styled-components";

interface ColorProps {
  iconWidth?: string;
  iconInvert?: boolean;
  iconHeight?: string;
  textSize?: string;
  paddingTop?: string;
  marginTop?: string;
}


export const FooterContainer = styled.div<ColorProps>`
  height: 50vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: ${props => props.marginTop || 'none'};
`;

export const FooterDiv = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const MainDiv = styled.div`
  border: 1px solid white;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
`;

export const SubDiv = styled.div`
  width: 100%;
  height: 20%;
  color: white;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;

export const Text = styled.p`

`;

export const IconsDiv = styled.div`

`;

export const Img = styled.img<ColorProps>`
  width: ${props => props.iconWidth || '24px'};
  height: ${props => props.iconWidth || '24px'};
  margin-left: 15px;
  filter: ${props => props.iconInvert ? 'invert(1)' : 'none'}; // Adiciona inversão de cor para tornar os ícones brancos
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const MainIcon = styled.div`
  width: 15%;
  height: 100%;
  margin-top: 5vh;

  display: flex;
  justify-content: center;
`;

export const MainLinks = styled.div`
  width: 60%;
  height: 100%;
  color: white;
  margin-top: 5vh;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ColumnHeader = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const ColumnLinks = styled.div`
  width: 100%;
  padding-top: 10px;
  font-size: 12px;
  display: flex;
  justify-content: start;
  align-items: start;
`;

export const Subscribe = styled.div`
  width: 25%;
  height: 100%;
  margin-left: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  color: white;
  margin-right: 10px;

`;

export const SubscribeHeader = styled.div<ColorProps>`
  font-size: ${props => props.textSize || '16px'};  
  font-weight: bold;
  padding-bottom: 15px;  
  `;

export const SubscribeInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const SubscribeInput = styled.input`
  background-color: rgba(255, 255, 255, 0);
  width: 70%;
  height: 5vh;
  border: 1px solid white;
  margin-right: 10px;
`;

export const SubscribeInputButton = styled.button`
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0);
  color: white;
  width: 30%;
  height: 5.4vh;
  
  &:hover{
    transition: 0.8s;
    background-color: white;
    color: black;
  }
`;

export const SubscribeText = styled.div<ColorProps>`
  font-size: ${props => props.textSize || '16px'};  
  padding-bottom: 15px;  
  padding-top: ${props => props.paddingTop || 'none'};  
`;