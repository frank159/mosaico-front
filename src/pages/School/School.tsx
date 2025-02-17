import React, { useEffect, useState } from 'react';
import * as S from "./SchoolStyled"
import Footer from '../../components/footer/footer';
import ReactPlayer from 'react-player';

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


const School: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log("window.innerWidth <= 768", window.innerWidth <= 768)
    setIsMobile(window.innerWidth <= 768);
  }, [])

  const handleProjetoClick = (route: string) => {
    window.open(route, '_blank'); // Abre a rota em uma nova aba
  };


  return (
    <S.Container>
      <S.ImgContainer>
        <S.ImgBuner src={camerim} />
      </S.ImgContainer>
      <S.Body>
        <S.Title>
          <strong>CEEPA</strong> - Centro de Educação e Produção Audiovisual do Paraná
        </S.Title>
        <S.SubTitle>
          <S.LocalIcon src={localizacao} />
          Projeto piloto realizado em Tibagi, Paraná
        </S.SubTitle>
        <S.BodyText>
          O Centro de Excelência em Educação e Produção Audiovisual (CEEPA) foi um projeto piloto realizado em Tibagi, Paraná, que utilizou o
          cinema e a comunicação jornalística como ferramentas de transformação social.
          A iniciativa <strong>teve como foco adolescentes de 12 a 16 anos da rede pública de ensino</strong>, promovendo uma formação cultural,
          técnica e cidadão.
        </S.BodyText>
        <S.BodyListCardContainer>
          <S.Line />
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
                  <li>
                    Entre 600 inscritos, 30 adolescentes foram selecionados para participar do projeto.<br />
                  </li>
                  <li>
                    Mais de 150 pessoas, direta e indiretamente, foram beneficiadas. A comunidade esteve envolvida em todas as<br />
                  </li>
                  etapas, fortalecendo o senso de pertencimento e cidadania.
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
                  <li>
                    O projeto culminou na Mostra Criação de Cinema, organizada pelos próprios participantes, que contou com um<br />
                    público de aproximadamente 4 mil pessoas.
                  </li>
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
                  <li>
                    Nacionalmente, foi destaque em veículos como o Globo Repórter.
                  </li>
                  <li>
                    Internacionalmente, foi apresentado como um case de sucesso na 3ª Conferência Internacional BAWB Brasil (Business as
                    an Agent of World Benefit), em 2005.
                  </li>
                </S.CardText>
              </S.CardContent>
            </S.Card>
            <S.Card>
              <S.CardTitleContainer>
                <S.TitleCard>
                  IMPACTO NO MÍDIA
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
                  <li>
                    Reportagens e divulgações destacaram sua inovação e o impacto positivo na formação dos jovens.<br />
                  </li>
                  <li>
                    Promoveu discussões sobre o audiovisual como ferramenta de inclusão e transformação social.<br />
                  </li>
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
                  <li>
                    Audiovisual e Comunicação, com três laboratórios principais:<br />
                  </li>
                  Produção e Criação, Imagem, Áudio
                </S.CardText>
              </S.CardContent>
            </S.Card>
          </S.BodyListCard>
        </S.BodyListCardContainer>
        <S.Faixa>
          <S.Esclamacao src={esclamacao} />
          <S.FaixaText>
            Escola itinerante, estruturada em uma carreta adaptada, que levou ensino a comunidades remotas, promovendo integração
            cultural e inclusão social.
            com essa abordagem, o projeto se consolidou como um marco de transformação social, utilizando o audiovisual para
            oferecer oportunidades, resgatar histórias locais e fortalecer a identidade cultural e a cidadania.
          </S.FaixaText>
        </S.Faixa>
      </S.Body>
      <S.Galeria>
        <S.Img src={ft1} width='25vw' />
        <S.Img src={ft2} width='25vw' />
        <S.Img src={ft3} width='25vw' />
        <S.Img src={ft4} width='25vw' />
        <S.Img src={ft5} width='25vw' />
        <S.Img src={ft6} width='25vw' />
        <S.Img src={ft7} width='25vw' />
        <S.Img src={ft8} width='25vw' />
        <S.Img src={ft9} width='25vw' />
        <S.Img src={ft10} width='25vw' />
        <S.Img src={ft11} width='25vw' />
      </S.Galeria>
      <S.ImgContainer2 src={clacket}>
        <S.FinalContainer>
          <S.LineFinal />
          <S.FinalTextContainer>
            <S.TitleFinalContainer>
              RESUMINDO:
            </S.TitleFinalContainer>
            <S.TextFinalContainer>
              O projeto Centro de Excelência em Educação e Produção Audiovisual, desenvolvido pela Cooperativa Cinema & Mídias Digitais (CCMD),<br />
              é uma iniciativa sociocultural que utiliza audiovisual e comunicação como ferramentas para promover cidadania e desenvolvimento<br />
              socioeconômico em comunidades carentes.<br />
              Realizado em Tibagi (PR), o projeto selecionou 30 adolescentes entre 600 inscritos e<br />
              beneficiou mais de 150 pessoas, com resultados apresentados em uma mostra de cinema que reuniu 4 mil espectadores. A proposta<br />
              inclui dois núcleos principais (Audiovisual e Comunicação), oferecendo formação teórica e prática em jornalismo, web TV/rádio e<br />
              produção de documentários, com foco na preservação cultural e no desenvolvimento comunitário sustentável.
            </S.TextFinalContainer>
          </S.FinalTextContainer>
        </S.FinalContainer>
      </S.ImgContainer2>
      <S.VideoContainer>
        <S.VideoTitle>
          • Centro de Excelência em Educação e Produção Audiovisual
        </S.VideoTitle>
        <S.VideoWrapper>
          <S.ReactPlayerDiv
            url="https://www.facebook.com/watch/?v=711353312672199"
            width="70%"      // Pode ser em %, px ou outras unidades
            controls
          />
        </S.VideoWrapper>
      </S.VideoContainer>
      <S.ProjectoSectionContainer>
        <S.ProjectoSection>
          <S.TitleSection1>
            Levaremos esse projeto para a COP30, confira:
          </S.TitleSection1>
          <S.CardProjeto onClick={() => handleProjetoClick('/Escola-Digital')}>
            <S.CardMainContainer>
              <S.CardImgFremeProjeto>
                <S.CardImgProjeto src={img2} />
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
                  cada um na preservação do planeta, tornando-o ciente de sua responsabilidade enquanto<br />
                  cidadãos.
                </S.CardTextProjeto>
              </S.CardTextContainerProjeto>
            </S.CardMainContainer>
          </S.CardProjeto>
        </S.ProjectoSection>
      </S.ProjectoSectionContainer>
      <Footer />
    </S.Container>
  );
};

export default School;
