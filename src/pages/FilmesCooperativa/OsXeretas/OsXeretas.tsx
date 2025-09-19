import * as S from "./OsXeretasStyled";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useImagesLoaded from "../../../hooks/useImagesLoaded";
import LoadingOverlay from "../../../components/LoadingComponente/Loading";

const xeretas1 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324660/xeretas1_yk9fxp.png";

const ft1 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1752102913/WhatsApp_Image_2025-07-09_at_19.03.51_2_nixkhu.jpg";
const ft2 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1752102913/WhatsApp_Image_2025-07-09_at_19.03.51_1_nl2xuc.jpg";
const ft3 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1752102913/WhatsApp_Image_2025-07-09_at_19.03.51_teeo8d.jpg";
const ft4 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324660/xeretas-4_c8fg1r.png";
const ft5 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1752102914/WhatsApp_Image_2025-07-09_at_19.03.50_1_pjm5ay.jpg";
const ft6 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1752102913/WhatsApp_Image_2025-07-09_at_19.03.50_mdeic7.jpg";
const ft7 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1752102913/WhatsApp_Image_2025-07-09_at_19.03.49_ucgeuf.jpg";

interface Video {
  id: number;
  title: string;
  src: string;
}

const OsXeretas: React.FC = () => {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [onLoading, setOnLoading] = useState(true);

  const imageUrls = [xeretas1, ft1, ft2, ft3, ft4, ft5, ft6, ft7];
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
    title: "Trailer OS XERETAS",
    src: "https://www.youtube.com/watch?v=m2NIJ-VwEOo",
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleExpand = (src: string) => {
    // Só permite expandir se não for mobile
    if (!isMobile) setFullScreenImage(src);
  };
  const handleClose = () => setFullScreenImage(null);

  return (
    <S.MainContainer>
      {onLoading && <LoadingOverlay />}

      <S.Body>
        <S.ContainerSubA>
          <S.ContainerLeftA>
            <S.TitleA>os xeretas</S.TitleA>
            <S.TextoAContiner>
              <S.TextoA>
                Duda (Fábio Lins), Tato (José Eduardo Gomes) e Nick (José Luiz
                Batistella) são três amigos inseparáveis que são conhecidos pela
                população local como os Xeretas. Num dia eles encontram uma
                pequena menina com um símbolo tatuado no braço, que está vagando
                perdida pela cidade. Com a ajuda da mística Alana (Ana Lúcia
                Torre), eles descobrem que a garota é na verdade uma viajante
                dos portais do tempo e do espaço e que faz parte dos Aleph, um
                povo responsável pela segurança destes portais. A pequena menina
                precisa retornar ao seu mundo e para isto é necessário que tenha
                em mãos um medalhão, que a chave dos portais, pois senão
                morrerá. Visto isso, os Xeretas resolvem ajudá-la, indo em busca
                dos ladrões que roubaram o medalhão, que estava em um museu de
                São Paulo até pouco tempo atrás.
              </S.TextoA>
              <br />
              <br />
              <br />
              <S.TextoC>
                <strong>Gênero:</strong> aventura, família
                <br />
                <strong>Direção:</strong> Michael Ruman
                <br />
                <strong>Roteiro:</strong> Claudio Galperin, Cláudio Portioli,
                Michael Ruman
                <br />
                <strong>Produção:</strong> Homero Camargo, João Debartolo,
                Robert D'Ávila, Roberto d'Avila
                <br />
                <strong>Elenco:</strong> Ana Lúcia Torre (Alana), Aquilis
                Ferreira (Atilia), Bruno de André (Repórter), Cíntia Grillo (Mãe
                do Nick), Eliana Fonseca (Diretora), Elias Andreato (Tio Elias),
                Fábio Henrique (Erasmo), Fábio Lins (Duda), Fernando Philbert
                (Professor), Francisco Cuoco (Stegner), Jéssyka Bueno Barth
                (Menina do Medalhão), José Eduardo Gomes (Tato), José Luiz
                Batistella (Nick), Richard Zacharias (Ronaldo Sérgio), Roberto
                Arduim, Rodolfo Valentin
                <br />
                <strong>Lançamento:</strong> 1 de junho de 2001
                <br />
                <strong>Duração:</strong> 1h 30min
                <br />
                <strong>Nacionalidade:</strong> Brasil
                <br />
                <strong>Idioma:</strong> português brasileiro
              </S.TextoC>
            </S.TextoAContiner>
          </S.ContainerLeftA>
          <S.ContainerRightA>
            <S.ImgFoto src={xeretas1} />
          </S.ContainerRightA>
        </S.ContainerSubA>
      </S.Body>
      <S.Galeria>
        <S.Gallery>
          <S.GalleryCard>
            <img
              src={ft1}
              alt="Foto 1"
              onClick={() => handleExpand(ft1)}
              style={{ cursor: isMobile ? "default" : "pointer" }}
            />
          </S.GalleryCard>
          <S.GalleryCard>
            <img
              src={ft2}
              alt="Foto 2"
              onClick={() => handleExpand(ft2)}
              style={{ cursor: isMobile ? "default" : "pointer" }}
            />
          </S.GalleryCard>
          <S.GalleryCard>
            <img
              src={ft3}
              alt="Foto 3"
              onClick={() => handleExpand(ft3)}
              style={{ cursor: isMobile ? "default" : "pointer" }}
            />
          </S.GalleryCard>
          <S.GalleryCard>
            <img
              src={ft4}
              alt="Foto 4"
              onClick={() => handleExpand(ft4)}
              style={{ cursor: isMobile ? "default" : "pointer" }}
            />
          </S.GalleryCard>
          <S.GalleryCard>
            <img
              src={ft5}
              alt="Foto 5"
              onClick={() => handleExpand(ft5)}
              style={{ cursor: isMobile ? "default" : "pointer" }}
            />
          </S.GalleryCard>
          <S.GalleryCard>
            <img
              src={ft6}
              alt="Foto 6"
              onClick={() => handleExpand(ft6)}
              style={{ cursor: isMobile ? "default" : "pointer" }}
            />
          </S.GalleryCard>
          <S.GalleryCard>
            <img
              src={ft7}
              alt="Foto 7"
              onClick={() => handleExpand(ft7)}
              style={{ cursor: isMobile ? "default" : "pointer" }}
            />
          </S.GalleryCard>
        </S.Gallery>
      </S.Galeria>
      <S.BodyC>
        <S.TitleC>• assista o trailer:</S.TitleC>
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

export default OsXeretas;
