import React from 'react';
import { ColumnLinks, ColumnHeader, FooterContainer, FooterDiv, IconsDiv, Img, LinkColumn, MainDiv, MainIcon, MainLinks, SubDiv, Subscribe, Text, SubscribeInputButton, SubscribeInput, SubscribeHeader, SubscribeInputContainer, SubscribeText } from './footerStyled';

const facebook = require('../../assets/images/icons/facebook.png');
const instagram = require('../../assets/images/icons/instagram.png');
const youtube = require('../../assets/images/icons/youtube.png');
const mosaico = require('../../assets/images/icons/mosaico.png');


const Footer: React.FC = () => {
  return (
    <FooterContainer>
        <FooterDiv>
            <MainDiv>
                <MainIcon>
                    <Img iconWidth="80px" iconHeight="80px" iconInvert={true} src={mosaico} alt="logo" />
                </MainIcon>
                <MainLinks>
                    <LinkColumn>
                        <ColumnHeader>
                            Column One
                        </ColumnHeader>
                        <ColumnLinks>
                            Link One
                        </ColumnLinks>
                        <ColumnLinks>
                            Link Two
                        </ColumnLinks>
                        <ColumnLinks>
                            Link Three
                        </ColumnLinks>
                        <ColumnLinks>
                            Link Four
                        </ColumnLinks>
                        <ColumnLinks>
                            Link Five
                        </ColumnLinks>
                    </LinkColumn>
                    <LinkColumn>
                        <ColumnHeader>
                            Column Two
                        </ColumnHeader>
                        <ColumnLinks>
                            Link One
                        </ColumnLinks>
                        <ColumnLinks>
                            Link Two
                        </ColumnLinks>
                        <ColumnLinks>
                            Link Three
                        </ColumnLinks>
                        <ColumnLinks>
                            Link Four
                        </ColumnLinks>
                        <ColumnLinks>
                            Link Five
                        </ColumnLinks>
                    </LinkColumn>
                    <LinkColumn>
                        <ColumnHeader>
                            Column Three
                        </ColumnHeader>
                        <ColumnLinks>
                            Link One
                        </ColumnLinks>
                        <ColumnLinks>
                            Link Two
                        </ColumnLinks>
                        <ColumnLinks>
                            Link Three
                        </ColumnLinks>
                        <ColumnLinks>
                            Link Four
                        </ColumnLinks>
                        <ColumnLinks>
                            Link Five
                        </ColumnLinks>
                    </LinkColumn>
                </MainLinks>
                <Subscribe>
                    <SubscribeHeader>
                        Subscribe
                    </SubscribeHeader>
                    <SubscribeText textSize="14px">
                        Join our newsletter to stay up to date on features and releases.
                    </SubscribeText>
                    <SubscribeInputContainer>
                        <SubscribeInput placeholder="Email Address" />
                        <SubscribeInputButton>
                            Subscribe
                        </SubscribeInputButton>
                    </SubscribeInputContainer>
                    <SubscribeText textSize="12px" paddingTop="15px">
                        By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
                    </SubscribeText>
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
