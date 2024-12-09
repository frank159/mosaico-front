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

const Carousel = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <Container>
      <Title>Carrossel Keen Slider</Title>
      <Subtitle>Experimente deslizar livremente as imagens!</Subtitle>

    <CarouselWrapper>
      <div ref={ref} className="keen-slider">
        <Slide
          className="keen-slider__slide"
          gradient="linear-gradient(128deg, #40afff0 0%, #3f62ff0 100%)"
        >
          <SlidComtainer>
            
          </SlidComtainer>
        </Slide>
        <Slide
          className="keen-slider__slide"
          gradient="linear-gradient(128deg, #ff993f0 0%, #ff4a400 100%)"
        >
          <SlidComtainer>
            
          </SlidComtainer>
        </Slide>
        <Slide
          className="keen-slider__slide"
          gradient="linear-gradient(128deg, #bdff530 0%, #2bfa510 100%)"
        >
          <SlidComtainer>
            
          </SlidComtainer>
        </Slide>
        <Slide
          className="keen-slider__slide"
          gradient="linear-gradient(128deg, #40fff20 0%, #3fbcff0 100%)"
        >
          <SlidComtainer>
            
          </SlidComtainer>
        </Slide>
        <Slide
          className="keen-slider__slide"
          gradient="linear-gradient(128deg, #ff409c0 0%, #ff3f3f0 100%)"
        >
          <SlidComtainer>
            
          </SlidComtainer>
        </Slide>
        <Slide
          className="keen-slider__slide"
          gradient="linear-gradient(128deg, #404dff0 0%, #af3fff0 100%)"
        >
          <SlidComtainer>
            
          </SlidComtainer>
        </Slide>
      </div>
    </CarouselWrapper>
    </Container>
  );
};

export default Carousel;
