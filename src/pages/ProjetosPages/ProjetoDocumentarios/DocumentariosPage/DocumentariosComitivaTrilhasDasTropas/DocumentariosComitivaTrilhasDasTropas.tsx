import * as S from "./DocumentariosComitivaTrilhasDasTropasStyled";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useImagesLoaded from "../../../../../hooks/useImagesLoaded";
import LoadingOverlay from "../../../../../components/LoadingComponente/Loading";

const foto =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758049779/trilha_e_tropas_xpsqyc.jpg";

interface Video {
  id: number;
  title: string;
  src: string;
}

const horizontalImg1 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758049782/trilha_xv0pdz.jpg";
const horizontalImg2 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758049779/mero_vsgf2p.jpg";
const verticalImg1 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758049779/trilhas_e_tropa_n0tx0j.jpg";
const verticalImg2 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758049779/trilhas_e_tropas_zxijk9.jpg";

const DocumentarioComitivaTrilhasDasTropas: React.FC = () => {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [onLoading, setOnLoading] = useState(true);

  const imageUrls = [
    foto,
    horizontalImg1,
    horizontalImg2,
    verticalImg1,
    verticalImg2,
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

  const SaoGoncalo = {
    id: 1,
    title: "São Gonçalo",
    src: "https://www.youtube.com/watch?v=JHEiPLbJ1as",
  };

  const SaoGoncalo2 = {
    id: 1,
    title: "São Gonçalo",
    src: "https://www.youtube.com/watch?v=wOKElMCuofo",
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => setFullScreenImage(null);
  // Nova versão pra imagem flutuante

  const galeriaFotos = [
    {
      src: verticalImg1,
      alt: "Foto vertical 1",
      orientation: "vertical",
    },
    {
      src: verticalImg2,
      alt: "Foto vertical 2",
      orientation: "vertical",
    },
    {
      src: horizontalImg1,
      alt: "Foto horizontal 1",
      orientation: "horizontal",
    },
    {
      src: horizontalImg2,
      alt: "Foto horizontal 2",
      orientation: "horizontal",
    },
  ];

  return (
    <S.MainContainer>
      {onLoading && <LoadingOverlay />}

      <S.Body>
        <S.ContainerSubA>
          <S.TextoWrap>
            <S.FloatedImage src={foto} alt="Imagem do documentário" />
            <S.TitleA>Comitiva Trilhas Das Tropas</S.TitleA>
            <S.TextoA>
              O projeto contempla a realização de uma série documental em 8
              capítulos de 24 minutos para exibição em TV aberta ou por
              assinatura. O tema é a exploração das trilhas dos tropeiros
              utilizadas no comércio no interior do Brasil desde o século XVIII
              até metade do século XX. Nesta exploração, como um “road-movie” de
              características peculiares, serão visitados os locais frequentados
              pelas tropas e resgatados os principais aspectos culturais da
              passagem das tropas pela nossa história como: linguajar,
              vestimenta, culinária, danças e sobretudo a música. Dividimos a
              série em três partes, sendo a primeira a mais longa, mais
              duradoura na história e provavelmente também a mais conhecida que
              é a condução de tropas de muares desde seus criadouros no Rio
              Grande do Sul e na Argentina até a grande feira de Sorocaba. A
              segunda vai de Sorocaba às minas de ouro de pedras preciosas em
              Minas Gerais com seu ramal “Estrada Real” até Parati. A terceira,
              mais recente, embora extensa liga as minerações de Minas Gerais
              até as minas de Goiás e Mato Grosso, cruzando a área das Gerais
              retratada na obra de Guimarães Rosa.
            </S.TextoA>
          </S.TextoWrap>
        </S.ContainerSubA>
        <S.TextoC>
          <strong>Direção:</strong> Pedro Merege
        </S.TextoC>
      </S.Body>
      <S.BodyB>
        <S.TitleB>Pedro Merege Filho</S.TitleB>
        <S.TextB>
          Diretor, Montador, Diretor de Fotografia e Roteirista. Com 44 anos de
          experiência na área audiovisual e formação em Engenharia
          Cartográfica,cinema e pós-produção.
          <br />
          <br />
          <strong>Experiência:</strong>
          <br />
          • Atuou na Cinemateca do Museu Guido Viaro (1979–1981).
          <br />
          • Engenheiro Cartógrafo e Coordenador de Projetos em empresas como
          Aerodata S.A. e Esteio S.A. (1982–1996).
          <br />
          • Instrutor e professor em instituições como Editora Sagres, Datum
          Ltda., UFPR e FAP.
          <br />
          • Instrutor de oficinas de cinema (Festival Curta 8, Cinemateca de
          Curitiba).
          <br />
          <br />
          <strong>Atuação no Cinema:</strong>
          <br />
          • Diretor, montador e roteirista de curtas, telefilmes e longas
          documentais e de ficção.
          <br />
          • Experiência com softwares de edição (Adobe Premiere, Shotcut,
          DaVinci Resolve) e roteiro (Celtx, Trelby). Premiações:
          <br />
          • Recebeu prêmios em festivais nacionais e internacionais (Gramado,
          Recife, Rio, Maringá, Lapa, entre outros).
          <br />• Obras premiadas incluem Mistérios, Está nas Escrituras,
          Esmarteza e outros curtas exibidos em diversos festivais
        </S.TextB>
      </S.BodyB>
      <S.Galeria>
        <S.GalleryContainer>
          <S.Gallery>
            {/* Vertical esquerda */}
            <S.GalleryCard style={{ gridColumn: "3", gridRow: "1" }}>
              <S.Img
                src={galeriaFotos[0].src}
                alt={galeriaFotos[0].alt}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => setFullScreenImage(galeriaFotos[0].src)}
              />
            </S.GalleryCard>
            {/* Vertical direita */}
            <S.GalleryCard style={{ gridColumn: "6", gridRow: "1" }}>
              <S.Img
                src={galeriaFotos[1].src}
                alt={galeriaFotos[1].alt}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => setFullScreenImage(galeriaFotos[1].src)}
              />
            </S.GalleryCard>
            {/* Horizontal centro cima */}
            <S.GalleryCard style={{ gridColumn: "1 / span 2", gridRow: "1" }}>
              <S.Img
                src={galeriaFotos[2].src}
                alt={galeriaFotos[2].alt}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => setFullScreenImage(galeriaFotos[2].src)}
              />
            </S.GalleryCard>
            {/* Horizontal centro baixo */}
            <S.GalleryCard style={{ gridColumn: "4 / 6 ", gridRow: "1" }}>
              <S.Img
                src={galeriaFotos[3].src}
                alt={galeriaFotos[3].alt}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => setFullScreenImage(galeriaFotos[3].src)}
              />
            </S.GalleryCard>
          </S.Gallery>
        </S.GalleryContainer>
      </S.Galeria>

      <S.BodyC>
        <S.TitleC>Assista agora!</S.TitleC>
        <S.VideoContainer>
          <S.VideoGrid>
            <S.VideoCard onClick={() => setSelectedVideo(SaoGoncalo)}>
              <S.VideoThumbnail>
                <iframe
                  src={getEmbedUrl(SaoGoncalo.src)}
                  width="100%"
                  height="100%"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ border: 0 }}
                  title={SaoGoncalo.title}
                />
              </S.VideoThumbnail>
            </S.VideoCard>
          </S.VideoGrid>
        </S.VideoContainer>
        <S.VideoContainer>
          <S.VideoGrid>
            <S.VideoCard onClick={() => setSelectedVideo(SaoGoncalo2)}>
              <S.VideoThumbnail>
                <iframe
                  src={getEmbedUrl(SaoGoncalo2.src)}
                  width="100%"
                  height="100%"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ border: 0 }}
                  title={SaoGoncalo2.title}
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
      {fullScreenImage && (
        <S.ModalOverlay onClick={handleClose}>
          <S.CloseButton onClick={handleClose}>×</S.CloseButton>
          <img
            src={fullScreenImage}
            alt="Full screen"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
          />
        </S.ModalOverlay>
      )}
    </S.MainContainer>
  );
};

export default DocumentarioComitivaTrilhasDasTropas;
