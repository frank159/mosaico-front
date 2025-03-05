import React from 'react';
import * as S from './HomeStyled';
import Footer from '../../components/footer/footer';
import ContactSection from '../../components/contactComponente/contactComponente';

const logoEcoacao = require('../../assets/images/logo/ecoação.png');
const localizacao = require('../../assets/images/icons/localizacao.png');
const barco = require('../../assets/images/icons/barco.png');
const folha = require('../../assets/images/icons/folha.png');
const podcastIcon = require('../../assets/images/icons/podcast.png');
const expoIcon = require('../../assets/images/icons/quadro.png');
const painelIcon = require('../../assets/images/icons/balao de conversa.png');
const oficinaIcon = require('../../assets/images/icons/pessoa com lampada na mao.png');
const mundoConectado = require('../../assets/images/icons/mundin.png');
const esclamacao = require('../../assets/images/icons/esclamacao.png');
const pinheiroClaro = require('../../assets/images/img/pinheiro claro.png');
const barquim = require('../../assets/images/img/barquim.png');
const homero = require('../../assets/images/img/homero.jpeg');
const PalomaFoto = require('../../assets/images/img/paloma.png');
const graciosa = require('../../assets/images/logo/graciosa.png');
const graciosa1 = require('../../assets/images/logo/graciosaa.png');
const capFundoBranco = require('../../assets/images/logo/capFundoBranco.png');
const baquinho = require('../../assets/images/img/baquinho.png');
const aspasPreta = require('../../assets/images/icons/aspasPreta.png');
const plantinha = require('../../assets/images/img/plantinha.jpg');
const cooperativa = require('../../assets/images/logo/cooperativaLogo.png');

const HomePage: React.FC = () => {
  const handleClick = () => {
    window.location.href = 'https://www.graciosapictures.com';
  };
  return (
    <S.MainContainer>
      <S.InicialSecao>
        <S.LogoEcoacao src={logoEcoacao} alt="logoEcoacao" />
        <S.TitleInicial>
          Projeto Luz, Câmera, EcoAção!
        </S.TitleInicial>
        <S.TextoSubInicial>
          Arte e Sustentabilidade
        </S.TextoSubInicial>
        <S.Aspas src={aspasPreta} alt="aspasPreta" />
        <S.TextoInicial>
          Exploramos interconexão entre arte, meio ambiente e saúde mental, promovendo práticas sustentáveis<br />
          e criando espaços para troca de conhecimento e colaboração.
        </S.TextoInicial>
      </S.InicialSecao>
      <S.InicialSecao1>
        <S.Plantinha src={plantinha} alt="aspasPreta" />
        <S.TituloVertical>
          COP30
        </S.TituloVertical>
        <S.SubInicialSecao1>
          <S.CardSection>
            <S.Card>
              <S.IconCard src={localizacao} />
              <S.TextCard>
                uma iniciativa inovadora que acontecerá<br />
                durante a COP 30, de 10 a 21 de novembro de<br />
                2025, em Belém, Pará, Brasil
              </S.TextCard>
            </S.Card>
            <S.Card>
              <S.IconCard src={barco} />
              <S.TextCard>
                Sediado em um barco ancorado no rio Guamá, o<br />
                projeto combina arte e sustentabilidade para<br />
                explorar como as mudanças ambientais<br />
                impactam nosso bem-estar psicológico.
              </S.TextCard>
            </S.Card>
            <S.Card>
              <S.IconCard src={folha} />
              <S.TextCard>
                Ele apresentará soluções ambientais já<br />
                implementadas globalmente e fomentará a<br />
                discussão de novas ideias para enfrentar desafios
                futuros.
              </S.TextCard>
            </S.Card>
          </S.CardSection>
        </S.SubInicialSecao1>
      </S.InicialSecao1>
      <S.SecSecao>
        <S.Texto2>
          NOSSO PÚBLICO ALVO
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
        <S.LongCardContainer>
          <S.LongCard>
            <S.LongCardIcon src={mundoConectado} alt="mundoConectado" />
            <S.LongCardText>
              Haverá ainda uma plataforma virtual e espaços de networking para<br />
              ampliar o alcance e fortalecer redes de colaboração.
            </S.LongCardText>
          </S.LongCard>
        </S.LongCardContainer>
      </S.SecSecao>
      <S.QuarSecao>
        <S.BigCardContainer>
          <S.BigCard>
            <S.BigIconTextCard>
              !
            </S.BigIconTextCard>
            <S.BigCardTextContainer>
              <S.BigCardTitle>
                COM UM PÚBLICO ESPERADO DE 700 A 900 PESSOAS POR DIA
              </S.BigCardTitle>
              <S.BigCardText>
                o projeto funcionará como um ponto de encontro para diálogos transformadores entre arte, meio ambiente e saúde mental,
                inspirando práticas sustentáveis e conscientização global.
              </S.BigCardText>
              <S.BigCardText>
                A iniciativa busca gerar um impacto duradouro, influenciando políticas e fortalecendo a conexão entre a sustentabilidade e o
                bem-estar.
              </S.BigCardText>
            </S.BigCardTextContainer>
          </S.BigCard>
        </S.BigCardContainer>
      </S.QuarSecao>
      <S.QuinSecao>
        <S.QuinSecaoContainer>
          <S.Card3>
            <S.Card3Img src={homero} />
            <S.Card3Title>
              Homero Camargo
            </S.Card3Title>
            <S.Card3Text>
              Homero Camargo é um produtor de cinema brasileiro com mais de
              35 anos de experiência na indústria audiovisual. Ele é conhecido por
              seu trabalho em diversos longas-metragens, incluindo “Os Xeretas”,
              “A Frente Fria que a Chuva Traz” e “Navalha na Carne”. Além de sua
              bem-sucedida trajetória na produção cinematográfica, Homero é o
              fundador da Filmjoin, uma plataforma que conecta profissionais do
              setor audiovisual para coproduções e parcerias. Seu conhecimento
              abrange tanto a produção cinematográfica quanto a gestão de
              projetos transmídia, trazendo uma visão inovadora para o
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
              No projeto “Luz, Câmera, EcoAção! – Arte e Sustentabilidade”,
              Homero Camargo contribui com sua vasta experiência na produção
              audiovisual, ajudando a construir uma narrativa visual que fortalece
              as mensagens centrais do projeto sobre meio ambiente, saúde
              mental e justiça social. Sua habilidade de integrar o cinema e a
              cultura digital será essencial para conectar os diversos públicos
              participantes do evento.
            </S.Card3Text>
            <S.Card4Section>
              <S.Card4Logo>
                <S.Card4LogoImg width='6vw' src={capFundoBranco} />
              </S.Card4Logo>
              <S.Card4Button onClick={handleClick}>
                Acesse agora<br />
              </S.Card4Button>
              <S.Card4Logo>
                <S.Card4LogoImg width='14vw' src={cooperativa} />
              </S.Card4Logo>

              <S.Card4Button onClick={handleClick}>
                Acesse agora<br />
              </S.Card4Button>
              <br />
            </S.Card4Section>
          </S.Card3>
          <S.Card3>
            <S.Card3Img src={PalomaFoto} />
            <S.Card3Title>
              Paloma Vogt
            </S.Card3Title>
            <S.Card3Text>
              Paloma Vogt é diretora-executiva da  Graciosa Pictures UG e da
              K+W Löwenbruch GmbH, uma sociedade de administração
              patrimonial. Ela transita com segurança entre arte, economia e
              impacto social, equilibrando com facilidade diferentes culturas e
              disciplinas.
            </S.Card3Text>
            <br />
            <S.Card3Text>
              Com a Graciosa Pictures, Paloma aposta na narrativa criativa e em
              projetos sustentáveis. Criou a Arthouse Graciosa para tornar uma
              coleção de arte acessível a um público mais amplo e estabelecer um
              espaço de troca cultural. Em seu trabalho, conecta pessoas, ideias e
              recursos, seja no cinema, na arte ou em iniciativas sem fins
              lucrativos.
            </S.Card3Text>
            <br />
            <S.Card3Text>
              Ela tem experiência na captação e gestão de recursos, na
              organização de projetos interdisciplinares e no desenvolvimento
              estratégico de novos formatos. “Luz, Câmera, EcoAção!” representa
              a continuidade de sua visão: usar a arte como ferramenta para
              impulsionar mudanças sociais, construir pontes e transformar ideias
              sustentáveis em realidade.
            </S.Card3Text>
            <S.Card4Section>
              <S.Card4Logo>
                <S.Card4LogoImg src={graciosa1} />
              </S.Card4Logo>
              <S.Card4Button onClick={handleClick}>
                Acesse agora:<br />
                <S.TextLink></S.TextLink>
                https://www.graciosapictures.com
              </S.Card4Button>
              <S.Card4Logo>
                <S.LogoFundacao>
                  logotipo<br />
                  fundação
                </S.LogoFundacao>
              </S.Card4Logo>
              <S.Card4Button onClick={handleClick}>
                Acesse agora:<br />
                <S.TextLink></S.TextLink>
                https://www.graciosapictures.com
              </S.Card4Button>
              <br />

            </S.Card4Section>
          </S.Card3>
        </S.QuinSecaoContainer>
      </S.QuinSecao>

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