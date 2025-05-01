import React, { useState } from "react";
import * as S from "./SchoolStyled";
import { motion, AnimatePresence } from "framer-motion";

const impactoM = require("../../assets/images/icons/impacto na midia.png");
const impactoS = require("../../assets/images/icons/impacto social.png");
const producao = require("../../assets/images/icons/producao e resultados.png");
const reconhecimento = require("../../assets/images/icons/reconhecimento.png");
const estrutura = require("../../assets/images/icons/LOTUS BRANCO.png");
const ft1 = require("../../assets/images/img/ft1.jpg");
const ft2 = require("../../assets/images/img/ft2.jpg");
const ft3 = require("../../assets/images/img/ft3.jpg");
const ft4 = require("../../assets/images/img/ft4.jpg");
const ft5 = require("../../assets/images/img/ft5.jpg");
const ft6 = require("../../assets/images/img/ft6.jpg");
const ft7 = require("../../assets/images/img/ft7.jpg");
const ft8 = require("../../assets/images/img/ft8.jpg");
const ft9 = require("../../assets/images/img/ft9.jpg");
const ft10 = require("../../assets/images/img/ft10.jpg");
const ft11 = require("../../assets/images/img/ft11.jpg");
const img88 = require("../../assets/images/img/img88.png");
const coruja = require("../../assets/images/logo/coruja-pn.png");

interface Video {
  id: number;
  title: string;
  src: string;
  thumbnail?: string;
}

// Converte URL de YouTube ou Google Drive em URL de embed
const getEmbedUrl = (src: string) => {
  // YouTube (youtu.be/ID ou youtube.com/watch?v=ID)
  const ytMatch = src.match(
    /(?:youtu\.be\/|youtube\.com\/watch\?v=)([^?&]+)/i
  );
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube.com/embed/${ytMatch[1]}`;
  }
  // Google Drive
  if (src.includes("drive.google.com")) {
    return src.replace("/view?usp=drive_link", "/preview");
  }
  // Default
  return src;
};

const School: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const videos: Video[] = [
    {
      id: 1,
      title: "Terror, Sonho Ou Realidade",
      src: "https://youtu.be/rByDOqWPOBs?si=2VCBuOrfKsoBd3rc",
      thumbnail: require("../../assets/thumbnails/ceepaCaseImg.png"),
    },
    {
      id: 2,
      title: "Tropas e Boiadas",
      src: "https://youtu.be/i9g5YIYlxoY?si=RVNIA_adiLp6h9Aq",
      thumbnail: require("../../assets/thumbnails/ceepaCaseImg.png"),
    },
    {
      id: 3,
      title: "O Contador de Histórias",
      src: "https://youtu.be/2b_kqC0uCFA?si=hGVaiCLKlUkRX24K",
      thumbnail: require("../../assets/thumbnails/ceepaCaseImg.png"),
    },
    {
      id: 4,
      title: "Despertar para Realidade",
      src: "https://youtu.be/qvaB61fi_3g?si=Rqy3sb-2BZsd3I7g",
      thumbnail: require("../../assets/thumbnails/ceepaCaseImg.png"),
    },
    {
      id: 5,
      title: "Ilha Perdida",
      src: "https://youtu.be/lcQZUIf4Sso?si=YvmpINYlrC8RS172",
      thumbnail: require("../../assets/thumbnails/ceepaCaseImg.png"),
    },
    {
      id: 6,
      title: "Nada Apaga o Amor",
      src: "https://youtu.be/UOlL7dDWlPU?si=xH_gBxL68ZrTqzIo",
      thumbnail: require("../../assets/thumbnails/ceepaCaseImg.png"),
    },
    {
      id: 7,
      title: "Redenção",
      src: "https://youtu.be/NaCpEpfbB-8?si=j70MjcG4SFevxQ17",
      thumbnail: require("../../assets/thumbnails/ceepaCaseImg.png"),
    },
    {
      id: 8,
      title: "O Resgate",
      src: "https://youtu.be/EZHT_1NNa2o?si=qMjntUVDjzisWZvn",
      thumbnail: require("../../assets/thumbnails/ceepaCaseImg.png"),
    },
  ];

  const reportVideos: Video[] = [
    {
      id: 9,
      title: "Case Ceepa",
      src: "https://youtu.be/0m5YbDwTSSg?si=XcblAZA184FYhbkj",
      thumbnail: require("../../assets/thumbnails/ceepaCaseImg.png"),
    },
    {
      id: 10,
      title: "Globo Reporter",
      src: "https://youtu.be/XsQRllbukoM?si=FdA4IcOPnGNvUH5G",
      thumbnail: require("../../assets/thumbnails/globoreporter.png"),
    },
  ];

  return (
    <S.Container>
      <S.InicialSecao>
        <S.TitleSectio>
          <S.TitleInicial>CEEPA</S.TitleInicial>
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
            O Centro de Educação e Produção Audiovisual do Paraná foi um projeto
            piloto realizado em Tibagi, Paraná, Brasil que utilizou o cinema e a
            comunicação como ferramentas de transformação social.
            <br />
            <br />A iniciativa teve como foco adolescentes de 12 a 16 anos da
            rede pública de ensino, promovendo uma formação cultural que
            resultou na produção de 8 filmes organizados pelos próprios alunos.
          </S.TextCard>
          <S.ImgCard>
            <S.CardImgProjetoB src={img88} />
          </S.ImgCard>
        </S.TextImgCard>
      </S.TextImgCardMain>

      <S.MainTitle>filmes produzidos pelos alunos</S.MainTitle>
      <S.VideoContainer>
        <S.VideoGrid>
          {videos.map((video) => (
            <S.VideoCard key={video.id} onClick={() => setSelectedVideo(video)}>
              <S.VideoThumbnail>
                <iframe
                  src={getEmbedUrl(video.src)}
                  width="100%"
                  height="100%"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ border: 0 }}
                  title={video.title}
                />
              </S.VideoThumbnail>
              <S.VideoCardTitle>• {video.title}</S.VideoCardTitle>
            </S.VideoCard>
          ))}
        </S.VideoGrid>

        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.9)",
                zIndex: 999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                style={{
                  width: "80%",
                  maxWidth: "1200px",
                  position: "relative",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div style={{ position: "relative", width: "100%" }}>
                  <iframe
                    src={getEmbedUrl(selectedVideo.src)}
                    width="100%"
                    height="500px"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{ border: 0 }}
                    title={selectedVideo.title}
                  />
                </div>
                <S.CloseButton onClick={() => setSelectedVideo(null)}>
                  ×
                </S.CloseButton>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </S.VideoContainer>

      <S.MainTitle>fotos da pré e pós produção</S.MainTitle>
      <S.Galeria>
        {[ft1, ft2, ft3, ft4, ft5, ft6, ft7, ft8, ft9, ft10, ft11].map((src, i) => (
          <S.ImgContainer key={i}>
            <S.Img src={src} />
          </S.ImgContainer>
        ))}
      </S.Galeria>

      <S.MainTitle>Reportagens sobre o ceepa</S.MainTitle>
      <S.ReportVideoContainer>
        <S.ReportVideoGrid>
          {reportVideos.map((video) => (
            <S.ReportVideoCard
              key={video.id}
              onClick={() => setSelectedVideo(video)}
            >
              <S.VideoCardTitle>• {video.title}</S.VideoCardTitle>
              <S.VideoThumbnail>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </S.VideoThumbnail>
            </S.ReportVideoCard>
          ))}
        </S.ReportVideoGrid>
      </S.ReportVideoContainer>
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.9)",
              zIndex: 999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                width: "80%",
                maxWidth: "1200px",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ position: "relative", width: "100%" }}>
                <iframe
                  src={getEmbedUrl(selectedVideo.src)}
                  width="100%"
                  height="500px"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ border: 0 }}
                  title={selectedVideo.title}
                />
              </div>
              <S.CloseButton onClick={() => setSelectedVideo(null)}>
                ×
              </S.CloseButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <S.LinhaHorizontal />
      <S.MainTitle>organização</S.MainTitle>
      <S.OrganisationCard>
        <p>
          <strong>Silvana Fontana</strong> – produtora
        </p>
        <p>
          <strong>Homero Camargo</strong> – produtor
        </p>
        <p>
          <strong>Claudio Portiolli</strong> – fotógrafo
        </p>
        <p>
          <strong>Frank de Castro</strong> – montador
        </p>
        <p>
          <strong>Marcio Jacovani</strong> – som
        </p>
        <p>
          <strong>Zinho Oliveira</strong> – assistente de produção
        </p>
        <p>
          <strong>Sandro Alves</strong> – assistente de produção
        </p>
        <p>
          <strong>Ubirajara Gouveia</strong> – assistente de produção
        </p>
        <p>
          <strong>Marylena Bukowski</strong> – diretora de arte
        </p>
      </S.OrganisationCard>
      <S.LinhaHorizontal />
      <S.Body>
        <S.BodyListCardContainer>
          <S.BodyListCard>
            <S.Card>
              <S.CardTitleContainer>
                <S.TitleCard>IMPACTO SOCIAL</S.TitleCard>
                <S.SUbText>
                  A iniciativa envolveu diretamente a comunidade local,
                  alcançando resultados significativos:
                </S.SUbText>
              </S.CardTitleContainer>
              <S.CardContent>
                <S.CardIcon>
                  <S.CardIconImg src={impactoS} />
                </S.CardIcon>
                <S.CardText>
                  <S.StyledListItem>
                    Entre 600 inscritos, 30 adolescentes foram selecionados para
                    participar do projeto.
                    <br />
                  </S.StyledListItem>
                  <S.StyledListItem>
                    Mais de 150 pessoas, direta e indiretamente, foram
                    beneficiadas. A comunidade esteve envolvida em todas as
                    etapas, fortalecendo o senso de pertencimento e cidadania.
                  </S.StyledListItem>
                </S.CardText>
              </S.CardContent>
            </S.Card>
            <S.Card>
              <S.CardTitleContainer>
                <S.TitleCard>PRODUÇÃO E RESULTADOS</S.TitleCard>
                <S.SUbText>
                  Os participantes se engajaram em todas as etapas do processo
                  audiovisual, desde a criação até a finalização:
                </S.SUbText>
              </S.CardTitleContainer>
              <S.CardContent>
                <S.CardIcon>
                  <S.CardIconImg src={producao} />
                </S.CardIcon>
                <S.CardText>
                  <S.StyledListItem>
                    O projeto culminou na Mostra Criação de Cinema, organizada
                    pelos próprios participantes, que contou com um
                    <br />
                    público de aproximadamente 4 mil pessoas.
                  </S.StyledListItem>
                </S.CardText>
              </S.CardContent>
            </S.Card>
            <S.Card>
              <S.CardTitleContainer>
                <S.TitleCard>RECONHECIMENTO</S.TitleCard>
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
                    Nacionalmente, foi destaque em veículos como o Globo
                    Repórter.
                  </S.StyledListItem>
                  <S.StyledListItem>
                    Internacionalmente, foi apresentado como um case de sucesso
                    na 3ª Conferência Internacional BAWB Brasil (Business as an
                    Agent of World Benefit), em 2005.
                  </S.StyledListItem>
                </S.CardText>
              </S.CardContent>
            </S.Card>
            <S.Card>
              <S.CardTitleContainer>
                <S.TitleCard>IMPACTO NA MÍDIA</S.TitleCard>
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
                    Reportagens e divulgações destacaram sua inovação e o
                    impacto positivo na formação dos jovens.
                    <br />
                  </S.StyledListItem>
                  <S.StyledListItem>
                    Promoveu discussões sobre o audiovisual como ferramenta de
                    inclusão e transformação social.
                    <br />
                  </S.StyledListItem>
                </S.CardText>
              </S.CardContent>
            </S.Card>
            <S.Card>
              <S.CardTitleContainer>
                <S.TitleCard>ESTRUTURA</S.TitleCard>
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
                    Audiovisual e Comunicação, com três laboratórios principais:
                    <br />
                    Produção e Criação, Imagem, Áudio
                  </S.StyledListItem>
                </S.CardText>
              </S.CardContent>
            </S.Card>
          </S.BodyListCard>
        </S.BodyListCardContainer>
      </S.Body>
    </S.Container>
  );
};

export default School;
