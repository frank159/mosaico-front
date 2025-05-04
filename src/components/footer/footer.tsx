import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

import * as S from './footerStyled';

const mosaico = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324730/mosaicoIconeMonoW_sqiexp.png'
const graciosa = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324712/graciosa_mvncnd.png'

interface FooterProps {
    isBlackBg?: boolean;
    isMosaico?: boolean;
}

const Footer: React.FC<FooterProps> = ({
    isBlackBg,
    isMosaico
}) => {
    return (
        <S.FooterContainer isBlackBg={isBlackBg}>
            <S.FooterDiv>
                <S.MainDiv>
                    <S.MainDivICons>
                        <S.MainIcon>
                            <S.Img iconWidth="60px" iconHeight="60px" src={mosaico} alt="logo" />
                        </S.MainIcon>
                        {isMosaico && (
                        <S.Subscribe>
                            <S.Logo onClick={() => window.open("https://www.graciosapictures.com", "_blank")} height={"7vh"} src={graciosa} />
                        </S.Subscribe>
                        )}

                    </S.MainDivICons>
                    <S.SubDiv>
                        <S.Text>
                            © 2024 Relume. All rights reserved.   Privacy Policy   Terms of Service   Cookies Settings
                        </S.Text>
                    </S.SubDiv>
                    <S.IconsDiv>
                        <FacebookIcon sx={{ fontSize: "24px", color: "white" }} />
                        <EmailIcon sx={{ fontSize: "24px", color: "white" }} />
                    </S.IconsDiv>
                </S.MainDiv>

            </S.FooterDiv>
        </S.FooterContainer>
    );
};

export default Footer;
