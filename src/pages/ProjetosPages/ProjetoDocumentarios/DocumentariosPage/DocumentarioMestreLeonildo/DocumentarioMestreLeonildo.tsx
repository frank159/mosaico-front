import * as S from "./DocumentarioMestreLeonildoStyled";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const foto =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758053387/6D63A1BC-275B-4DF7-B8BB-1C26FBACE5C0_shfsmv.png";

interface Video {
  id: number;
  title: string;
  src: string;
}

const DocumentarioMestreLeonildo: React.FC = () => {
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
    src: "https://www.youtube.com/watch?v=MyoaMgpE5oc",
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
            <S.TitleA>Mestre Leonildo sapateando e valseando a vida</S.TitleA>
            <S.TextoA>
              Mestre Leonildo sapateando e valseando a vida é um documentário de
              longa metragem socio-antropológicocultural, captado e finalizado
              em digital, ao longo de mais de 20 anos, que narra, através do
              fandango, num dos biomas de mata atlântica mais preservadas do
              Brasil, a relação de um autentico caiçara que preserva toda sua
              ancestralidade, com seu modo de vida, sua relação com o meio
              ambiente e a arte. O filme busca mostrar a realidade de Leonildo
              Pereira, carismático tocador de rabeca, viola, conhecedor profundo
              das modas fandangueiras, batidas e valsadas, morador de
              Guaraqueçaba, litoral norte do Paraná, que alimenta o corpo com as
              coisas da terra e do mar, e a alma com a arte de construir
              instrumentos, com a dança e com a música.
            </S.TextoA>
          </S.TextoWrap>
        </S.ContainerSubA>
        <S.TextoC>
          <strong>Documentario:</strong> Mestre Leonildo sapateando e valseando
          a vida
          <br />
          <strong>Gênero:</strong> documentário
          <br />
          <strong>Direção e Roteiro:</strong> Geraldo Pioli
          <br />
          <strong>Produção:</strong> Carla Pioli
          <br />
          <strong>Edição / montagem:</strong> Yanko del Pino e Frank de Castro
          <br />
          <strong>Edição de som e mixagem:</strong> Ulisses Galetto
          <br />
          <strong>Diretor musical:</strong> Oswaldo Rios
          <br />
          <strong>Trilha original:</strong> Rogério Gulin
        </S.TextoC>
      </S.Body>
      <S.BodyB>
        <S.TitleB>Geraldo Pioli</S.TitleB>
        <S.TextB>
          <strong>Cineasta paranaense</strong>
          <br />
          <strong>Atividades / Papéis:</strong>
          <br />
          • Diretor e roteirista de vários curtas-metragem.
          <br />
          • Produtor de documentários, ex: “Rádio Educativa do Paraná”.
          <br />
          • Coordenador ou instrutor de cursos, oficinas e práticas de cinema,
          principalmente na Cinemateca de Curitiba.
          <br />
          • Mediador de debates sobre cinema brasileiro.
          <br />
          <br />
          <strong>Obras de destaque:</strong>
          <br />
          • Curta “Aldeia”.
          <br />
          • Curta “Devoção”.
          <br />
          • Documentário sobre a Rádio Educativa do Paraná.
          <br />
          <br />
          <strong>Reconhecimentos / Outros papéis:</strong>
          <br />
          •Ex-presidente da Associação de Vídeo e Cinema do Paraná. 
          <br />
          •Recebeu prêmios como Gralha Azul da Federação Paranaense de Cineclubes, pelo trabalho como programador de cinema, e “Talento do Paraná” em 2000.
          <br />
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

export default DocumentarioMestreLeonildo;
