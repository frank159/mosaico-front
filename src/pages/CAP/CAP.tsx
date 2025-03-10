import React, { useEffect, useState } from 'react';
import * as S from "./CAPStyled"
import Footer from '../../components/footer/footer';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';


const camerim = require("../../assets/images/img/camerim.png")
const img3 = require('../../assets/images/img/comuni.png');
const logoCap = require("../../assets/images/icons/logoCap.png")
const impactoS = require("../../assets/images/icons/impacto social.png")
const maoGlobo = require("../../assets/images/icons/maoGlobo.png")
const ong = require("../../assets/images/icons/ong.png")
const calendario = require("../../assets/images/icons/calendario.png")
const localPreto = require("../../assets/images/icons/local preto.png")
const esclamacao = require('../../assets/images/icons/esclamacao.png');
const boat2 = require('../../assets/images/img/boat2.jpg');
const filmeJ = require('../../assets/images/logo/filmeJ.png');
const t = require('../../assets/images/logo/t.png');
const capFundoBranco = require('../../assets/images/logo/capFundoBranco.png');
const video1 = require('../../assets/videos/video1.mp4');
const video2 = require('../../assets/videos/video2.mp4');


const School: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);

  const videos = [
    { id: 1, title: "Filme - Terror Songo Ou Realidade", src: video1 },
    { id: 2, title: "Filme - Tropas e Boiadas", src: video2 },
  ];


  const handleClick = () => {
    window.location.href = 'https://www.filmjoin.com.br';
  };
  const handleClick1 = () => {
    window.location.href = 'https://apremavi.org.br/';
  };
  useEffect(() => {
    console.log("window.innerWidth <= 768", window.innerWidth <= 768)
    setIsMobile(window.innerWidth <= 768);
  }, [])

  const handleProjetoClick = (route: string) => {
    window.open(route, '_blank'); // Abre a rota em uma nova aba
  };

  const nextVideo = () => {
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const prevVideo = () => {
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  return (
    <S.Container>
      <S.TitleContainer>
        <S.TitleContant>
          <S.ImgLogo src={capFundoBranco} />
          <S.TitleSection>
            <S.DivTitle>
              CAP
            </S.DivTitle>
            <S.DivText>
              (Centro Audiovisual do Paraná)
            </S.DivText>
          </S.TitleSection>
        </S.TitleContant>
      </S.TitleContainer>
      <S.Body>
        <S.BodyListCardContainer>
          <S.Card>
            <S.CardContent>
              <S.CardIcon>
                <S.CardIconImg src={maoGlobo} />
              </S.CardIcon>
              <S.CardText>
                O Centro Audiovisual do Pr desenvolve projetos voltados para educação audiovisual, seja na realização de
                oficinas de criação e produção em si, como também na produção de conteúdo de entreterimento com forte
                engajamento educacional e temática de recuperação de floresta e reciclagem do lixo.
              </S.CardText>
            </S.CardContent>
          </S.Card>
        </S.BodyListCardContainer>
        <S.TitleBigImg>
          Sobre nós:
        </S.TitleBigImg>
        <S.BigImgContainer>
          <S.TextBigImgContainer>
            <S.TextBigImg>
              Trabalhamos com foco na comunicação com crianças e adolescentes, promovendo educação audiovisual empírica, onde os participantes<br />
              aprendem sobre o processo criativo, com resultados concretos de produção audiovisual.
            </S.TextBigImg>
          </S.TextBigImgContainer>
          <S.IconTextBigImgContainerList>
            <S.LineDescription />
            <S.IconTextBigImgContainerListB>
              <S.IconTextBigImgContainer>
                <S.IconBigImgCard src={ong} />
                <S.TextBigImgCard>
                  Organização não governamental
                </S.TextBigImgCard>
              </S.IconTextBigImgContainer>
              <S.IconTextBigImgContainer>
                <S.IconBigImgCard src={calendario} />
                <S.TextBigImgCard>
                  Atua desde 2001
                </S.TextBigImgCard>
              </S.IconTextBigImgContainer>
              <S.IconTextBigImgContainer>
                <S.IconBigImgCard src={localPreto} />
                <S.TextBigImgCard>
                  Sediada na cidade de Ventania - PR
                </S.TextBigImgCard>
              </S.IconTextBigImgContainer>
            </S.IconTextBigImgContainerListB>
          </S.IconTextBigImgContainerList>
        </S.BigImgContainer>
        <S.Faixa>
          <S.Esclamacao src={esclamacao} />
          <S.FaixaText>
            O CAP funciona como um laboratório de novas ideias digitais, e oferece “HackAthon Digital”, que são eventos, que estimulam
            a criação de novos conteúdos e produtos a partir de desafios de produção, onde profissionais, aspirantes e estudantes do
            mercado tem oportunidade de transformar ideias de projetos de filmes, séries, games, em vídeo pilotos, com o objetivo de
            antecipar a experiência digital dos fãs e aumentar as possibilidades de sucesso de seus projetos.
          </S.FaixaText>
        </S.Faixa>
        <S.LinhaH />
        <S.TitleBigImg>
          PRODUÇÕES:
        </S.TitleBigImg>
        <S.VideoContainer>
          <AnimatePresence mode="wait">
            <motion.div
              key={videos[current].id}
              layout
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', justifyContent: 'start', width: '100%' }}
            >
            </motion.div>
          </AnimatePresence>

          <S.VideoWrapper>
            <AnimatePresence mode="wait">
              <motion.div
                key={videos[current].id}
                layout
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                style={{ height: '100%' }}
              >
                <S.VideoTitle>• {videos[current].title}</S.VideoTitle>
                <S.ButtonContainer>
                  <S.NavButton onClick={prevVideo} className="left">
                    <S.ArrowLeft />
                  </S.NavButton>
                  <video
                    src={videos[current].src}
                    style={{ width: "100%", maxWidth: "80vw" }}
                    controls
                  />
                  <S.NavButton onClick={nextVideo} className="right">
                    <S.ArrowRight />
                  </S.NavButton>
                </S.ButtonContainer>
              </motion.div>
            </AnimatePresence>
          </S.VideoWrapper>
        </S.VideoContainer>
        <S.DescriptionSection>
          <S.DescriptionContainer>
            <S.LineDescription />
            <S.DescriptionTextContainer>
              <S.DescrTitle>
                Descrição aqui:
              </S.DescrTitle>
              <S.DescrText>
                Blorptum dingo wizzle furbo yaltz. Gronch drimple quixle sproket boomfuzz. Flundermash clorbin zarp hopplin zerg. Plorpt drindlevex nexo quibber honk plop. Mazzlort spiff cranglo zindle quast gloof. Frumpter snix garble wiffle prompthoon.
              </S.DescrText>
            </S.DescriptionTextContainer>
          </S.DescriptionContainer>
        </S.DescriptionSection>
        <S.TitlePage>
          PROJETOS:
        </S.TitlePage>
        <S.ProjetosContainer>
          <S.ProjetosListContainer>
            <S.SubTitlePage>
              • Modelo de iniciativa que será levada para a COP 30!
            </S.SubTitlePage>
            <S.CardProjeto onClick={() => handleProjetoClick('/Ceepa')}>
            <S.CardMainContainer>
              <S.CardImgFremeProjeto>
                <S.CardImgProjeto src={img3} />
              </S.CardImgFremeProjeto>
              <S.CardTextContainerProjeto>
                <S.CardTitleProjeto>
                <strong>CEEPA</strong> - Centro de Educação e Produção Audiovisual do Paraná
              </S.CardTitleProjeto>
              <S.CardTextProjeto>
                O projeto Centro de Excelência em Educação e Produção Audiovisual, iniciado em 2001,
                foi uma iniciativa sócio-cultural desenvolvida pela Cooperativa Cinema & Mídias Digitais
                com foco na arte-cidadania. Ele usou o audiovisual e formas de comunicação como
                ferramentas para a formação humana e promoção da cidadania, atendendo jovens de
                12 a 17 anos em comunidades carentes. Com atividades práticas e teóricas, os
                participantes produziram documentários, materiais jornalísticos e conteúdos para
                WebTV, promovendo o desenvolvimento de habilidades técnicas e fortalecendo a
                autoestima comunitária. O projeto alcançou impacto regional, envolvendo mais de 150
                pessoas e inspirando práticas de resgate cultural e inclusão social.
              </S.CardTextProjeto>
            </S.CardTextContainerProjeto>
          </S.CardMainContainer>
        </S.CardProjeto>

          </S.ProjetosListContainer>
        </S.ProjetosContainer>
      </S.Body>

      <Footer />
    </S.Container>
  );
};

export default School;
