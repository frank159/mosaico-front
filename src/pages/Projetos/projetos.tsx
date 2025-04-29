import * as S from "./projetosStyled";

const faixaMosaico = require("../../assets/images/img/faixaMosaico.png");
const img1 = require("../../assets/images/img/luz.png");
const img2 = require("../../assets/images/img/boat2.jpg");
const img3 = require("../../assets/images/img/comuni.png");
const img4 = require("../../assets/images/logo/logoCA.png");

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
                      O projeto Luz, Câmera, EcoAção! Arte e Sustentabilidade propõe
                      um espaço cultural inovador e interativo durante a COP 30, em
                      novembro de 2025, em Belém/PA, ancorado em um barco no rio
                      Guamá. O objetivo é explorar como as mudanças ambientais
                      impactam o bem-estar psicológico, promovendo soluções
                      sustentáveis e fomentando novas ideias. Utilizando as artes
                      visuais, o projeto destaca iniciativas ambientais em andamento
                      e inspira estratégias futuras, sendo um ponto de encontro para
                      participantes da COP 30, artistas, ativistas, comunidade local
                      e a mídia nacional e internacional.
                    </S.CardTextProjeto>
                  </div>
                  <S.ButtonCard onClick={() => handleProjetoClick('/EcoAcao')} >Saiba Mais</S.ButtonCard>
                </S.CardTextContainerProjeto>
              </S.CardMainContainer>
            </S.CardProjeto>
            <S.CardProjeto >
              <S.CardMainContainer>
                <S.CardImgFremeProjeto>
                  <S.CardImgProjeto src={img4} />
                </S.CardImgFremeProjeto>
                <S.CardTextContainerProjeto>
                  <div>

                    <S.CardTitleProjeto>
                      <h2>CAP - Centro audiovisual do Paraná</h2>
                    </S.CardTitleProjeto>
                    <S.CardTextProjeto>
                      O Centro Audiovisual do Pr desenvolve projetos voltados para
                      educação audiovisual, seja na realização de oficinas de
                      criação e produção em si, como também na produção de conteúdo
                      de entreterimento com forte engajamento educacional e temática
                      de floresta e reciclagem do lixo. Trabalhamos com foco na
                      comunicação com crianças e adolescentes, promovendo educação
                      audiovisual empírica, onde os participantes aprendem sobre o
                      processo criativo, com resultados concretos de produção
                      audiovisual.
                    </S.CardTextProjeto>
                  </div>
                  <S.ButtonCard onClick={() => handleProjetoClick('/CAP')}>Saiba Mais</S.ButtonCard>
                </S.CardTextContainerProjeto>
              </S.CardMainContainer>
            </S.CardProjeto>
            <S.CardProjeto >
              <S.CardMainContainer>
                <S.CardImgFremeProjeto>
                  <S.CardImgProjeto src={img3} />
                </S.CardImgFremeProjeto>
                <S.CardTextContainerProjeto>
                  <div>
                    <S.CardTitleProjeto>
                      <h2>
                        CEEPA - Centro de Educação e Produção Audiovisual do Paraná
                      </h2>
                    </S.CardTitleProjeto>
                    <S.CardTextProjeto>
                      O projeto Centro de Excelência em Educação e Produção
                      Audiovisual, iniciado em 2001, foi uma iniciativa
                      sócio-cultural desenvolvida pela CAP com foco na arte-cidadania. Ele usou o audiovisual e
                      formas de comunicação como ferramentas para a formação humana
                      e promoção da cidadania, atendendo jovens de 12 a 17 anos em
                      comunidades carentes. O projeto alcançou impacto regional,
                      envolvendo mais de 150 pessoas e inspirando práticas de
                      resgate cultural e inclusão social.
                    </S.CardTextProjeto>
                  </div>
                  <S.ButtonCard onClick={() => handleProjetoClick('/Ceepa')}>Saiba Mais</S.ButtonCard>
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
