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
            <S.VideoTitle>• {videos[current].title}</S.VideoTitle>
            <AnimatePresence mode="wait">
              <motion.div
                key={videos[current].id}
                layout
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                style={{ width: '100%', height: '100%' }}
              >
                <ReactPlayer
                  url={videos[current].src}
                  width="100%"
                  height="100%"
                  controls
                />
              </motion.div>
            </AnimatePresence>
          </S.VideoWrapper>
          <S.ButtonContainer>
            <S.NavButton onClick={prevVideo} style={{ left: '10px' }}>
              <S.ArrowLeft />
            </S.NavButton>
            <S.NavButton onClick={nextVideo} style={{ right: '10px' }}>
              <S.ArrowRight />
            </S.NavButton>
          </S.ButtonContainer>
        </S.VideoContainer>
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
        <S.PatrocinadorContainer>
          <S.PatrocinadorCard backgroundColorCard={'#0076bf55'}>
            <S.PatrocinadorLogo top='-40%' src={filmeJ} />
            <S.PatrocinadorText color='#0075BF'>
              Desde 2017, em parceria com a plataforma Filmjoin<br />
            </S.PatrocinadorText>
            <S.PatrocinadorTextLink color='#0263a0' color2='#025081' onClick={handleClick}>
              www.filmjoin.com.br<br />
            </S.PatrocinadorTextLink>
            <S.PatrocinadorText color='#0075BF'>
              passamos a adotar temática ambiental, com estimulo para produção e exibição destes<br />
              conteúdos.
            </S.PatrocinadorText>
          </S.PatrocinadorCard>
          <S.PatrocinadorCard backgroundColorCard={'#7182336f'}>
            <S.PatrocinadorLogo top='-35%' src={t} />
            <S.PatrocinadorText color='#323D09'>
              Em 2020, a CAP estabeleceu parceria com a<br />
              Apremavi - Associação de preservação do meio ambiente e da vida,<br />
            </S.PatrocinadorText>
            <S.PatrocinadorTextLink color='#516413' color2='#546913' onClick={handleClick1}>
              apremavi.org.br/
            </S.PatrocinadorTextLink>
            <S.PatrocinadorText color='#323D09'>
              especialista em reflorestamento com plantas nativas.
            </S.PatrocinadorText>
          </S.PatrocinadorCard>
        </S.PatrocinadorContainer>
        <S.TitlePage>
          PROJETOS:
        </S.TitlePage>
        <S.ProjetosContainer>
          <S.Line2 />
          <S.ProjetosListContainer>
            <S.SubTitlePage>
              • Modelo de iniciativa que será levada para a COP 30!
            </S.SubTitlePage>
            <S.CardProjeto onClick={() => handleProjetoClick('/Ceepa')}>
              <S.CardImgFremeProjeto>
                <S.CardImgProjeto src={img3} />
              </S.CardImgFremeProjeto>
              <S.CardTextContainerProjeto>
                <S.CardTitleProjeto>
                  <strong>CEEPA</strong> - Centro de Educação e Produção Audiovisual do Paraná
                </S.CardTitleProjeto>
                <S.CardTextProjeto>
                  O projeto Centro de Excelência em Educação e Produção Audiovisual, iniciado em 2001,<br />
                  foi uma iniciativa sócio-cultural desenvolvida pelo CAP e pela Cooperativa Cinema &<br />
                  Mídias Digitais com foco na arte-cidadania.<br />
                  Ele usou o audiovisual e formas de comunicação como ferramentas para a formação<br />
                  humana e promoção da cidadania, atendendo jovens de 12 a 17 anos em comunidades<br />
                  carentes.<br />
                  O projeto alcançou impacto regional, envolvendo mais de 150 pessoas e inspirando<br />
                  práticas de resgate cultural e inclusão social.
                </S.CardTextProjeto>
              </S.CardTextContainerProjeto>
            </S.CardProjeto>
            <S.CardProjeto onClick={() => handleProjetoClick('/Escola-Digital')}>
              <S.CardImgFremeProjeto>
                <S.CardImgProjeto src={boat2} />
              </S.CardImgFremeProjeto>
              <S.CardTextContainerProjeto>
                <S.CardTitleProjeto>
                  <strong>Escola Digital</strong> - Educação e Produção Audiovisual para a Sustentabilidade
                </S.CardTitleProjeto>
                <S.CardTextProjeto>
                  O curso de audiovisual proposto tem como objetivo principal capacitar crianças e jovens a<br />
                  se expressarem por meio de produções audiovisuais que abordem temas relacionados às<br />
                  mudanças climáticas, à defesa da biodiversidade e à promoção da sustentabilidade.<br />
                  Além disso, busca engajar esse público em uma discussão profunda sobre o papel de<br />
                  cada um na preservação do planeta, tornando-o ciente de sua responsabilidade <br />
                  enquanto cidadãos.
                </S.CardTextProjeto>
              </S.CardTextContainerProjeto>
            </S.CardProjeto>
          </S.ProjetosListContainer>
        </S.ProjetosContainer>
        <S.BigTextSection>
          <S.BigTextTitle>
            PRINCIPAIS PROJETOS:
          </S.BigTextTitle>
          <S.BigTextSpace />
          •    <strong>Viveiro Virtual – Espaço Físico</strong><br />
          Área de 24 mil metros quadrados, no Sitio Curucaca, no município de Ventania, Estado do Paraná, onde está instalado o Viveiro de plantas nativas.<br />
          Em 2020, 500 mudas foram de plantas nativas foram plantadas, em parceria com Apremavi.<br />
          <S.BigTextSpace />
          •    <strong>HackAthon Audiovisual, Plantas Nativas, 2021</strong><br />
          Em parceria com a Prefeitura de Ventania, Governo do Estado do Paraná e Lei Aldir Blanc. Oficina de produção e distribuição de minidocumentário sobre a Cultura, Biologia e Manejo das plantas nativas brasileiras, projeto em andamento, com 08 documentários em produção, em parceria com a Apremavi e a Filmjoin.<br />
          <strong>Confira em: https://www.filmjoin.com.br/2021/03/22/hackathon-plantas-nativas-2/</strong> <br />
          <S.BigTextSpace />
          •    <strong>HackAthon Audiovisual, Cuiabá-MT, 2019</strong><br />
          Em parceria com a Universidade Federal do Mato Grosso - UFMT e Secretaria de Esportes e Cultura do Mato Grosso - SECEL-MT.<br />
          <S.BigTextSpace />
          •    <strong>Contos e Lendas’ da Associação dos Municípios dos Campos Gerais (AMCG)</strong><br />
          Documentário “Viva São João”, em formato de oficina de vídeo documentário, em Ventania-PR, 2019.<br />
          <S.BigTextSpace />
          •    <strong>HackAthon Audiovisual, Alto Paraíso de Goiás, 2018</strong><br />
          Em parceria com a Prefeitura e a Câmara Municipal.<br />
          <S.BigTextSpace />
          •    <strong>Workshop - On Time, Brasília- DF, 2018</strong><br />
          Dentro do Festival Internacional de Curtas.<br />
          <S.BigTextSpace />
          •    <strong>Workshop - Direção de Produção Cinematográfica, Brasília-DF, Espaço Cult de Cinema. 2017</strong><br />
          <S.BigTextSpace />
          •    <strong>Produção de documentário de resgate histórico do Paraná</strong><br />
          <S.BigTextSpace />
          •    <strong>WCine - Workshop de cinema de A-Z, Curitiba-PR, 2004-2005</strong><br />
          Premiado pela Fundação Cultural de Curitiba.<br />
          <S.BigTextSpace />
          •    <strong>Escola de Cinema, Tibagi-PR, 2003</strong><br />
          Em parceria com a Prefeitura e patrocínio do Governo do Estado do Paraná.<br />
          <S.BigTextSpace />
          •    <strong>Oficina de Cinema - Castro-PR, 2000</strong><br />
          Em parceria com a Prefeitura de Castro e Senac-PR.
        </S.BigTextSection>
      </S.Body>

      <Footer />
    </S.Container>
  );
};

export default School;
