import React, { useEffect, useRef, useState } from "react";
import * as S from "./CAPStyled";
import Footer from "../../components/footer/footer";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const maoGlobo =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324729/maoGlobo_z4x1lr.png";
const ong =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324731/ong_jnyizk.png";
const calendario =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324726/calendario_gu2st4.png";
const localPreto =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324728/local_preto_eqchee.png";
const esclamacao =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324726/esclamacao_vvi7db.png";
const filmeJoin =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324712/image_29_zvw9lo.png";
const capLogo =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324712/logotipo_5_nmfrhi.png";

const School: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [lineHeight, setLineHeight] = useState("0px");
  const bigImgContainerRef = useRef<HTMLDivElement>(null);

  const listItems = [
    {
      title: "2023",
      text: "A Filmjoin foi player nos eventos: RIO2C, evento de economia criativa, realizada em abril, Rio de Janeiro CINEPITCHING, rodada de negócios de audiovisual, em agosto, São Paulo FAM – Festival de Florianópolis, em setembro, Santa Catarina DOC-SP – Rodada de negócios audiovisual, em outubro, São Paulo.",
    },
    {
      title: "2022",
      text: "Incubação no EIT – Escritório de Inovação Tecnológica da UFMT. A Filmjoin foi player nos eventos: CINEPITCHING, rodada de negócios de audiovisual, em agosto DOC-SP – Rodada de negócios audiovisual, em outubro, São Paulo",
    },
    {
      title: "2021",
      text: "Em 25 de janeiro foi formalizada como empresa de pequeno porte, CNPJ: 40.550.704/0001-52 Incubação no EIT – Escritório de Inovação Tecnológica da UFMT.",
    },
    {
      title: "2020",
      text: "Incubação no EIT – Escritório de Inovação Tecnológica da UFMT. Em 07 de abril, a marca Filmjoin é registrada no INPI.",
    },
    {
      title: "2019",
      text: "Incubação na Faster Capital, fundo de investimento de Dubai, Emirados Árabes. Incubação no EIT – Escritório de Inovação Tecnológica da UFMT. Contrato de consultoria com Camila Santo da Rizhoma LLC, do Vale do Silício, EUA. Recebe o apoio da Secretaria de Cultura e Economia Criativa do Estado de São Paulo. Participa do coworking do Sebrae-SP, no Palácio Campos Elíseos, em São Paulo. Recebe apoio da Fundação Cassiano Ricardo de São José dos Campos, Estado de Sâo Paulo. Selecionada como Startup convidada na Innovation Zone – da feira SET EXPO, em São Paulo, SP, pela participação foi premiada pela Amazon/AWS, com uma aceleração de 1 ano.",
    },
    {
      title: "2018",
      text: "Incubação no EIT – Escritório de Inovação Tecnológica da UFMT. Selecionada para o MIC-BR, mercado da indústria criativa do Brasil, realizada na cidade de São Paulo, com apoio da APEX - Agência Brasileira de Promoção de Exportações e Investimentos e Sebrae SP.",
    },
    {
      title: "2017",
      text: "O projeto “Cinema do bem”, é selecionado para o IDEAÇÃO, do MT Criativo, EIT – Escritório de Inovação Tecnológica da UFMT – Universidade Federal do Mato Grosso e Sebrae MT, programa de aceleração de ideia criativas, com duração de setembro a dezembro, onde nasceu a Filmjoin, uma plataforma TVOD-Transational Video On Demand, independente e interativa, de produção e exibição de filmes, séries e documentários. Em dezembro o site da plataforma é lançado no endereço https://www.filmjoin.com.br/",
    },
    {
      title: "2016",
      text: "Eu tinha acabado de produzir o longa-metragem “Meu Amigo Hindu”, do Hector Babenco, e todas as previsões do lançamento foram frustradas e muito pouca gente viu o filme, e mais uma vez a sensação era de perda, perda da possibilidade de se conectar com o público e com isso poder ter recursos para continuar a produzir filmes. Essa frustação me fez partir para um ano sabático, porque eu precisava encontrar uma saída para a distribuição dos filmes que produzimos. De julho a outubro, ministrei o curso “Cinema é Inovação”, em Cuiabá-MT, onde discuto com os participantes a importância da inovação no processo produção audiovisual para obter sucesso de público e renda, depois segui para Brasília e para Alto Paraíso de Goiás, onde nasceu o projeto “Cinema do Bem”, o projeto era pensar uma formula de acabar com a dor da distribuição, e se comunicar direto com o público, uma forma de disponibilizar o conhecimento dos produtores, para todos e para o benefício de todos.",
    },
  ];

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const updateLineHeight = () => {
      if (bigImgContainerRef.current) {
        const height = bigImgContainerRef.current.offsetHeight;
        setLineHeight(`${height * 1.1}px`); // 110% of the container height
      }
    };
    updateLineHeight();
    window.addEventListener("resize", updateLineHeight);
    return () => window.removeEventListener("resize", updateLineHeight);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <S.Container>
      <S.TitleContainer>
        <S.TitleContant>
          <S.ImgLogo src={capLogo} />
          <S.TitleSection>
            <S.DivTitle>CAP</S.DivTitle>
            <S.DivText>(Centro Audiovisual do Paraná)</S.DivText>
          </S.TitleSection>
        </S.TitleContant>
      </S.TitleContainer>
      <S.Body>
        <S.BodyListCardContainer>
          <S.Card>
            <S.CardContent>
              {!isMobile && (
                <S.CardIcon>
                  <S.CardIconImg src={maoGlobo} />
                </S.CardIcon>
              )}
              <S.CardText>
                O Centro Audiovisual do Pr desenvolve projetos voltados para
                educação audiovisual, seja na realização de oficinas de criação
                e produção em si, como também na produção de conteúdo de
                entreterimento com forte engajamento educacional e temática de
                recuperação de floresta e reciclagem do lixo.
              </S.CardText>
            </S.CardContent>
          </S.Card>
        </S.BodyListCardContainer>
        <S.TitleBigImg>Sobre nós:</S.TitleBigImg>

        <S.BigImgContainerA>
          <S.BigImgContainer ref={bigImgContainerRef}>
            <S.TextBigImgContainer>
              <S.TextBigImg>
                Trabalhamos com foco na comunicação com crianças e adolescentes,
                promovendo educação audiovisual empírica, onde os participantes
                <br />
                aprendem sobre o processo criativo, com resultados concretos de
                produção audiovisual.
              </S.TextBigImg>
            </S.TextBigImgContainer>
            <S.IconTextBigImgContainerList>
              <S.LineDescription />
              <S.IconTextBigImgContainerListB>
                <S.IconTextBigImgContainer>
                  <S.IconBigImgCard src={ong} />
                  <S.TextBigImgCard>
                    Organização não governamental
                  </S.TextBigImgCard>
                </S.IconTextBigImgContainer>
                <S.IconTextBigImgContainer>
                  <S.IconBigImgCard src={calendario} />
                  <S.TextBigImgCard>Atua desde 2001</S.TextBigImgCard>
                </S.IconTextBigImgContainer>
                <S.IconTextBigImgContainer>
                  <S.IconBigImgCard src={localPreto} />
                  <S.TextBigImgCard>
                    Sediada Campos Gerais - PR
                  </S.TextBigImgCard>
                </S.IconTextBigImgContainer>
              </S.IconTextBigImgContainerListB>
            </S.IconTextBigImgContainerList>
          </S.BigImgContainer>
        </S.BigImgContainerA>
        <S.Faixa>
          <S.Esclamacao src={esclamacao} />
          <S.FaixaText>
            O CAP funciona como um laboratório de novas ideias digitais, e
            oferece “HackAthon Digital”, que são eventos, que estimulam a
            criação de novos conteúdos e produtos a partir de desafios de
            produção, onde profissionais, aspirantes e estudantes do mercado tem
            oportunidade de transformar ideias de projetos de filmes, séries,
            games, em vídeo pilotos, com o objetivo de antecipar a experiência
            digital dos fãs e aumentar as possibilidades de sucesso de seus
            projetos.
          </S.FaixaText>
        </S.Faixa>
        <S.FloatingCard>
          <S.TextFloatingCard>
            <S.FloatingCardLogo src={filmeJoin} alt="FilmeJoin Logo" />
          </S.TextFloatingCard>
          {/* <S.LinkFloatingCard
            href="https://www.filmjoin.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.filmjoin.com.br
          </S.LinkFloatingCard> */}
          <S.FilmeJoinButton
            onClick={() =>
              window.open(
                "https://www.filmjoin.com.br",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Saiba Mais
          </S.FilmeJoinButton>
        </S.FloatingCard>
        <S.LinhaH />
        <S.TitlePage>PROJETOS:</S.TitlePage>
        <S.ProjetosContainer>
          <S.CapLogo src={capLogo} alt="CAP Logo" />
          <S.CapLogoList>
            {[
              { text: "• Escola Audiovisual CEEPA", link: "/Ceepa" },
              { text: "• Projeto  Identidade ", link: "/projeto-id" },
            ].map((item, index) => (
              <S.CapLogoListItem key={index} index={index}>
                {item.text}
                <S.SaibaMaisButton
                  onClick={() => (window.location.href = item.link)}
                >
                  Saiba Mais
                </S.SaibaMaisButton>
              </S.CapLogoListItem>
            ))}
          </S.CapLogoList>
        </S.ProjetosContainer>
      </S.Body>
      <Footer />
    </S.Container>
  );
};

export default School;
