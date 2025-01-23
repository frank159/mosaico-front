import React, { useEffect, useState } from 'react';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SectionPicture from '../SectionPicture/SectionPicture';
import { Container, CarouselWrapper, Slide, VectorImage, ProgressCircle } from "./SectionPictureCarrocelStyled";

const vetorFolha1 = require('../../assets/images/products/vetorFolha2.png');

interface CarouselProps {
  slides: Array<{
    mainTitle: string;
    mainText: string;
    borderColor?: string;
    subheading1?: { title: string; text: string };
    subheading2?: { title: string; text: string };
    imageSrc: string;
  }>;
}

const SectionPictureCarrocel: React.FC<CarouselProps> = ({ slides }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  const [isInteracting, setIsInteracting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startProgress = () => {
      let elapsedTime = 0;
      const duration = 2000; // 5 segundos
      const step = 100; // Atualiza a cada 100ms

      interval = setInterval(() => {
        if (!isInteracting) {
          elapsedTime += step;
          const percentage = (elapsedTime / duration) * 100;
          setProgress(percentage);

          if (elapsedTime >= duration) {
            elapsedTime = 0;
            setProgress(0);
            if (instanceRef.current) {
              instanceRef.current.next(); // Avança para o próximo slide
            }
          }
        }
      }, step);
    };

    startProgress();

    return () => clearInterval(interval);
  }, [isInteracting, instanceRef]);

  const handleInteractionStart = () => setIsInteracting(true);
  const handleInteractionEnd = () => setIsInteracting(false);

  return (
    <Container>
      <VectorImage src={vetorFolha1} alt="Folha decorativa" />
      <CarouselWrapper>
        <div
          ref={sliderRef}
          className="keen-slider"
          onMouseEnter={handleInteractionStart}
          onMouseLeave={handleInteractionEnd}
          onTouchStart={handleInteractionStart}
          onTouchEnd={handleInteractionEnd}
        >
          {slides.map((slide, index) => (
            <Slide key={index} className="keen-slider__slide">
              <SectionPicture
                backgroundColor={'#dfdfdf6f'}
                textColor={'#000000'}
                titleColor={'#000000'}
                borderColor={'#000000'}
                mainTitle={slide.mainTitle}
                mainText={slide.mainText}
                subheading1={slide.subheading1}
                subheading2={slide.subheading2}
                imageSrc={slide.imageSrc}
                height='65vh'
                width='80vw'
                backgroundColorHover={'#dfdfdf'}
                scale='1.05'
              />
            </Slide>
          ))}
        </div>
        <ProgressCircle>
          <svg width="60" height="60" viewBox="0 0 36 36">
            <path
              fill="none"
              stroke="#818181"
              strokeWidth="3"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              fill="none"
              stroke="#000000"
              strokeWidth="3"
              strokeDasharray={`${progress}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </ProgressCircle>
      </CarouselWrapper>
    </Container>
  );
};

export default SectionPictureCarrocel;
