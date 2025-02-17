import * as S from './projetosStyled';

const faixaMosaico = require('../../assets/images/img/faixaMosaico.png');
const img1 = require('../../assets/images/img/luz.png');
const img2 = require('../../assets/images/img/boat2.jpg');
const img3 = require('../../assets/images/img/comuni.png');
const img4 = require('../../assets/images/logo/logoCA.png');

const Projetos: React.FC = () => {

  const handleProjetoClick = (route: string) => {
    window.open(route, '_blank'); // Abre a rota em uma nova aba
  };


  return (
    <S.MainContainer>
      <S.TopContainer>
        <S.MosaicoWrapper>
          <S.MosaicoImgContainer>
            <S.MosaicoImg src={faixaMosaico} alt="Imagem do mosaico" />
            <S.MosaicoImg src={faixaMosaico} alt="Imagem do mosaico duplicada" />
          </S.MosaicoImgContainer>
        </S.MosaicoWrapper>
        <S.TitlePage >
          PROJETOS
        </S.TitlePage>
      </S.TopContainer>
      <S.ProjetosContainer>
        <S.Line />
        <S.ProjetosListContainer>
          <S.CardProjeto onClick={() => handleProjetoClick('/EcoAcao')}>
            <S.CardMainContainer>
              <S.CardImgFremeProjeto>
                <S.CardImgProjeto src={img1} />
              </S.CardImgFremeProjeto>
              <S.CardTextContainerProjeto>
                <S.CardTitleProjeto>
                  <strong> Luz, Câmera, EcoAção!</strong>
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
            </S.CardMainContainer>
          </S.CardProjeto>
          <S.CardProjeto onClick={() => handleProjetoClick('/CAP')}>
            <S.CardMainContainer>
              <S.CardImgFremeProjeto>
                <S.CardImgProjeto src={img4} />
              </S.CardImgFremeProjeto>
              <S.CardTextContainerProjeto>
                <S.CardTitleProjeto>
                  <strong>CAP</strong> - Centro audiovisual do Paraná
                </S.CardTitleProjeto>
                <S.CardTextProjeto>
                  O Centro Audiovisual do Pr desenvolve projetos voltados para educação audiovisual, seja<br />
                  na realização de oficinas de criação e produção em si, como também na produção de<br />
                  conteúdo de entreterimento com forte engajamento educacional e temática<br />
                  de floresta e reciclagem do lixo.<br />
                  Trabalhamos com foco na comunicação com crianças e adolescentes, promovendo<br />
                  educação audiovisual empírica, onde os participantes aprendem sobre o processo criativo,<br />
                  com resultados concretos de produção audiovisual.<br />
                </S.CardTextProjeto>
              </S.CardTextContainerProjeto>
            </S.CardMainContainer>
          </S.CardProjeto>
          <S.CardProjeto onClick={() => handleProjetoClick('/Escola-Digital')}>
            <S.CardMainContainer>
              <S.CardImgFremeProjeto>
                <S.CardImgProjeto src={img2} />
              </S.CardImgFremeProjeto>
              <S.CardTextContainerProjeto>
                <S.CardTitleProjeto>
                  <strong>Escola Digital</strong> - Educação e Produção Audiovisual para a Sustentabilidade
                </S.CardTitleProjeto>
                <S.CardTextProjeto>
                  O curso de audiovisual proposto tem como objetivo principal capacitar crianças e jovens a<br />
                  se expressarem por meio de produções audiovisuais que abordem temas relacionados às<br />
                  mudanças climáticas, à defesa da biodiversidade e à promoção da sustentabilidade.<br />
                  Além disso, busca engajar esse público em uma discussão profunda sobre o papel de<br />
                  cada um na preservação do planeta, tornando-o ciente de sua responsabilidade enquanto<br />
                  cidadãos.
                </S.CardTextProjeto>
              </S.CardTextContainerProjeto>
            </S.CardMainContainer>
          </S.CardProjeto>
          <S.CardProjeto onClick={() => handleProjetoClick('/Ceepa')}>
            <S.CardMainContainer>
              <S.CardImgFremeProjeto>
                <S.CardImgProjeto src={img3} />
              </S.CardImgFremeProjeto>
              <S.CardTextContainerProjeto>
                <S.CardTitleProjeto>
                <strong>CEEPA</strong> - Centro de Educação e Produção Audiovisual do Paraná
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
          </S.CardMainContainer>
        </S.CardProjeto>
      </S.ProjetosListContainer>
    </S.ProjetosContainer>
    </S.MainContainer >
  );
};

export default Projetos;
