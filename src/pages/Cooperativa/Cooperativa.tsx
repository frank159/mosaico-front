import * as S from "./CooperativaStyled";
import React, { useState, useRef, useEffect } from "react";
import Footer from "../../components/footer/footer";

const HomeroFoto =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324650/homero_bmcqqj.png";
const cameraCoop =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324645/cameraCoop_qatvbg.png";
const pinheiroCoop =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324654/pinheiroCoop_zjd9te.png";
const cooperativaLogo =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324713/cooperativaLogo_yycsv7.png";

const xeretas =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324661/xeretas_iqr0lb.png";
const Afrente =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324641/Afrente_gn0qpz.png";
const projetoID =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324654/projetoID_ytbj68.png";
const sonhosTrop =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324659/sonhosTrop_tgylrk.jpg";
const estadoDressis =
  "https://res.cloudinary.com/djg8c78mb/image/upload/v1746324647/estadoDressis_guhvqm.png";

interface SlideItem {
  id: number;
  title: string;
  gradient: string;
  text: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  content?: React.ReactNode;
  backgroundColor2?: string;
  rote?: string;
  imageSrc: string; // Adicionado campo para a imagem
}

const Cooperativa: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayRefA = useRef<HTMLDivElement>(null);

  const defaultSlides: SlideItem[] = [
    {
      id: 1,
      imageSrc: Afrente,
      title: "A FRENTE FRIA QUE A CHUVA TRAZ",
      text: "Um grupo de playboys organiza a última festa na favela antes da mudança no tempo. E para esta noite especial, além das drogas, álcool e sexo habituais, eles receberão convidados e penetras inusitados: uma viciada que usa e é usada pelo grupo, um cantor sertanejo criado na própria favela, um segurança estranho e o dono da laje. Essa mistura não pode terminar bem. Livremente inspirada na peça homônima de Mario Bortolotto.",
      hoverBackgroundColor: "#000000",
      gradient: "linear-gradient(128deg, #40afff 0%, #3f62ff 100%)",
      backgroundColor: "#4287f50",
      rote: "FrenteFria",
    },
    {
      id: 2,
      imageSrc: projetoID,
      title: "projeto identidade",
      text: "O projeto IDENTIDADE percorreu mais de 25 cidades do Paraná, exibindo três documentários que resgatam a história, a cultura e a identidade do Estado. Cada documentário, trouxe ao público reflexões sobre a memória e o patrimônio paranaense. Assista os três filmes aqui!",
      hoverBackgroundColor: "#000000",
      gradient: "linear-gradient(128deg, #40afff 0%, #3f62ff 100%)",
      backgroundColor: "#4287f50",
      rote: "projeto-id?fromCooperativa=true",
    },
    {
      id: 3,
      imageSrc: xeretas,
      title: "os xeretas",
      text: "Três amigos curiosos, conhecidos como os Xeretas, encontram uma misteriosa menina perdida na cidade, marcada por um símbolo enigmático. Ao descobrir que ela é uma viajante dos portais do tempo e que sua vida depende de um medalhão roubado, eles embarcam em uma eletrizante aventura para recuperá-lo antes que seja tarde demais.",
      hoverBackgroundColor: "#000000",
      gradient: "linear-gradient(128deg, #40afff 0%, #3f62ff 100%)",
      backgroundColor: "#4287f50",
      rote: "Ox-Xeretas",
    },
    {
      id: 4,
      imageSrc: estadoDressis,
      title: "ESTADO DE RESISTÊNCIA",
      text: "O documentário aborda diferentes modos de produção agrícola a partir de um corte longitudinal da divisa com São Paulo à Santa Catarina. Mergulhando em questões como: Quais as relações entre a produção de alimentos e a cultura de um povo? Mudanças climáticas, mudanças de vidas.",
      hoverBackgroundColor: "#000000",
      gradient: "linear-gradient(128deg, #40afff 0%, #3f62ff 100%)",
      backgroundColor: "#4287f50",
      rote: "EstadoResistencia",
    },
    {
      id: 5,
      imageSrc: sonhosTrop,
      title: "SONHOS TROPICAIS",
      text: "Em 1889, Oswaldo Cruz retorna ao Brasil para atuar como médico, enquanto Esther, uma imigrante polonesa, é enganada e forçada à prostituição. Enquanto ele ascende na medicina, combatendo doenças como febre amarela e peste, ela luta para sobreviver. A obrigatoriedade da vacina contra a varíola gera a Revolta da Vacina, impactando profundamente a sociedade.",
      hoverBackgroundColor: "#000000",
      gradient: "linear-gradient(128deg, #40afff 0%, #3f62ff 100%)",
      backgroundColor: "#4287f50",
      rote: "Tropicais",
    },
  ];

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <S.MainContainer>
      <S.FullImgFrame>
        <S.FullImg src={pinheiroCoop}></S.FullImg>
        <S.TitleOverlayContainer>
          <S.TitleLogo>
            <S.LogoImg src={cooperativaLogo} alt="cooperativaLogo" />
          </S.TitleLogo>
        </S.TitleOverlayContainer>
      </S.FullImgFrame>
      <S.SecaoTexto>
        <S.SecaoTextoCard>
          <S.cardTextoImg>
            <S.ContainerLeftA>
              <S.TitleA>Histórias que Conectam</S.TitleA>
              <S.TextoA>
                Com mais de 24 anos de <S.Stro>experiência</S.Stro>, criamos
                projetos audiovisuais que{" "}
                <S.Stro>conectam histórias e impactam públicos.</S.Stro> Nossa
                atuação abrange longas-metragens, documentários, telefilmes,
                séries e iniciativas socioculturais, sempre com{" "}
                <S.Stro>inovação e relevância.</S.Stro>
              </S.TextoA>
            </S.ContainerLeftA>
            <S.ContainerRightA>
              <S.ImgFotoA src={cameraCoop} />
            </S.ContainerRightA>
          </S.cardTextoImg>
          <S.RightTextA>
            há mais de 24 anos
            <br />
            criada em Castro
            <br />
            paraná, brasil
          </S.RightTextA>
        </S.SecaoTextoCard>
      </S.SecaoTexto>
      <S.SecaoApresentacao>
        <S.ImageWrapper>
          <S.HomeroFullImgFrame>
            <S.ImgStyled src={HomeroFoto} alt="Homero" isMobile={isMobile} />
            <S.GradientOverlay />
          </S.HomeroFullImgFrame>
        </S.ImageWrapper>
        <S.OverlayContainer $isMobile={isMobile}>
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
                Responsável por fundar a Cooperativa de Cinema & Mídias Digitais
                e com mais de 35 anos no cinema, tem experiência na produção de
                longas-metragens, captação de recursos e consultoria. Participa
                ativamente de debates políticos sobre a indústria audiovisual e
                tem ampla experiência em marketing cinematográfico. Foi
                cofundador do SIAPAR e articulador do Prêmio Estadual de Cinema
                e Vídeo do Paraná. Já trabalhou com diretores renomados como
                Neville D’Almeida, Mauro Lima e Michael Ruman. Atua no
                desenvolvimento de estratégias para o mercado, além de projetos
                socioculturais e de regionalização do audiovisual.{" "}
              </S.TextContent>
              <S.SaibaMaisButton
                onClick={() => (window.location.href = "CooperativaCurriculo")}
              >
                Saiba Mais
              </S.SaibaMaisButton>
            </S.TextSection>
          </S.OverlayContent>
        </S.OverlayContainer>
      </S.SecaoApresentacao>
      <S.MoviesContainer>
        <S.Title>nossas produções</S.Title>
        <S.MoviesGrid>
          {defaultSlides.map((movie, index) => (
            <S.MovieCard key={index}>
              <S.MovieImage
                src={movie.imageSrc}
                alt={movie.title}
                style={
                  movie.title === "A FRENTE FRIA QUE A CHUVA TRAZ"
                    ? { objectPosition: "left" }
                    : {}
                }
              />
              <S.MovieTitle>{movie.title}</S.MovieTitle>
              <S.MovieDescription>{movie.text}</S.MovieDescription>
              <S.ButtonContainer>
                <S.MovieButton
                  onClick={() => (window.location.href = movie.rote || "#")}
                >
                  Saiba Mais
                </S.MovieButton>
              </S.ButtonContainer>
            </S.MovieCard>
          ))}
        </S.MoviesGrid>
      </S.MoviesContainer>
      {!isMobile && <Footer isBlackBg={true} />}
    </S.MainContainer>
  );
};

export default Cooperativa;
