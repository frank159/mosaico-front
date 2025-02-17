import React from 'react';
import * as S from './HomeStyled';
import Footer from '../../components/footer/footer';
import ContactSection from '../../components/contactComponente/contactComponente';

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
const pinheiroClaro = require('../../assets/images/img/pinheiro claro.png');
const barquim = require('../../assets/images/img/barquim.png');
const homero = require('../../assets/images/img/homero.jpeg');
const PalomaFoto = require('../../assets/images/img/PalomaFoto.jpg');
const graciosa = require('../../assets/images/logo/graciosa.png');
const baquinho = require('../../assets/images/img/baquinho.png');

const HomePage: React.FC = () => {
  const handleClick = () => {
    window.location.href = 'https://www.graciosapictures.com';
  };
  return (
    <S.MainContainer>
      <S.InicialSecao>
        <S.LogoEcoacao src={logoEcoacao} alt="logoEcoacao" />
        <S.TextoInicial>
          |  Projeto Luz, Câmera, EcoAção! - Arte e Sustentabilidade
        </S.TextoInicial>
      </S.InicialSecao>
      <S.SecaoTexto1>
        <S.Texto1>
          • NOSSO OBJETIVO!
        </S.Texto1>
        <S.TextoSub1>
          Explorar a interconexão entre arte, meio ambiente e saúde mental, promovendo práticas sustentáveis e criando espaços para troca de conhecimento e colaboração.
        </S.TextoSub1>
      </S.SecaoTexto1>
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
        <S.Texto2>
          • NOSSO PÚBLICO ALVO
        </S.Texto2>
        <S.CardSection2>
          <S.Card2>
            <S.CardTitle2>
              Participantes da COP30
            </S.CardTitle2>
            <S.TextCard2>
              Incluem líderes políticos, representantes de ONGs, especialistas em sustentabilidade e visitantes internacionais que já estão engajados em questões ambientais e podem amplificar a mensagem do projeto.
            </S.TextCard2>
          </S.Card2>
          <S.Card2>
            <S.CardTitle2>
              Artistas e Ativistas
            </S.CardTitle2>
            <S.TextCard2>
              Esses grupos são cruciais para criar, promover e implementar soluções sustentáveis. Eles podem usar o projeto como uma plataforma para expandir seu alcance e influência.            </S.TextCard2>
          </S.Card2>
          <S.Card2>
            <S.CardTitle2>
              Comunidade Local
            </S.CardTitle2>
            <S.TextCard2>
              Envolver a população de Belém é essencial para garantir que o legado do projeto continue após a COP30. Foco em educadores, estudantes e organizações comunitárias é estratégico para criar impacto local duradouro.            </S.TextCard2>
          </S.Card2>
          <S.Card2>
            <S.CardTitle2>
              Mídia Global
            </S.CardTitle2>
            <S.TextCard2>
              A cobertura midiática global pode levar as mensagens e inovações discutidas no projeto para um público ainda maior, além de dar visibilidade às iniciativas sustentáveis e culturais apresentadas.            </S.TextCard2>
          </S.Card2>
        </S.CardSection2>
        <S.SubTitle>
          • A programação incluirá:
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
              Haverá ainda uma plataforma virtual e espaços de networking para ampliar o alcance e fortalecer redes de colaboração.
            </S.LongCardText>
          </S.LongCard>
        </S.LongCardContainer>
      </S.SecSecao>
      <S.QuarSecao>
        <S.BigCardContainer>
          <S.BigCard>
            <S.BigCardIcon src={esclamacao} />
            <S.BigCardTextContainer>
              <S.BigCardTitle>
                COM UM PÚBLICO ESPERADO DE <u>700 A 900 PESSOAS POR DIA</u>
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
      </S.QuarSecao>
      <S.QuinSecao bgImage={barquim}>
        <S.QuinSecaoContainer>
          <S.Card3>
            <S.Card3Img src={homero} />
            <S.Card3Title>
              Homero Camargo
            </S.Card3Title>
            <S.Card3Text>
              Homero Camargo é um produtor de cinema brasileiro com mais de<br />
              35 anos de experiência na indústria audiovisual. Ele é conhecido por<br />
              seu trabalho em diversos longas-metragens, incluindo “Os Xeretas”,<br />
              “A Frente Fria que a Chuva Traz” e “Navalha na Carne”. Além de sua<br />
              bem-sucedida trajetória na produção cinematográfica, Homero é o<br />
              fundador da Filmjoin, uma plataforma que conecta profissionais do<br />
              setor audiovisual para coproduções e parcerias. Seu conhecimento<br />
              abrange tanto a produção cinematográfica quanto a gestão de<br />
              projetos transmídia, trazendo uma visão inovadora para o<br />
              desenvolvimento de conteúdos audiovisuais no Brasil.
            </S.Card3Text>
            <S.SubTitleCard3>
              Principais Trabalhos:
            </S.SubTitleCard3>
            <S.SubTextCard3>
              Os Xeretas (Direção: Michael Ruman)<br />
              A Frente Fria que a Chuva Traz (Direção: Neville D’Almeida)<br />
              Navalha na Carne
            </S.SubTextCard3>
            <S.Card3Text>
              No projeto “Luz, Câmera, EcoAção! – Arte e Sustentabilidade”,<br />
              Homero Camargo contribui com sua vasta experiência na produção<br />
              audiovisual, ajudando a construir uma narrativa visual que fortalece<br />
              as mensagens centrais do projeto sobre meio ambiente, saúde<br />
              mental e justiça social. Sua habilidade de integrar o cinema e a<br />
              cultura digital será essencial para conectar os diversos públicos<br />
              participantes do evento.
            </S.Card3Text>
          </S.Card3>
          <S.Card3>
            <S.Card3Img src={PalomaFoto} />
            <S.Card3Title>
              Paloma Vogt
            </S.Card3Title>
            <S.Card3Text>
              Paloma Vogt é diretora-executiva da  Graciosa Pictures UG e da<br />
              K+W Löwenbruch GmbH, uma sociedade de administração<br />
              patrimonial. Ela transita com segurança entre arte, economia e<br />
              impacto social, equilibrando com facilidade diferentes culturas e<br />
              disciplinas.
            </S.Card3Text>
            <S.Card3Text>
              Com a Graciosa Pictures, Paloma aposta na narrativa criativa e em<br />
              projetos sustentáveis. Criou a Arthouse Graciosa para tornar uma<br />
              coleção de arte acessível a um público mais amplo e estabelecer um<br />
              espaço de troca cultural. Em seu trabalho, conecta pessoas, ideias e<br />
              recursos, seja no cinema, na arte ou em iniciativas sem fins<br />
              lucrativos.
            </S.Card3Text>
            <S.Card3Text>
              Ela tem experiência na captação e gestão de recursos, na<br />
              organização de projetos interdisciplinares e no desenvolvimento<br />
              estratégico de novos formatos. “Luz, Câmera, EcoAção!” representa<br />
              a continuidade de sua visão: usar a arte como ferramenta para<br />
              impulsionar mudanças sociais, construir pontes e transformar ideias<br />
              sustentáveis em realidade.
            </S.Card3Text>
          </S.Card3>
        </S.QuinSecaoContainer>
        <S.Card4>
          <S.Card4Logo>
            <S.Card4LogoImg src={graciosa} />
          </S.Card4Logo>
          <S.Card4Text>
            A Graciosa Pictures UG é uma produtora independente com sede em Berlim, especializada no desenvolvimento e na realização de projetos na<br />
            interseção entre arte, cultura e transformação social. A empresa tem experiência em gestão de projetos, com foco na concepção, planejamento e<br />
            execução de iniciativas culturais interdisciplinares.
          </S.Card4Text>
          <S.Card4Text>
            Para o projeto “Luz, Câmera, EcoAção!”, a Graciosa Pictures contribui com sua experiência em produção audiovisual e no desenvolvimento<br />
            estratégico de iniciativas sustentáveis. A empresa aplica metodologias consolidadas na organização de eventos complexos, na colaboração com<br />
            parceiros internacionais e na coordenação de projetos culturais, tanto em seus aspectos conceituais quanto logísticos. Seu objetivo é utilizar a arte<br />
            narrativa como um meio poderoso para a reflexão social e a promoção de mudanças sustentáveis.
          </S.Card4Text>
          <S.Card4Button onClick={handleClick}>
            Acesse agora:<br />
            <S.TextLink></S.TextLink>
            https://www.graciosapictures.com
          </S.Card4Button>
        </S.Card4>
      </S.QuinSecao>

      <S.TercSecao>
        <S.Logao src={logoEcoacao} />
        <S.TercSecaoTitle>
          RESUMO SOBRE OS OBJETIVOS DO PROJETO:
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
      <ContactSection
        backgroundColor="#F9F6E9"  // Cor de fundo do container
        textColor="#000"          // Cor do texto
        buttonColor='#141C16'
        imageUrl={baquinho} // Substitua pela sua imagem
      />
      <Footer />
    </S.MainContainer>
  );
};

export default HomePage;