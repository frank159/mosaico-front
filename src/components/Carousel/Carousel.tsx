import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import {
  Container,
  Title,
  Subtitle,
  CarouselWrapper,
  Slide,
  SlidComtainer
} from "./CarouselStyled"

interface SlideItem {
  gradient: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  content?: React.ReactNode;
}

interface CarouselProps {
  backgroundColor?: string;
  textColor?: string;
  title?: string;
  subtitle?: string;
  slides?: SlideItem[];
}

const defaultSlides: SlideItem[] = [
  {
    gradient: 'linear-gradient(128deg, #40afff 0%, #3f62ff 100%)',
    backgroundColor: '#4287f5',
    hoverBackgroundColor: '#2563eb'
  },
  {
    gradient: 'linear-gradient(128deg, #ff993f 0%, #ff4a40 100%)',
    backgroundColor: '#ff6b6b',
    hoverBackgroundColor: '#ff4040'
  },
  {
    gradient: 'linear-gradient(128deg, #bdff53 0%, #2bfa51 100%)',
    backgroundColor: '#4ade80',
    hoverBackgroundColor: '#22c55e'
  },
  {
    gradient: 'linear-gradient(128deg, #40fff2 0%, #3fbcff 100%)',
    backgroundColor: '#38bdf8',
    hoverBackgroundColor: '#0ea5e9'
  },
  {
    gradient: 'linear-gradient(128deg, #ff409c 0%, #ff3f3f 100%)',
    backgroundColor: '#f43f5e',
    hoverBackgroundColor: '#e11d48'
  },
  {
    gradient: 'linear-gradient(128deg, #404dff 0%, #af3fff 100%)',
    backgroundColor: '#8b5cf6',
    hoverBackgroundColor: '#7c3aed'
  }
];

const CustomCarousel: React.FC<CarouselProps> = ({
  backgroundColor = '#062400',
  textColor = '#FFFFFF',
  title = 'Carrossel Keen Slider',
  subtitle = 'Experimente deslizar livremente as imagens!',
  slides = defaultSlides
}) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <Container backgroundColor={backgroundColor} textColor={textColor}>
      <Title textColor={textColor}>{title}</Title>
      <Subtitle textColor={textColor}>{subtitle}</Subtitle>

      <CarouselWrapper>
        <div ref={ref} className="keen-slider">
          {slides.map((slide, index) => (
            <Slide
              key={index}
              className="keen-slider__slide"
              gradient={slide.gradient}
            >
              <SlidComtainer 
                backgroundColor={slide.backgroundColor}
                hoverBackgroundColor={slide.hoverBackgroundColor}
              >
                Slide {index + 1}
              </SlidComtainer>
            </Slide>
          ))}
        </div>
      </CarouselWrapper>
    </Container>
  );
};

export default CustomCarousel;
