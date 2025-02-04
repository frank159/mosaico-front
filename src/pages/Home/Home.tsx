import React from 'react';
import * as S from './HomeStyled';
import Footer from '../../components/footer/footer';

const logoEcoacao = require('../../assets/images/logo/logoEcoacao.png');
const localizacao = require('../../assets/images/icons/localizacao.png');
const barco = require('../../assets/images/icons/barco.png');
const folha = require('../../assets/images/icons/folha.png');
const podcastIcon = require('../../assets/images/icons/podcast.png');
const expoIcon = require('../../assets/images/icons/quadro.png');
const painelIcon = require('../../assets/images/icons/balao de conversa.png');
const oficinaIcon = require('../../assets/images/icons/pessoa com lampada na mao.png');
const mundoConectado = require('../../assets/images/icons/mundo conectado.png');
const esclamacao = require('../../assets/images/icons/esclamacao.png');
const pinheiroClaro = require('../../assets/images/pinheiro claro.png');

const HomePage: React.FC = () => {
  return (
    <S.MainContainer>
      <S.InicialSecao>
        <S.LogoEcoacao src={logoEcoacao} alt="logoEcoacao" />
        <S.TextoInicial>
          |  Projeto Luz, Câmera, EcoAção! - Arte e Sustentabilidade
        </S.TextoInicial>
      </S.InicialSecao>
      <S.SecSecao>
        <S.CardSection>
          <S.Card>
            <S.IconCard src={localizacao} />
            <S.TextCard>
              uma iniciativa inovadora<br />
              que acontecerá durante a<br />
              COP 30, de 10 a 21 de novembro<br />
              de 2025, em Belém, Pará.
            </S.TextCard>
          </S.Card>
          <S.Card>
            <S.IconCard src={barco} />
            <S.TextCard>
              Sediado em um barco ancorado<br />
              no rio Guamá, o projeto combina<br />
              arte e sustentabilidade para<br />
              explorar como as mudanças<br />
              ambientais impactam nosso<br />
              bem-estar psicológico.
            </S.TextCard>
          </S.Card>
          <S.Card>
            <S.IconCard src={folha} />
            <S.TextCard>
              Ele apresentará soluções<br />
              ambientais já implementadas<br />
              globalmente e fomentará a<br />
              discussão de novas ideias para<br />
              enfrentar desafios futuros.
            </S.TextCard>
          </S.Card>
        </S.CardSection>
        <S.SubTitle>
          A programação incluirá:
        </S.SubTitle>
        <S.MiniCardSection>
          <S.MiniCardContainer>
            <S.MiniCardEsfera>
              <S.MiniCardEsferaIcon src={podcastIcon} alt="Podcast Icon" />
            </S.MiniCardEsfera>
            <S.MiniCard>
              <S.MinCardText>
                Podcasts
              </S.MinCardText>
            </S.MiniCard>
          </S.MiniCardContainer>
          <S.MiniCardContainer>
            <S.MiniCardEsfera>
              <S.MiniCardEsferaIcon src={expoIcon} alt="Exposição Icon" />
            </S.MiniCardEsfera>
            <S.MiniCard>
              <S.MinCardText>
                Exposições interativas
              </S.MinCardText>
            </S.MiniCard>
          </S.MiniCardContainer>
          <S.MiniCardContainer>
            <S.MiniCardEsfera>
              <S.MiniCardEsferaIcon src={painelIcon} alt="Painel Icon" />
            </S.MiniCardEsfera>
            <S.MiniCard>
              <S.MinCardText>
                Painéis de discussão
              </S.MinCardText>
            </S.MiniCard>
          </S.MiniCardContainer>
          <S.MiniCardContainer>
            <S.MiniCardEsfera>
              <S.MiniCardEsferaIcon src={oficinaIcon} alt="Oficina Icon" />
            </S.MiniCardEsfera>
            <S.MiniCard>
              <S.MinCardText>
                Oficinas de co-criação
              </S.MinCardText>
            </S.MiniCard>
          </S.MiniCardContainer>
        </S.MiniCardSection>
        <S.SubtextSection>
          Promovendo troca de ideias entre participantes da COP 30, artistas, ativistas, educadores e a comunidade local.
        </S.SubtextSection>
        <S.LongCardContainer>
          <S.LongCard>
            <S.LongCardIcon src={mundoConectado} alt="mundoConectado" />
            <S.LongCardText>
              Haverá ainda uma plataforma virtual e espaços de networking para ampliar o alcance e fortalecer redes de<br />
              colaboração.
            </S.LongCardText>
          </S.LongCard>
        </S.LongCardContainer>
        <S.BigCardContainer>
          <S.BigCard>
            <S.BigCardIcon src={esclamacao} />
            <S.BigCardTextContainer>
              <S.BigCardTitle>
                COM UM PÚBLICO ESPERADO DE 700 A 900 PESSOAS POR DIA
              </S.BigCardTitle>
              <S.BigCardText>
                o projeto funcionará como um ponto de encontro para diálogos transformadores entre arte, meio ambiente e saúde mental,<br />
                inspirando práticas sustentáveis e conscientização global.
              </S.BigCardText>
              <S.BigCardText>
                A iniciativa busca gerar um impacto duradouro, influenciando políticas e fortalecendo a conexão entre a sustentabilidade e o<br />
                bem-estar.
              </S.BigCardText>
            </S.BigCardTextContainer>
          </S.BigCard>
        </S.BigCardContainer>
      </S.SecSecao>
      <S.TercSecao>
        <S.TercSecaoTitle>
          OBJETIVOS DO PROJETO:
        </S.TercSecaoTitle>
        <S.TercSecaoText>
          Buscamos envolver e inspirar diversos públicos, promovendo um diálogo global sobre sustentabilidade, saúde mental e as mudanças<br />
          ambientais.<br />
          <br />
          Durante a COP30, o projeto usará a arte como ferramenta para destacar soluções ambientais, explorar a interconexão entre meio<br />
          ambiente e saúde mental, e incentivar ações para um futuro mais sustentável.<br />
          <br />
          O projeto visa destacar soluções ambientais existentes e estimular novas ideias, utilizando diferentes formas de arte para abordar e refletir<br />
          sobre o impacto das mudanças ambientais.<br />
          <br />
          A interseção entre a sustentabilidade e o bem-estar mental será central, com o objetivo de inspirar mudanças de comportamento que<br />
          promovam a saúde ambiental e mental.<br />
          <br />
          Ao explorar como as mudanças no meio ambiente afetam a saúde mental, o projeto busca promover uma conscientização profunda e<br />
          discutir soluções que ajudem a mitigar esses impactos.<br />
          <br />
          Esse diálogo será enriquecido pela participação de artistas, ativistas, especialistas e membros da comunidade local, incentivando a<br />
          colaboração interdisciplinar para gerar um impacto duradouro.<br />
          <br />
          Além disso, o projeto foca em valorizar a cultura local e fomentar colaborações interdisciplinares. Ao promover a herança cultural da<br />
          Amazônia, busca-se fortalecer a identidade local enquanto se trabalha para um futuro mais sustentável e mentalmente saudável.<br />
          <br />
          A inclusão de um público diversificado é essencial, criando um espaço acessível para que todos, de diferentes origens, possam contribuir<br />
          para o intercâmbio de ideias e experiências.<br />
          <br />
          A cobertura midiática global e a participação de líderes mundiais e especialistas são cruciais para amplificar a mensagem do projeto e<br />
          garantir que ele alcance e influencie um público ainda maior, dando visibilidade às iniciativas sustentáveis e culturais apresentadas.<br />
        </S.TercSecaoText>
      </S.TercSecao>
      <Footer />
    </S.MainContainer>
  );
};

export default HomePage;