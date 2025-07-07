import * as S from "./FrenteFriaStyled";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const frentefria =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324648/frentefria_gamxjz.png";
const aspas =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324726/aspas_u2hlhq.png";
const f1 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324677/1_gnqnox.png";
const f2 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324640/2_fxe2ma.png";
const f3 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324641/3_aopl2r.png";
const f4 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324641/4_zabiub.png";
const f5 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324641/5_gfo9mt.png";
const f6 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324642/6_tfrgkh.png";
const f7 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324640/7_txh8qi.png";
const f8 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324642/9_oic2ml.png";

const FrenteFria: React.FC = () => {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleExpand = (src: string) => {
    if (!isMobile) setFullScreenImage(src);
  };
  const handleClose = () => setFullScreenImage(null);

  return (
    <S.MainContainer>
      <S.Body>
        <S.TopSectionCard>
          <S.ContainerBigCardFoto>
            <S.ImgFotoA src={frentefria} />
          </S.ContainerBigCardFoto>
          <S.TextoAContinerBigCard>
            <div>
              <S.TitleA>A FRENTE FRIA QUE A CHUVA TRAZ</S.TitleA>
              <S.TextoA>
                Um grupo de playboys organiza a última festa na favela antes da
                mudança no tempo. E para esta noite especial, além das drogas,
                álcool e sexo habituais, eles receberão convidados e penetras
                inusitados: uma viciada que usa e é usada pelo grupo, um cantor
                sertanejo criado na própria favela, um segurança estranho e o
                dono da laje. Essa mistura não pode terminar bem. Livremente
                inspirada na peça homônima de Mario Bortolotto.
              </S.TextoA>
            </div>

            <S.TextoC>
              <strong>Título:</strong> A Frente Fria que a Chuva Traz
              <br />
              <strong>Direção e roteiro:</strong> Neville D’Almeida
              <br />
              <strong>Gênero:</strong> Ficção/Fiction
              <br />
              <strong>Cor:</strong> Color DCP 80'
              <br />
              <strong>País:</strong> Brasil
              <br />
              <strong>Ano:</strong> 2015
              <br />
              <strong>Empresa Produtora:</strong> REPÚBLICA PUREZA, COOPERATIVA
              DE CINEMA E MÍDIAS DIGITAIS
              <br />
              <strong>Produção:</strong> Marcello Ludwig Maia, Homero Camargo,
              Silvana Fontana
              <br />
              <strong>Fotografia:</strong> Kika Cunha
              <br />
              <strong>Montagem:</strong> Tina Saphira
              <br />
              <strong>Música:</strong> Edu Krieger
              <br />
              <strong>Elenco:</strong> Bruna Linzmeyer, Johnny Massaro, Chay
              Sued, Natalia Lima Verde, Juliana Lohmann, Marina Provenzzano,
              Juliane Araujo, Mario Bortolotto
            </S.TextoC>
          </S.TextoAContinerBigCard>
        </S.TopSectionCard>
        <S.SubContainer>
          <S.SubTextContainer>
            A Frente fria que a chuva traz leva jovens ricos à favela e levanta
            questões
            <br />
            sobre o distanciamento entre os dois mundos.
          </S.SubTextContainer>
          <br />
          <br />
          <S.SecaoInicialIcon src={aspas} />
          <S.SubTextContainer>
            O longa de Neville D’Almeida tem como objetivo propor uma análise
            sobre o abuso <br />
            das comunidades pelas classes altas:
            <br />
          </S.SubTextContainer>
          <S.SubTextContainerB>
            “Falamos sobre a cafetinização das favelas pelos ricos sem fazer
            concessões”.
          </S.SubTextContainerB>
        </S.SubContainer>
      </S.Body>
      <S.GalleryContainer>
        <S.Gallery>
          <S.GalleryCard>
            <img
              src={f1}
              alt="Foto 1"
              onClick={() => handleExpand(f1)}
              style={{
                cursor: isMobile ? "default" : "pointer",
              }}
            />
          </S.GalleryCard>
          <S.GalleryCard>
            <img
              src={f2}
              alt="Foto 2"
              onClick={() => handleExpand(f2)}
              style={{
                cursor: isMobile ? "default" : "pointer",
              }}
            />
          </S.GalleryCard>
          <S.GalleryCard>
            <img
              src={f3}
              alt="Foto 3"
              onClick={() => handleExpand(f3)}
              style={{
                cursor: isMobile ? "default" : "pointer",
              }}
            />
          </S.GalleryCard>
          <S.GalleryCard>
            <img
              src={f4}
              alt="Foto 4"
              onClick={() => handleExpand(f4)}
              style={{
                cursor: isMobile ? "default" : "pointer",
              }}
            />
          </S.GalleryCard>
          <S.GalleryCard>
            <img
              src={f5}
              alt="Foto 5"
              onClick={() => handleExpand(f5)}
              style={{
                cursor: isMobile ? "default" : "pointer",
              }}
            />
          </S.GalleryCard>
          <S.GalleryCard>
            <img
              src={f6}
              alt="Foto 6"
              onClick={() => handleExpand(f6)}
              style={{
                cursor: isMobile ? "default" : "pointer",
              }}
            />
          </S.GalleryCard>
          <S.GalleryCard>
            <img
              src={f7}
              alt="Foto 7"
              onClick={() => handleExpand(f7)}
              style={{
                cursor: isMobile ? "default" : "pointer",
              }}
            />
          </S.GalleryCard>
          <S.GalleryCard>
            <img
              src={f8}
              alt="Foto 8"
              onClick={() => handleExpand(f8)}
              style={{
                cursor: isMobile ? "default" : "pointer",
              }}
            />
          </S.GalleryCard>
        </S.Gallery>
      </S.GalleryContainer>
      <S.BodyC>
        <S.TitleC>• assista o trailer:</S.TitleC>
        <S.VideoWrapper>
          <ReactPlayer
            url="https://www.facebook.com/100050233255888/videos/a-frente-fria-que-a-chuva-traz/472630300260914/?rdid=RcQ5gQFkxaSKKzYl"
            width="100%"
            height="100%"
            controls
          />
        </S.VideoWrapper>
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

export default FrenteFria;
