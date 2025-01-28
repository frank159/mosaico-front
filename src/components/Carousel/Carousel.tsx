  import { useKeenSlider } from "keen-slider/react";
  import "keen-slider/keen-slider.min.css";

  import {
    Container,
    Title,
    Subtitle,
    CarouselWrapper,
    Slide,
    SlidComtainer,
    Img
  } from "./CarouselStyled";

  // Importando a imagem local
  const teste1 = require('../../assets/images/1.webp');
  const teste2 = require('../../assets/images/2.webp');
  const teste3 = require('../../assets/images/3.jpg');
  const teste4 = require('../../assets/images/4.webp');
  const teste5 = require('../../assets/images/5.jpg');
  const teste6 = require('../../assets/images/6.jpeg');
  const teste7 = require('../../assets/images/7.jpeg');
  const teste8 = require('../../assets/images/8.jpeg');
  const teste9 = require('../../assets/images/9.jpeg');

  interface SlideItem {
    gradient: string;
    backgroundColor: string;
    hoverBackgroundColor: string;
    content?: React.ReactNode;
    backgroundColor2?: string;

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
      gradient: 'linear-gradient(128deg, #40afff 0%, #3f62ff 100%)',
      backgroundColor: '#4287f50',
      hoverBackgroundColor: '#000000',
      imageSrc: teste1 // Usando a imagem local
    },
    {
      gradient: 'linear-gradient(128deg, #ff993f 0%, #ff4a40 100%)',
      backgroundColor: '#ff6b6b',
      hoverBackgroundColor: '#000000',
      imageSrc: teste2 // Usando a mesma imagem
    },
    {
      gradient: 'linear-gradient(128deg, #bdff53 0%, #2bfa51 100%)',
      backgroundColor: '#4ade80',
      hoverBackgroundColor: '#000000',
      imageSrc: teste3
    },
    {
      gradient: 'linear-gradient(128deg, #40fff2 0%, #3fbcff 100%)',
      backgroundColor: '#38bdf8',
      hoverBackgroundColor: '#000000',
      imageSrc: teste4
    },
    {
      gradient: 'linear-gradient(128deg, #ff409c 0%, #ff3f3f 100%)',
      backgroundColor: '#f43f5e',
      hoverBackgroundColor: '#000000',
      imageSrc: teste5
    },
    {
      gradient: 'linear-gradient(128deg, #40afff 0%, #3f62ff 100%)',
      backgroundColor: '#4287f50',
      hoverBackgroundColor: '#000000',
      imageSrc: teste6 // Usando a imagem local
    },
    {
      gradient: 'linear-gradient(128deg, #ff993f 0%, #ff4a40 100%)',
      backgroundColor: '#ff6b6b',
      hoverBackgroundColor: '#000000',
      imageSrc: teste7 // Usando a mesma imagem
    },
    {
      gradient: 'linear-gradient(128deg, #bdff53 0%, #2bfa51 100%)',
      backgroundColor: '#4ade80',
      hoverBackgroundColor: '#000000',
      imageSrc: teste8
    },
    {
      gradient: 'linear-gradient(128deg, #40fff2 0%, #3fbcff 100%)',
      backgroundColor: '#38bdf8',
      hoverBackgroundColor: '#000000',
      imageSrc: teste9
    }
  ];

  const CustomCarousel: React.FC<CarouselProps> = ({
    backgroundColor = '#062400',
    textColor = '#FFFFFF',
    title = 'Carrossel Keen Slider',
    subtitle = 'Experimente deslizar livremente as imagens!',
    slides = defaultSlides,
    backgroundColor2 = '',
    isMobile= false
  }) => {
    const [ref] = useKeenSlider<HTMLDivElement>({
      loop: true,
      mode: "free",
      slides: {
        perView: isMobile ? 1 : 3,  // 1 slide por vez no mobile
        spacing: 15,
      },
    });
    

    return (
      <Container backgroundColor={backgroundColor} textColor={textColor}>
        <Title textColor={textColor}>{title}</Title>
        <Subtitle textColor={textColor}>{subtitle}</Subtitle>

        <CarouselWrapper
          backgroundColor2={backgroundColor2}
        >
          <div ref={ref} className="keen-slider">
            {slides.map((slide, index) => (
              <Slide
                key={index}
                className="keen-slider__slide"
                gradient={slide.gradient}

              > 
               <Img
                  src={slide.imageSrc}
                  alt={`Slide ${index + 1}`}
                  isMobile={isMobile}  // Passando isMobile como prop para a imagem
                />
              </Slide>
            ))}
          </div>
        </CarouselWrapper>
      </Container>
    );
  };

  export default CustomCarousel;
