import React, { useRef, useEffect } from "react";
import * as S from "./MosaicoStyled";

import video from "../../assets/videos/voo.mp4";
import videoMobile from "../../assets/videos/vooMobile.mp4";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import AboutUs from "../AboutUs/AboutUs";

const mosaicoLogo = require("../../assets/images/logo/mosaico color correto.png");
const seta = require("../../assets/images/icons/seta.png");

const MosaicoPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <S.Container>
      <ScrollToTop />
      <S.TitleOverlayContainer>
        <S.TitleLogo>
          <S.LogoImg src={mosaicoLogo} alt="mosaicoLogo" />
        </S.TitleLogo>
        <S.TextOverlay>Onde cada peça faz a diferença</S.TextOverlay>
      </S.TitleOverlayContainer>
      <S.Seta onClick={handleScroll}>
        <S.SetaImg src={seta} alt="mosaicoLogo" />
      </S.Seta>
      <S.VideoWrapper>
        <S.FullScreenVideo ref={videoRef} autoPlay loop muted>
          <source src={isMobile ? videoMobile : video} type="video/mp4" />
          Your browser does not support the video tag.
        </S.FullScreenVideo>
      </S.VideoWrapper>
      <S.SectionBelowVideo ref={sectionRef}>
        <AboutUs />
      </S.SectionBelowVideo>
    </S.Container>
  );
};

export default MosaicoPage;
