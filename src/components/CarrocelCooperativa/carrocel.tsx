import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import * as S from "./CarouselStyled";

const xeretas = require("../../assets/images/img/xeretas.png");
const Afrente = require("../../assets/images/img/Afrente.png");
const projetoID = require("../../assets/images/img/projetoID.png");
const sonhosTrop = require("../../assets/images/img/sonhosTrop.png");
const estadoDressis = require("../../assets/images/img/estadoDressis.png");

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

interface CarouselProps {
    backgroundColor?: string;
    textColor?: string;
    title?: string;
    subtitle?: string;
    isMobile?: boolean;
    backgroundColor2?: string;
    slides?: SlideItem[];
}

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
        rote: 'projeto-id'
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
        text: "ESPERANDO TEXTO",
        hoverBackgroundColor: "#000000",
        gradient: "linear-gradient(128deg, #40afff 0%, #3f62ff 100%)",
        backgroundColor: "#4287f50",
        rote: 'projeto-id'
    },
];

const Carousel: React.FC<CarouselProps> = ({
    backgroundColor = "#062400",
    textColor = "#FFFFFF",
    title = "Carrossel Keen Slider",
    subtitle = "Experimente deslizar livremente as imagens!",
    slides = defaultSlides,
    backgroundColor2 = "",
    isMobile,
}) => {

    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free",
        slides: {
            perView: isMobile ? 1.1 : 3, // 1 slide por vez no mobile
            spacing: 15,
        }
    });


    return (
        <S.Container backgroundColor={backgroundColor} textColor={textColor}>
            <S.CarouselWrapper backgroundColor2={backgroundColor2}>
                <div ref={sliderRef} className="keen-slider">
                    {slides.map((slide, index) => (
                        <S.Slide
                            key={index}
                            className="keen-slider__slide"
                            gradient={slide.gradient}
                            isMobile={isMobile} // Pass isMobile prop to Slide
                        >
                            <S.CardContainer>
                                <S.CardCarrocelContent>
                                    <S.CardCarrocelImg alignEnd={slide.title === "A FRENTE FRIA QUE A CHUVA TRAZ"} src={slide.imageSrc} alt={slide.title} />
                                    <S.ContainerCarrocelTitle>
                                        <S.CardCarrocelTitle>{slide.title}</S.CardCarrocelTitle>
                                    </S.ContainerCarrocelTitle>
                                    <S.CardCarrocelTextContainer alignStart={slide.title === "A FRENTE FRIA QUE A CHUVA TRAZ" && isMobile}>
                                        <S.CardCarrocelLineContainer />
                                        <S.CardCarrocelText>{slide.text}</S.CardCarrocelText>
                                    </S.CardCarrocelTextContainer>
                                </S.CardCarrocelContent>
                                <S.ContainerCarrocelButton>
                                    <S.CardCarrocelButton isMobile={isMobile} onClick={() => window.location.href = slide.rote || '#'}>
                                        saiba mais
                                    </S.CardCarrocelButton>
                                </S.ContainerCarrocelButton>
                            </S.CardContainer>
                        </S.Slide>
                    ))}
                </div>
            </S.CarouselWrapper>
        </S.Container>
    );
};

export default Carousel;
