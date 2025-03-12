import React, { useEffect, useState } from 'react';
import * as S from "./EscolaDigitalStyled"
import Footer from '../../components/footer/footer';



const camerim = require("../../assets/images/img/camerim.png")
const impactoM = require("../../assets/images/icons/impacto na midia.png")
const impactoS = require("../../assets/images/icons/impacto social.png")
const producao = require("../../assets/images/icons/producao e resultados.png")
const reconhecimento = require("../../assets/images/icons/reconhecimento.png")
const esclamacao = require('../../assets/images/icons/esclamacao.png');
const estrutura = require("../../assets/images/icons/estrutura.png")
const mundoConectado = require("../../assets/images/icons/mundo conectado.png")
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
const folha = require("../../assets/images/icons/folha.png")
const localizacao = require("../../assets/images/icons/localizacao.png")
const img3 = require('../../assets/images/img/comuni.png');

const School: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleProjetoClick = (route: string) => {
    window.location.href = route; // Abre a rota em uma nova aba
  };


  useEffect(() => {
    console.log("window.innerWidth <= 768", window.innerWidth <= 768)
    setIsMobile(window.innerWidth <= 768);
  }, [])

  return (
    <S.Container>
      <S.ImgContainer>
        <S.ImgBuner src={camerim} />
      </S.ImgContainer>
      <S.Body>
        <S.Title>
          <strong>Escola Digital</strong> - Educação e Produção Audiovisual para a Sustentabilidade
        </S.Title>
        <S.SubTitle>
          <S.LocalIcon src={localizacao} />
          Projeto para a COP30
        </S.SubTitle>
        <S.ContainerCard1>
          Ensinamos a utilizar ferramentas digitais para criar conteúdos audiovisuais, com<br />
          ênfase em práticas sustentáveis e abordagens inovadoras!
        </S.ContainerCard1>
        <S.SpaceContainer />
        <S.SpaceContainer />
        <S.TextContainer>
          A 30ª Conferência das Nações Unidas sobre Mudança Climática - <strong>COP 30</strong>, que será realizada em Belém do Pará, no Brasil, de 10 a 21 de novembro<br />
          de 2025, tem tudo para se transformar num marco para a sustentabilidade do planeta.
        </S.TextContainer>
        <S.SpaceContainer />
        <S.TextContainer>
          Seja no combate às mudanças climáticas, seja na discussão de ações urgentes para preservação da biodiversidade, o evento é uma oportunidade<br />
          única para o mundo se mobilizar na busca por um futuro mais sustentável.
        </S.TextContainer>
        <S.SpaceContainer />
        <S.SpaceContainer />
        <S.ContainerCard2>
          <S.IconCad src={estrutura} />
          As crianças e os jovens desempenham um papel fundamental não apenas como protagonistas de um futuro mais equilibrado, mas
          também como influenciadores e multiplicadores de informações e práticas em suas comunidades.
        </S.ContainerCard2>
        <S.ContainerCard2>
          <S.IconCad src={mundoConectado} />
          A linguagem audiovisual, através de sua natureza envolvente e acessível, oferece um canal poderoso para sensibilizar e mobilizar o
          público jovem. Ao aprenderem a criar e compartilhar produções audiovisuais, crianças e jovens não só adquirem habilidades
          técnicas e criativas, mas também se tornam agentes ativos na discussão e disseminação de temas ambientais, podendo ser
          influenciadores no processo de conscientização social e política.
        </S.ContainerCard2>
        <S.ContainerCard3>
          <S.IconCad3 src={folha} />
          É diante desse cenário que propomos a implantação de um curso de produção audivisual, em Belém do Pará,  destinado a<br />
          adolescentes e jovens de 12 a 17 anos, dando uma sequência prática a toda a efervescência das discussões resultantes da COP-30.
        </S.ContainerCard3>
        <S.TextSectionContainer>
          <S.SpaceContainer />
          <S.SpaceContainer />
          <S.TitleSection>
            • NOSSO OBJETIVO
          </S.TitleSection>
          <S.TextSection>
            Capacitar crianças e jovens a se expressarem por meio de produções audiovisuais que abordem temas relacionados às mudanças climáticas, à defesa da biodiversidade e à promoção da sustentabilidade.
            Engajar esse público em uma discussão profunda sobre o papel de cada um na preservação do planeta, tornando-o ciente de sua responsabilidade enquanto cidadãos.
          </S.TextSection>
          <S.SpaceContainer />
          <S.SpaceContainer />
          <S.TitleSection>
            • PÚBLICO ALVO
          </S.TitleSection>
          <S.TextSection>
            O projeto atenderá adolescentes e jovens entre 12 e 17 anos, residentes em comunidades carentes e vulneráveis de Belém/PR e região, selecionados por meio de um processo de inscrição e indicações de escolas públicas.
          </S.TextSection>
          <S.SpaceContainer />
          <S.SpaceContainer />
          <S.TitleSection>
            • METODOLOGIA
          </S.TitleSection>
          <S.TextSection>
            O curso será estruturado em módulos que combinarão teoria e prática, com ênfase no desenvolvimento de habilidades técnicas e na criação de projetos de impacto social.
            <S.SpaceContainer />
            A metodologia será interativa e participativa, estimulando os alunos a colaborar entre si, explorar diferentes formatos audiovisuais e experimentar com várias linguagens (documentário, animação, ficção, vídeos de conscientização, etc.).
          </S.TextSection>

          <S.MinContainerSection>
            <S.MinContainerLine
              style={{
                height: isHovered ? '20vh' : '40vh',
                transition: 'height 0.3s ease',
              }}
            />
            <S.MinContainerList>
              <S.MinContainer1
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Na fase teórica, serão realizadas oficinas sobre história do cinema, roteirização, produção audiovisual e legislação cultural.
              </S.MinContainer1>
              <S.MinContainer1
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Na fase prática, será feita a produção de documentários e outros conteúdos de multimídia, com exibições públicas para debater temas relevantes nas comunidades.
              </S.MinContainer1>
            </S.MinContainerList>
          </S.MinContainerSection>
        </S.TextSectionContainer>
        <S.ContainerCard4>
          <S.IconCad3 src={mundoConectado} />
          <>
            Também está prevista a criação de uma WebTV e Web Rádio geridas pelos participantes para produção de notícias<br />
            e conteúdo multimídia.
          </>
        </S.ContainerCard4>
      </S.Body>
      <S.FinalText>
        <S.TitleSection>
          Resultados que se espera com a realização do curso
        </S.TitleSection>
        <S.TextSection1>
          Ao final do curso, espera-se que os participantes tenham adquirido conhecimentos e habilidades não apenas na área de audiovisual, mas
          também na compreensão das questões ambientais globais e locais.
        </S.TextSection1>
        <S.SpaceContainer />
        <S.SpaceContainer />
        <S.TextSectionCheckContainer>
          <S.TextSectionCheckIcon />
          <S.TextSectionCheck>
            Criar conteúdos audiovisuais originais que tratem de temas como mudanças climáticas, biodiversidade e sustentabilidade.
          </S.TextSectionCheck>
        </S.TextSectionCheckContainer>
        <S.TextSectionCheckContainer>
          <S.TextSectionCheckIcon />
          <S.TextSectionCheck>
            Compreender o papel do audiovisual como ferramenta de transformação social.
          </S.TextSectionCheck>
        </S.TextSectionCheckContainer>
        <S.TextSectionCheckContainer>
          <S.TextSectionCheckIcon />
          <S.TextSectionCheck>
            Desenvolver uma consciência crítica sobre os desafios ambientais enfrentados pelo planeta e as possíveis soluções.
          </S.TextSectionCheck>
        </S.TextSectionCheckContainer>
        <S.TextSectionCheckContainer>
          <S.TextSectionCheckIcon />
          <S.TextSectionCheck>
            Divulgar e compartilhar seus projetos com a comunidade, utilizando plataformas digitais para alcançar um público amplo.
          </S.TextSectionCheck>
        </S.TextSectionCheckContainer>
        <S.TextSectionCheckContainer>
          <S.TextSectionCheckIcon />
          <S.TextSectionCheck>
            Dar uma sequência prática às discussões promovidas pelo COP-30 realizado no Brasil.
          </S.TextSectionCheck>
        </S.TextSectionCheckContainer>
      </S.FinalText>
      <S.ProjectoSection>
        <S.TitleSection1>
          Este projeto já foi aplicado antes e tivemos resultados incríveis, confira:
        </S.TitleSection1>
        <S.CardProjeto onClick={() => handleProjetoClick('/Ceepa')}>
            <S.CardMainContainer>
              <S.CardImgFremeProjeto>
                <S.CardImgProjeto src={img3} />
              </S.CardImgFremeProjeto>
              <S.CardTextContainerProjeto>
                <S.CardTitleProjeto>
                  CEEPA
                </S.CardTitleProjeto>
                <S.CardTextProjeto>
                  O projeto Centro de Excelência em Educação e Produção Audiovisual, iniciado em 2001,<br />
                  foi uma iniciativa sócio-cultural desenvolvida pela Cooperativa Cinema & Mídias Digitais<br />
                  com foco na arte-cidadania. Ele usou o audiovisual e formas de comunicação como<br />
                  ferramentas para a formação humana e promoção da cidadania, atendendo jovens de<br />
                  12 a 17 anos em comunidades carentes. Com atividades práticas e teóricas, os<br />
                  participantes produziram documentários, materiais jornalísticos e conteúdos para<br />
                  WebTV, promovendo o desenvolvimento de habilidades técnicas e fortalecendo a<br />
                  autoestima comunitária. O projeto alcançou impacto regional, envolvendo mais de 150<br />
                  pessoas e inspirando práticas de resgate cultural e inclusão social.
                </S.CardTextProjeto>
              </S.CardTextContainerProjeto>
            </S.CardMainContainer>
          </S.CardProjeto>

      </S.ProjectoSection>
      <Footer />
    </S.Container>
  );
};

export default School;
