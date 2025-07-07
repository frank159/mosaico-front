import * as S from "./TropicaisStyled";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const tropicais =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324659/Tropicais_eiegoa.png";
const f1 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324640/1p_nbx9ba.png";
const f2 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324645/2p_jlm5ao.png";
const f3 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324641/3p_f64pgw.png";
const f4 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324641/4p_lnels9.png";
const f5 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324642/5p_ff0hmb.png";
const f6 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324640/6p_d17jqg.png";

const Tropicais: React.FC = () => {
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
            <S.ImgFotoA src={tropicais} />
          </S.ContainerBigCardFoto>
          <S.TextoAContinerBigCard>
            <div>
              <S.TitleA>SONHOS TROPICAIS</S.TitleA>
            </div>

            <S.TextoB>
              Em 1889 chega ao Rio de Janeiro no mesmo navio o sanitarista
              Oswaldo Cruz (Bruno Giordano), que retorna ao pais após anos de
              estudo na Europa, e a jovem Esther (Carolina Kasting), polonesa
              que veio ao Brasil na promessa de se casar e constituir familia.
              Cruz logo consegue emprego como médico de uma fábrica de tecidos,
              enquanto que Esther não tem a mesma sorte, logo descobrindo que a
              proposta de casamento era apenas uma farsa, preparada no intuito
              de trazer ao pais jovens polonesas, as "polacas", para trabalharem
              como prostitutas nos bordéis da cidade. Inicialmente Esther
              resiste ao destino a ela traçado mas, sem opção, acaba cedendo e
              recebe a ajuda de Vania (Lu Grimaldi), polaca que nem ela que foi
              vitima do mesmo golpe anos atrás. Enquanto isso Cruz começa sua
              ascensão na medicina local, assumindo o comando do Instituto
              Soropédico de Manguinhos, onde pesquisa a cura de doenças como a
              peste e a febre amarela. As medidas de Cruz se mostram eficazes.
              Até que, na tentativa de extinguir a variola, propõe que maiores
              de 6 meses sejam obrigados a se vacinarem e desencadeia a Revolta
              da Vacina.
            </S.TextoB>
            <S.TextoC>
              <strong>Gênero:</strong> drama biográfico
              <br />
              <strong>Direção:</strong> André Sturm
              <br />
              <strong>Produção:</strong> André Sturm, Flávio Chaves
              <br />
              <strong>Roteiro:</strong> André Sturm, Fernando Bonassi, Victor Navas
              <br />
              <strong>Baseado em:</strong> <em>Sonhos Tropicais</em>, de Moacyr, Scliar
              <br />
              <strong>Elenco:</strong> Carolina Kasting, Bruno Giordano, Lu Grimaldi, Flávio Galvão,Celso Frateschi, Ingra Liberato
              <br />
              <strong>Cinematografia:</strong> Jacob Solitrenick
              <br />
              <strong>Direção de arte:</strong> Cristiano Amaral
              <br />
              <strong>Figurino:</strong> Mariza Guimarães Couto
              <br />
              <strong>Edição:</strong> Cristina Amaral
              <br />
              <strong>Companhia(s) produtora(s):</strong> Pandora Filmes
              <br />
              <strong>Lançamento:</strong> 26 de abril de 2002[1]
              <br />
              <strong>Idioma:</strong> português brasileiro
            </S.TextoC>
          </S.TextoAContinerBigCard>
        </S.TopSectionCard>
      </S.Body>
      <S.GalleryContainer>
        <S.Gallery>
          <S.GalleryCard>
            <img src={f1} alt="Foto 1" onClick={() => handleExpand(f1)} style={{ cursor: isMobile ? "default" : "pointer" }} />
          </S.GalleryCard>
          <S.GalleryCard>
            <img src={f2} alt="Foto 2" onClick={() => handleExpand(f2)} style={{ cursor: isMobile ? "default" : "pointer" }} />
          </S.GalleryCard>
          <S.GalleryCard>
            <img src={f3} alt="Foto 3" onClick={() => handleExpand(f3)} style={{ cursor: isMobile ? "default" : "pointer" }} />
          </S.GalleryCard>
          <S.GalleryCard>
            <img src={f4} alt="Foto 4" onClick={() => handleExpand(f4)} style={{ cursor: isMobile ? "default" : "pointer" }} />
          </S.GalleryCard>
          <S.GalleryCard>
            <img src={f5} alt="Foto 5" onClick={() => handleExpand(f5)} style={{ cursor: isMobile ? "default" : "pointer" }} />
          </S.GalleryCard>
          <S.GalleryCard>
            <img src={f6} alt="Foto 6" onClick={() => handleExpand(f6)} style={{ cursor: isMobile ? "default" : "pointer" }} />
          </S.GalleryCard>
        </S.Gallery>
      </S.GalleryContainer>
      <S.BodyC>
        <S.TitleC>• assista o trailer:</S.TitleC>
        <S.VideoWrapper>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=KAZZe831BJg"
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
            onClick={e => {
              e.stopPropagation();
              handleClose();
            }}
          />
        </S.ModalOverlay>
      )}
    </S.MainContainer>
  );
};

export default Tropicais;
