import styled from "styled-components";

interface ColorProps {
  iconWidth?: string;
  iconInvert?: boolean;
  iconHeight?: string;
  textSize?: string;
  paddingTop?: string;
  height?: string;
  marginTop?: string;
  isBlackBg?: boolean;
}

export const FooterContainer = styled.div<ColorProps>`
  height: 13vh;
  width: 100%;
  background-color: ${(props) => (props.isBlackBg ? "#000" : "#374120")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 998;
`;

export const FooterDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Text = styled.p`
  font-size: 1rem !important;
  color: white !important;
  @media (max-width: 768px) {
    font-size: 0.7rem !important;
  }
`;
