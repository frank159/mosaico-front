import React, { useEffect, useState } from "react";
import * as S from "./CEEPAStyled";
import { motion, AnimatePresence } from "framer-motion";
import useImagesLoaded from "../../hooks/useImagesLoaded";
import LoadingOverlay from "../../components/LoadingComponente/Loading";

// Icon imports
const impactoS =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324727/impacto_social_esc_qqf9vw.png";
const impactoM =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324727/impacto_na_midia_esc_mlgpdd.png";
const producao =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324740/producao_e_resultados_esc_hoehdl.png";
const reconhecimento =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324739/reconhecimento_esc_f2g4cw.png";
const estrutura =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324729/LOTUS_PRETO_gdyvta.png";

// Photo imports
const ft1 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324653/ft1_j0anxj.jpg";
const ft2 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324648/ft2_r6geol.jpg";
const ft3 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324648/ft3_t1l25n.jpg";
const ft4 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324648/ft4_n0sgl1.jpg";
const ft5 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324649/ft5_xxr4zj.jpg";
const ft6 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324649/ft6_ygoscz.jpg";
const ft7 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324649/ft7_ud0nlz.jpg";
const ft8 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324649/ft8_gjcg5n.jpg";
const ft9 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324649/ft9_ativz8.jpg";
const ft10 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324650/ft10_yuvah4.jpg";
const ft11 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324650/ft11_hggkyr.jpg";
const img88 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324652/img88_lqnsrt.png";
const coruja =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324711/coruja-pn_wm1vwo.png";

interface Video {
  id: number;
  title: string;
  src: string;
  thumbnail?: string;
}

// Converts YouTube or Google Drive URLs to embed URLs
const getEmbedUrl = (src: string) => {
  const ytMatch = src.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^?&]+)/i);
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube.com/embed/${ytMatch[1]}`;
  }
  if (src.includes("drive.google.com")) {
    return src.replace("/view?usp=drive_link", "/preview");
  }
  return src;
};

const School: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [onLoading, setOnLoading] = useState(true);

  const imageUrls = [
    impactoS,
    impactoM,
    producao,
    reconhecimento,
    estrutura,
    ft1,
    ft2,
    ft3,
    ft4,
    ft5,
    ft6,
    ft7,
    ft8,
    ft9,
    ft10,
    ft11,
    img88,
    coruja,
  ];
  const allImagesLoaded = useImagesLoaded(imageUrls);

  useEffect(() => {
    if (allImagesLoaded) {
      const timer = setTimeout(() => {
        setOnLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [allImagesLoaded]);

  const videos: Video[] = [
    {
      id: 1,
      title: "Terror, Sonho Ou Realidade",
      src: "https://youtu.be/rByDOqWPOBs?si=2VCBuOrfKsoBd3rc",
    },
    {
      id: 2,
      title: "Tropas e Boiadas",
      src: "https://youtu.be/i9g5YIYlxoY?si=RVNIA_adiLp6h9Aq",
    },
    {
      id: 3,
      title: "O Contador de Histórias",
      src: "https://youtu.be/2b_kqC0uCFA?si=hGVaiCLKlUkRX24K",
    },
    {
      id: 4,
      title: "Despertar para Realidade",
      src: "https://youtu.be/qvaB61fi_3g?si=Rqy3sb-2BZsd3I7g",
    },
    {
      id: 5,
      title: "Ilha Perdida",
      src: "https://youtu.be/lcQZUIf4Sso?si=YvmpINYlrC8RS172",
    },
    {
      id: 6,
      title: "Nada Apaga o Amor",
      src: "https://youtu.be/UOlL7dDWlPU?si=xH_gBxL68ZrTqzIo",
    },
    {
      id: 7,
      title: "Redenção",
      src: "https://youtu.be/NaCpEpfbB-8?si=j70MjcG4SFevxQ17",
    },
    {
      id: 8,
      title: "O Resgate",
      src: "https://youtu.be/EZHT_1NNa2o?si=qMjntUVDjzisWZvn",
    },
  ];

  const renderVideoSection = (list: Video[]) => (
    <S.VideoGrid>
      {list.map((video) => (
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
  );

  return (
    <div>
      {onLoading && <LoadingOverlay />}

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
              O Centro de Educação e Produção Audiovisual do Paraná foi um
              projeto piloto realizado em Tibagi, Paraná, Brasil que utilizou o
              cinema e a comunicação como ferramentas de transformação social.
              <br />
              <br />A iniciativa teve como foco adolescentes de 12 a 16 anos da
              rede pública de ensino, promovendo uma formação cultural que
              resultou na produção de 8 filmes organizados pelos próprios
              alunos.
            </S.TextCard>
            <S.ImgCard>
              <S.CardImgProjetoB src={img88} />
            </S.ImgCard>
          </S.TextImgCard>
        </S.TextImgCardMain>
        <S.MainTitleContainer>
          <S.MainTitle>filmes produzidos pelos alunos</S.MainTitle>
        </S.MainTitleContainer>
        <S.VideoContainer>{renderVideoSection(videos)}</S.VideoContainer>
        <S.MainTitleContainer>
          <S.MainTitle>fotos da pré e pós produção</S.MainTitle>
        </S.MainTitleContainer>
        <S.Galeria>
          {[ft2, ft3, ft4, ft5, ft6, ft7, ft8, ft9, ft10, ft11].map(
            (src, i) => (
              <S.ImgContainer key={i}>
                <S.Img src={src} />
              </S.ImgContainer>
            )
          )}
        </S.Galeria>
        <S.MainTitleContainer>
          <S.MainTitle>Reportagens sobre o ceepa</S.MainTitle>
        </S.MainTitleContainer>
        <S.VideoContainerAlt>
          <S.VideoCardAlt
            key={9}
            onClick={() =>
              setSelectedVideo({
                id: 9,
                title: "Case Ceepa",
                src: "https://youtu.be/XsQRllbukoM?si=FdA4IcOPnGNvUH5G",
              })
            }
          >
            <S.VideoThumbnailAlt>
              <iframe
                src={getEmbedUrl(
                  "https://youtu.be/XsQRllbukoM?si=FdA4IcOPnGNvUH5G"
                )}
                width="100%"
                height="100%"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ border: 0 }}
                title={"Globo Reporter"}
              />
            </S.VideoThumbnailAlt>
            <S.VideoCardTitle>• {"Globo Reporter"}</S.VideoCardTitle>
          </S.VideoCardAlt>
        </S.VideoContainerAlt>
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
                <iframe
                  src={getEmbedUrl(selectedVideo.src)}
                  width="100%"
                  height="500px"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ border: 0 }}
                  title={selectedVideo.title}
                />
                <S.CloseButton onClick={() => setSelectedVideo(null)}>
                  ×
                </S.CloseButton>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <S.LinhaHorizontal />
        <S.Organizacao>
          <S.VideoContainerAlt>
            <S.VideoCardAlt
              key={9}
              onClick={() =>
                setSelectedVideo({
                  id: 9,
                  title: "Case Ceepa",
                  src: "https://youtu.be/0m5YbDwTSSg?si=XcblAZA184FYhbkj",
                })
              }
            >
              <S.VideoThumbnail>
                <iframe
                  src={getEmbedUrl(
                    "https://youtu.be/0m5YbDwTSSg?si=XcblAZA184FYhbkj"
                  )}
                  width="100%"
                  height="100%"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ border: 0 }}
                  title={"Entenda o que é o CEEPA"}
                />
              </S.VideoThumbnail>
              <S.VideoCardTitle>• {"Entenda o que é o CEEPA"}</S.VideoCardTitle>
            </S.VideoCardAlt>
          </S.VideoContainerAlt>
          <S.OrganizacaoCard>
            <S.MainTitleContainer>
              <S.MainTitle>organização CEEPA</S.MainTitle>
            </S.MainTitleContainer>
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
          </S.OrganizacaoCard>
        </S.Organizacao>

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
                      Entre 600 inscritos, 30 adolescentes foram selecionados
                      para participar do projeto.
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
                    A iniciativa recebeu reconhecimento nacional e
                    internacional:
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
                      Internacionalmente, foi apresentado como um case de
                      sucesso na 3ª Conferência Internacional BAWB Brasil
                      (Business as an Agent of World Benefit), em 2005.
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
                      Audiovisual e Comunicação, com três laboratórios
                      principais:
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
      <S.CreditosContainer>
        <S.CreditosTitle>Créditos</S.CreditosTitle>
        <S.CreditosList>
          <S.CreditosItem>
            <strong>Marylena Bukowski</strong> – Direção de Arte
          </S.CreditosItem>
          <S.CreditosItem>
            <strong>Pedro Fontana</strong> – Prod. Vz1Pr / Sound Designer
          </S.CreditosItem>
          <S.CreditosItem>
            <strong>Guará Estúdio</strong> – Design e Website
          </S.CreditosItem>
          <S.CreditosItem>
            <strong>Vitória Carvalho</strong> – Design
          </S.CreditosItem>
          <S.CreditosItem>
            <strong>Frank Castro Filho</strong> – Desenvolvimento de Código
          </S.CreditosItem>
          <S.CreditosItem>
            <strong>Agnes Schumacker</strong> – Assistente de Produção
          </S.CreditosItem>
        </S.CreditosList>
      </S.CreditosContainer>
    </div>
  );
};

export default School;
