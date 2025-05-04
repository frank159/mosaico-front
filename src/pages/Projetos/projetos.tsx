import * as S from "./projetosStyled";

const faixaMosaico = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324647/faixaMosaico_ppbnkm.png'
const img1 = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324652/luz_mhwttp.png'

const Projetos: React.FC = () => {
  const handleProjetoClick = (route: string) => {
    window.location.href = route; // Redireciona a página para a rota especificada
  };

  return (
    <S.MainContainer>
      <S.TopContainer>
        <S.MosaicoWrapper>
          <S.MosaicoImgContainer>
            <S.MosaicoImg src={faixaMosaico} alt="Imagem do mosaico" />
            <S.MosaicoImg
              src={faixaMosaico}
              alt="Imagem do mosaico duplicada"
            />
          </S.MosaicoImgContainer>
        </S.MosaicoWrapper>
      </S.TopContainer>
      <S.ProjetosContainer>
        <S.Line />
        <S.ProjetosListContainer>
          <S.TitlePage>PROJETOS</S.TitlePage>
          <S.ProjetosListContainer1>
            <S.CardProjeto>
              <S.CardMainContainer>
                <S.CardImgFremeProjeto>
                  <S.CardImgProjeto src={img1} />
                </S.CardImgFremeProjeto>
                <S.CardTextContainerProjeto>
                  <div>
                    <S.CardTitleProjeto>
                      {" "}
                      <h2>Luz, Câmera, EcoAção! </h2>
                    </S.CardTitleProjeto>
                    <S.CardTextProjeto>
                      O projeto Luz, Câmera, EcoAção! Arte e Sustentabilidade
                      propõe um espaço cultural inovador e interativo durante a
                      COP 30, em novembro de 2025, em Belém/PA, ancorado em um
                      barco no rio Guamá. O objetivo é explorar como as mudanças
                      ambientais impactam o bem-estar psicológico, promovendo
                      soluções sustentáveis e fomentando novas ideias.
                      Utilizando as artes visuais, o projeto destaca iniciativas
                      ambientais em andamento e inspira estratégias futuras,
                      sendo um ponto de encontro para participantes da COP 30,
                      artistas, ativistas, comunidade local e a mídia nacional e
                      internacional.
                    </S.CardTextProjeto>
                  </div>
                  <S.ButtonCard onClick={() => handleProjetoClick("/EcoAcao")}>
                    Saiba Mais
                  </S.ButtonCard>
                </S.CardTextContainerProjeto>
              </S.CardMainContainer>
            </S.CardProjeto>
          </S.ProjetosListContainer1>
        </S.ProjetosListContainer>
      </S.ProjetosContainer>
    </S.MainContainer>
  );
};

export default Projetos;
