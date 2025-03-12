import React, { useEffect, useState } from 'react';
import * as S from "./SchoolStyled"
import Footer from '../../components/footer/footer';
import ReactPlayer from 'react-player';
import { motion, AnimatePresence } from 'framer-motion';

const boat = require('../../assets/images/img/school.jpg')
const camerim = require("../../assets/images/img/camerim.png")
const ceepa = require("../../assets/images/logo/logo ceepa.png")
const impactoM = require("../../assets/images/icons/impacto na midia.png")
const impactoS = require("../../assets/images/icons/impacto social.png")
const producao = require("../../assets/images/icons/producao e resultados.png")
const reconhecimento = require("../../assets/images/icons/reconhecimento.png")
const esclamacao = require('../../assets/images/icons/esclamacao.png');
const estrutura = require("../../assets/images/icons/estrutura.png")
const localizacao = require("../../assets/images/icons/localizacao.png")
const clacket = require("../../assets/images/img/clacket.png")
const ft1 = require("../../assets/images/img/ft1.jpg")
const ft2 = require("../../assets/images/img/ft2.jpg")
const ft3 = require("../../assets/images/img/ft3.jpg")
const ft4 = require("../../assets/images/img/ft4.jpg")
const ft5 = require("../../assets/images/img/ft5.jpg")
const ft6 = require("../../assets/images/img/ft6.jpg")
const ft7 = require("../../assets/images/img/ft7.jpg")
const ft8 = require("../../assets/images/img/ft8.jpg")
const ft9 = require("../../assets/images/img/ft9.jpg")
const ft10 = require("../../assets/images/img/ft10.jpg")
const ft11 = require("../../assets/images/img/ft11.jpg")
const img2 = require('../../assets/images/img/boat2.jpg');
const img88 = require("../../assets/images/img/img88.png")
const coruja = require('../../assets/images/logo/coruja-pn.png');
const video1 = require('../../assets/videos/video1.mp4');
const video2 = require('../../assets/videos/video2.mp4');


const School: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);

  const videos = [
    { id: 1, title: "Filme - Terror Songo Ou Realidade", src: video1 },
    { id: 2, title: "Filme - Tropas e Boiadas", src: video2 },
  ];

  const nextVideo = () => {
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const prevVideo = () => {
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  useEffect(() => {
    console.log("window.innerWidth <= 768", window.innerWidth <= 768)
    setIsMobile(window.innerWidth <= 768);
  }, [])

  const handleProjetoClick = (route: string) => {
    window.open(route, '_blank'); // Abre a rota em uma nova aba
  };


  return (
    <S.Container>
      <S.InicialSecao>
        {/* <S.LogoEcoacao src={logoEcoacao} alt="logoEcoacao" /> */}
        <S.TitleSectio>
          <S.TitleInicial>
            CEEPA
          </S.TitleInicial>
          <S.CardImgFremeProjetoA>
            <S.CardImgProjetoA src={coruja} />
          </S.CardImgFremeProjetoA>
        </S.TitleSectio>
        <S.TextoSubInicial>
          Centro de Educação e Produção Audiovisual do Paraná
        </S.TextoSubInicial>
        <S.TextoSubInicialContainer>
          <S.PlaceIconA />
          <S.TextoSubInicialA>
            Projeto piloto realizado em Tibagi, Paraná
          </S.TextoSubInicialA>
        </S.TextoSubInicialContainer>
      </S.InicialSecao>
      <S.TextImgCardMain>
        <S.TextImgCard>
          <S.TextCard>
            O Centro de Educação e Produção Audiovisual do Paraná foi
            um projeto piloto realizado em Tibagi, Paraná, que utilizou o
            cinema e a comunicação como ferramentas de transformação
            social.
            <br />
            <br />
            A iniciativa teve como foco adolescentes de 12 a 16 anos
            da rede pública de ensino, promovendo uma formação
            cultural, técnica e cidadã.
          </S.TextCard>
          <S.ImgCard>
            <S.CardImgProjetoB src={img88} />
          </S.ImgCard>
        </S.TextImgCard>
      </S.TextImgCardMain>
      <S.Body>

        <S.BodyListCardContainer>
          <S.BodyListCard>
            <S.Card>
              <S.CardTitleContainer>
                <S.TitleCard>
                  IMPACTO SOCIAL
                </S.TitleCard>
                <S.SUbText>
                  A iniciativa envolveu diretamente a comunidade local, alcançando resultados significativos:
                </S.SUbText>
              </S.CardTitleContainer>
              <S.CardContent>
                <S.CardIcon>
                  <S.CardIconImg src={impactoS} />
                </S.CardIcon>
                <S.CardText>
                  <S.StyledListItem>
                    Entre 600 inscritos, 30 adolescentes foram selecionados para participar do projeto.<br />
                  </S.StyledListItem>
                  <S.StyledListItem>
                    Mais de 150 pessoas, direta e indiretamente, foram beneficiadas. A comunidade esteve envolvida em todas as etapas, fortalecendo o senso de pertencimento e cidadania.
                  </S.StyledListItem>
                </S.CardText>
              </S.CardContent>
            </S.Card>
            <S.Card>
              <S.CardTitleContainer>
                <S.TitleCard>
                  PRODUÇÃO E RESULTADOS
                </S.TitleCard>
                <S.SUbText>
                  Os participantes se engajaram em todas as etapas do processo audiovisual, desde a criação até a finalização:
                </S.SUbText>
              </S.CardTitleContainer>
              <S.CardContent>
                <S.CardIcon>
                  <S.CardIconImg src={producao} />
                </S.CardIcon>
                <S.CardText>
                  <S.StyledListItem>
                    O projeto culminou na Mostra Criação de Cinema, organizada pelos próprios participantes, que contou com um<br />
                    público de aproximadamente 4 mil pessoas.
                  </S.StyledListItem>
                </S.CardText>
              </S.CardContent>
            </S.Card>
            <S.Card>
              <S.CardTitleContainer>
                <S.TitleCard>
                  RECONHECIMENTO
                </S.TitleCard>
                <S.SUbText>
                  A iniciativa recebeu reconhecimento nacional e internacional:
                </S.SUbText>
              </S.CardTitleContainer>
              <S.CardContent>
                <S.CardIcon>
                  <S.CardIconImg src={reconhecimento} />
                </S.CardIcon>
                <S.CardText>
                  <S.StyledListItem>
                    Nacionalmente, foi destaque em veículos como o Globo Repórter.
                  </S.StyledListItem>
                  <S.StyledListItem>
                    Internacionalmente, foi apresentado como um case de sucesso na 3ª Conferência Internacional BAWB Brasil (Business as
                    an Agent of World Benefit), em 2005.
                  </S.StyledListItem>
                </S.CardText>
              </S.CardContent>
            </S.Card>
            <S.Card>
              <S.CardTitleContainer>
                <S.TitleCard>
                  IMPACTO NA MÍDIA
                </S.TitleCard>
                <S.SUbText>
                  O projeto gerou visibilidade significativa:
                </S.SUbText>
              </S.CardTitleContainer>
              <S.CardContent>
                <S.CardIcon>
                  <S.CardIconImg src={impactoM} />
                </S.CardIcon>
                <S.CardText>
                  <S.StyledListItem>
                    Reportagens e divulgações destacaram sua inovação e o impacto positivo na formação dos jovens.<br />
                  </S.StyledListItem>
                  <S.StyledListItem>
                    Promoveu discussões sobre o audiovisual como ferramenta de inclusão e transformação social.<br />
                  </S.StyledListItem>
                </S.CardText>
              </S.CardContent>
            </S.Card>
            <S.Card>
              <S.CardTitleContainer>
                <S.TitleCard>
                  ESTRUTURA
                </S.TitleCard>
                <S.SUbText>
                  O CEEPA operou por meio de dois grandes núcleos:
                </S.SUbText>
              </S.CardTitleContainer>
              <S.CardContent>
                <S.CardIcon>
                  <S.CardIconImg src={estrutura} />
                </S.CardIcon>
                <S.CardText>
                  <S.StyledListItem>
                    Audiovisual e Comunicação, com três laboratórios principais:<br />
                  </S.StyledListItem>
                  Produção e Criação, Imagem, Áudio
                </S.CardText>
              </S.CardContent>
            </S.Card>
          </S.BodyListCard>
        </S.BodyListCardContainer>
        <S.Faixa>
          <S.Esclamacao src={esclamacao} />
          <S.FaixaText>
            Um dos grandes desafios será construir um network mundial linkado com universidades.<br />
            Uma inspiradora rede.
          </S.FaixaText>
        </S.Faixa>
      </S.Body>
      <S.Galeria>
        <S.Img src={ft1} />
        <S.Img src={ft2} />
        <S.Img src={ft3} />
        <S.Img src={ft4} />
        <S.Img src={ft5} />
        <S.Img src={ft6} />
        <S.Img src={ft7} />
        <S.Img src={ft8} />
        <S.Img src={ft9} />
        <S.Img src={ft10} />
        <S.Img src={ft11} />
      </S.Galeria>
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
      <Footer />
    </S.Container>
  );
};

export default School;
