import { useEffect, useState } from "react";
import * as S from "./ProjetoListStyled";
import useImagesLoaded from "../../hooks/useImagesLoaded";
import LoadingOverlay from "../../components/LoadingComponente/Loading";

interface Projeto {
  img: string;
  imgAlt: string;
  titulo: string;
  texto: string;
  link: string;
}

const faixaMosaico =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324647/faixaMosaico_ppbnkm.png";
const img0 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324652/luz_mhwttp.png";
const img1 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758207231/55_nbgil7.png";
const img2 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1757960530/2_fbh8wl.png";
const img3 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1757960530/1_vdidyk.png";
const img4 =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1757960530/3_ny3ne8.png";

const Projetos: React.FC = () => {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [onLoading, setOnLoading] = useState(true);

  const imageUrls = [faixaMosaico, img0, img1, img2, img3, img4];
  const allImagesLoaded = useImagesLoaded(imageUrls);

  useEffect(() => {
    if (allImagesLoaded) {
      const timer = setTimeout(() => {
        setOnLoading(false);
        
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [allImagesLoaded]);

  const handleProjetoClick = (route: string) => {
    window.location.href = route; // Redireciona a página para a rota especificada
  };

  useEffect(() => {
    setProjetos([
      {
        img: img2,
        imgAlt: "FILMES",
        titulo: "PRODUÇÃO AUDIO VISUAL - FILMES",
        texto: ``,
        link: "/Filmes",
      },
      {
        img: img3,
        imgAlt: "SÉRIES",
        titulo: "PRODUÇÃO AUDIO VISUAL - SÉRIES",
        texto: ``,
        link: "/Series",
      },
      {
        img: img4,
        imgAlt: "DOCUMENTÁRIOS",
        titulo: "PRODUÇÃO AUDIO VISUAL - DOCUMENTÁRIOS",
        texto: ``,
        link: "/Documentarios",
      },
    ]);
  }, []);

  return (
    <S.MainContainer>
      {onLoading && <LoadingOverlay />}

      <S.TopContainer>
        <S.MosaicoWrapper>
          <S.MosaicoImgContainer>
            <S.MosaicoImg src={faixaMosaico} alt="Imagem do mosaico" />
            <S.MosaicoImg src={faixaMosaico} alt="faixa mosaico" />
          </S.MosaicoImgContainer>
        </S.MosaicoWrapper>
      </S.TopContainer>
      <S.ProjetosContainer>
        <S.Line />
        <S.ProjetosListContainer>
          <S.TitlePage>PROJETOS</S.TitlePage>
          <S.ProjetosListContainer1>
            {projetos.map((projeto, index) => (
              <S.CardProjeto>
                <S.CardMainContainer>
                  <S.CardImgFremeProjeto>
                    {projeto.imgAlt ? (
                      <S.CardImgAltProjeto>
                        <h2>{projeto.imgAlt}</h2>
                      </S.CardImgAltProjeto>
                    ) : (
                      <S.CardImgProjeto src={projeto.img} />
                    )}
                  </S.CardImgFremeProjeto>
                  <S.CardTextContainerProjeto>
                    <div>
                      <S.CardTitleProjeto>
                        {" "}
                        <h2>{projeto.titulo}</h2>
                      </S.CardTitleProjeto>
                      <S.CardTextProjeto>{projeto.texto}</S.CardTextProjeto>
                    </div>
                    <S.ButtonCard
                      onClick={() => handleProjetoClick(projeto.link)}
                    >
                      Saiba Mais
                    </S.ButtonCard>
                  </S.CardTextContainerProjeto>
                </S.CardMainContainer>
              </S.CardProjeto>
            ))}
          </S.ProjetosListContainer1>
        </S.ProjetosListContainer>
      </S.ProjetosContainer>
    </S.MainContainer>
  );
};

export default Projetos;
