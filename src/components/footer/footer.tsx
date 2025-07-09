import React from "react";
import * as S from "./footerStyled";

interface FooterProps {
  isBlackBg?: boolean;
  isMosaico?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isBlackBg, isMosaico }) => {
  return (
    <S.FooterContainer isBlackBg={isBlackBg}>
      <S.FooterDiv>
        <S.Text>© 2025 Mosaico. Todos os direitos reservados.</S.Text>
      </S.FooterDiv>
    </S.FooterContainer>
  );
};

export default Footer;
