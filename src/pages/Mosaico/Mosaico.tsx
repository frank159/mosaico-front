import React, { useRef, useState } from 'react';
import * as S from "./MosaicoStyled";

import Footer from '../../components/footer/footer';
import video from '../../assets/videos/voo.mp4';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import CheckIcon from '@mui/icons-material/Check';
import AboutUs from '../AboutUs/AboutUs';

const mosaicoLogo = require('../../assets/images/logo/mosaicoLogo1.png');
const seta = require('../../assets/images/icons/seta.png');
const backgroundImage = require('../../assets/images/icons/mosaicoIconeMono.png');
const esclamacaoverde = require('../../assets/images/icons/esclamacaoverde.png');



const MosaicoPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null); // Referência para a seção a ser rolada
  const [isFaixaExpanded, setIsFaixaExpanded] = useState(false); // Estado para controlar a expansão

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const toggleFaixa = () => {
    setIsFaixaExpanded(!isFaixaExpanded);
  };

  return (
    <S.Container>
      <ScrollToTop />
      <S.TitleOverlayContainer>
        <S.TitleLogo>
          <S.LogoImg src={mosaicoLogo} alt="mosaicoLogo" />
        </S.TitleLogo>
        <S.TextOverlay>
          Onde cada peça faz a diferença
        </S.TextOverlay>
      </S.TitleOverlayContainer>
      <S.Seta onClick={handleScroll}>
        <S.SetaImg src={seta} alt="mosaicoLogo" />
      </S.Seta>
      <S.VideoWrapper>
        <S.FullScreenVideo autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </S.FullScreenVideo>
      </S.VideoWrapper>
      <S.SectionBelowVideo ref={sectionRef}>
        <AboutUs/>
      
      </S.SectionBelowVideo>
    </S.Container>
  );
};

export default MosaicoPage;
