import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { Container, Element } from './HeaderStyled'; // Removed Img import to use native <img>

// Define items with images, paths, and alt text
const items = [
  { src: require('../../assets/images/logo/cooperativa.webP'), path: '/Cooperativa', alt: 'Cooperativa' },
  { src: require('../../assets/images/icons/mosaicoIconeMonoW.webP'), path: '/', alt: 'Home' },
  { src: require('../../assets/images/icons/logotipoCAP.webP'), path: '/CAP', alt: 'CAP' },
];

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Função para determinar o índice ativo considerando as regras especiais
  const getActiveIndex = (path: string) => {
    if (path.endsWith('/Ceepa') || /^\/projeto-\w+/.test(path)) {
      // CAP está no índice 2
      return 2;
    }
    if (path.includes('/projeto-id?fromCooperativa=true') || path.endsWith('/Ox-Xeretas') || path.endsWith('/FrenteFria') || path.endsWith('/CooperativaCurriculo') || path.endsWith('/Tropicais') || path.endsWith('/EstadoResistencia')) {
      // CAP está no índice 2
      return 0;
    }
    const idx = items.findIndex(item => item.path === path);
    return idx >= 0 ? idx : 1;
  };

  const [activeIndex, setActiveIndex] = useState(() => getActiveIndex(pathname));

  // Track header visibility on scroll
  const [isVisible, setIsVisible] = useState(true);

  // Refs for each element to animate
  const elementsRef = useRef<Array<HTMLDivElement | null>>([]);

  // Update activeIndex on route change
  useEffect(() => {
    setActiveIndex(getActiveIndex(pathname));
  }, [pathname]);

  // Organize (animate) elements when activeIndex changes
  useLayoutEffect(() => {
    const positions = [-80, 0, 80];
    elementsRef.current.forEach((el, idx) => {
      if (el) {
        gsap.to(el, { x: positions[idx], duration: 0 });
      }
    });
  }, [activeIndex]);

  // Hide/show header based on scroll direction
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      setIsVisible(window.scrollY <= lastY);
      lastY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Container isVisible={isVisible}>
      {items.map((item, idx) => {
        const isActive = activeIndex === idx;
        const size = isActive ? '50px' : '40px';
        const filter = isActive ? 'none' : 'grayscale(100%) brightness(60%)';

        return (
          <Element
            key={item.alt}
            ref={el => (elementsRef.current[idx] = el)}
            isActive={isActive}
            onClick={() => {
              setActiveIndex(idx);
              navigate(item.path);
            }}
          >
            <img
              src={item.src}
              alt={item.alt}
              style={{
                width: size,
                filter,
                transition: 'width .3s, filter .3s',
              }}
            />
          </Element>
        );
      })}
    </Container>
  );
};

export default Header;
