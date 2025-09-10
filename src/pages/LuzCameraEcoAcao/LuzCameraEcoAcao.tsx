import React, { useEffect, useRef, useState } from "react";
import * as S from "./LuzCameraEcoAcaoStyled";
import Footer from "../../components/footer/footer";
import ContactSection from "../../components/contactComponente/contactComponente";

const logoEcoacao = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324711/ecoa%C3%A7%C3%A3o_k7uwq9.png'
const logoFuncao = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324712/logoFuncao_bz0zbs.png'
const localizacao = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324728/localizacao_wiy5ig.png'
const barco = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324725/barco_lbioib.png'
const folha = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324726/folha_aquzrk.png'
const podcastIcon = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324731/podcast_l7xtrb.png'
const expoIcon = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324739/quadro_tfkmsk.png'
const painelIcon = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324725/balao_de_conversa_uppr8i.png'
const oficinaIcon = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324731/pessoa_com_lampada_na_mao_do5701.png'
const mundoConectado = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324730/mundin_dmjw3s.png'
const homero = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324650/homero_bmcqqj.png'
const bruna = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324651/image_4_vuw6kf.png'
const PalomaFoto = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324652/paloma_idbr4j.png'
const graciosa1 = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324712/graciosaa_r3kmct.png'
const capFundoBranco = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324721/capFundoBranco_x1dlmt.png'
const baquinho = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324643/baquinho_dzqgfy.png'
const aspasPreta = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324725/aspasPreta_khaua6.png'
const plantinha = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324654/plantinha_i9kjos.jpg'
const cooperativa = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324713/cooperativaLogo_yycsv7.png'

//teste
const LuzCameraEcoAcaoPage: React.FC = () => {
  const handleClick = () => {
    window.open("https://www.graciosapictures.com", "_blank");
  };
  const handleClickA = () => {
    window.open("https://www.dbkv-berlin.com/", "_blank");
  };
  const Card3Ref = useRef<HTMLDivElement>(null);
  const checkCard2Ref = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [dimensions, setDimensions] = useState({
    card3Height: 0,
    card3Width: 0,
    card2Height: 0,
    card2Width: 0,
  });

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const updateDimensions = () => {
      setDimensions({
        card3Height: Card3Ref.current?.clientHeight || 0,
        card3Width: Card3Ref.current?.clientWidth || 0,
        card2Height: checkCard2Ref.current?.clientHeight || 0,
        card2Width: checkCard2Ref.current?.clientWidth || 0,
      });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <S.MainContainer>
      <S.InicialSecao>
        <S.LogoEcoacao src={logoEcoacao} alt="logoEcoacao" />
        <S.TitleInicial>Projeto Luz, Câmera, EcoAção!</S.TitleInicial>
        <S.TextoSubInicial>Arte e Sustentabilidade</S.TextoSubInicial>
        <S.Aspas src={aspasPreta} alt="aspasPreta" />
        <S.TextoInicial>
          Exploramos interconexão entre arte, meio ambiente e saúde mental,
          promovendo práticas sustentáveis
          <br />e criando espaços para troca de conhecimento e colaboração.
        </S.TextoInicial>
      </S.InicialSecao>
      <S.InicialSecao1>
        <S.Plantinha src={plantinha} alt="aspasPreta" />
        <S.SubInicialSecao1>
          <S.CardSectionTitulo>
            <S.TituloVertical>COP30</S.TituloVertical>
          </S.CardSectionTitulo>
          <S.CardSection>
            <S.Card>
              <S.IconCard src={localizacao} />
              <S.TextCard>
                uma iniciativa inovadora que acontecerá
                durante a COP 30, de 10 a 21 de novembro de
                2025, em Belém, Pará, Brasil
              </S.TextCard>
            </S.Card>
            <S.Card>
              <S.IconCard src={barco} />
              <S.TextCard>
                Sediado em um barco ancorado no rio Guamá, o
                projeto combina arte e sustentabilidade para
                explorar como as mudanças ambientais
                impactam nosso bem-estar psicológico.
              </S.TextCard>
            </S.Card>
            <S.Card>
              <S.IconCard src={folha} />
              <S.TextCard>
                Ele apresentará soluções ambientais já
                implementadas globalmente e fomentará a
                discussão de novas ideias para enfrentar desafios futuros.
              </S.TextCard>
            </S.Card>
          </S.CardSection>
        </S.SubInicialSecao1>
      </S.InicialSecao1>
      <S.SecSecao>
        <S.Texto2>NOSSO PÚBLICO ALVO</S.Texto2>
        <S.CardSection2>
          <S.Card2 height={dimensions.card2Height}>
            <S.CardTitle2>Participantes da COP30</S.CardTitle2>
            <S.TextCard2>
              <p>
                Incluem líderes políticos, representantes de ONGs, especialistas
                em sustentabilidade e visitantes internacionais que já estão
                engajados em questões ambientais e podem amplificar a mensagem
                do projeto.
              </p>
            </S.TextCard2>
          </S.Card2>
          <S.Card2 height={dimensions.card2Height}>
            <S.CardTitle2>Artistas e Ativistas</S.CardTitle2>
            <S.TextCard2>
              <p>
                Esses grupos são cruciais para criar, promover e implementar
                soluções sustentáveis. Eles podem usar o projeto como uma
                plataforma para expandir seu alcance e influência.
              </p>
            </S.TextCard2>
          </S.Card2>
          <S.Card2 ref={checkCard2Ref} style={{ paddingBottom: "3rem" }}>
            <S.CardTitle2>Comunidade Local</S.CardTitle2>
            <S.TextCard2>
              <p>
                Envolver a população de Belém é essencial para garantir que o
                legado do projeto continue após a COP30. Foco em educadores,
                estudantes e organizações comunitárias é estratégico para criar
                impacto local duradouro.{" "}
              </p>
            </S.TextCard2>
          </S.Card2>
          <S.Card2 height={dimensions.card2Height}>
            <S.CardTitle2>Mídia Global</S.CardTitle2>
            <S.TextCard2>
              <p>
                A cobertura midiática global pode levar as mensagens e inovações
                discutidas no projeto para um público ainda maior, além de dar
                visibilidade às iniciativas sustentáveis e culturais
                apresentadas.{" "}
              </p>
            </S.TextCard2>
          </S.Card2>
        </S.CardSection2>
        <S.SubTitle>• A programação incluirá:</S.SubTitle>
        <S.MiniCardSection>
          <S.MiniCardContainer>
            <S.MiniCard>
              <S.MiniCardEsfera>
                <S.MiniCardEsferaIcon src={podcastIcon} alt="Podcast Icon" />
              </S.MiniCardEsfera>
              <S.MinCardText>Podcasts</S.MinCardText>
            </S.MiniCard>
          </S.MiniCardContainer>
          <S.MiniCardContainer>
            <S.MiniCard>
              <S.MiniCardEsfera>
                <S.MiniCardEsferaIcon src={expoIcon} alt="Exposição Icon" />
              </S.MiniCardEsfera>
              <S.MinCardText>Exposições interativas</S.MinCardText>
            </S.MiniCard>
          </S.MiniCardContainer>
          <S.MiniCardContainer>
            <S.MiniCard>
              <S.MiniCardEsfera>
                <S.MiniCardEsferaIcon src={painelIcon} alt="Painel Icon" />
              </S.MiniCardEsfera>
              <S.MinCardText>Painéis de discussão</S.MinCardText>
            </S.MiniCard>
          </S.MiniCardContainer>
          <S.MiniCardContainer>
            <S.MiniCard>
              <S.MiniCardEsfera>
                <S.MiniCardEsferaIcon src={oficinaIcon} alt="Painel Icon" />
              </S.MiniCardEsfera>
              <S.MinCardText>Oficinas de co-criação</S.MinCardText>
            </S.MiniCard>
          </S.MiniCardContainer>
        </S.MiniCardSection>
        <S.LongCardContainer>
          <S.LongCard>
            <S.LongCardIcon src={mundoConectado} alt="mundoConectado" />
            <S.LongCardText>
              Haverá ainda uma plataforma virtual e espaços de networking para
              <br />
              ampliar o alcance e fortalecer redes de colaboração.
            </S.LongCardText>
          </S.LongCard>
        </S.LongCardContainer>
      </S.SecSecao>
      <S.QuarSecao>
        <S.BigCardContainer>
          <S.BigCard>
            <S.BigCardTextContainer>
              <S.BigIconTextCard>!</S.BigIconTextCard>
              <S.BigCardTitle>
                COM UM PÚBLICO ESPERADO DE 700 A 900 PESSOAS POR DIA
              </S.BigCardTitle>
              <S.BigCardText>
                o projeto funcionará como um ponto de encontro para diálogos
                transformadores entre arte, meio ambiente e saúde mental,
                inspirando práticas sustentáveis e conscientização global.
              </S.BigCardText>
              <S.BigCardText>
                A iniciativa busca gerar um impacto duradouro, influenciando
                políticas e fortalecendo a conexão entre a sustentabilidade e o
                bem-estar.
              </S.BigCardText>
            </S.BigCardTextContainer>
          </S.BigCard>
        </S.BigCardContainer>
      </S.QuarSecao>
      <S.QuinSecao>
        <S.QuinSecaoContainer>
          <S.Card3 ref={Card3Ref} height={dimensions.card3Height}>
            <S.Card3Img src={homero} />
            <S.Card3Title>Homero Camargo</S.Card3Title>
            <S.Card3Text>
              Homero Camargo é um produtor de cinema brasileiro com mais de 35
              anos de experiência na indústria audiovisual. Ele é conhecido por
              seu trabalho em diversos longas-metragens, incluindo “Os Xeretas”,
              “A Frente Fria que a Chuva Traz” e “Navalha na Carne”. Além de sua
              bem-sucedida trajetória na produção cinematográfica, Homero é o
              fundador da Filmjoin, uma plataforma que conecta profissionais do
              setor audiovisual para coproduções e parcerias. Seu conhecimento
              abrange tanto a produção cinematográfica quanto a gestão de
              projetos transmídia, trazendo uma visão inovadora para o
              desenvolvimento de conteúdos audiovisuais no Brasil.
            </S.Card3Text>
            <S.SubTitleCard3>Principais Trabalhos:</S.SubTitleCard3>
            <S.SubTextCard3>
              <li>
                Os Xeretas (Direção: Michael Ruman)
              </li>
              <li>
                A Frente Fria que a Chuva Traz (Direção: Neville D’Almeida)
              </li>
              <li>
                Navalha na Carne
              </li>
            </S.SubTextCard3>
            <S.Card3Text>
              No projeto “Luz, Câmera, EcoAção! – Arte e Sustentabilidade”,
              Homero Camargo contribui com sua vasta experiência na produção
              audiovisual, ajudando a construir uma narrativa visual que
              fortalece as mensagens centrais do projeto sobre meio ambiente,
              saúde mental e justiça social. Sua habilidade de integrar o cinema
              e a cultura digital será essencial para conectar os diversos
              públicos participantes do evento.
            </S.Card3Text>
            <S.ContactInfoContainer>
              <S.ContactInfo>
                {/* <S.Icon src={emailIcon} alt="Email Icon" /> */}
                <S.BoldText underline>cooperativacm@uol.com.br</S.BoldText>
              </S.ContactInfo>
              <S.ContactInfo>
                {/* <S.Icon src={whatsAppIcon} alt="WhatsApp Icon" /> */}
                <S.BoldText>(42)9 9102-4351</S.BoldText>
              </S.ContactInfo>
            </S.ContactInfoContainer>
            <S.Card4Section>
              <S.Card4Logo>
                <S.Card4LogoImg width="15%" src={capFundoBranco} />
              </S.Card4Logo>
              <S.ButtonCard onClick={() => (window.location.href = "/CAP")}>
                Saiba Mais
              </S.ButtonCard>
              <S.Card4Logo>
                <S.Card4LogoImg width="25%" src={cooperativa} />
              </S.Card4Logo>
              <S.ButtonCard onClick={() => (window.location.href = "/Cooperativa")}>
                Saiba Mais
              </S.ButtonCard>
              <br />
            </S.Card4Section>
          </S.Card3>
          <S.Card3 height={dimensions.card3Height}>
            <S.Card3Img src={bruna} />
            <S.Card3Title>Bruna Madsen</S.Card3Title>
            <S.Card3Text>
              Bruna Madsen é uma profissional com ampla experiência em gestão de projetos e produção executiva, especialmente nas áreas de mídia, entretenimento e cultura.
              Ao longo de sua carreira, tem se destacado pela coordenação de equipes e pelo gerenciamento de recursos, com forte expertise nas Leis de Incentivo à Cultura, incluindo MinC e Ancine.
              Com um olhar estratégico para o planejamento e a organização, ela tem se destacado no mercado pela habilidade em gerenciar recursos e desenvolver soluções criativas, especialmente em projetos de grande escala.
              Atualmente, ocupa a posição de produtora de locação na ELOCS, empresa de renome em São Paulo, e possui experiência anterior em diversas funções de destaque, como na Pano Social, onde foi responsável por estratégias de marketing com a criação e realizaçoes de eventos.
              Sua trajetória inclui passagens por grandes agências e empresas, como Agência New Contet, Futuri Comunicação e AktuellMix, onde atuou em importantes ações estratégicas, como o lançamento de produtos para o Banco Itaú e o Banco Bradesco.
              Além disso, desempenhou papéis fundamentais em eventos significativos para o mercado audiovisual, como o DIA DA MÚSICA, CLIPES E BANDAS e BIG FRSTIVAL, e na produção de projetos culturais, como o longametragem de animação "Tito e os Pássaros." Com formação em Turismo pela Universidade Positivo - PR e uma série de cursos de especialização em Produção Executiva e Gestão de Projetos.
              Sua carreira é marcada pela paixão pela inovação e pela excelência na execução de projetos de impacto cultural e social.
              Conversas com a jovem Isabella Camargo, sua filha, foram fundamentais para a criação deste projeto, somando a sua expertise em desenvolver soluções criativas contribuíram para a criação do evento “Luz, Câmera, EcoAÇÃO” elaborando ações que combinem arte, natureza e bem-estar, promovendo a conexão com o meio ambiente e o impacto positivo nas pessoas, estimulando a saúde mental por meio de práticas artísticas sustentáveis.            </S.Card3Text>
          </S.Card3>
          <S.Card3 height={dimensions.card3Height}>
            <S.Card3Img src={PalomaFoto} />
            <S.Card3Title>Paloma Vogt</S.Card3Title>
            <S.Card3Text>
              Paloma Vogt é diretora-executiva da Graciosa Pictures UG e da K+W
              Löwenbruch GmbH, uma sociedade de administração patrimonial. Ela
              transita com segurança entre arte, economia e impacto social,
              equilibrando com facilidade diferentes culturas e disciplinas.
            </S.Card3Text>
            <br />
            <S.Card3Text>
              Com a Graciosa Pictures, Paloma aposta na narrativa criativa e em
              projetos sustentáveis. Criou a Arthouse Graciosa para tornar uma
              coleção de arte acessível a um público mais amplo e estabelecer um
              espaço de troca cultural. Em seu trabalho, conecta pessoas, ideias
              e recursos, seja no cinema, na arte ou em iniciativas sem fins
              lucrativos.
            </S.Card3Text>
            <br />
            <S.Card3Text>
              Ela tem experiência na captação e gestão de recursos, na
              organização de projetos interdisciplinares e no desenvolvimento
              estratégico de novos formatos. “Luz, Câmera, EcoAção!” representa
              a continuidade de sua visão: usar a arte como ferramenta para
              impulsionar mudanças sociais, construir pontes e transformar
              ideias sustentáveis em realidade.
            </S.Card3Text>
            <S.ContactInfoContainer>
              <S.ContactInfo>
                {/* <S.Icon src={emailIcon} alt="Email Icon" /> */}
                <S.BoldText underline>p.vogt@graciosa-pictures.com</S.BoldText>
              </S.ContactInfo>
              <S.ContactInfo>
                {/* <S.Icon src={whatsAppIcon} alt="WhatsApp Icon" /> */}
                <S.BoldText>(176) 31258861</S.BoldText>
              </S.ContactInfo>
            </S.ContactInfoContainer>
            <S.Card4Section>
              <S.Card4Logo>
                <S.Card4LogoImg width="35%" src={graciosa1} />
              </S.Card4Logo>
              <S.ButtonCard onClick={handleClick}>
                Saiba Mais
              </S.ButtonCard>
              <S.Card4Logo>
                <S.Card4LogoImg width="35%" src={logoFuncao} />
              </S.Card4Logo>
              <S.ButtonCard onClick={handleClickA}>
                Saiba Mais
              </S.ButtonCard>
              <br />
            </S.Card4Section>
          </S.Card3>
        </S.QuinSecaoContainer>
      </S.QuinSecao>

      <ContactSection
        backgroundColor="#bbc7af" // Cor de fundo do container
        textColor="#141c16" // Cor do texto
        buttonColor="#141c16"
        imageUrl={baquinho} // Substitua pela sua imagem
      />
      {!isMobile && (
        <Footer />
      )}
    </S.MainContainer>
  );
};

export default LuzCameraEcoAcaoPage;
