import * as S from './CooperativaStyled';
import React, { useState, useRef, useEffect } from 'react';
import Footer from '../../components/footer/footer';
import styled from 'styled-components';

const HomeroFoto = require("../../assets/images/img/homero.png")
const cameraCoop = require("../../assets/images/img/cameraCoop.png")
const pinheiroCoop = require("../../assets/images/img/pinheiroCoop.png")
const cooperativaLogo = require("../../assets/images/logo/cooperativaLogo.png")

const xeretas = require("../../assets/images/img/xeretas.png");
const Afrente = require("../../assets/images/img/Afrente.png");
const projetoID = require("../../assets/images/img/projetoID.png");
const sonhosTrop = require("../../assets/images/img/sonhosTrop.png");
const estadoDressis = require("../../assets/images/img/estadoDressis.png");

const SonhosTropicaisImg = styled.img<{ isMobile: boolean }>`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  object-position: 50% 30%;
  opacity: 0.2;
  ${props => props.isMobile && `
    opacity: 0.1;
    object-position: right center;
  `}
`;

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
  const [overlayHeight, setOverlayHeight] = useState(0);

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
      rote: 'FrenteFria'
    },
    {
      id: 2,
      imageSrc: projetoID,
      title: "projeto identidade",
      text: "O projeto IDENTIDADE percorreu mais de 25 cidades do Paraná, exibindo três documentários que resgatam a história, a cultura e a identidade do Estado. Cada documentário, trouxe ao público reflexões sobre a memória e o patrimônio paranaense. Assista os três filmes aqui!",
      hoverBackgroundColor: "#000000",
      gradient: "linear-gradient(128deg, #40afff 0%, #3f62ff 100%)",
      backgroundColor: "#4287f50",
      rote: 'projeto-id?fromCooperativa=true'
    },
    {
      id: 3,
      imageSrc: xeretas,
      title: "os xeretas",
      text: "Três amigos curiosos, conhecidos como os Xeretas, encontram uma misteriosa menina perdida na cidade, marcada por um símbolo enigmático. Ao descobrir que ela é uma viajante dos portais do tempo e que sua vida depende de um medalhão roubado, eles embarcam em uma eletrizante aventura para recuperá-lo antes que seja tarde demais.",
      hoverBackgroundColor: "#000000",
      gradient: "linear-gradient(128deg, #40afff 0%, #3f62ff 100%)",
      backgroundColor: "#4287f50",
      rote: 'Ox-Xeretas'
    },
    {
      id: 4,
      imageSrc: sonhosTrop,
      title: "SONHOS TROPICAIS",
      text: "Em 1889, Oswaldo Cruz retorna ao Brasil para atuar como médico, enquanto Esther, uma imigrante polonesa, é enganada e forçada à prostituição. Enquanto ele ascende na medicina, combatendo doenças como febre amarela e peste, ela luta para sobreviver. A obrigatoriedade da vacina contra a varíola gera a Revolta da Vacina, impactando profundamente a sociedade.",
      hoverBackgroundColor: "#000000",
      gradient: "linear-gradient(128deg, #40afff 0%, #3f62ff 100%)",
      backgroundColor: "#4287f50",
      rote: 'Tropicais'
    },
    {
      id: 5,
      imageSrc: estadoDressis,
      title: "ESTADO DE RESISTÊNCIA",
      text: "O documentário aborda diferentes modos de produção agrícola a partir de um corte longitudinal da divisa com São Paulo à Santa Catarina. Mergulhando em questões como: Quais as relações entre a produção de alimentos e a cultura de um povo? Mudanças climáticas, mudanças de vidas.",
      hoverBackgroundColor: "#000000",
      gradient: "linear-gradient(128deg, #40afff 0%, #3f62ff 100%)",
      backgroundColor: "#4287f50",
      rote: 'EstadoResistencia'
    },
  ];


  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, [])

  useEffect(() => {
    if (overlayRef.current && overlayRefA.current) {
      if (window.innerWidth > 1130) {
        setOverlayHeight(overlayRef.current.clientHeight);
      } else if (window.innerWidth <= 820) {
        setOverlayHeight(overlayRef.current.clientHeight - (overlayRefA.current.clientHeight / 10));
      } else if (window.innerWidth <= 1130) {
        setOverlayHeight(overlayRef.current.clientHeight - (overlayRefA.current.clientHeight / 10));
      }
    }
  }, [overlayRef, isMobile]);

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
      <S.Body>
        <S.ContainerA>
          <S.ContainerSubA>
            <S.ContainerLeftA>
              <S.TitleA>Histórias que Conectam</S.TitleA>
              <S.TextoA>
                Com mais de 24 anos de <S.Stro>experiência</S.Stro>, criamos projetos audiovisuais que <S.Stro>conectam histórias e impactam públicos.</S.Stro> Nossa atuação abrange longas-metragens, documentários, telefilmes, séries e iniciativas socioculturais, sempre com <S.Stro>inovação e relevância.</S.Stro>
              </S.TextoA>
            </S.ContainerLeftA>
            <S.ContainerRightA >
              <S.ImgFotoA src={cameraCoop} />
            </S.ContainerRightA>
          </S.ContainerSubA>
          <S.RightTextA>
            há mais de 24 anos<br />
            criada em Castro<br />
            paraná, brasil
          </S.RightTextA>
        </S.ContainerA>
      </S.Body>
      <S.BodyB >
        <S.ImageWrapper>
          <S.HomeroFullImgFrame >
            <SonhosTropicaisImg
              src={HomeroFoto}
              alt="Homero"
              isMobile={isMobile}
            />
            <S.GradientOverlay />
          </S.HomeroFullImgFrame >
          <S.OverlayContainer >
            <S.OverlayContent >
              <S.SmallImageContainer>
                <S.SmallImage src={HomeroFoto} alt="Homero" />
                <S.SmallImageText ref={overlayRefA}>
                  fundador da<br />
                  cooperativa de cinema<br />
                  & mídias siciais
                </S.SmallImageText>
              </S.SmallImageContainer>
              <S.TextSection ref={overlayRef}>
                <S.TextTitle>Homero Camargo</S.TextTitle>
                <S.TextContent>
                  Responsável por fundar a Cooperativa de Cinema & Mídias Digitais e com mais de 35 anos no cinema, tem experiência na produção de longas-metragens, captação de recursos e consultoria. Participa ativamente de debates políticos sobre a indústria audiovisual e tem ampla experiência em marketing cinematográfico. Foi cofundador do SIAPAR e articulador do Prêmio Estadual de Cinema e Vídeo do Paraná. Já trabalhou com diretores renomados como Neville D’Almeida, Mauro Lima e Michael Ruman. Atua no desenvolvimento de estratégias para o mercado, além de projetos socioculturais e de regionalização do audiovisual.                </S.TextContent>
                <S.SaibaMaisButton onClick={() => window.location.href = 'CooperativaCurriculo'}>
                  Saiba Mais
                </S.SaibaMaisButton>
              </S.TextSection>
            </S.OverlayContent>
          </S.OverlayContainer>
        </S.ImageWrapper>
      </S.BodyB>
      {isMobile && <S.MargemCoo height={`${overlayHeight}px`} />}
      <S.LinhaHorizontal />
      <S.MoviesContainer>
        <S.Title>nossas produções</S.Title>
        <S.MoviesGrid>
          {defaultSlides.map((movie, index) => (
            <S.MovieCard key={index}>
              <S.MovieImage src={movie.imageSrc} alt={movie.title} />
              <S.MovieTitle>{movie.title}</S.MovieTitle>
              <S.MovieDescription>{movie.text}</S.MovieDescription>
              <S.ButtonContainer>
                <S.MovieButton onClick={() => window.location.href = movie.rote || '#'}>Saiba Mais</S.MovieButton>
              </S.ButtonContainer>
            </S.MovieCard>
          ))}
        </S.MoviesGrid>
      </S.MoviesContainer>
      {!isMobile && (
        <Footer isBlackBg={true} />
      )}
    </S.MainContainer >
  );
};

export default Cooperativa;
