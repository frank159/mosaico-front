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
          <S.NewTextContainerTitle >
            FORMAÇÃO:
          </S.NewTextContainerTitle>
          <S.NewTextContainerText height='1%'>
            Estudou Comunicação na UNB, Universidade de Brasília.
          </S.NewTextContainerText>
          <S.NewTextContainerTitle height='4%'>
            EXPERIÊNCIA:
          </S.NewTextContainerTitle>
          <S.NewTextContainerText height='7%'>
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
          <S.NewTextContainerTitle height='12%'>
            EMPRESAS PRODUTORAS:
          </S.NewTextContainerTitle>
          <S.NewTextContainerText height='13.5%'>
            Faz parte das seguintes empresas produtoras brasileiras:
            C.H.G Camargo Ribas – privada com fins lucrativos; registrada na ANCINE.
            Centro Audiovisual do Paraná – privada sem fins lucrativos.
            Ambas estão regidas sob o nome fantasia Cooperativa Cinema & Mídias Digitais.
          </S.NewTextContainerText>
          <S.NewTextContainerTitle height='17%'>
            REALIZAÇÕES:
          </S.NewTextContainerTitle>
          <S.NewTextContainerTitleSub height='18%'>
            2015-atual
          </S.NewTextContainerTitleSub>
          <S.NewTextContainerText height='24%'>
            •   <strong>Parceiro do projeto FILMJOIN http://filmjoin.com</strong>, uma plataforma digital inteligente,
            cuja rede de pessoas disponibilizam de forma colaborativa suas experiências, dados,
            informações, conhecimento e sabedoria para construir uma inteligência
            audiovisual! O JOIN é essa inteligência artificial que vai produzir resultados para que
            produtores façam filmes, séries e games cada vez mais do jeito que os fãs querem ver.
            A idealização é do parceiro produtor Johnny DiBartolo: o LaB ao cubo ou Lab3.
            <br />
            <br />
            •   <strong>Em desenvolvimento – executivo do projeto IDENTIDADE</strong> – campos Gerais do Paraná –
            mostra/circulação de documentários, que vai passar por mais de 25 cidades
            paranaenses entre 2017 e 2018. Além das mostras, cada local visitado receberá o box
            com os três títulos de documentários. Uma proposta que resgata e reapresenta ao
            Paraná sua identidade.
            <br />
            <br />

            •   <strong>Produtora do longa-metragem Sumiços Delirantes</strong>, que terá 90 minutos finais, rodado
            basicamente em Curitiba e Rio de Janeiro, com uma equipe quase cem por cento
            paranaense, que traz uma proposta de linguagem inovadora (na fronteira entre ficção
            e documentário) com um cronograma de execução ágil, dinâmico e de baixo
            orçamento.
            A proposta é a direção compartilhada entre um diretor e ator de teatro e
            um diretor de cinema. Em desenvolvimento / captação de recursos.
            <br />
            <br />

            •   <strong>Produtor do documentário Visões do Porto</strong> – história e estórias, 52 min, de autoria e
            direção de Silvana Fontana, sobre a vai falar da enorme riqueza histórico-cultural
            existente ao redor do Porto de Paranaguá, a partir de narrativas dos caiçaras,
            descendentes de índios, pescadores, dos trabalhadores, em contraste com os
            empresários, marinheiros, caminhoneiros. Gente de todo o modo, de toda a fala. Em
            desenvolvimento; Fará parte da proposta IDENTIDADE – litoral do Paraná
            <br />
            <br />

            •   <strong>Desenvolvimento de projeto</strong> - Produtor do projeto longa-metragem Sobre Touros e
            Homens: a saga brasileira do zebu, Direção Werner
          </S.NewTextContainerText>
          <S.NewTextContainerTitleSub height='32%'>
            2010-2016
          </S.NewTextContainerTitleSub>
          <S.NewTextContainerText height='34%'>
            •   <strong>Produtor do longa-metragem Frente Fria que a Chuva Trás</strong>, texto de Mário Bortolotto;
            roteiro e direção de Neville D’Almeida. Rio de Janeiro – época atual.
            Com Bruna
            Lizmeyer, Chay Sued, Johnny Massaro. Lançado,2015;
            <br />
            <br />
            •   <strong>Produtor e Diretor do Documentário A DANÇA DE SÃO GONÇALO</strong>, 52 min, color,
            digital. Finalizado.
          </S.NewTextContainerText>
          <S.NewTextContainerTitleSub height='37%'>
            2008-2009
          </S.NewTextContainerTitleSub>
          <S.NewTextContainerText height='38%'>
            •   <strong>Produtor do documentário UM HOMEM E TRÊS CASAS</strong>, 52 min, color, digital. Direção
            Geraldo Pioli. inédito
          </S.NewTextContainerText>
          <S.NewTextContainerTitleSub height='40%'>
            2006-2007
          </S.NewTextContainerTitleSub>
          <S.NewTextContainerText height='42%'>
            •   <strong>Produtor do documentário Estado de Resistência</strong>, 52 min, de autoria de Berenice
            Mendes, contemplado no DCTV III – Programa de Fomento ao documentário
            Brasileiro; exibição: Doctv III - Circuito da Rede Pública de Televisão 10/06/2007;
            Participação na Rio+20 – TV Cúpula dos Povos.2012.
            <br />
            <br />
            •   <strong>Produtor de finalização do Longa-metragem Impérios</strong>, de Joel Barcellos. Digital, color,
            72 min.
          </S.NewTextContainerText>
          <S.NewTextContainerTitleSub height='45%'>
            2004-2005
          </S.NewTextContainerTitleSub>
          <S.NewTextContainerText height='47.5%'>
            •   <strong>Produtor do documentário O Brasil de Saint Hilaire</strong>: Campos Gerais do Paraná, sobre a
            estada do botânico francês Saint Hilaire no Paraná, 52 min, direção Berenice Mendes;
            Exibição: COPMOPY III, ONU, 2006; Mostra 5 Anos Cooperativa CMD, Cine Ópera –
            Ponta Grossa – PR, 2006; Ia Mostra BRDE de Audiovisual, 2007.
            <br />
            <br />
            •   <strong>Convidado pela Federação da Indústria do Estado do Paraná para participar da 3a
              Conferência Internacional BAWB Brasil (Business as na Agent of World Benefit) em
              outubro de 2005</strong> - www.bawb.org.br, com o case de sucesso Centro de Educação e
            Produção Audiovisual. Projeto que trabalha cinema com adolescentes e jovens em
            situação de risco social.
          </S.NewTextContainerText>
          <S.NewTextContainerTitleSub height='51%'>
            2002-2003
          </S.NewTextContainerTitleSub>
          <S.NewTextContainerText height='54%'>
            •   <strong>Diretor e Produtor do documentário Tropeiro:</strong> Alma Sem Fronteira, resgate histórico
            das origens de ocupação e povoamento da região Sul do País, 52 min.
            exibições: Filme
            fez a abertura do projeto turístico “Rota dos Tropeiros” Região dos Campos Gerais,
            2003; Mostra 5 Anos Cooperativa CMD, Cine Ópera – Ponta Grossa – PR, 2006;
            Exibição no circuito Cultural Rota dos Tropeiros, 2008.
            <br />
            <br />
            •   Consultor do Projeto Velho, Cinema Novo, Secretaria de Estado da Cultura-PR, que
            recupera antigas salas de cinema do Estado;
            <br />
            <br />
            •   Produtor do projeto Centro De Excelência Em Educação E Produção Audiovisual,
            implantado no município de Tibagi, PR, em parceria com a Secretaria de Estado da
            Ciência, Tecnologia e Ensino Superior;
          </S.NewTextContainerText>
          <S.NewTextContainerTitleSub height='58%'>
            2000-2001
          </S.NewTextContainerTitleSub>
          <S.NewTextContainerText height='60%'>
            •   <strong>Produtor do Longa-metragem “Sonhos Tropicais”</strong> de André Sturm, 35mm, lançado
            2002;
            <br />
            <br />
            •   <strong>Produtor do Longa-metragem “Os Xeretas”</strong> de Michael Ruman, 35mm e 85 min.
            Lançado 2001.
          </S.NewTextContainerText>
          <S.NewTextContainerTitleSub height='63%'>
            1999
          </S.NewTextContainerTitleSub>
          <S.NewTextContainerText height='64%'>
            •   <strong>Produtor do longa-metragem Deus Jr</strong>, 35 mm, 90 min. Direção Mauro Lima;
          </S.NewTextContainerText>
          <S.NewTextContainerTitleSub height='66%'>
            1998
          </S.NewTextContainerTitleSub>
          <S.NewTextContainerText height='67%'>
            •   <strong>Produtor da série Usuário da Mata Atlântica</strong>, Direção Roberto D’Avila.
          </S.NewTextContainerText>
          <S.NewTextContainerTitleSub height='69%'>
            1997
          </S.NewTextContainerTitleSub>
          <S.NewTextContainerText height='70%'>
            •   <strong>Produtor Associado do Longa-metragem Navalha na Carne</strong>, 35 mm, 124 min, Direção
            Neville D’Almeida.
          </S.NewTextContainerText>
          <S.NewTextContainerTitleSub height='72%'>
            1996
          </S.NewTextContainerTitleSub>
          <S.NewTextContainerText height='73%'>
            •   <strong>Produtor do longa metragem Olhos de Vampa</strong>, 35 mm, 80 min, Direção Walter
            Rogério.
          </S.NewTextContainerText>
          <S.NewTextContainerTitleSub height='75%'>
            1994
          </S.NewTextContainerTitleSub>
          <S.NewTextContainerText height='76%'>
            •   <strong>Produtor do Longa metragem “Gianni, o amico”</strong>. Direção Saldanha.
          </S.NewTextContainerText>
          <S.LineTitle height='79%'>OUTROS TRABALHOS</S.LineTitle>
          <S.CardIten height='81%'>
            <S.DataCardIten>
              93/94
            </S.DataCardIten>
            <S.TxtCardIten>
              Produtor da chegada no Brasil do Guapos Around the World.
              Viagem Família Schurman
              volta ao mundo
            </S.TxtCardIten>
          </S.CardIten>
          <S.CardIten height='82%'>
            <S.DataCardIten>
              1993
            </S.DataCardIten>
            <S.TxtCardIten>
              Produtor da chegada no Brasil do Guapos Around the World.
              Viagem Família Schurman
              volta ao mundo
            </S.TxtCardIten>
          </S.CardIten>
          <S.CardIten height='83%'>
            <S.DataCardIten>
              93/94
            </S.DataCardIten>
            <S.TxtCardIten>
              Produtor da chegada no Brasil do Guapos Around the World.
              Viagem Família Schurman
              volta ao mundo
            </S.TxtCardIten>
          </S.CardIten>
          <S.CardIten height='84%'>
            <S.DataCardIten>
              93/94
            </S.DataCardIten>
            <S.TxtCardIten>
              Produtor da chegada no Brasil do Guapos Around the World.
              Viagem Família Schurman
              volta ao mundo
            </S.TxtCardIten>
          </S.CardIten>
          <S.CardIten height='85%'>
            <S.DataCardIten>
              93/94
            </S.DataCardIten>
            <S.TxtCardIten>
              Produtor da chegada no Brasil do Guapos Around the World.
              Viagem Família Schurman
              volta ao mundo
            </S.TxtCardIten>
          </S.CardIten>
          <S.CardIten height='96%'>
            <S.DataCardIten>
              93/94
            </S.DataCardIten>
            <S.TxtCardIten>
              Produtor da chegada no Brasil do Guapos Around the World.
              Viagem Família Schurman
              volta ao mundo
            </S.TxtCardIten>
          </S.CardIten>
          <S.CardIten height='97%'>
            <S.DataCardIten>
              93/94
            </S.DataCardIten>
            <S.TxtCardIten>
              Produtor da chegada no Brasil do Guapos Around the World.
              Viagem Família Schurman
              volta ao mundo
            </S.TxtCardIten>
          </S.CardIten>
          <S.CardIten height='98%'>
            <S.DataCardIten>
              93/94
            </S.DataCardIten>
            <S.TxtCardIten>
              Produtor da chegada no Brasil do Guapos Around the World.
              Viagem Família Schurman
              volta ao mundo
            </S.TxtCardIten>
          </S.CardIten>
          <S.CardIten height='99%'>
            <S.DataCardIten>
              93/94
            </S.DataCardIten>
            <S.TxtCardIten>
              Produtor da chegada no Brasil do Guapos Around the World.
              Viagem Família Schurman
              volta ao mundo
            </S.TxtCardIten>
          </S.CardIten>
          <S.CardIten height='100%'>
            <S.DataCardIten>
              93/94
            </S.DataCardIten>
            <S.TxtCardIten>
              Produtor da chegada no Brasil do Guapos Around the World.
              Viagem Família Schurman
              volta ao mundo
            </S.TxtCardIten>
          </S.CardIten>
        </S.NewTextSection>
      </S.BodyB>
    </S.MainContainer >
  );
};

export default CooperativaCurriculo;
