import * as S from './projetosStyled';

const faixaMosaico = require('../../assets/images/faixaMosaico.png');
const img1 = require('../../assets/images/luz.png');
const img2 = require('../../assets/images/boat2.jpg');
const img3 = require('../../assets/images/comuni.png');

const Projetos: React.FC = () => {

  const handleProjetoClick = (route: string) => {
    window.open(route, '_blank'); // Abre a rota em uma nova aba
  };


  return (
    <S.MainContainer>
      <S.MosaicoWrapper>
        <S.MosaicoImgContainer>
          <S.MosaicoImg src={faixaMosaico} alt="Imagem do mosaico" />
          <S.MosaicoImg src={faixaMosaico} alt="Imagem do mosaico duplicada" />
        </S.MosaicoImgContainer>
      </S.MosaicoWrapper>
      <S.TitlePage >
        PROJETOS
      </S.TitlePage>
      <S.ProjetosContainer>
        <S.Line />
        <S.ProjetosListContainer>
        <S.CardProjeto onClick={() => handleProjetoClick('/EcoAcao')}>
        <S.CardImgFremeProjeto>
              <S.CardImgProjeto src={img1} />
            </S.CardImgFremeProjeto>
            <S.CardTextContainerProjeto>
              <S.CardTitleProjeto>
                Luz, Câmera, EcoAção!
              </S.CardTitleProjeto>
              <S.CardTextProjeto>
                O projeto Luz, Câmera, EcoAção! Arte e Sustentabilidade propõe um espaço cultural<br />
                inovador e interativo durante a COP 30, em novembro de 2025, em Belém/PA, ancorado<br />
                em um barco no rio Guamá. O objetivo é explorar como as mudanças ambientais<br />
                impactam o bem-estar psicológico, promovendo soluções sustentáveis e fomentando<br />
                novas ideias. Utilizando as artes visuais, o projeto destaca iniciativas ambientais em<br />
                andamento e inspira estratégias futuras, sendo um ponto de encontro para participantes<br />
                da COP 30, artistas, ativistas, comunidade local e a mídia nacional e internacional.
              </S.CardTextProjeto>
            </S.CardTextContainerProjeto>
          </S.CardProjeto>
          <S.CardProjeto onClick={() => handleProjetoClick('/Ceepa')}>
            <S.CardImgFremeProjeto>
              <S.CardImgProjeto src={img2} />
            </S.CardImgFremeProjeto>
            <S.CardTextContainerProjeto>
              <S.CardTitleProjeto>
                Educação e produção audiovisual
              </S.CardTitleProjeto>
              <S.CardTextProjeto>
                O projeto Educação e Produção Audiovisual para a Sustentabilidade COP 30, promovido<br />
                pela Cooperativa de Cinema & Mídias Digitais e o Centro Audiovisual do Paraná, visa<br />
                capacitar adolescentes e jovens de comunidades carentes de Belém/PA em técnicas de<br />
                produção audiovisual com foco em temas ambientais como mudanças climáticas,<br />
                biodiversidade e sustentabilidade. O curso, que combina teoria e prática, busca engajar<br />
                os participantes como criadores de conteúdo e agentes de transformação social,<br />
                promovendo a conscientização ambiental e o uso de plataformas digitais para alcançar<br />
                amplos públicos. A iniciativa é uma resposta ao marco da COP 30 no Brasil, incentivando<br />
                a juventude a desempenhar um papel ativo na construção de um futuro sustentável.
              </S.CardTextProjeto>
            </S.CardTextContainerProjeto>
          </S.CardProjeto>
          <S.CardProjeto onClick={() => handleProjetoClick('/Ceepa')}>
            <S.CardImgFremeProjeto>
              <S.CardImgProjeto src={img3} />
            </S.CardImgFremeProjeto>
            <S.CardTextContainerProjeto>
              <S.CardTitleProjeto>
                CEEPA
              </S.CardTitleProjeto>
              <S.CardTextProjeto>
                O projeto Centro de Excelência em Educação e Produção Audiovisual, iniciado em 2001,<br />
                foi uma iniciativa sócio-cultural desenvolvida pela Cooperativa Cinema & Mídias Digitais<br />
                com foco na arte-cidadania. Ele usou o audiovisual e formas de comunicação como<br />
                ferramentas para a formação humana e promoção da cidadania, atendendo jovens de<br />
                12 a 17 anos em comunidades carentes. Com atividades práticas e teóricas, os<br />
                participantes produziram documentários, materiais jornalísticos e conteúdos para<br />
                WebTV, promovendo o desenvolvimento de habilidades técnicas e fortalecendo a<br />
                autoestima comunitária. O projeto alcançou impacto regional, envolvendo mais de 150<br />
                pessoas e inspirando práticas de resgate cultural e inclusão social.
              </S.CardTextProjeto>
            </S.CardTextContainerProjeto>
          </S.CardProjeto>
        </S.ProjetosListContainer>
      </S.ProjetosContainer>
    </S.MainContainer>
  );
};

export default Projetos;
