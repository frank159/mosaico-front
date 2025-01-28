import React from 'react';
import { ColumnLinks, ColumnHeader, FooterContainer, FooterDiv, IconsDiv, Img, LinkColumn, MainDiv, MainIcon, MainLinks, SubDiv, Subscribe, Text, SubscribeInputButton, SubscribeInput, SubscribeHeader, SubscribeInputContainer, SubscribeText } from './footerStyled';

const facebook = require('../../assets/images/icons/facebook.png');
const instagram = require('../../assets/images/icons/instagram.png');
const youtube = require('../../assets/images/icons/youtube.png');
const mosaico = require('../../assets/images/icons/mosaico.png');

interface FooterProps {
    marginTop?: string;
  }

const Footer: React.FC<FooterProps> = ({
    marginTop
}) => {
  return (
    <FooterContainer marginTop={marginTop}>
        <FooterDiv>
            <MainDiv>
                <MainIcon>
                    <Img iconWidth="80px" iconHeight="80px" iconInvert={true} src={mosaico} alt="logo" />
                </MainIcon>
                <Subscribe>
                    <SubscribeHeader>
                        Logo mais conteudo
                    </SubscribeHeader>
                    <SubscribeText textSize="14px">
                    Continue acompanhando nosso desenvolvimento, pois estamos em constante evolução.
                    </SubscribeText>
                    {/* <SubscribeInputContainer>
                        <SubscribeInput placeholder="Email Address" />
                        <SubscribeInputButton>
                            Subscribe
                        </SubscribeInputButton>
                    </SubscribeInputContainer>
                    <SubscribeText textSize="12px" paddingTop="15px">
                        By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
                    </SubscribeText> */}
                </Subscribe>
            </MainDiv>
            <SubDiv>
                <Text>
                    © 2024 Relume. All rights reserved.   Privacy Policy   Terms of Service   Cookies Settings
                </Text>
                <IconsDiv>
                    <Img iconWidth="24px" iconInvert={true} src={facebook} alt="facebook" />
                    <Img iconWidth="24px" iconInvert={true} src={instagram} alt="instagram" />
                    <Img iconWidth="24px" iconInvert={true} src={youtube} alt="youtube" />
                </IconsDiv>
            </SubDiv>
        </FooterDiv>
    </FooterContainer>
  );
};

export default Footer;
