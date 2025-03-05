import { text } from 'd3';
import * as S from './CooperativaStyled';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame } from "motion/react"; // ou "framer-motion" conforme sua lib
import { useNavigate } from 'react-router-dom';

const HomeroFoto = require("../../assets/images/img/homero.png")
const cameraCoop = require("../../assets/images/img/cameraCoop.png")
const pinheiroCoop = require("../../assets/images/img/pinheiroCoop.png")
const cooperativaLogo = require("../../assets/images/logo/cooperativaLogo.png")

const xeretas = require("../../assets/images/img/xeretas.png")
const Afrente = require("../../assets/images/img/Afrente.png")
const projetoID = require("../../assets/images/img/projetoID.png")
const sonhosTrop = require("../../assets/images/img/sonhosTrop.png")
const estadoDressis = require("../../assets/images/img/estadoDressis.png")

const Cooperativa: React.FC = () => {

  const listaCarrocel = [
    {
      id: 1,
      img: Afrente,
      title: 'A FRENTE FRIA QUE A CHUVA TRAZ',
      text: 'Um grupo de playboys organiza a última festa na favela antes da mudança no tempo. E para esta noite especial, além das drogas, álcool e sexo habituais, eles receberão convidados e penetras inusitados: uma viciada que usa e é usada pelo grupo, um cantor sertanejo criado na própria favela, um segurança estranho e o dono da laje. Essa mistura não pode terminar bem. Livremente inspirada na peça homônima de Mario Bortolotto.'
    },
    {
      id: 2,
      img: projetoID,
      title: 'projeto identidade',
      text: 'O projeto IDENTIDADE percorreu mais de 25 cidades do Paraná, exibindo três documentários que resgatam a história, a cultura e a identidade do Estado. Cada documentário, trouxe ao público reflexões sobre a memória e o patrimônio paranaense. Assista os três filmes aqui!'
    },
    {
      id: 3,
      img: xeretas,
      title: 'os xeretas',
      text: 'Três amigos curiosos, conhecidos como os Xeretas, encontram uma misteriosa menina perdida na cidade, marcada por um símbolo enigmático. Ao descobrir que ela é uma viajante dos portais do tempo e que sua vida depende de um medalhão roubado, eles embarcam em uma eletrizante aventura para recuperá-lo antes que seja tarde demais.'
    },
    {
      id: 4,
      img: sonhosTrop,
      title: 'SONHOS TROPICAIS',
      text: 'Em 1889, Oswaldo Cruz retorna ao Brasil para atuar como médico, enquanto Esther, uma imigrante polonesa, é enganada e forçada à prostituição. Enquanto ele ascende na medicina, combatendo doenças como febre amarela e peste, ela luta para sobreviver. A obrigatoriedade da vacina contra a varíola gera a Revolta da Vacina, impactando profundamente a sociedade.'
    },
    {
      id: 5,
      img: estadoDressis,
      title: 'ESTADO DE RESISTÊNCIA',
      text: 'Em 1889, Oswaldo Cruz retorna ao Brasil para atuar como médico, enquanto Esther, uma imigrante polonesa, é enganada e forçada à prostituição. Enquanto ele ascende na medicina, combatendo doenças como febre amarela e peste, ela luta para sobreviver. A obrigatoriedade da vacina contra a varíola gera a Revolta da Vacina, impactando profundamente a sociedade.'
    },
  ]

  const navigate = useNavigate();

  const handleClick = (index: number) => {
    if(index == 2){
      navigate('/projeto-id');
    }
  };
  
  const normalSpeed = 100;
  const slowSpeed = 40;
  const [speed, setSpeed] = useState(normalSpeed);

  // Duplica os itens para garantir o loop contínuo
  const items = [...listaCarrocel, ...listaCarrocel];

  // Ref para medir a largura do container que contém os cards
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // Usamos scrollWidth para obter a largura total dos itens (que não será limitada pelo CSS)
      setContainerWidth(containerRef.current.scrollWidth);
    }
  }, [items]);

  // Cria um motion value para a posição horizontal
  const x = useMotionValue(0);

  // Atualiza a posição a cada frame, usando a velocidade atual (em pixels/segundo)
  useAnimationFrame((t, delta) => {
    const moveBy = speed * (delta / 1000);
    x.set(x.get() - moveBy);

    // Quando o deslocamento atinge metade do total (devido à duplicação dos itens),
    // reiniciamos para 0 para criar um loop infinito sem espaços vazios
    if (containerWidth && x.get() <= -containerWidth / 2) {
      x.set(0);
    }
  });

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
      <S.BodyB>
        <S.ImageWrapper>
          <S.HomeroFullImgFrame>
            <S.HomeroFullImg src={HomeroFoto} alt="Homero" />
            <S.GradientOverlay />
          </S.HomeroFullImgFrame>
          <S.OverlayContainer>
            <S.OverlayContent>
              <S.SmallImageContainer>
                <S.SmallImage src={HomeroFoto} alt="Homero" />
                <S.SmallImageText>
                  fundador da<br />
                  cooperativa de cinema<br />
                  & mídias siciais
                </S.SmallImageText>
              </S.SmallImageContainer>
              <S.TextSection>
                <S.TextTitle>Homero Camargo</S.TextTitle>
                <S.TextContent>
                  Responsável por fundar a Cooperativa de Cinema & Mídias Digitais e com mais de 35 anos no cinema, tem experiência na produção de longas-metragens, captação de recursos e consultoria. Participa ativamente de debates políticos sobre a indústria audiovisual e tem ampla experiência em marketing cinematográfico. Foi cofundador do SIAPAR e articulador do Prêmio Estadual de Cinema e Vídeo do Paraná. Já trabalhou com diretores renomados como Neville D’Almeida, Mauro Lima e Michael Ruman. Atua no desenvolvimento de estratégias para o mercado, além de projetos socioculturais e de regionalização do audiovisual.
                </S.TextContent>
                <S.SaibaMaisButton>
                  Saiba Mais
                </S.SaibaMaisButton>
              </S.TextSection>
            </S.OverlayContent>
          </S.OverlayContainer>
        </S.ImageWrapper>
      </S.BodyB>
      <S.CarrocelSection style={{ overflow: "hidden" }}>
        <motion.div
          ref={containerRef}
          style={{ x, display: "flex" }}
        >
          {items.map((item, index) => (
            <S.CardCarrocelMotion
              key={index}
              // Ao passar o mouse sobre um card, diminui a velocidade para desacelerar o carrossel
              onMouseEnter={() => setSpeed(slowSpeed)}
              onMouseLeave={() => setSpeed(normalSpeed)}
              // Altera a cor de fundo com uma transição suave (a cor pode ser ajustada)
              whileHover={{
                backgroundColor: "#333333",
                transition: { duration: 0.3 },
              }}
              style={{ margin: "0 1vw", flexShrink: 0 }} // garante que os cards não encolham
            >
              <S.CardCarrocelContent>
                <S.CardCarrocelImg src={item.img} alt={item.title} />
                <S.CardCarrocelTitle>{item.title}</S.CardCarrocelTitle>
                <S.CardCarrocelTextContainer>
                  <S.CardCarrocelLineContainer/>
                  <S.CardCarrocelText>{item.text}</S.CardCarrocelText>
                </S.CardCarrocelTextContainer>
              </S.CardCarrocelContent>
              <S.CardCarrocelButton onClick={(e) => {handleClick(item.id)}} >saiba mais</S.CardCarrocelButton>
            </S.CardCarrocelMotion>
          ))}
        </motion.div>
      </S.CarrocelSection>
    </S.MainContainer >
  );
};

export default Cooperativa;
