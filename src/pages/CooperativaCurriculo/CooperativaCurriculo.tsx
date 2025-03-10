import { text } from 'd3';
import * as S from './CooperativaCurriculoStyled';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame } from "motion/react"; // ou "framer-motion" conforme sua lib
import { useNavigate } from 'react-router-dom';
import Carousel from '../../components/CarrocelCooperativa/carrocel';
import CustomCarousel from '../../components/Carousel/Carousel';

const HomeroFoto = require("../../assets/images/img/homero.png")
const cameraCoop = require("../../assets/images/img/cameraCoop.png")
const pinheiroCoop = require("../../assets/images/img/pinheiroCoop.png")
const cooperativaLogo = require("../../assets/images/logo/cooperativaLogo.png")

const xeretas = require("../../assets/images/img/xeretas.png")
const Afrente = require("../../assets/images/img/Afrente.png")
const projetoID = require("../../assets/images/img/projetoID.png")
const sonhosTrop = require("../../assets/images/img/sonhosTrop.png")
const estadoDressis = require("../../assets/images/img/estadoDressis.png")

const CooperativaCurriculo: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [overlayWidth, setOverlayWidth] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayRefA = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("window.innerWidth <= 820", window.innerWidth <= 820)
    setIsMobile(window.innerWidth <= 820);
  }, [])

  useEffect(() => {
    if (overlayRef.current && overlayRefA.current) {

      setOverlayWidth(overlayRef.current.clientWidth);
    }
  }, [overlayRef]);

  return (
    <S.MainContainer>
      <S.BodyB >
        <S.ImageWrapper>
          <S.HomeroFullImgFrame >
            <S.HomeroFullImg src={HomeroFoto} alt="Homero" />
            <S.GradientOverlay />
          </S.HomeroFullImgFrame >
          <S.OverlayContainer >
            <S.OverlayContent >
              <S.SmallImageContainer ref={overlayRefA}>
                <S.SmallImage src={HomeroFoto} alt="Homero" />
                <S.SmallImageText >
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
                <S.SaibaMaisButton>
                  Saiba Mais
                </S.SaibaMaisButton>
              </S.TextSection>
            </S.OverlayContent>
          </S.OverlayContainer>
        </S.ImageWrapper>
        <S.NewTextSection>
          <S.NewTextContainerTitle>
            FORMAÇÃO:
          </S.NewTextContainerTitle>
          <S.NewTextContainerText>
            Estudou Comunicação na UNB, Universidade de Brasília.
          </S.NewTextContainerText>
          <S.NewTextContainerTitle>
            EXPERIÊNCIA:
          </S.NewTextContainerTitle>
          <S.NewTextContainerText>
            Há mais de 35 anos desenvolve propostas cinematográficas, contando com atuações nos
            grandes mercados brasileiros, tendo como foco principal a produção de longas metragens.
            Atua nas discussões políticas estaduais e nacionais para o desenvolvimento da indústria
            audiovisual, com larga experiência em estratégias de marketing do produto cinematográfico.
            Consta ainda de sua experiência, atuação na área de captação de recursos e produção
            associada, além de consultoria na área de cinema. Foi membro fundador do Sindicato da
            Indústria Audiovisual do Paraná – SIAPAR. Foi articulador do Prêmio Estadual de Cinema e
            Vídeo do Estado do Paraná, que premia anualmente 1 longa metragem e três telefilmes.
            Trabalhou com diretores e produtores como Neville D’Almeida; Mauro Lima; Walter Rogério;
            Michael Ruman, Pedro Anízio, Vladimir de Carvalho, Roberto Pires, entre outros;
            Atua como
            executivo em propostas estratégicas de desenvolvimento para o mercado; em projetos
            sociocultural, de empreendedorismo audiovisual de regionalização de conteúdo e produção.
          </S.NewTextContainerText>
        </S.NewTextSection>
      </S.BodyB>
    </S.MainContainer >
  );
};

export default CooperativaCurriculo;
