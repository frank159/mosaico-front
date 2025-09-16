import * as S from "./CooperativaCurriculoStyled";
import React, { useState, useRef, useEffect } from "react";
const HomeroFoto =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324650/homero_bmcqqj.png";

const coopCuri1 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324646/coopCuri1_lzdk6z.png";
const coopCuri2 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324646/coopCuri2_ewzkih.png";
const coopCuri3 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324646/coopCuri3_yq2vm6.png";
const coopCuri4 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324646/coopCuri4_i417ir.png";
const coopCuri5 =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324647/coopCuri5_gvmjuy.png";
const aspas =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324726/aspas_u2hlhq.png";

const navalha =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1751915699/nova2_gefqr6.jpg";

const vampa =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1751915884/nova11_b9nwjr.jpg";

const CooperativaCurriculo: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [overlayHeight, setOverlayHeight] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayRefA = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 820);
  }, []);

  useEffect(() => {
    if (overlayRef.current && overlayRefA.current) {
      setOverlayHeight(
        overlayRef.current.clientHeight + overlayRef.current.clientHeight / 1000
      );
    }
  }, [overlayRef]);

  return (
    <S.MainContainer>
      <S.BodyB>
        <S.SecaoApresentacao>
          <S.ImageWrapper>
            <S.HomeroFullImgFrame>
              <S.ImgStyled src={HomeroFoto} alt="Homero" isMobile={isMobile} />
              <S.GradientOverlay />
            </S.HomeroFullImgFrame>
          </S.ImageWrapper>
          <S.OverlayContainer>
            <S.OverlayContent>
              <S.SmallImageContainer>
                <S.SmallImage src={HomeroFoto} alt="Homero" />
                <S.SmallImageText ref={overlayRefA}>
                  fundador da
                  <br />
                  cooperativa de cinema
                  <br />& mídias sociais
                </S.SmallImageText>
              </S.SmallImageContainer>
              <S.TextSection ref={overlayRef}>
                <S.TextTitle>Homero Camargo</S.TextTitle>
                <S.TextContent>
                  Nome: Carlos Homero Camargo Ribas
                  <br />
                  Nome artistico: Homero Camargo
                  <br />
                  Contatos: 42-9904351 cooperativacm@uol.com.br
                  <br />
                  DRT no 063 e 008 / Brasilia - DF; DRTno 514 - Paraná; DRT no
                  18187 - Paraná
                </S.TextContent>
                <S.TextContentDesc>
                  <S.ImgA src={aspas} alt="Aspas" />
                  <S.TextContentA>Ator</S.TextContentA>
                  <S.TextContentA>Diretor</S.TextContentA>
                  <S.TextContentA>Produtor Cinematrografico</S.TextContentA>
                </S.TextContentDesc>
              </S.TextSection>
            </S.OverlayContent>
          </S.OverlayContainer>
        </S.SecaoApresentacao>
        <S.NewTextSection>
          <S.NewTextContainer>
            <S.NewTextContainerTitleText>
              <S.NewTextContainerTitle>FORMAÇÃO:</S.NewTextContainerTitle>
            </S.NewTextContainerTitleText>
            <S.Line />
            <S.NewTextContainerText>
              Estudou Comunicação na UNB, Universidade de Brasília.
            </S.NewTextContainerText>
            <S.LineA />
            <S.NewTextContainerTitleText>
              <S.NewTextContainerTitle>EXPERIÊNCIA:</S.NewTextContainerTitle>
            </S.NewTextContainerTitleText>
            <S.Line />
            <S.NewTextContainerText>
              Há mais de 35 anos desenvolve propostas cinematográficas, contando
              com atuações nos grandes mercados brasileiros, tendo como foco
              principal a produção de longas metragens. Atua nas discussões
              políticas estaduais e nacionais para o desenvolvimento da
              indústria audiovisual, com larga experiência em estratégias de
              marketing do produto cinematográfico. Consta ainda de sua
              experiência, atuação na área de captação de recursos e produção
              associada, além de consultoria na área de cinema. Foi membro
              fundador do Sindicato da Indústria Audiovisual do Paraná – SIAPAR.
              Foi articulador do Prêmio Estadual de Cinema e Vídeo do Estado do
              Paraná, que premia anualmente 1 longa metragem e três telefilmes.
              Trabalhou com diretores e produtores como Neville D’Almeida; Mauro
              Lima; Walter Rogério; Michael Ruman, Pedro Anízio, Vladimir de
              Carvalho, Roberto Pires, entre outros; Atua como executivo em
              propostas estratégicas de desenvolvimento para o mercado; em
              projetos sociocultural, de empreendedorismo audiovisual de
              regionalização de conteúdo e produção.
            </S.NewTextContainerText>
            <S.LineA />
            <S.NewTextContainerTitleText>
              <S.NewTextContainerTitle>
                EMPRESAS PRODUTORAS:
              </S.NewTextContainerTitle>
            </S.NewTextContainerTitleText>
            <S.Line />
            <S.NewTextContainerText>
              Faz parte das seguintes empresas produtoras brasileiras: C.H.G
              Camargo Ribas – privada com fins lucrativos; registrada na ANCINE.
              Centro Audiovisual do Paraná – privada sem fins lucrativos. Ambas
              estão regidas sob o nome fantasia Cooperativa Cinema & Mídias
              Digitais.
            </S.NewTextContainerText>
            <S.LineA />
            <S.NewTextContainerTitleText>
              <S.NewTextContainerTitle>REALIZAÇÕES:</S.NewTextContainerTitle>
            </S.NewTextContainerTitleText>
            <S.LineA />
            <S.NewTextContainerTitleText>
              <S.NewTextContainerTitleSub>2024-2025</S.NewTextContainerTitleSub>
            </S.NewTextContainerTitleText>
            <S.Line />
            <S.NewTextContainerText>
              • <strong>MOSAICO</strong>
              <br />
              O Mosaico é um espaço dedicado a exibir projetos inspiradores,
              conectando ideias a pessoas. O projeto nasceu com o propósito de
              ser uma vitrine para projetos sociais e culturais de todas as
              áreas. Acreditamos no poder da VISIBILIDADE, para promover
              MUDANÇAS e valorizar IDEIAS QUE TRANSFORMAM O MUNDO.
              <br />
              <br />• <strong>Luz,Câmera,EcoAção</strong>
              <br />
              Exploramos interconexão entre arte, meio ambiente e saúde mental,
              promovendo práticas sustentáveis e criando espaços para troca de
              conhecimento e colaboração.
              <br />
              <br />
            </S.NewTextContainerText>
            <S.NewTextContainerTitleText>
              <S.NewTextContainerTitleSub>2010-2023</S.NewTextContainerTitleSub>
            </S.NewTextContainerTitleText>
            <S.Line />
            <S.NewTextContainerText>
              •{" "}
              <strong>
                Produtor do longa metragem: “ A FRENTE FRIA QUE A CHUVA TRAZ ”
              </strong>
              <br />
              Texto de Mário Bortolotto
              <br />
              Roteiro e direção de Neville D’Almeida
              <br />
              Rio de Janeiro,época atual
              <br />
              Com Bruna Linzmeyer,Chay Sued,Johnny Massaro
              <br />
              Lançado 2015
              <br />
              <br />•{" "}
              <strong>
                Produtor e diretor documentário: " A DANÇA DE SÃO GONÇALO "
              </strong>
              <br />
              52 min, color, digital. Finalizado.
              <br />
              <br />• <strong>Parceiro projeto “ Filmjoin ”: </strong>
              <br />
              <a
                href="http://filmjoin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffffff", textDecoration: "underline" }}
              >
                http://filmjoin.com
              </a>
              , uma plataforma digital inteligente, cuja rede de pessoas
              disponibilizam de forma colaborativa suas experiências, dados,
              informações, conhecimento e sabedoria para construir uma
              inteligência audiovisual! O JOIN é essa inteligência artificial
              que vai produzir resultados para que produtores façam filmes,
              séries e games cada vez mais do jeito que os fãs querem ver. A
              idealização é do parceiro produtor Johnny DiBartolo: o LaB ao cubo
              ou Lab3.
              <br />
              <br />• <strong>Executivo projeto “ IDENTIDADE ”:</strong>
              <br /> campos Gerais do Paraná – mostra/circulação de
              documentários, que vai passar por mais de 25 cidades paranaenses
              entre 2017 e 2018. Além das mostras, cada local visitado receberá
              o box com os três títulos de documentários. Uma proposta que
              resgata e reapresenta ao Paraná sua identidade.
              <br />
              <br />•{" "}
              <strong>Produtor longa metragem “ SUMIÇOS DELIRANTES ”:</strong>
              <br /> que terá 90 minutos finais, rodado basicamente em Curitiba
              e Rio de Janeiro, com uma equipe quase cem por cento paranaense,
              que traz uma proposta de linguagem inovadora (na fronteira entre
              ficção e documentário) com um cronograma de execução ágil,
              dinâmico e de baixo orçamento. A proposta é a direção
              compartilhada entre um diretor e ator de teatro e um diretor de
              cinema. Em desenvolvimento / captação de recursos.
              <br />
              <br />•{" "}
              <strong>Produtor documentário “ VISÕES DO PORTO ”:</strong>
              <br />
              história e estórias, 52 min, de autoria e direção de Silvana
              Fontana, sobre a vai falar da enorme riqueza histórico-cultural
              existente ao redor do Porto de Paranaguá, a partir de narrativas
              dos caiçaras, descendentes de índios, pescadores, dos
              trabalhadores, em contraste com os empresários, marinheiros,
              caminhoneiros. Gente de todo o modo, de toda a fala. Em
              desenvolvimento; Fará parte da proposta IDENTIDADE – litoral do
              Paraná
              <br />
              <br />•{" "}
              <strong>
                Desenvolvimento projeto - produtor projeto “ SOBRE TOUROS E
                HOMENS ”:{" "}
              </strong>
              <br />
              a saga brasileira do zebu, Direção Werner
              <br />
              <br />•{" "}
              <strong>
                Roteiro em desenvolvimento - Longa metragem “ EÇA DE QUEIROZ ”:
              </strong>
              <br />
              Em desenvolvimento a ser rodado em Portugal
              <br />
              Livre adaptação do livro “O último endereço de Eça de Queiroz”
              <br />
              Autor: Miguel Sanches Neto
            </S.NewTextContainerText>
            <S.LineA />
            <S.NewTextContainerTitleText>
              <S.NewTextContainerTitleSub>2008-2009</S.NewTextContainerTitleSub>
            </S.NewTextContainerTitleText>
            <S.Line />
            <S.NewTextContainerText>
              • <strong>Produtor do documentário UM HOMEM E TRÊS CASAS</strong>,
              52 min, color, digital. Direção Geraldo Pioli. inédito
            </S.NewTextContainerText>
            <S.LineA />
            <S.NewTextContainerTitleText>
              <S.NewTextContainerTitleSub>2006-2007</S.NewTextContainerTitleSub>
            </S.NewTextContainerTitleText>
            <S.Line />
            <S.NewTextContainerText>
              • <strong>Produtor do documentário Estado de Resistência</strong>,
              52 min, de autoria de Berenice Mendes, contemplado no DCTV III –
              Programa de Fomento ao documentário Brasileiro; exibição: Doctv
              III - Circuito da Rede Pública de Televisão 10/06/2007;
              Participação na Rio+20 – TV Cúpula dos Povos.2012.
              <br />
              <br />•{" "}
              <strong>
                Produtor de finalização do Longa-metragem Impérios
              </strong>
              , de Joel Barcellos. Digital, color, 72 min.
            </S.NewTextContainerText>
            <S.LineA />
            <S.NewTextContainerTitleText>
              <S.NewTextContainerTitleSub>2004-2005</S.NewTextContainerTitleSub>
            </S.NewTextContainerTitleText>
            <S.Line />
            <S.NewTextContainerText>
              •{" "}
              <strong>
                Produtor do documentário O Brasil de Saint Hilaire
              </strong>
              : Campos Gerais do Paraná, sobre a estada do botânico francês
              Saint Hilaire no Paraná, 52 min, direção Berenice Mendes;
              Exibição: COPMOPY III, ONU, 2006; Mostra 5 Anos Cooperativa CMD,
              Cine Ópera – Ponta Grossa – PR, 2006; Ia Mostra BRDE de
              Audiovisual, 2007.
              <br />
              <br />•{" "}
              <strong>
                Convidado pela Federação da Indústria do Estado do Paraná para
                participar da 3a Conferência Internacional BAWB Brasil (Business
                as na Agent of World Benefit) em outubro de 2005
              </strong>{" "}
              - www.bawb.org.br, com o case de sucesso Centro de Educação e
              Produção Audiovisual. Projeto que trabalha cinema com adolescentes
              e jovens em situação de risco social.
            </S.NewTextContainerText>
            <S.LineA />
            <S.NewTextContainerTitleText>
              <S.NewTextContainerTitleSub>2002-2003</S.NewTextContainerTitleSub>
            </S.NewTextContainerTitleText>
            <S.Line />
            <S.NewTextContainerText>
              • <strong>Diretor e Produtor do documentário Tropeiro:</strong>{" "}
              Alma Sem Fronteira, resgate histórico das origens de ocupação e
              povoamento da região Sul do País, 52 min. exibições: Filme fez a
              abertura do projeto turístico “Rota dos Tropeiros” Região dos
              Campos Gerais, 2003; Mostra 5 Anos Cooperativa CMD, Cine Ópera –
              Ponta Grossa – PR, 2006; Exibição no circuito Cultural Rota dos
              Tropeiros, 2008.
              <br />
              <br />
              • Consultor do Projeto Velho, Cinema Novo, Secretaria de Estado da
              Cultura-PR, que recupera antigas salas de cinema do Estado;
              <br />
              <br />• Produtor do projeto Centro De Excelência Em Educação E
              Produção Audiovisual, implantado no município de Tibagi, PR, em
              parceria com a Secretaria de Estado da Ciência, Tecnologia e
              Ensino Superior;
            </S.NewTextContainerText>
            <S.LineA />
            <S.NewTextContainerTitleText>
              <S.NewTextContainerTitleSub>2000-2001</S.NewTextContainerTitleSub>
            </S.NewTextContainerTitleText>
            <S.Line />
            <S.NewTextContainerText>
              • <strong>Produtor do Longa-metragem “Sonhos Tropicais”</strong>{" "}
              de André Sturm, 35mm, lançado 2002;
              <br />
              <br />• <strong>
                Produtor do Longa-metragem “Os Xeretas”
              </strong>{" "}
              de Michael Ruman, 35mm e 85 min. Lançado 2001.
            </S.NewTextContainerText>
            <S.LineA />
            <S.NewTextContainerTitleText>
              <S.NewTextContainerTitleSub>1999</S.NewTextContainerTitleSub>
            </S.NewTextContainerTitleText>
            <S.Line />
            <S.NewTextContainerText>
              • <strong>Produtor do longa-metragem Deus Jr</strong>, 35 mm, 90
              min. Direção Mauro Lima;
            </S.NewTextContainerText>
            <S.LineA />
            <S.NewTextContainerTitleText>
              <S.NewTextContainerTitleSub>1998</S.NewTextContainerTitleSub>
            </S.NewTextContainerTitleText>
            <S.Line />
            <S.NewTextContainerText>
              • <strong>Produtor da série Usuário da Mata Atlântica</strong>,
              Direção Roberto D’Avila.
            </S.NewTextContainerText>
            <S.LineA />
            <S.NewTextContainerTitleText>
              <S.NewTextContainerTitleSub>1997</S.NewTextContainerTitleSub>
            </S.NewTextContainerTitleText>
            <S.Line />
            <S.NewTextContainerText>
              •{" "}
              <strong>
                Produtor Associado do Longa-metragem Navalha na Carne
              </strong>
              , 35 mm, 124 min, Direção Neville D’Almeida.
            </S.NewTextContainerText>
            <S.LineA />
            <S.NewTextContainerTitleText>
              <S.NewTextContainerTitleSub>1996</S.NewTextContainerTitleSub>
            </S.NewTextContainerTitleText>
            <S.Line />
            <S.NewTextContainerText>
              • <strong>Produtor do longa metragem Olhos de Vampa</strong>, 35
              mm, 80 min, Direção Walter Rogério.
            </S.NewTextContainerText>
            <S.NewTextContainerText>
              • <strong>Cassiopeia</strong>, também conhecido como Cassiopeia O
              Filme, é um filme de animação digital produzido e realizado pela
              NDR filmes e lançado no ano de 1996 pela ArtePlay, dirigido pelo
              animador Clóvis Vieira.
            </S.NewTextContainerText>
            <S.LineA />

            <S.NewTextContainerTitleText>
              <S.NewTextContainerTitleSub>1994</S.NewTextContainerTitleSub>
            </S.NewTextContainerTitleText>
            <S.Line />
            <S.NewTextContainerText>
              • <strong>Produtor do Longa metragem “Gianni, o amico”</strong>.
              Direção Saldanha e Pedro Anísio.
            </S.NewTextContainerText>
            <S.LineA />
            <S.NewTextContainerTitleText>
              <S.LineTitle>OUTROS TRABALHOS</S.LineTitle>
            </S.NewTextContainerTitleText>
            <S.Line />
            <S.CardIten>
              <S.DataCardIten>93/94</S.DataCardIten>
              <S.TxtCardIten>
                Produtor da chegada no Brasil do Guapos Around the World. Viagem
                Família Schurman volta ao mundo
              </S.TxtCardIten>
            </S.CardIten>
            <S.CardIten>
              <S.DataCardIten>{"1993\u2007"}</S.DataCardIten>
              <S.TxtCardIten>
                Gerente de Marketing da Revistas Náutica e Pense Leve. Editora
                Grupo 1.
              </S.TxtCardIten>
            </S.CardIten>
            <S.CardIten>
              <S.DataCardIten>90/93</S.DataCardIten>
              <S.TxtCardIten>
                Chefe de reportagem do Jornal da Manchete volta ao mundo
              </S.TxtCardIten>
            </S.CardIten>
            <S.CardIten>
              <S.DataCardIten>89/90</S.DataCardIten>
              <S.TxtCardIten>
                Diretor de Produção do Longa-metragem "Brasília Última Utopia".
                Direção Pedro Anízio, Vladimir de Carvalho, Roberto Pires.
              </S.TxtCardIten>
            </S.CardIten>
            <S.CardIten>
              <S.DataCardIten>{"1988\u2007"}</S.DataCardIten>
              <S.TxtCardIten>
                Diretor de produção do Curta-metragem "Cine Hai-Kai". Festival
                de Cinema de Brasília.
              </S.TxtCardIten>
            </S.CardIten>
            <S.CardIten>
              <S.DataCardIten>85/87</S.DataCardIten>
              <S.TxtCardIten>
                LIVRE COMUNICAÇÃO. Diretor de Rádio e Televisão.
              </S.TxtCardIten>
            </S.CardIten>
            <S.CardIten>
              <S.DataCardIten>83/85</S.DataCardIten>
              <S.TxtCardIten>
                UMUARAMA COMUNICAÇÃO & MARKETING. Diretor de Rádio e Televisão.
              </S.TxtCardIten>
            </S.CardIten>
            <S.CardIten>
              <S.DataCardIten>80/82</S.DataCardIten>
              <S.TxtCardIten>
                CPP PRODUÇÕES CINEMATOGRÁFICAS. Diretor de produção.
              </S.TxtCardIten>
            </S.CardIten>
            <S.CardIten>
              <S.DataCardIten>75/82</S.DataCardIten>
              <S.TxtCardIten>
                Ator – Grupo dirigido por Hugo Rodas; Fotógrafo em diversos
                veículos;
              </S.TxtCardIten>
            </S.CardIten>
          </S.NewTextContainer>
        </S.NewTextSection>
        <S.FlexTemple>
          <S.FlexTempleCard>
            <S.FlexTempleTitle>
              Comprovações de currículo – imprensa:
            </S.FlexTempleTitle>
            <S.FlexTempleCardTitle>
              • Produtora de cinema com sede em Ventania prepara lançamento
              nacional
            </S.FlexTempleCardTitle>
            <S.FlexTempleCardLInk
              href="http://g1.globo.com/pr/parana/videos/v/produtora-de-cinema-com-sede-em-ventaniaprepara-lancamento-nacional/4829372/"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://g1.globo.com/pr/parana/videos/v/produtora-de-cinema-com-sede-em-ventaniaprepara-lancamento-nacional/4829372/
            </S.FlexTempleCardLInk>
          </S.FlexTempleCard>
          <S.FlexTempleCard>
            <S.FlexTempleCardTitle>
              • Vinda de Saint Hilaire ao Paraná vira filme
            </S.FlexTempleCardTitle>
            <S.FlexTempleCardLInk
              href="https://www.tribunapr.com.br/mais-pop/vinda-de-saint-hilaire-ao-parana-vira-filme/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.tribunapr.com.br/mais-pop/vinda-de-saint-hilaire-ao-parana-vira-filme/
            </S.FlexTempleCardLInk>
          </S.FlexTempleCard>
          <S.FlexTempleCard>
            <S.FlexTempleCardTitle>
              • Notícias: Saint Hilaire na terra dos diamantes on 22/05/2006 -
              17:53 2558 readsDocumentário que retrata a viagem do naturalista
              pelos Campos Gerais é lançado em Tibagi.
            </S.FlexTempleCardTitle>
            <S.FlexTempleCardLInk
              href="https://tibagi.pr.gov.br/noticias/modules/news/article.php?storyid=4411"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tibagi.pr.gov.br/noticias/modules/news/article.php?storyid=4411
            </S.FlexTempleCardLInk>
          </S.FlexTempleCard>
          <S.FlexTempleCard>
            <S.FlexTempleCardTitle>
              • ONG Carreiro de Tropa - CATROP / 2 de maio de 2009. Documento na
              tela.
            </S.FlexTempleCardTitle>
            <S.FlexTempleCardLInk
              href="https://tibagi.pr.gov.br/noticias/modules/news/article.php?storyid=4411"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tibagi.pr.gov.br/noticias/modules/news/article.php?storyid=4411
            </S.FlexTempleCardLInk>
          </S.FlexTempleCard>
          <S.FlexTempleCard>
            <S.FlexTempleCardTitle>
              • Vinda de Saint Hilaire ao Paraná vira filme
            </S.FlexTempleCardTitle>
            <S.FlexTempleCardLInk
              href="https://tibagi.pr.gov.br/noticias/modules/news/article.php?storyid=4411"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tibagi.pr.gov.br/noticias/modules/news/article.php?storyid=4411
            </S.FlexTempleCardLInk>
          </S.FlexTempleCard>
          <S.FlexTempleCard>
            <S.FlexTempleCardTitle>
              • Parte inferior do formulário Origens da cidade são lembradas na
              comemoração do Dia Municipal do Tropeiro
            </S.FlexTempleCardTitle>
            <S.FlexTempleCardLInk
              href="http://www.jaguariaiva.pr.gov.br/index.php/secretarias-e-orgaos/educacao-cult-e-esporte/cultura-47857/5055-origens-da-cidade-sao-lembradas-na-comemoracao-do-dia-municipal-do-tropei"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.jaguariaiva.pr.gov.br/index.php/secretarias-e-orgaos/educacao-cult-e-esporte/cultura-47857/5055-origens-da-cidade-sao-lembradas-na-comemoracao-do-dia-municipal-do-tropei{" "}
            </S.FlexTempleCardLInk>
          </S.FlexTempleCard>
          <S.FlexTempleCard>
            <S.FlexTempleCardTitle>
              • Documentário discute ponto polêmico dos transgênicos "Estado de
              Resistência" abre um debate sobre como transgênicos manipulam
              padrão alimentar da população
            </S.FlexTempleCardTitle>
            <S.FlexTempleCardLInk
              href="https://www.bonde.com.br/entretenimento/shows-
eventos/documentario-discute-ponto-polemico-dos-transgenicos-
70756.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.bonde.com.br/entretenimento/shows-
              eventos/documentario-discute-ponto-polemico-dos-transgenicos-
              70756.html
            </S.FlexTempleCardLInk>
          </S.FlexTempleCard>
          <S.FlexTempleCard>
            <S.FlexTempleCardTitle>
              • Crianças conhecem o mundo do cinema | Notícias, Paraná | Tribuna
              PR - Paraná Online
            </S.FlexTempleCardTitle>
            <S.FlexTempleCardLInk
              href="https://www.tribunapr.com.br/noticias/parana/criancas-conhecem-o-mundo-do-cinema/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.tribunapr.com.br/noticias/parana/criancas-conhecem-o-mundo-do-cinema/
            </S.FlexTempleCardLInk>
          </S.FlexTempleCard>
          <S.ImgCardFlex>
            <S.ImgCardFlexImgContainerB>
              <S.ImgCardFlexImg src={navalha} />
            </S.ImgCardFlexImgContainerB>
            <S.ImgCardFlexTextContainerA>
              <S.ImgCardFlexTitleA>"Navalha na Carne"</S.ImgCardFlexTitleA>
            </S.ImgCardFlexTextContainerA>
          </S.ImgCardFlex>
          <S.ImgCardFlex>
            <S.ImgCardFlexImgContainerB width="15%">
              <S.ImgCardFlexImg src={vampa} />
            </S.ImgCardFlexImgContainerB>
            <S.ImgCardFlexTextContainerA>
              <S.ImgCardFlexTitleA>"Os Olhos da Vampa"</S.ImgCardFlexTitleA>
            </S.ImgCardFlexTextContainerA>
          </S.ImgCardFlex>
          <S.ImgCardFlex>
            <S.ImgCardFlexTextContainer>
              <div>
                <S.ImgCardFlexTitle>
                  "Produtora do Paraná grava longa metragem em favela carioca"
                </S.ImgCardFlexTitle>
                <S.ImgCardFlexSubTitle>
                  continue lendo em:
                </S.ImgCardFlexSubTitle>
              </div>
              <S.FlexTempleCardLInk
                style={{ width: "80%" }}
                href="https://www.jornaldooeste.com.br/noticia/produtora-do-parana-grava-longa-metragem-em-favela-carioca"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.jornaldooeste.com.br/noticia/produtora-do
                -parana-grava-longa-metragem-em-favela-carioca
              </S.FlexTempleCardLInk>
            </S.ImgCardFlexTextContainer>
            <S.ImgCardFlexImgContainer>
              <S.ImgCardFlexImg src={coopCuri1} />
            </S.ImgCardFlexImgContainer>
          </S.ImgCardFlex>
          <S.ImgCardFlexA>
            <S.ImgCardFlexTextContainerA>
              <S.FlexTempleCardLInk
                href="https://www.diariodoscampos.com.br/noticia/produtora-de-cinema-da-regiao-encerra-gravacoes-de-longa"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.diariodoscampos.com.br/noticia/produtora-de-cinema-da-regiao-encerra-gravacoes-de-longa
              </S.FlexTempleCardLInk>
            </S.ImgCardFlexTextContainerA>
            <S.ImgCardFlexImgContainerA>
              <S.ImgCardFlexImg src={coopCuri2} />
            </S.ImgCardFlexImgContainerA>
          </S.ImgCardFlexA>
          <S.FlexTempleCard>
            <S.FlexTempleTitleA>
              "Uma frente fria na laje da favela Com produção paranaense, filme
              adapta peça de Mário Bortolotto e marca a volta de Neville
              D’Almeida às telas"
            </S.FlexTempleTitleA>
            <S.ImgCardFlexSubTitleA>continue lendo em:</S.ImgCardFlexSubTitleA>
            <S.FlexTempleCardLInk
              style={{ width: "80%" }}
              href="https://www.gazetadopovo.com.br/caderno-g/uma-frente-fria-na-laje-da-favela-efna2c0j9i300r2ocfw9ktaoe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.gazetadopovo.com.br/caderno-g/uma-frente-fria-na-laje-da-favela-efna2c0j9i300r2ocfw9ktaoe/
            </S.FlexTempleCardLInk>
          </S.FlexTempleCard>
          <S.FlexTempleCard>
            <S.FlexTempleTitleA>A frente Fria</S.FlexTempleTitleA>
            <S.ImgCardFlexSubTitleA>continue lendo em:</S.ImgCardFlexSubTitleA>
            <S.FlexTempleCardLInk
              style={{ width: "80%" }}
              href="https://www.tribunapr.com.br/blogs/direto-do-octogono/a-frente-fria-que-a-chuva-traz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.tribunapr.com.br/blogs/direto-do-octogono/a-frente-fria-que-a-chuva-traz/
            </S.FlexTempleCardLInk>
          </S.FlexTempleCard>
          <S.FlexTempleCard>
            <S.FlexTempleTitleA>
              A Frente Fria que a Chuva Traz
            </S.FlexTempleTitleA>
            <S.ImgCardFlexSubTitleA>continue lendo em:</S.ImgCardFlexSubTitleA>
            <S.FlexTempleCardLInk
              style={{ width: "80%" }}
              href="http://www.festivaldorio.com.br/br/filmes/a-frente-fria-que-a-chuva-traz"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.festivaldorio.com.br/br/filmes/a-frente-fria-que-a-chuva-traz
            </S.FlexTempleCardLInk>
          </S.FlexTempleCard>
          <S.FlexTempleCard>
            <S.FlexTempleTitleA>
              <S.ImgContainer>
                <S.Img src={coopCuri3} />
              </S.ImgContainer>
              CAMARGO, Homero
            </S.FlexTempleTitleA>
            <S.ImgCardFlexSubTitleA>Leia mais em:</S.ImgCardFlexSubTitleA>
            <S.FlexTempleCardLInk
              style={{ width: "80%" }}
              href="http://www.artesnaweb.com.br/index.php?pagina=home&abrir=arte&acervo=632 1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.artesnaweb.com.br/index.php?pagina=home&abrir=arte&acervo=632
              1/
            </S.FlexTempleCardLInk>
          </S.FlexTempleCard>
          <S.FlexTempleCard>
            <S.ImgContainerA>
              <S.Img src={coopCuri4} />
            </S.ImgContainerA>
            <S.FlexTempleTitleA>
              O foco geográfico do cineasta em Ventania
            </S.FlexTempleTitleA>
            <S.ImgCardFlexSubTitleA>
              Produtor em âmbito nacional, Homero Camargo realiza um sonho de
              menino: registrar em audiovisuais as paisagens e culturas
              Paranaenses
            </S.ImgCardFlexSubTitleA>
            <S.FlexTempleCardLInk
              style={{ width: "80%" }}
              href="https://www.folhadelondrina.com.br/cidades/o-foco-geografico-do-cineasta-em-ventania-601141.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.folhadelondrina.com.br/cidades/o-foco-geografico-do-cineasta-em-ventania-601141.html
            </S.FlexTempleCardLInk>
          </S.FlexTempleCard>
          <S.ImgBigContainer>
            <S.ImgBig src={coopCuri5} />
          </S.ImgBigContainer>
        </S.FlexTemple>
      </S.BodyB>
    </S.MainContainer>
  );
};

export default CooperativaCurriculo;
