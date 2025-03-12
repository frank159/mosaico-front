import * as S from './CooperativaStyled';
import React, { useState, useRef, useEffect } from 'react';
import Carousel from '../../components/CarrocelCooperativa/carrocel';

const HomeroFoto = require("../../assets/images/img/homero.png")
const cameraCoop = require("../../assets/images/img/cameraCoop.png")
const pinheiroCoop = require("../../assets/images/img/pinheiroCoop.png")
const cooperativaLogo = require("../../assets/images/logo/cooperativaLogo.png")


const Cooperativa: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [overlayHeight, setOverlayHeight] = useState(0);

  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayRefA = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("window.innerWidth <= 820", window.innerWidth <= 820)
    setIsMobile(window.innerWidth <= 820);
  }, [])

  useEffect(() => {
    if (overlayRef.current && overlayRefA.current) {
      if (window.innerWidth > 1130) {
        setOverlayHeight(overlayRef.current.clientHeight);
      } else if (window.innerWidth <= 820) {
        setOverlayHeight(overlayRef.current.clientHeight - (overlayRefA.current.clientHeight / 10));
      } else if (window.innerWidth <= 1130) {
        setOverlayHeight(overlayRef.current.clientHeight - (overlayRefA.current.clientHeight / 10));
      }
    }
  }, [overlayRef, isMobile]);

  return (
    <S.MainContainer>
      <S.FullImgFrame>
        <S.FullImg src={pinheiroCoop}></S.FullImg>
        <S.TitleOverlayContainer>
          <S.TitleLogo>
            <S.LogoImg src={cooperativaLogo} alt="cooperativaLogo" />
          </S.TitleLogo>
        </S.TitleOverlayContainer>
      </S.FullImgFrame>
      <S.Body>
        <S.ContainerA>
          <S.ContainerSubA>
            <S.ContainerLeftA>
              <S.TitleA>Histórias que Conectam</S.TitleA>
              <S.TextoA>
                Com mais de 24 anos de <S.Stro>experiência</S.Stro>, criamos projetos audiovisuais que <S.Stro>conectam histórias e impactam públicos.</S.Stro> Nossa atuação abrange longas-metragens, documentários, telefilmes, séries e iniciativas socioculturais, sempre com <S.Stro>inovação e relevância.</S.Stro>
              </S.TextoA>
            </S.ContainerLeftA>
            <S.ContainerRightA >
              <S.ImgFotoA src={cameraCoop} />
            </S.ContainerRightA>
          </S.ContainerSubA>
          <S.RightTextA>
            há mais de 24 anos<br />
            criada em Castro<br />
            paraná, brasil
          </S.RightTextA>
        </S.ContainerA>
      </S.Body>
      <S.BodyB >
        <S.ImageWrapper>
          <S.HomeroFullImgFrame >
            <S.HomeroFullImg src={HomeroFoto} alt="Homero" />
            <S.GradientOverlay />
          </S.HomeroFullImgFrame >
          <S.OverlayContainer >
            <S.OverlayContent >
              <S.SmallImageContainer>
                <S.SmallImage src={HomeroFoto} alt="Homero" />
                <S.SmallImageText ref={overlayRefA}>
                  fundador da<br />
                  cooperativa de cinema<br />
                  & mídias siciais
                </S.SmallImageText>
              </S.SmallImageContainer>
              <S.TextSection ref={overlayRef}>
                <S.TextTitle>Homero Camargo</S.TextTitle>
                <S.TextContent>
                  Responsável por fundar a Cooperativa de Cinema & Mídias Digitais e com mais de 35 anos no cinema, tem experiência na produção de longas-metragens, captação de recursos e consultoria. Participa ativamente de debates políticos sobre a indústria audiovisual e tem ampla experiência em marketing cinematográfico. Foi cofundador do SIAPAR e articulador do Prêmio Estadual de Cinema e Vídeo do Paraná. Já trabalhou com diretores renomados como Neville D’Almeida, Mauro Lima e Michael Ruman. Atua no desenvolvimento de estratégias para o mercado, além de projetos socioculturais e de regionalização do audiovisual.
                </S.TextContent>
                <S.SaibaMaisButton onClick={() => window.location.href = 'CooperativaCurriculo'}>
                  Saiba Mais
                </S.SaibaMaisButton>
              </S.TextSection>
            </S.OverlayContent>
          </S.OverlayContainer>
        </S.ImageWrapper>
      </S.BodyB>
      <S.MargemCoo height={`${overlayHeight}px`} />
      <S.Title>• nossas produções</S.Title>
      <Carousel isMobile={isMobile} />
    </S.MainContainer >
  );
};

export default Cooperativa;
