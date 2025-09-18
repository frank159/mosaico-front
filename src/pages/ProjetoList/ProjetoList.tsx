import { useEffect, useState } from "react";
import * as S from "./ProjetoListStyled";

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
  const handleProjetoClick = (route: string) => {
    window.location.href = route; // Redireciona a página para a rota especificada
  };

  useEffect(() => {
    setProjetos([
      {
        img: img0,
        imgAlt: "",
        titulo: "Luz, Câmera, EcoAção! ",
        texto: `O projeto Luz, Câmera, EcoAção! Arte e Sustentabilidade propõe um espaço cultural inovador e interativo durante a COP 30, em novembro de 2025, em Belém/PA, ancorado em um barco no rio Guamá. O objetivo é explorar como as mudanças ambientais impactam o bem-estar psicológico, promovendo soluções sustentáveis e fomentando novas ideias. `,
        link: "/EcoAcao",
      },
      {
        img: img1,
        imgAlt: "",
        titulo: "Ultimo Endereço de Eça de Queiroz ",
        texto: `Rodrigo, um boêmio de 25 anos, parte de Curitiba a Lisboa em busca de se tornar escritor. Ele nunca escreve uma única frase, mas sua vida inteira se transforma em um fragmento inacabado.`,
        link: "/FilmeEçaDeQueiroz",
      },
      {
        img: img2,
        imgAlt: "FILMES",
        titulo: "PRODUÇÃO AUDIO VISUAL - FILMES",
        texto: `Diana no Asfalto, Mataram Zacarias, Mentes artificiais`,
        link: "/Filmes",
      },
      {
        img: img3,
        imgAlt: "SÉRIES",
        titulo: "PRODUÇÃO AUDIO VISUAL - SÉRIES",
        texto: `As domadoras, Purunã`,
        link: "/Series",
      },
      {
        img: img4,
        imgAlt: "DOCUMENTÁRIOS",
        titulo: "PRODUÇÃO AUDIO VISUAL - DOCUMENTÁRIOS",
        texto: `As trilhas das tropas`,
        link: "/Documentarios",
      },
    ]);
  }, []);

  return (
    <S.MainContainer>
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
