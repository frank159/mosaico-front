import * as S from "./SeriePurunaStyled";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const foto =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758056176/as_domadoras_ktkbp2.jpg";

interface Video {
  id: number;
  title: string;
  src: string;
}

const DocumentarioPuruna: React.FC = () => {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [fotosList, setFotosList] = useState<string[]>([]);

  useEffect(() => {
    setFotosList([
      "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758040686/choco_der9fq.jpg",
    ]);
  }, []);

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
    title: "Trailer OS XERETAS",
    src: "https://www.youtube.com/watch?v=XR1ZaUOVQC0",
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
      <S.Body>
        <S.ContainerSubA>
          <S.TextoWrap>
            <S.FloatedImage src={foto} alt="Imagem do documentário" />
            <S.TitleA>Puruna (As Domadoras)</S.TitleA>
            <S.TextoA>
              O seriado conta as aventuras de Franco e Maloni, dois moradores da
              região dos Campos Gerais, que são os guardiões da bela região da
              serra de São Luiz do Purunã. Entre roubo de cavalos, maquinários
              agrícolas, assalto a bancos, a bandidagem não consegue se criar na
              região.
              <br />
              Paolla, Mariana, Jeniffer e Karoliny Quatro mulheres e um desafio:
              domar uma potra xucra da Cabanha São Rafael em apenas 15 dias.
              Enquanto a Cabanha se prepara para recebê-las, elas aterrissam em
              Curitiba e logo seguem para São Luiz do Purunã, onde o primeiro
              desafio as aguarda.
            </S.TextoA>
          </S.TextoWrap>
        </S.ContainerSubA>
        <S.TextoC>
          <strong>Direção e Roteiro:</strong> Willy Schuman
          <br />
          <strong>Produção:</strong> Horse Filmes
          <br />
          <strong>Uma série original:</strong> Cabanha São Rafael.
        </S.TextoC>
      </S.Body>
      <S.BodyB>
        <S.TitleB>Willy Schumann</S.TitleB>
        <S.TextB>
          • Brasileiro, natural de Curitiba.
          <br />
          • Jornalista, escritor, comunicólogo social, psicanalista e produtor
          audiovisual.
          <br />
          • Atua também como roteirista.
          <br />
          <br />
          <strong>Atuação principal:</strong>
          <br />
          • Produz vídeos e filmes, alguns em parceria com seu irmão Werner
          Schumann.
          <br />
          • Interesse acadêmico/intelectual em psicanálise, linguística e no
          estudo da construção de personagens em obras de ficção.
          <br />
          <br />
          <strong>Obras & prêmios destacados:</strong>
          <br />
          • Escreveu o livro Cidade dos Monges.
          <br />
          • Participou de curta-metragem, documentários, e longa-metragem (“Onde
          os poetas morrem primeiro”).
          <br />
          •Recebeu prêmios em festivais de cinema por filmes como Tesouro.
        </S.TextB>
        <S.ButtonB>Saiba Mais</S.ButtonB>
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
      {fullScreenImage && !isMobile && (
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

export default DocumentarioPuruna;
