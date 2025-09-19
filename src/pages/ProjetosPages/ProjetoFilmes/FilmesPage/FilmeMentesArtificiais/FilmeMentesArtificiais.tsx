import * as S from "./FilmeMentesArtificiaisStyled";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useImagesLoaded from "../../../../../hooks/useImagesLoaded";
import LoadingOverlay from "../../../../../components/LoadingComponente/Loading";

const foto =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758122815/mentes_srguun.jpg";

interface Video {
  id: number;
  title: string;
  src: string;
}

const FilmeMentesArtificiais: React.FC = () => {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [onLoading, setOnLoading] = useState(true);

  const imageUrls = [foto];
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

  const xeretas = {
    id: 1,
    title: "m",
    src: "https://www.youtube.com/watch?v=VNBxa66Ez_U",
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => setFullScreenImage(null);
  // Nova versão pra imagem flutuante

  return (
    <S.MainContainer>
      {onLoading && <LoadingOverlay />}

      <S.Body>
        <S.ContainerSubA>
          <S.TextoWrap>
            <S.FloatedImage src={foto} alt="Imagem do documentário" />
            <S.TitleA>Mentes Artificiais</S.TitleA>
            <S.TextoA>
              Dois neurocientistas dão os primeiros passos na inserção de
              implantes neurais em seres humanos, criando uma interface
              cérebro-máquina, o que possibilita a manipulação das funções
              cognitivas de seus pacientes, eliminando as suas razões e dores
              existenciais.  O filme longa-metragem mostra uma discreta
              perversidade dos personagens que estão à frente do audacioso
              projeto, que é financiado por um suposto fazendeiro excêntrico.
            </S.TextoA>
          </S.TextoWrap>
        </S.ContainerSubA>
        <S.TextoC>
          <strong>Roteiro original:</strong> Willy Schumann
        </S.TextoC>
      </S.Body>
      <S.BodyB>
        <S.TitleB>Willy Schumann</S.TitleB>
        <S.TextB>
          <br />
          • Brasileiro, natural de Curitiba.
          <br />
          • Jornalista, escritor, comunicólogo social, psicanalista e produtor
          audiovisual.
          <br />
          • Atua também como roteirista. Atuação principal:
          <br />
          • Produz vídeos e filmes, alguns em parceria com seu irmão Werner
          Schumann.
          <br />
          • Interesse acadêmico/intelectual em psicanálise, linguística e no
          estudo da construção de personagens em obras de ficção. Obras &
          prêmios destacados:
          <br />
          • Escreveu o livro Cidade dos Monges.
          <br />
          • Participou de curta-metragem, documentários, e longa-metragem (“Onde
          os poetas morrem primeiro”).
          <br />• Recebeu prêmios em festivais de cinema por filmes como
          Tesouro.{" "}
        </S.TextB>
      </S.BodyB>
      <S.BodyC>
        <S.TitleC>Assista agora!</S.TitleC>
        <S.VideoContainer>
          <S.VideoGrid>
            <S.VideoCard onClick={() => setSelectedVideo(xeretas)}>
              <S.VideoThumbnail>
                <iframe
                  src={getEmbedUrl(xeretas.src)}
                  width="100%"
                  height="100%"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ border: 0 }}
                  title={xeretas.title}
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

export default FilmeMentesArtificiais;
