import * as S from './AboutUsStyled';

const mosaicoLogo = require('../../assets/images/logo/mosaicoLogo1.png');
const esclamacao = require('../../assets/images/icons/esclamacao.png');
const missao = require('../../assets/images/icons/missao.png');
const visao = require('../../assets/images/icons/visao.png');
const valores = require('../../assets/images/icons/valores.png');
const interogacao = require('../../assets/images/icons/interogacao.png');
const pinheiro = require('../../assets/images/pinheiro.png');
const HomeroFoto = require('../../assets/images/HomeroFoto.jpg');
const PalomaFoto = require('../../assets/images/PalomaFoto.jpg');

const AboutUs: React.FC = () => {

  return (
    <S.MainContainer>
      <S.VectorImage src={pinheiro} alt="pinheiro" />
      <S.TexteContainer>
        <S.TitleContainer>
          <S.TitleText>
            SOBRE O
          </S.TitleText>
          <S.TitleLogo>
            <S.LogoImg src={mosaicoLogo} alt="mosaicoLogo" />
          </S.TitleLogo>
        </S.TitleContainer>
        <S.SubTextContainer>
          <S.SubTextText>
            O Mosaico nasceu com o propósito de ser uma vitrine para projetos sociais e culturais de todas as áreas.<br />
            Acreditamos no poder da <strong>VISIBILIDADE</strong>, para promover <strong>MUDANÇAS</strong> e valorizar <strong>IDEIAS QUE TRANSFORMAM O MUNDO.</strong>
          </S.SubTextText>
        </S.SubTextContainer>
        <S.SubTitleContainer>
          <S.SubTitleText>
            NOSSA MISSÃO É SIMPLES!
          </S.SubTitleText>
          <S.SubTextText>
            Mostrar ao mundo iniciativas que <strong>inspiram, educam e conectam.</strong>
          </S.SubTextText>
        </S.SubTitleContainer>
        <S.IconCardContainer>
          <S.IconCard>
            <S.IconImgCardContainer>
              <S.IconImgCard width='6rem' src={esclamacao} alt="esclamacao" />
            </S.IconImgCardContainer>
            <S.IconCardTextContainer>
              <S.IconCardTextTitle>
                CRIAMOS UM ESPAÇO ONDE PROJETOS PODEM BRILHAR
              </S.IconCardTextTitle>
              <S.IconCardText>
                alcançando públicos diversos e celebrando a diversidade de vozes e histórias que<br />
                fazem parte do nosso mundo.
              </S.IconCardText>
            </S.IconCardTextContainer>
          </S.IconCard>
        </S.IconCardContainer>
      </S.TexteContainer>
      <S.PilaresListContainer>
        <S.PilaresListLine />
        <S.PilaresListItensContainer>
          <S.PilaresCard>
            <S.PilaresTitleContainer>
              <S.PilaresTitleIcon src={missao} width='2rem' alt="missao" />
              <S.PilaresTitleText>
                MISSÃO
              </S.PilaresTitleText>
            </S.PilaresTitleContainer>
            <S.PilaresTextContainer>
              <S.PilaresText>
                Mostrar e valorizar projetos que inspiram.<br />
                Destacar e valorizar projetos que promovem impacto positivo na sociedade, inspirando mudanças, preservação cultural e inovação.
              </S.PilaresText>
            </S.PilaresTextContainer>
          </S.PilaresCard>
          <S.PilaresCard>
            <S.PilaresTitleContainer>
              <S.PilaresTitleIcon src={visao} width='2rem' alt="missao" />
              <S.PilaresTitleText>
                VISÂO
              </S.PilaresTitleText>
            </S.PilaresTitleContainer>
            <S.PilaresTextContainer>
              <S.PilaresText>
                Ser a principal plataforma de projetos sociais e culturais.<br />
                Transformar o Mosaico na plataforma de referência para projetos sociais, culturais, ambientais e educacionais no Brasil, conectando iniciativas a um público amplo e diversificado,<br />
                inspirando mudanças, colaborações e inovações.
              </S.PilaresText>
            </S.PilaresTextContainer>
          </S.PilaresCard>
          <S.PilaresCard>
            <S.PilaresTitleContainer>
              <S.PilaresTitleIcon src={valores} width='2rem' alt="missao" />
              <S.PilaresTitleText>
                VALORES
              </S.PilaresTitleText>
            </S.PilaresTitleContainer>
            <S.PilaresTextContainer>
              <S.PilaresText>
                <S.PilaresList>
                  <S.SubItenList>Inclusão:</S.SubItenList>
                  <S.PilaresText>
                    Todos os projetos, independentemente de tamanho, localidade ou tema, são bem-vindos no Mosaico.<br />
                    A plataforma busca representar a diversidade de iniciativas brasileiras, abrindo espaço para vozes que frequentemente não têm visibilidade.
                  </S.PilaresText>
                  <S.SubItenList>Diversidade:</S.SubItenList>
                  <S.PilaresText>
                    Promover iniciativas que representem a riqueza cultural, ambiental e social do Brasil.<br />
                    Valorizar tradições, práticas locais e inovações que destacam a pluralidade do país.<br />
                    Priorizar projetos de diferentes regiões e contextos (ex.: comunidades indígenas, rurais e urbanas).
                  </S.PilaresText>
                  <S.SubItenList>Inspiração:</S.SubItenList>
                  <S.PilaresText>
                    Motivar novas ideias e iniciativas, mostrando histórias de sucesso e impacto social real.<br />
                    Criar um ciclo de inovação social ao expor projetos que transformam.<br />
                    Ter uma seção de “Histórias que Inspiram” para compartilhar o impacto concreto de projetos cadastrados.
                  </S.PilaresText>
                </S.PilaresList>
              </S.PilaresText>
            </S.PilaresTextContainer>
          </S.PilaresCard>
        </S.PilaresListItensContainer>
      </S.PilaresListContainer>
      <S.BigIconCardContainer>
        <S.BigIconCard>
          <S.BigIconCardTitleContainer>
            <S.BigIconImgCard width='6rem' src={interogacao} alt="interogacao" />
            <S.BigIconCardTitle>
              POR QUE É IMPORTANTE QUE PROJETOS RECEBAM VISIBILIDADE?
            </S.BigIconCardTitle>
          </S.BigIconCardTitleContainer>
          <S.BigIconCardTextContainer>
            <S.BigIconItenList>
              Impacto Social Ampliado:
            </S.BigIconItenList>
            <S.BigIconText>
              Projetos que ganham visibilidade têm maior alcance, aumentando sua capacidade de promover mudanças em comunidades<br />
              e grupos beneficiados.
            </S.BigIconText>
            <S.BigIconItenList>
              Reconhecimento:
            </S.BigIconItenList>
            <S.BigIconText>
              A exposição ajuda iniciativas a serem valorizadas e legitimadas, abrindo portas para colaborações, financiamentos ou apoios institucionais.
            </S.BigIconText>
            <S.BigIconItenList>
              Inspiração:
            </S.BigIconItenList>
            <S.BigIconText>
              Projetos bem-sucedidos servem como exemplos motivadores para outras iniciativas, criando um ciclo virtuoso de ações transformadoras.
            </S.BigIconText>
          </S.BigIconCardTextContainer>
        </S.BigIconCard>
      </S.BigIconCardContainer>
      <S.ColaboradoresContainer>
        <S.ColaboradoresCard>
          <S.ImgColaboradorContainer>
            <S.ImgColaborador width='100px' src={HomeroFoto} alt="HomeroFoto" />
          </S.ImgColaboradorContainer>
          <S.TextContainer>
            <S.ColaboradoresTitle>
              Homero Camargo
            </S.ColaboradoresTitle>
            <S.ColaboradoresText>
              Curabitur pharetra, quam vel molestie scelerisque,<br />
              turpis velit facilisis ipsum, nec cursus justo<br />
              nisl id augue.
            </S.ColaboradoresText>
          </S.TextContainer>
        </S.ColaboradoresCard>
        <S.ColaboradoresCard>
          <S.ImgColaboradorContainer>
            <S.ImgColaborador width='100px' src={PalomaFoto} alt="HomeroFoto" />
          </S.ImgColaboradorContainer>
          <S.TextContainer>
            <S.ColaboradoresTitle>
              Paloma Vogt
            </S.ColaboradoresTitle>
            <S.ColaboradoresText>
              Curabitur pharetra, quam vel molestie scelerisque,<br />
              turpis velit facilisis ipsum, nec cursus justo<br />
              nisl id augue.
            </S.ColaboradoresText>
          </S.TextContainer>
        </S.ColaboradoresCard>
      </S.ColaboradoresContainer>
    </S.MainContainer>
  );
};

export default AboutUs;
