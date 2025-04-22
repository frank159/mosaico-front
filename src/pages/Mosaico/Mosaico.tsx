import React, { useRef, useEffect, useState } from "react";
import * as S from "./MosaicoStyled";
import { motion } from 'framer-motion';

// Assets
// import video from "../../assets/videos/voo.mp4";
// import videoMobile from "../../assets/videos/vooMobile.mp4";
import audioFile from "../../assets/musica.mp3";
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import AboutUs from "../AboutUs/AboutUs";
import Footer from '../../components/footer/footer';

// Logos and icons
const mosaicoLogo = require("./MOSAICO.png");
const mosaicoCirculoLogo = require("./MOSAICO CIRCULO.png");
const seta = require("../../assets/images/icons/seta.png");

const MosaicoPage: React.FC = () => {
  // Refs for audio and video elements
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // UI state
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [initialAnimate, setInitialAnimate] = useState(true);
  const [blurValue, setBlurValue] = useState(0);
  const [showIconMobile, setShowIconMobile] = useState(false);

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const timer = setTimeout(() => setInitialAnimate(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isMobile && isPlaying) {
      setBlurValue(2);
      const t = setTimeout(() => setBlurValue(0), 1000);
      return () => clearTimeout(t);
    }

    if (!isMobile && isHovered) {
      setBlurValue(2);
      return;
    } else if (!isMobile && !isHovered) {
      setBlurValue(0);
    }

    if (initialAnimate){
      setBlurValue(2);
    } else {
      setBlurValue(0);
    }

  }, [initialAnimate, isHovered, isPlaying, isMobile]);

  // Auto-play/pause video when 50% in viewport
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting ? videoEl.play() : videoEl.pause(),
      { threshold: 0.5 }
    );
    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  // Toggle audio play/pause
  const handlePlayPause = () => {
    if (!audioRef.current) return;
    setInitialAnimate(false);
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  // On mobile, clicking logo toggles play icon visibility
  const handleLogoClick = () => {
    handlePlayPause();
    if (isMobile) setShowIconMobile(prev => !prev);
  };

  // Smooth scroll to AboutUs section
  const handleScroll = () => {
    document.getElementById('section-below')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <S.Container>
    <audio ref={audioRef} src={audioFile} loop />
    <ScrollToTop />
    <S.TitleOverlayContainer>
      <S.TitleLogo>
        <S.LogoContainer
          onMouseEnter={!isMobile ? () => setIsHovered(true) : undefined}
          onMouseLeave={!isMobile ? () => setIsHovered(false) : undefined}
          onClick={handleLogoClick}
        >
          <S.LogoImgA
            src={mosaicoCirculoLogo}
            alt="mosaicoCirculoLogo"
            $isPlaying={isPlaying}
            style={{
              filter: `blur(${blurValue}px)`,
              transition: "filter 0.25s"
            }}
          />
          {initialAnimate ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1000,
                width: 60,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none"
              }}
            >
              {isPlaying
                ? <PauseIcon style={{ fontSize: 60 }} />
                : <PlayArrowIcon style={{ fontSize: 60 }} />}
            </motion.div>
          ) : (
            <S.PlayPauseIcon
              $isVisible={isMobile ? showIconMobile : isHovered}
              isMobileVisible={isMobile}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1000,
                width: 60,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none"
              }}
            >
              {isPlaying
                ? <PauseIcon style={{ fontSize: 60 }} />
                : <PlayArrowIcon style={{ fontSize: 60 }} />
              }
            </S.PlayPauseIcon>
          )}
        </S.LogoContainer>
        <S.LogoImg src={mosaicoLogo} alt="mosaicoLogo" />
      </S.TitleLogo>
      <S.TextOverlay>Onde cada peça faz a diferença</S.TextOverlay>
    </S.TitleOverlayContainer>
    <S.Seta onClick={handleScroll}>
      <S.SetaImg src={seta} alt="mosaicoLogo" />
    </S.Seta>
    <S.VideoWrapper>
      <S.FullScreenVideo ref={videoRef} autoPlay loop muted>
        <source src={isMobile ? '/videos/vooMobile.mp4' : '/videos/voo.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </S.FullScreenVideo>
    </S.VideoWrapper>
    <S.SectionBelowVideo id="section-below">
        <AboutUs />
      </S.SectionBelowVideo>
  </S.Container>

  );
};

export default MosaicoPage;