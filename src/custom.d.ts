declare module 'infinite-react-carousel' {
    import React from 'react';
  
    interface CarouselProps {
      arrows?: boolean;
      autoplay?: boolean;
      autoplaySpeed?: number;
      centerMode?: boolean;
      dots?: boolean;
      slidesToShow?: number;
      slidesToScroll?: number;
      pauseOnHover?: boolean;
      infinite?: boolean;
      children?: React.ReactNode;
    }
  
    const Carousel: React.FC<CarouselProps>;
  
    export default Carousel;
  }
  
declare module '*.png' {
    const value: string;
    export default value;
  }
  