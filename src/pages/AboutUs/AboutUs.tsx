import * as S from './AboutUsStyled';

const mosaicoLogo = require('../../assets/images/logo/mosaicoLogo1.png');
const esclamacao = require('../../assets/images/icons/esclamacao.png');
const missao = require('../../assets/images/icons/missao esc.png');
const visao = require('../../assets/images/icons/visao esc.png');
const valores = require('../../assets/images/icons/valores esc.png');
const esclamacaoClaro = require('../../assets/images/icons/esclamacaoClaro.png');
const pinheiro = require('../../assets/images/img/pinheiro.png');
const aspas = require('../../assets/images/icons/aspasPreta.png');
const estrutura = require('../../assets/images/icons/estrutura esc.png');

const AboutUs: React.FC = () => {
  const handleProjetoClick = (route: string) => {
    window.open(route, '_blank'); // Abre a rota em uma nova aba
  };
  return (
    <>
      <S.MainContainer>
        <S.VectorImage src={pinheiro} alt="pinheiro" />
        <S.SubTitleContainer>
          <S.ContainerTitleA>
            <S.SecaoInicialIcon src={aspas} />
            <S.SubTitleText>
              Explore iniciativas inovadoras de<br />
            </S.SubTitleText>
          </S.ContainerTitleA>
          <S.SubTitleText>
            diferentes áreas e descubra como ideias<br />
            podem transformar o mundo!<br />
          </S.SubTitleText>
        </S.SubTitleContainer>
        <S.InitialTextContainer>
          <S.Line />
          <S.InitialText>
            O <strong style={{ fontStyle: 'italic' }}>Mosaico</strong> é um espaço dedicado a exibir projetos inspiradores, conectando ideias a pessoas. <br />
            O projeto nasceu com o propósito de ser uma vitrine para projetos sociais e culturais de todas as áreas.<br />
            Acreditamos no poder da VISIBILIDADE, para promover MUDANÇAS e valorizar<br />
            IDEIAS QUE TRANSFORMAM O MUNDO.<br />
            <br />
            Navegue por diferentes categorias e descubra iniciativas que promovem impacto positivo em comunidades,<br />
            ambientese culturas. 
          </S.InitialText>
        </S.InitialTextContainer>
        <S.CardTextContainer>
          <S.Card>
            <S.IconInicialCard src={estrutura} />
            <S.CardText>
              <strong>AQUI</strong>, você encontra histórias que merecem ser contadas e projetos que estão mudando realidades.
            </S.CardText>
          </S.Card>
        </S.CardTextContainer>
        <S.TexteContainer>
          <S.TitleContainer1>
            <S.TitleLogo1>
              <S.LogoImg src={mosaicoLogo} alt="mosaicoLogo" />
            </S.TitleLogo1>
            <S.TitleText2>
              CRIAMOS UM ESPAÇO ONDE PROJETOS PODEM BRILHAR!
            </S.TitleText2>
          </S.TitleContainer1>
          <S.SubTextContainer>
            <S.SubTextText>
              alcançando públicos diversos e celebrando a diversidade de vozes e histórias que fazem<br />
              parte do nosso mundo.
            </S.SubTextText>
          </S.SubTextContainer>
        </S.TexteContainer>
        <S.PilaresListContainer>
          <S.PilaresListLine />
          <S.PilaresListItensContainer>
            <S.PilaresCard>
              <S.PilaresTitleContainer>
                <S.PilaresTitleIcon src={missao} height='2.5rem' alt="missao" />
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
                <S.PilaresTitleIcon src={visao} height='2.5rem' alt="missao" />
                <S.PilaresTitleText>
                  VISÃO
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
                <S.PilaresTitleIcon src={valores} height='2.5rem' alt="missao" />
                <S.PilaresTitleText>
                  VALORES
                </S.PilaresTitleText>
              </S.PilaresTitleContainer>
              <S.PilaresTextContainer>
                <S.PilaresText>
                  <S.PilaresList>
                    <S.SubItenList>Inclusão:</S.SubItenList>
                    <S.PilaresText>
                      Todos os projetos, independentemente de tamanho, localidade ou tema, são bem-vindos no Mosaico.
                      A plataforma busca representar a diversidade de iniciativas brasileiras, abrindo espaço para vozes que frequentemente não têm visibilidade.
                    </S.PilaresText>
                    <br />
                    <S.SubItenList>Diversidade:</S.SubItenList>
                    <S.PilaresText>
                      Promover iniciativas que representem a riqueza cultural, ambiental e social do Brasil.
                      Valorizar tradições, práticas locais e inovações que destacam a pluralidade do país.
                      Priorizar projetos de diferentes regiões e contextos (ex.: comunidades indígenas, rurais e urbanas).
                    </S.PilaresText>
                    <br />
                    <S.SubItenList>Inspiração:</S.SubItenList>
                    <S.PilaresText>
                      Motivar novas ideias e iniciativas, mostrando histórias de sucesso e impacto social real.
                      Criar um ciclo de inovação social ao expor projetos que transformam.
                      Ter uma seção de “Histórias que Inspiram” para compartilhar o impacto concreto de projetos cadastrados.
                    </S.PilaresText>
                  </S.PilaresList>
                </S.PilaresText>
              </S.PilaresTextContainer>
            </S.PilaresCard>
          </S.PilaresListItensContainer>
        </S.PilaresListContainer>

      </S.MainContainer>
      <S.BigIconCardContainer>
        <S.BigIconCard>
          <S.BigIconCardTitle>
            <S.BigIconImgCard>
              <S.BigIconTextCard>
                !
              </S.BigIconTextCard>
            </S.BigIconImgCard>
            NOSSA MISSÃO É SIMPLES!
          </S.BigIconCardTitle>
          <S.BigIconText>
            Mostrar ao mundo iniciativas que inspiram, educam e conectam.
          </S.BigIconText>
        </S.BigIconCard>
      </S.BigIconCardContainer>
      <S.FinalContainer>

        <S.CheckCardsContainerTitle>
          No Brasil, projetos sociais e culturais frequentemente enfrentam barreiras como:
        </S.CheckCardsContainerTitle>
        <S.CheckCardsContainer>
          <S.CheckCard1>
            <S.CheckCardTitleContainer>
              <S.CheckCardIcon />
              <S.CheckCardTextTitle>
                Baixa visibilidade
              </S.CheckCardTextTitle>
            </S.CheckCardTitleContainer>
            <S.CheckCardText>
              Muitas iniciativas incríveis permanecem<br />
              desconhecidas devido à falta de plataformas<br />
              adequadas para divulgação.
            </S.CheckCardText>
          </S.CheckCard1>
          <S.CheckCard1>
            <S.CheckCardTitleContainer>
              <S.CheckCardIcon />
              <S.CheckCardTextTitle>
                Dificuldade de legitimação
              </S.CheckCardTextTitle>
            </S.CheckCardTitleContainer>
            <S.CheckCardText>
              Sem uma vitrine confiável, os projetos<br />
              têm dificuldade de demonstrar credibilidade<br />
              e atrair apoiadores.
            </S.CheckCardText>
          </S.CheckCard1>
          <S.CheckCard1>
            <S.CheckCardTitleContainer>
              <S.CheckCardIcon />
              <S.CheckCardTextTitle>
                Conexão limitada com o público-alvo
              </S.CheckCardTextTitle>
            </S.CheckCardTitleContainer>
            <S.CheckCardText>
              Projetos transformadores não alcançam<br />
              as comunidades ou audiências que poderiam se<br />
              beneficiar diretamente de suas ações.
            </S.CheckCardText>
          </S.CheckCard1>
        </S.CheckCardsContainer>
        <S.TitleContainer>
          <S.TitleText1>
            !
          </S.TitleText1>
          <S.TitleText>
            com o mosaico
          </S.TitleText>
        </S.TitleContainer>
      </S.FinalContainer>
      <S.MidCardSection>
        <S.MidCard>
          <S.MidCardTextContainer>
            <S.CheckCardTitleContainer>
              <S.CheckCardIcon2 />
              <S.CheckCardTextTitleA>
                Conexão limitada com o público-alvo
              </S.CheckCardTextTitleA>
            </S.CheckCardTitleContainer>
            <S.CheckCardText>
              Projetos transformadores não alcançam
              as comunidades ou audiências que poderiam se
              beneficiar diretamente de suas ações.
            </S.CheckCardText>
          </S.MidCardTextContainer>
        </S.MidCard>
      </S.MidCardSection>
      <S.MidCardSection1>
        <S.MidCard1>
          <S.MidCardTextContainer>
            <S.CheckCardTitleContainer>
              <S.CheckCardIcon2 />
              <S.CheckCardTextTitleA>
                Amplo Alcance
              </S.CheckCardTextTitleA>
            </S.CheckCardTitleContainer>
            <S.CheckCardText>
              Oferece um espaço digital para conectar iniciativas
              a pessoas e organizações interessadas em apoiá-las
              ou promovê-las.
            </S.CheckCardText>
          </S.MidCardTextContainer>
        </S.MidCard1>
      </S.MidCardSection1>
      <S.MidCardSection>
        <S.MidCard>
          <S.MidCardTextContainer>
            <S.CheckCardTitleContainer>
              <S.CheckCardIcon2 />
              <S.CheckCardTextTitleA>
                Inspiração
              </S.CheckCardTextTitleA>
            </S.CheckCardTitleContainer>
            <S.CheckCardText>
              Projetos exibidos no Mosaico incentivam outros
              criadores e organizações a se envolverem em
              ações transformadoras.
            </S.CheckCardText>
          </S.MidCardTextContainer>
        </S.MidCard>
      </S.MidCardSection>
      <S.MidCardSection1>
        <S.MidCard1>
          <S.MidCardTextContainer>
            <S.CheckCardTitleContainer>
              <S.CheckCardIcon2 />
              <S.CheckCardTextTitleA>
                Fortalecimento de Identidades Locais
              </S.CheckCardTextTitleA>
            </S.CheckCardTitleContainer>
            <S.CheckCardText>
              Por meio da divulgação de projetos
              culturais e ambientais, a plataforma
              contribui para a preservação de
              tradições, histórias e práticas que
              refletem a diversidade do Brasil.
            </S.CheckCardText>
          </S.MidCardTextContainer>
        </S.MidCard1>
      </S.MidCardSection1>
      <S.MainContainer>
        <S.PilaresListContainer>
          <S.PilaresListLine1 />
          <S.PilaresListItensContainer>
            <S.PilaresTitleContainer>
              <S.PilaresTitleText>
                POR QUE É IMPORTANTE QUE PROJETOS RECEBAM VISIBILIDADE?
              </S.PilaresTitleText>
            </S.PilaresTitleContainer>
            <S.PilaresCard1>
              <S.PilaresTitleContainer>
                <S.PilaresTitleText1>
                  • Impacto Social Ampliado:
                </S.PilaresTitleText1>
              </S.PilaresTitleContainer>
              <S.PilaresTextContainer>
                <S.PilaresText>
                  Projetos que ganham visibilidade têm maior alcance, aumentando sua capacidade de promover mudanças em comunidades e grupos beneficiados.
                </S.PilaresText>
              </S.PilaresTextContainer>
            </S.PilaresCard1>
            <S.PilaresCard1>
              <S.PilaresTitleContainer>
                <S.PilaresTitleText1>
                  • Reconhecimento:
                </S.PilaresTitleText1>
              </S.PilaresTitleContainer>
              <S.PilaresTextContainer>
                <S.PilaresText>
                  A exposição ajuda iniciativas a serem valorizadas e legitimadas, abrindo portas para colaborações, financiamentos ou apoios institucionais.
                </S.PilaresText>
              </S.PilaresTextContainer>
            </S.PilaresCard1>
            <S.PilaresCard1>
              <S.PilaresTitleContainer>
                <S.PilaresTitleText1>
                  • Inspiração:
                </S.PilaresTitleText1>
              </S.PilaresTitleContainer>
              <S.PilaresTextContainer>
                <S.PilaresText>
                  Projetos bem-sucedidos servem como exemplos motivadores para outras iniciativas, criando um ciclo virtuoso de ações transformadoras.
                </S.PilaresText>
              </S.PilaresTextContainer>
            </S.PilaresCard1>
          </S.PilaresListItensContainer>
        </S.PilaresListContainer>
      </S.MainContainer>
      <S.ButtonContainer onClick={() => handleProjetoClick('/Projetos')}>
        <S.FinalButton>
          CONHEÇA NOSSOS PROJETOS
        </S.FinalButton>
      </S.ButtonContainer>
    </>
  );
};

export default AboutUs;
