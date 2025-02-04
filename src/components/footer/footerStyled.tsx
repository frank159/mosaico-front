import styled from "styled-components";

interface ColorProps {
  iconWidth?: string;
  iconInvert?: boolean;
  iconHeight?: string;
  textSize?: string;
  paddingTop?: string;
  height?: string;
  marginTop?: string;
}

export const FooterContainer = styled.div<ColorProps>`
  height: 30vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.marginTop || "none"};
  z-index: 11000;
  @media (max-width: 768px) {
    width: none;
    height: auto;
    padding: 20px 10px;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const FooterDiv = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const MainDiv = styled.div`
  border: 1px solid white;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const SubDiv = styled.div`
  width: 100%;
  height: 20%;
  color: white;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: auto;
    gap: 10px;
  }
`;

export const Text = styled.p`
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const IconsDiv = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Img = styled.img<ColorProps>`
  width: ${props => props.iconWidth || "24px"};
  height: ${props => props.iconWidth || "24px"};
  margin-left: 15px;
  filter: ${props => (props.iconInvert ? "invert(1)" : "none")};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const MainIcon = styled.div`
  width: 15%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const ColumnHeader = styled.div`
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ColumnLinks = styled.div`
  width: 100%;
  padding-top: 10px;
  font-size: 12px;
  display: flex;
  justify-content: start;
  align-items: start;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
`;

export const Subscribe = styled.div`
  height: 100%;
  margin-left: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  color: white;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    align-items: center;
  }
`;

export const SubscribeHeader = styled.div<ColorProps>`
  font-size: ${props => props.textSize || "16px"};
  font-weight: bold;
  padding-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SubscribeInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SubscribeInput = styled.input`
  background-color: rgba(255, 255, 255, 0);
  width: 70%;
  height: 5vh;
  border: 1px solid white;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 90%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const SubscribeInputButton = styled.button`
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0);
  color: white;
  width: 30%;
  height: 5.4vh;

  &:hover {
    transition: 0.8s;
    background-color: white;
    color: black;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const SubscribeText = styled.div<ColorProps>`
  font-size: ${props => props.textSize || "16px"};
  padding-bottom: 15px;
  padding-top: ${props => props.paddingTop || "none"};

  @media (max-width: 768px) {
    text-align: center;
    font-size: 12px;
  }
`;

export const Logo = styled.img<ColorProps>`
  height: ${(props) => (props.height || "5vh")};
  cursor: pointer;
`;