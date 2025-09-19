import React, { useEffect, useRef, useState } from "react";
import * as S from "./CAPStyled";
import Footer from "../../components/footer/footer";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import useImagesLoaded from "../../hooks/useImagesLoaded";
import LoadingOverlay from "../../components/LoadingComponente/Loading";

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
  const bigImgContainerRef = useRef<HTMLDivElement>(null);
  const [onLoading, setOnLoading] = useState(true);

  const imageUrls = [
    maoGlobo,
    ong,
    calendario,
    localPreto,
    esclamacao,
    filmeJoin,
    capLogo,
  ];
  const allImagesLoaded = useImagesLoaded(imageUrls);

  useEffect(() => {
    if (allImagesLoaded) {
      const timer = setTimeout(() => {
        setOnLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [allImagesLoaded]);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <S.Container>
      {onLoading && <LoadingOverlay />}
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
