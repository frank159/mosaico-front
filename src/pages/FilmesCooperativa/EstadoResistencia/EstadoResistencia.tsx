import * as S from "./EstadoResistenciaStyled";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useImagesLoaded from "../../../hooks/useImagesLoaded";
import LoadingOverlay from "../../../components/LoadingComponente/Loading";

interface Video {
  id: number;
  title: string;
  src: string;
}

const estadoDressis =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324647/estadoDressis_guhvqm.png";
const EstadoResistencia: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [onLoading, setOnLoading] = useState(true);

  const imageUrls = [estadoDressis];
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

  const estado = {
    id: 1,
    title: "Trailer ESTADO DE RESISTÊNCIA",
    src: "https://youtu.be/e_Bo84tp0jY",
  };

  return (
    <S.MainContainer>
      {onLoading && <LoadingOverlay />}

      <S.Body>
        <S.TopSectionCard>
          <S.ContainerBigCardFoto>
            <S.ImgFotoA src={estadoDressis} />
          </S.ContainerBigCardFoto>
          <S.TextoAContinerBigCard>
            <div>
              <S.TitleA>ESTADO DE RESISTENCIA</S.TitleA>
              <S.TextoA>
                O documentário aborda diferentes modos de produção agrícola a
                partir de um corte longitudinal da divisa com São Paulo à Santa
                Catarina. Mergulhando em questões como: Quais as relações entre
                a produção de alimentos e a cultura de um povo? Mudanças
                climáticas, mudanças de vidas.
              </S.TextoA>
            </div>
            <S.TextoC>
              <strong>Roteiro e Direção:</strong> Berenice Mendes
              <br />
              <strong>Produção:</strong> Homero Camargo
              <br />
              <strong>Produção Executiva:</strong> Silvana Fontana e Lu Rufalco
              <br />
              <strong>Direção de Fotografia:</strong> Peter Lorenzo
              <br />
              <strong>Cinegrafista:</strong> Raul Custódio
              <br />
              <strong>Assistente de Produção:</strong> Jovana Cestille
              <br />
              <strong>Edição:</strong> Frank Castro
              <br />
              <strong>Web Pesquisa:</strong> Rudlaine Schwertner
              <br />
              <strong>Arte:</strong> Foca
              <br />
              <strong>Exibição:</strong> DOCTV – Circuito da Rede Pública de
              Televisão – 2007
              <br />
              <strong>Mostra:</strong> Mostra de Filmes na Cúpula dos Povos –
              Rio+20 – 2012
            </S.TextoC>
          </S.TextoAContinerBigCard>
        </S.TopSectionCard>
      </S.Body>
      <S.BodyC>
        <S.TitleC>• assista:</S.TitleC>
        <S.VideoContainer>
          <S.VideoGrid>
            <S.VideoCard onClick={() => setSelectedVideo(estado)}>
              <S.VideoThumbnail>
                <iframe
                  src={getEmbedUrl(estado.src)}
                  width="100%"
                  height="100%"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ border: 0 }}
                  title={estado.title}
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
    </S.MainContainer>
  );
};

export default EstadoResistencia;
