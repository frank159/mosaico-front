import * as S from "./SeriePurunaStyled";
import React, { useState, useEffect } from "react";
import useImagesLoaded from "../../../../../hooks/useImagesLoaded";
import LoadingOverlay from "../../../../../components/LoadingComponente/Loading";

const foto =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758220017/Purun%C3%A3_wl6z3j.jpg";


const DocumentarioPuruna: React.FC = () => {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
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
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => setFullScreenImage(null);

  return (
    <S.MainContainer>
      {onLoading && <LoadingOverlay />}

      <S.Body>
        <S.ContainerSubA>
          <S.FloatedImage src={foto} alt="Imagem do documentário" />
          <S.TextContainer>
            <S.TextoContainerB>
              <S.TitleA>Puruna</S.TitleA>
              <S.TextoA>
                O seriado conta as aventuras de Franco e Maloni, dois moradores
                da região dos Campos Gerais, que são os guardiões da bela região
                da serra de São Luiz do Purunã. Entre roubo de cavalos,
                maquinários agrícolas, assalto a bancos, a bandidagem não
                consegue se criar na região.
                <br />
                Paolla, Mariana, Jeniffer e Karoliny Quatro mulheres e um
                desafio: domar uma potra xucra da Cabanha São Rafael em apenas
                15 dias. Enquanto a Cabanha se prepara para recebê-las, elas
                aterrissam em Curitiba e logo seguem para São Luiz do Purunã,
                onde o primeiro desafio as aguarda.
              </S.TextoA>
            </S.TextoContainerB>
            <S.TextoC>
              <strong>Direção e Roteiro:</strong> Willy Schuman
              <br />
              <strong>Produção:</strong> Horse Filmes
              <br />
              <strong>Uma série original:</strong> Cabanha São Rafael.
            </S.TextoC>
          </S.TextContainer>
        </S.ContainerSubA>
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
          <br />• Recebeu prêmios em festivais de cinema por filmes como
          Tesouro.
        </S.TextB>
      </S.BodyB>
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

export default DocumentarioPuruna;
