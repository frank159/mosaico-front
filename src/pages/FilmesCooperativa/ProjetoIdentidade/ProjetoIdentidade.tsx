import * as S from "./ProjetoIdentidadeStyled";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react"; // ou "framer-motion" conforme sua lib
import ReactPlayer from "react-player";
import { useSearchParams } from "react-router-dom";

const idProgeto =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324651/idIMg_jgfzt2.jpg";
const idProgetoDefault =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324652/idProgeto_qi5kn6.png";
const BRASILDeSAINT =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324644/BRASILDeSAINT_w8esax.png";
const cooperativa111 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324647/cooperativa111_jvefqh.png";
const tropeiro =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324659/tropeiro_cyabii.png";
const video1 = "/videos/filme1.webm";

const SAO_GONÇALO1 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324657/SAO_GON%C3%87ALO1_jrlyra.png";
const SAO_GONÇALO2 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324657/SAO_GON%C3%87ALO2_vrqear.png";
const SAO_GONÇALO3 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324657/SAO_GON%C3%87ALO3_fydfer.png";
const SAO_GONÇALO4 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324657/SAO_GON%C3%87ALO4_fns0ib.png";
const SAO_GONÇALO5 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324658/SAO_GON%C3%87ALO5_skjldr.png";
const SAO_GONÇALO6 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324658/SAO_GON%C3%87ALO6_yjgtsm.png";
const SAO_GONÇALO7 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324658/SAO_GON%C3%87ALO7_lldbfh.png";
const SAO_GONÇALO8 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324658/SAO_GON%C3%87ALO8_vjjffu.png";

const saint1 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324654/saint1_ldisvk.png";
const saint2 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324655/saint2_g9ouuo.png";
const saint3 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324655/saint3_ntrlc9.png";
const saint4 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324655/saint4_w2qqhv.png";
const saint5 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324655/saint5_ftgtmn.png";
const saint6 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324655/saint6_j53r23.png";
const saint7 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324656/saint7_pk380v.png";
const saint8 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324656/saint8_htxs3q.png";
const saint9 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324656/saint9_plb2wq.png";
const saint10 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324656/saint10_fpea9n.png";
const saint11 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324657/saint11_hsldnu.png";

interface Video {
  id: number;
  title: string;
  src: string;
}

const ProjetoIdentidade: React.FC = () => {
  const [search] = useSearchParams();
  const fromCooperativa = search.get("fromCooperativa") === "true";
  const mainImage = fromCooperativa ? idProgetoDefault : idProgeto;
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const isMobile = window.innerWidth <= 768;

  const getEmbedUrl = (src: string) => {
    const ytMatch = src.match(
      /(?:youtu\.be\/|youtube\.com\/watch\?v=)([^?&]+)/i
    );
    if (ytMatch && ytMatch[1]) {
      return `https://www.youtube.com/embed/${ytMatch[1]}`;
    }
    if (src.includes("drive.google.com")) {
      return src.replace("/view?usp=drive_link", "/preview");
    }
    return src;
  };

  const frenteFria = {
    id: 1,
    title: "SÃO GONÇALO",
    src: "https://www.youtube.com/watch?v=oYThW2vrqJ8",
  };

  const openGallery = (images: string[]) => {
    setGalleryImages(images);
    setIsModalOpen(true);
  };

  const closeGallery = () => {
    setIsModalOpen(false);
    setGalleryImages([]);
  };

  const toggleFullScreen = (src: string) => {
    if (!isMobile) {
      setFullScreenImage(fullScreenImage ? null : src);
    }
  };

  const sao_goncal = [
    SAO_GONÇALO1,
    SAO_GONÇALO2,
    SAO_GONÇALO3,
    SAO_GONÇALO4,
    SAO_GONÇALO5,
    SAO_GONÇALO6,
    SAO_GONÇALO7,
    SAO_GONÇALO8,
  ];

  const saint = [
    saint1,
    saint2,
    saint3,
    saint4,
    saint5,
    saint6,
    saint7,
    saint8,
    saint9,
    saint10,
    saint11,
  ];

  return (
    <S.MainContainer>
      <S.Body>
        <S.ContainerSubA>
          <S.ContainerLeftA>
            <S.TitleA>PROJETO IDENTIDADE</S.TitleA>
            <S.TextoAContiner>
              <S.TextoA>
                A Cooperativa Cinema & Mídias Digitais realizou o projeto
                IDENTIDADE, uma iniciativa dedicada à exibição e circulação de
                documentários focados no resgate histórico, cultural e
                identitário do Paraná.
              </S.TextoA>
              <S.TextoA>
                Além das exibições, cada local recebeu um box contendo os três
                títulos, ampliando o acesso ao conteúdo e fortalecendo a memória
                cultural paranaense.
              </S.TextoA>
              <S.TextoA>
                Uma ação que reafirmou e valorizou a identidade do Paraná por
                meio do audiovisual.
              </S.TextoA>
            </S.TextoAContiner>
          </S.ContainerLeftA>
          <S.ContainerRightA>
            <S.ImgFoto src={mainImage} />
          </S.ContainerRightA>
        </S.ContainerSubA>
        <S.SubContainer>
          <S.SubTextContainer>
            O projeto percorreu mais de 25 cidades do Estado, levando ao público
            uma mostra composta por três documentários de 52 minutos cada.
          </S.SubTextContainer>
        </S.SubContainer>
      </S.Body>
      <S.BodyB>
        <S.TitleB>• saiba mais sobre os 3 filmes produzidos:</S.TitleB>
        <S.BigCard height="auto">
          <S.TopSectionCard>
            <S.ContainerBigCardFoto>
              <S.ImgFotoA src={BRASILDeSAINT} />
            </S.ContainerBigCardFoto>
            <S.TextoAContinerBigCard>
              <S.TitleA>O BRASIL DE SAINT HILAIRE</S.TitleA>
              <S.TextoA>
                Direção: Berenice Mendes.
                <br />
                Produção Executiva: Lu Rufalco.
                <br />
                Direção de som: Claudio Silva.
                <br />
                Direção de Fotografia: Peter Lorenzo.
                <br />
                Direção de arte: Rui Almeida.
                <br />
                Visagista: Zenor Ribas.
                <br />
                Assistente de cenografia: Reale Filho.
                <br />
                Cinegrafista: Farpa Gomes.
                <br />
                Plato: Zinho de Oliveira.
                <br />
                Produtores: Homero Camargo, Sandro Alves e Silvana Fontana.
                <br />
                Assessoria de imprensa: Silvana Fontana.
              </S.TextoA>
            </S.TextoAContinerBigCard>
          </S.TopSectionCard>
          <S.TopSectionCardB>
            <S.CardlindText />
            <S.TextoBigCardSection>
              <S.TitleBigcardB>SOBRE:</S.TitleBigcardB>
              <S.TextoB>
                No início do século 20, Auguste de Saint Hilaire, um francês
                bem-nascido, aventurou-se pelo interior do Brasil para registrar
                a diversidade da flora do país. Além da descrição das paisagens,
                seus relatos de viagem descreviam os costumes dos habitantes dos
                locais que visitava. A passagem do botânico por terras
                paranaenses é o tema do documentário O Brasil de Saint Hilaire.
                Elenco: Mauro Zanatta (jornalista e Saint Hilaire), Claudete
                Pereira Jorge (pauteira do jornal e duas personagens de época),
                Richard Rebelo (fotógrafo e guia), Ronald Pinheiro (motorista do
                jornal e Sebastião) e Breno Bonin (José Félix).
              </S.TextoB>
            </S.TextoBigCardSection>
          </S.TopSectionCardB>
          <S.TopSectionCardC>
            <S.CardButton onClick={() => openGallery(saint)}>
              Veja as fotos da produção
            </S.CardButton>
          </S.TopSectionCardC>
        </S.BigCard>
        <S.BigCard height="auto">
          <S.TopSectionCard InvertCard={true}>
            <S.TextoAContinerBigCard>
              <S.TitleA>SÃO GONÇALO</S.TitleA>
              <S.TextoA>
                Documentario digital, 2009-2012
                <br />
                Diretor e Produção: Homero Camargo
                <br />
                Roteiro e Produção executiva: Silvana Fontana
                <br />
                Montador:Frank Castro
                <br />
                Diretora de Arte: Marylena Bukowiski
                <br />
                Coordenação de Produção: Bruna Madsen
                <br />
                Assistente de Produção: Cláudio Codagnola
                <br />
                Camera – Cinegrafista: Frank de Castro,Zinho de Oliveira, Ailton
                Mattos.
              </S.TextoA>
            </S.TextoAContinerBigCard>
            <S.ContainerBigCardFotoB>
              <S.ImgFotoB src={cooperativa111} />
            </S.ContainerBigCardFotoB>
          </S.TopSectionCard>
          <S.TopSectionCardB>
            <S.CardlindText height="55vh" />
            <S.TextoBigCardSection>
              <S.TitleBigcardB>SOBRE:</S.TitleBigcardB>
              <S.TextoB>
                Remexer a cultura popular significa encontrar momentos e
                personagens reais fascinantes.De muito tempo e em várias regiões
                brasileiras há os seguidores de São Gonçalo,santo português que
                promovia a música e danças para aproximar os tidos como
                “excluídos “.Depois de anos observando comunidades regionais do
                Paraná, como Ventania, e realizando outros trabalhos
                audiovisuais deresgate histórico e cultural, percebemos que as
                romarias que avançam madrugada a dentro são bastantes fortes .Os
                envolvidos pedem bênção,pagam promessas, fazem oferendas ao
                santo, dançam e cantam por horas a fio em filas emparelhadas de
                casais.O ritual faz parte do imaginário dos mais velhos aos mais
                jovens.Este documentário tem como olhar o resgate e preservação
                desta importante manifestação da cultura popular, conhecida como
                Dança de São Gonçalo,realizada há mais de um século em Ventania
                e região dos Campos Gerais do Paraná.As cavalgadas fazem parte
                do universo destas comunidades e por isso mesmo nesse trabalho
                ela será mais uma ferramenta narrativa,ele é apresentada como
                uma forma de manter a dança de São Gonçalo viva.Assim a câmera
                percorreu durante vários momentos,estradas e romarias,histórias
                e causos,promessas e conquistas,contando com a participação de
                uma gente forte e de fé.Isso que o documentário experimentou
                fazer e imprimir.
              </S.TextoB>
            </S.TextoBigCardSection>
          </S.TopSectionCardB>
          <S.TopSectionCardC>
            <S.CardButton onClick={() => openGallery(sao_goncal)}>
              Veja as fotos da produção
            </S.CardButton>
          </S.TopSectionCardC>
        </S.BigCard>
        <S.BigCard height="auto">
          <S.TopSectionCard>
            <S.ContainerBigCardFoto>
              <S.ImgFotoA src={tropeiro} />
            </S.ContainerBigCardFoto>
            <S.TextoAContinerBigCard>
              <S.TitleA>Tropeiro: @lma sem fronteira</S.TitleA>
              <S.TextoA>
                Direção: Berenice Mendes.
                <br />
                Produção Executiva: Lu Rufalco.
                <br />
                Direção de som: Claudio Silva.
                <br />
                Direção de Fotografia: Peter Lorenzo.
                <br />
                Direção de arte: Rui Almeida.
                <br />
                Visagista: Zenor Ribas.
                <br />
                Assistente de cenografia: Reale Filho.
                <br />
                Cinegrafista: Farpa Gomes.
                <br />
                Plato: Zinho de Oliveira.
                <br />
                Produtores: Homero Camargo, Sandro Alves e Silvana Fontana.
                <br />
                Assessoria de imprensa: Silvana Fontana.
              </S.TextoA>
            </S.TextoAContinerBigCard>
          </S.TopSectionCard>
          <S.TopSectionCardB>
            <S.CardlindText height="50vh" />
            <S.TextoBigCardSection>
              <S.TitleBigcardB>SOBRE:</S.TitleBigcardB>
              <S.TextoB>
                O tropeirismo como  movimento iniciador de uma importante
                trajetória que desembocou em outras vias,como a ferrovia,a
                rodovia,e mais recentemente a infovia. É nessa linha narrativa
                que foi estruturado o documentário Tropeiro: @lma sem fronteira,
                produzido pela Cooperativa Cinema & Mídias Digitais. Na verdade
                ao falar dessas outras vias, o trabalho tenta demonstrar que o
                instinto desbravador do homem tropeiro perdura. O filme foi
                totalmente rodado na região dos Campos Gerais-Pr,tendo como base
                a cidade de Tibagí e o Canyon do Guartelá,entre setembro e
                outubro d 2002. A produção conseguiu reunir cerca de 17 horas de
                depoimentos e imagens relacionadas ao tropeirismo e aos demais
                temas,com depoimentos históricos de ex-tropeiros. Trata-se de um
                material importantíssimo para preservação da memória do
                tropeirismo e da nossa história .
              </S.TextoB>
            </S.TextoBigCardSection>
          </S.TopSectionCardB>
        </S.BigCard>
      </S.BodyB>
      <S.BodyC>
        <S.TitleC>assista!</S.TitleC>
        <S.VideoContainer>
          <S.VideoGrid>
            <S.VideoCard onClick={() => setSelectedVideo(frenteFria)}>
              <S.VideoThumbnail>
                <iframe
                  src={getEmbedUrl(frenteFria.src)}
                  width="100%"
                  height="100%"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ border: 0 }}
                  title={frenteFria.title}
                />
              </S.VideoThumbnail>
            </S.VideoCard>
          </S.VideoGrid>
        </S.VideoContainer>

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
      </S.BodyC>
      {isModalOpen && (
        <S.ModalOverlay onClick={closeGallery}>
          <S.CloseButton onClick={closeGallery}>×</S.CloseButton>
          <S.GalleryContainer onClick={(e) => e.stopPropagation()}>
            {galleryImages.map((src, index) => (
              <S.GalleryImage
                key={index}
                src={src}
                alt={`Gallery image ${index + 1}`}
                onClick={() => toggleFullScreen(src)}
              />
            ))}
          </S.GalleryContainer>
        </S.ModalOverlay>
      )}
      {fullScreenImage && (
        <S.ModalOverlay onClick={() => toggleFullScreen("")}>
          <motion.img
            src={fullScreenImage}
            alt="Full screen"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </S.ModalOverlay>
      )}
    </S.MainContainer>
  );
};

export default ProjetoIdentidade;
