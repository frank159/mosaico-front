import { text } from 'd3';
import * as S from './ProjetoIdentidadeStyled';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame } from "motion/react"; // ou "framer-motion" conforme sua lib
import ReactPlayer from 'react-player';

const HomeroFoto = require("../../assets/images/img/homero.png")
const cameraCoop = require("../../assets/images/img/cameraCoop.png")
const idProgeto = require("../../assets/images/img/idProgeto.png")
const BRASILDeSAINT = require("../../assets/images/img/BRASILDeSAINT.png")
const cooperativa111 = require("../../assets/images/img/cooperativa111.png")
const tropeiro = require("../../assets/images/img/tropeiro.png")
const cooperativaLogo = require("../../assets/images/logo/cooperativaLogo.png")
const video1 = require('../../assets/videos/video1.mp4');


const ProjetoIdentidade: React.FC = () => {

  return (
    <S.MainContainer>
      <S.Body>
        <S.ContainerSubA>
          <S.ContainerLeftA>
            <S.TitleA>PROJETO IDENTIDADE</S.TitleA>
            <S.TextoAContiner>
              <S.TextoA>
                A Cooperativa Cinema & Mídias Digitais realizou o projeto IDENTIDADE, uma iniciativa dedicada à exibição e circulação de documentários focados no resgate histórico, cultural e identitário do Paraná.
              </S.TextoA>
              <br />
              <S.TextoA>
                Além das exibições, cada local recebeu um box contendo os três títulos, ampliando o acesso ao conteúdo e fortalecendo a memória cultural paranaense.
              </S.TextoA>
              <br />
              <S.TextoA>
                Uma ação que reafirmou e valorizou a identidade do Paraná por meio do audiovisual.
              </S.TextoA>
            </S.TextoAContiner>
          </S.ContainerLeftA>
          <S.ContainerRightA >
            <S.ImgFoto src={idProgeto} />
          </S.ContainerRightA>
        </S.ContainerSubA>
        <S.SubContainer>
          <S.SubTextContainer>
            O projeto percorreu mais de 25 cidades do Estado, levando ao público uma mostra composta por três documentários de 52 minutos cada.
          </S.SubTextContainer>
        </S.SubContainer>
      </S.Body>
      <S.BodyB>
        <S.TitleB>
          • saiba mais sobre os 3 filmes produzidos:
        </S.TitleB>
        <S.BigCard height='auto'>
          <S.TopSectionCard>
            <S.ContainerBigCardFoto >
              <S.ImgFotoA src={BRASILDeSAINT} />
            </S.ContainerBigCardFoto>
            <S.TextoAContinerBigCard>
              <S.TitleA>O BRASIL DE SAINT HILAIRE</S.TitleA>
              <S.TextoA>
                Direção: Berenice Mendes.<br />
                Produção Executiva: Lu Rufalco.<br />
                Direção de som: Claudio Silva.<br />
                Direção de Fotografia: Peter Lorenzo.<br />
                Direção de arte: Rui Almeida.<br />
                Visagista: Zenor Ribas.<br />
                Assistente de cenografia: Reale Filho.<br />
                Cinegrafista: Farpa Gomes.<br />
                Plato: Zinho de Oliveira.<br />
                Produtores: Homero Camargo, Sandro Alves e Silvana Fontana.<br />
                Assessoria de imprensa: Silvana Fontana.
              </S.TextoA>
            </S.TextoAContinerBigCard>
          </S.TopSectionCard>
          <S.TopSectionCardB>
            <S.CardlindText height='30vh' />
            <S.TextoBigCardSection>
              <S.TitleBigcardB>
                SOBRE:
              </S.TitleBigcardB>
              <S.TextoB>
                No início do século 20, Auguste de Saint Hilaire, um francês bem-nascido, aventurou-se pelo interior do Brasil para registrar a diversidade da flora do país. Além da descrição das paisagens, seus relatos de viagem descreviam os costumes dos habitantes dos locais que visitava. A passagem do botânico por terras paranaenses é o tema do documentário O Brasil de Saint Hilaire.
                Elenco: Mauro Zanatta (jornalista e Saint Hilaire), Claudete Pereira Jorge (pauteira do jornal e duas personagens de época), Richard Rebelo (fotógrafo e guia), Ronald Pinheiro (motorista do jornal e Sebastião) e Breno Bonin (José Félix).
              </S.TextoB>
            </S.TextoBigCardSection>
          </S.TopSectionCardB>
          <S.TopSectionCardC>
            <S.CardButton>Veja as fotos da produção</S.CardButton>
          </S.TopSectionCardC>
        </S.BigCard>
        <S.BigCard height='auto'>
          <S.TopSectionCard InvertCard={true}>
            <S.TextoAContinerBigCard>
              <S.TitleA>PROJETO IDENTIDADE</S.TitleA>
              <S.TextoA>
                Direção: Berenice Mendes.<br />
                Produção Executiva: Lu Rufalco.<br />
                Direção de som: Claudio Silva.<br />
                Direção de Fotografia: Peter Lorenzo.<br />
                Direção de arte: Rui Almeida.<br />
                Visagista: Zenor Ribas.<br />
                Assistente de cenografia: Reale Filho.<br />
                Cinegrafista: Farpa Gomes.<br />
                Plato: Zinho de Oliveira.<br />
                Produtores: Homero Camargo, Sandro Alves e Silvana Fontana.<br />
                Assessoria de imprensa: Silvana Fontana.
              </S.TextoA>
            </S.TextoAContinerBigCard>
            <S.ContainerBigCardFotoB >
              <S.ImgFotoB src={cooperativa111} />
            </S.ContainerBigCardFotoB>
          </S.TopSectionCard>
          <S.TopSectionCardB>
            <S.CardlindText height='55vh' />
            <S.TextoBigCardSection>
              <S.TitleBigcardB>
                SOBRE:
              </S.TitleBigcardB>
              <S.TextoB>
                Remexer a cultura popular significa encontrar momentos e personagens reais fascinantes. De muito tempo e em várias regiões brasileiras há os seguidores de São Gonçalo,santo português que promovia a música e danças para aproximar os tidos como “excluídos “. Depois de anos observando comunidades regionais do Paraná, como Ventania, e realizando outros trabalhos audiovisuais de resgate histórico e cultural, percebemos que as romarias que avançam madrugada a dentro são bastantes fortes . Os envolvidos pedem bênção,pagam promessas, fazem oferendas ao santo, dançam e cantam por horas a fio em filas emparelhadas de casais. O ritual faz parte do imaginário dos mais velhos aos mais jovens. Este documentário tem como olhar o resgate e preservação desta importante manifestação da cultura popular, conhecida como Dança de São Gonçalo,realizada há mais de um século em Ventania e região dos Campos Gerais do Paraná. As cavalgadas fazem parte do universo destas comunidades e por isso mesmo nesse trabalho ela será mais uma ferramenta narrativa,ele é apresentada como uma forma de manter a dança de São Gonçalo viva. Assim a câmera percorreu durante vários momentos,estradas e romarias,histórias e causos,promessas e conquistas,contando com a participação de uma gente forte e de fé. Isso que o documentário experimentou fazer e imprimir.
              </S.TextoB>
            </S.TextoBigCardSection>
          </S.TopSectionCardB>
          <S.TopSectionCardC>
            <S.CardButton>Veja as fotos da produção</S.CardButton>
          </S.TopSectionCardC>
        </S.BigCard>
        <S.BigCard height='auto'>
          <S.TopSectionCard>
                            <S.ContainerBigCardFoto >
              <S.ImgFotoA src={tropeiro} />
            </S.ContainerBigCardFoto>
            <S.TextoAContinerBigCard>
              <S.TitleA>Tropeiro:
                @lma sem fronteira</S.TitleA>
              <S.TextoA>
                                Direção: Berenice Mendes.<br />
                Produção Executiva: Lu Rufalco.<br />
                Direção de som: Claudio Silva.<br />
                Direção de Fotografia: Peter Lorenzo.<br />
                Direção de arte: Rui Almeida.<br />
                Visagista: Zenor Ribas.<br />
                Assistente de cenografia: Reale Filho.<br />
                Cinegrafista: Farpa Gomes.<br />
                Plato: Zinho de Oliveira.<br />
                Produtores: Homero Camargo, Sandro Alves e Silvana Fontana.<br />
                Assessoria de imprensa: Silvana Fontana.
              </S.TextoA>
            </S.TextoAContinerBigCard>
          </S.TopSectionCard>
          <S.TopSectionCardB>
            <S.CardlindText height='50vh' />
            <S.TextoBigCardSection>
              <S.TitleBigcardB>
                SOBRE:
              </S.TitleBigcardB>
              <S.TextoB>
                O tropeirismo como  movimento iniciador de uma importante trajetória que desembocou em outras vias,como a ferrovia,a rodovia,e mais recentemente a infovia.
                É nessa linha narrativa que foi estruturado o documentário Tropeiro: @lma sem fronteira, produzido pela Cooperativa Cinema & Mídias Digitais.
                Na verdade ao falar dessas outras vias, o trabalho tenta demonstrar que o instinto desbravador do homem tropeiro perdura.
                O filme foi totalmente rodado na região dos Campos Gerais-Pr,tendo como base a cidade de Tibagí e o Canyon do Guartelá,entre setembro e outubro d 2002.
                A produção conseguiu reunir cerca de 17 horas de depoimentos e imagens relacionadas ao tropeirismo e aos demais temas,com depoimentos históricos de ex-tropeiros.
                Trata-se de um material importantíssimo para preservação da memória do tropeirismo e da nossa história .

              </S.TextoB>
            </S.TextoBigCardSection>
          </S.TopSectionCardB>
          <S.TopSectionCardC>
            <S.CardButton>Veja as fotos da produção</S.CardButton>
          </S.TopSectionCardC>
        </S.BigCard>
      </S.BodyB>
      <S.BodyC>
        <S.TitleC>
          VEJA O TRAILER DOS FILMES:
        </S.TitleC>
        <S.VideoWrapper>
          <div style={{ width: '100%', height: '100%' }}>
            <ReactPlayer
              url={video1}
              width="100%"
              height="100%"
              controls
            />
          </div>
        </S.VideoWrapper>
      </S.BodyC>
    </S.MainContainer >
  );
};

export default ProjetoIdentidade;
