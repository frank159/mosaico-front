import { useEffect, useState } from "react";
import * as S from "./FilmeEçaDeQueirozStyled";
import useImagesLoaded from "../../../../../hooks/useImagesLoaded";
import LoadingOverlay from "../../../../../components/LoadingComponente/Loading";

const FilmeEçaDeQueiroz: React.FC = () => {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [onLoading, setOnLoading] = useState(true);

  const handleExpand = (src: string) => {
    setFullScreenImage(src);
  };

  const img1 =
    "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758223385/3_1_bkkh9q.png";
  const img2 =
    "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758222389/1_1_qoxe7q.png";
  const img3 =
    "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758223215/4_zbvxxn.png";
  const img4 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758222371/5_np0thz.png";
  const img5 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758222376/6_vvhq9o.png";
  const img6 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758222381/7_hfjmx7.png";
  const img7 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758222385/8_x3xhnj.png";
  const img8 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758223276/9_v3dwml.png";
  const img9 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758222379/10_czaldo.png";

  const imagens = [img2, img3, img4, img5, img6, img7, img8, img9];

  const imageUrls = [...imagens, img1];
  const allImagesLoaded = useImagesLoaded(imageUrls);

  useEffect(() => {
    if (allImagesLoaded) {
      const timer = setTimeout(() => {
        setOnLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [allImagesLoaded]);

  const handleClose = () => setFullScreenImage(null);

  return (
    <S.MainContainer>
      {onLoading && <LoadingOverlay />}

      <S.Body>
        <S.ContainerSubA>
          <S.ContainerLeftA>
            <S.ImgFoto src={img1} alt="Imagem do filme" />
          </S.ContainerLeftA>
          <S.ContainerRightA>
            <S.TextoAContiner>
              <S.TitleA>Ultimo Endereço de Eça de Queiroz</S.TitleA>
              <S.TextoA>
                Rodrigo, um boêmio de 25 anos com transtorno de atenção nunca
                diagnosticado, sonha em se tornar escritor, mas não consegue
                escrever uma única linha. Em Curitiba, vive às custas dos pais e
                gasta o dinheiro que consegue arrancar deles — e até de Fátima,
                a prostituta que é sua única relação verdadeira — em noites que
                só aprofundam sua sensação de fracasso.
                <br />
                <br />
                Convencido por um professor cínico de que só em Portugal poderia
                se tornar grande, Rodrigo falsifica uma bolsa de estudos e parte
                rumo a Lisboa. Lá, perde-se em uma jornada delirante entre
                memórias, fantasias e os fantasmas de seus ídolos literários,
                vendo em cada nova mulher apenas a sombra de uma obsessão
                impossível.
                <br />
                <br />
                Sem nunca pronunciar uma palavra, Rodrigo atravessa essa
                odisséia silenciosa até chegar à casa de Eça de Queiroz. É o
                único objetivo que consegue cumprir em vida — mas ali encontra
                apenas o fim de sua própria história: um homem que sonhava em
                escrever e terminou como um fragmento inacabado.
              </S.TextoA>
            </S.TextoAContiner>
            <S.ButtonB
              onClick={() => {
                window.open(
                  "https://www.canva.com/design/DAGzC65ruVg/iAsMChXiP9dk4fZ6j-QsrQ/view?utm_content=DAGzC65ruVg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=heb007a42f6#1",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Saiba Mais
            </S.ButtonB>
          </S.ContainerRightA>
        </S.ContainerSubA>
      </S.Body>
      <S.GalleryContainer>
        {imagens.map((src, i) => (
          <S.GalleryItem key={i}>
            <S.GalleryImg
              onClick={() => handleExpand(src)}
              src={src}
              alt={`Imagem ${i}`}
            />
          </S.GalleryItem>
        ))}
      </S.GalleryContainer>
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

export default FilmeEçaDeQueiroz;
