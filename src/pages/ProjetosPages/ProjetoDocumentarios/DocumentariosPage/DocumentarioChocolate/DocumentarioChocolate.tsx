import * as S from "./DocumentarioChocolateStyled";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useImagesLoaded from "../../../../../hooks/useImagesLoaded";
import LoadingOverlay from "../../../../../components/LoadingComponente/Loading";

const foto =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758040686/choco_der9fq.jpg";

interface Video {
  id: number;
  title: string;
  src: string;
}

const DocumentarioChocolate: React.FC = () => {
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
    title: "Trailer OS XERETAS",
    src: "https://www.youtube.com/watch?v=5aer7Iu-Lds",
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
            <S.TitleA>Chocolate: O Eterno Cidadão do Samba</S.TitleA>
            <S.TextoA>
              O Eterno Cidadão Samba é uma homenagem e também uma profunda
              reflexão sobre a luta contra o preconceito racial e social. O
              filme retrata com sensibilidade e autenticidade a história desse
              homem que, apesar de todas as adversidades, manteve vivo o
              espírito do samba e sua cultura, tornando-se uma referência e
              inspiração para muitas gerações. Chocolate, cujo nome verdadeiro
              era Mansueden dos Santos Prudente, foi muito mais do que um
              sambista. Ele foi um símbolo de resistência e orgulho para a
              comunidade negra em Curitiba, enfrentando o racismo e as
              dificuldades econômicas com a alegria contagiante do samba. Sua
              ddbddiãti Chocolate, cujo nome verdadeiro era Mansueden dos Santos
              Prudente, foi muito mais do que um sambista. Ele foi um símbolo de
              resistência e orgulho para a comunidade negra em Curitiba,
              enfrentando o racismo e as dificuldades econômicas com a alegria
              contagiante do samba. Sua presença nas rodas de samba e sua
              dedicação em manter viva essa tradição cultural fizeram dele uma
              figura amada e respeitada, não só no Paraná, mas em todo o Brasil.
              O documentário mergulha na vida de Chocolate, trazendo depoimentos
              de amigos, familiares e músicos que compartilharam momentos
              inesquecíveis com ele. Bem como a importância do samba como forma
              de expressão cultural e resistência, destacando o papel que
              Chocolate desempenhou na preservação e promoção dessa arte em
              Curitiba. Uma celebração da vida e obra de Chocolate, o
              documentário é também uma reflexão sobre a importância da luta
              contra o preconceito e a valorização da cultura negra.
            </S.TextoA>
          </S.TextoWrap>
        </S.ContainerSubA>
        <S.TextoC>
          <strong>Direção:</strong> Nivaldo Lopes e Eduardo Prante
        </S.TextoC>
      </S.Body>
      <S.BodyB>
        <S.TitleB>Nivaldo Lopes</S.TitleB>
        <S.TextB>
          Cineasta, montador e produtor (nascido em 22/06/1957, Itambaracá-PR).
          Atua no cinema desde 1980, com experiência em direção, roteiro,
          fotografia, montagem e produção. É produtor cinematográfico registrado
          na ANCINE (nº 2599) e tem DRT 14974.
          <br />
          Filmografia própria: realizou 8 curtas e 1 longa, além de
          documentários e médias-metragens.
          <br />
          Entre os destaques: Chocolate – O Eterno Cidadão Samba (2024),
          Presença Negra em Curitiba (2018), Presos Comuns (2009), Mar Paraguayo
          (2004) e o longa A Guerra do Pente (1986).
          <br />
          <strong>Colaborações:</strong> atuou como montador, roteirista,
          diretor de arte e produtor em diversos projetos do cinema paranaense,
          trabalhando com cineastas como Geraldo Pioli, Moacir David, Estevan
          Silveira e outros. Produções institucionais: desenvolveu documentários
          para a Fundação Cultural de Curitiba, como Hip Hop em Terra de Polaco
          e Projeto Arquivo Memória.
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

export default DocumentarioChocolate;
