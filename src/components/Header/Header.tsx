import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { Container, Element } from './HeaderStyled'; // Removed Img import to use native <img>

// Define items with images, paths, and alt text
const items = [
  { src: require('../../assets/images/logo/cooperativa.png'), path: '/Cooperativa', alt: 'Cooperativa' },
  { src: require('../../assets/images/icons/mosaicoIconeMonoW.png'), path: '/', alt: 'Home' },
  { src: require('../../assets/images/icons/logotipoCAP.png'), path: '/CAP', alt: 'CAP' },
];

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Determine active index based on current path
  const [activeIndex, setActiveIndex] = useState(() => {
    const idx = items.findIndex(item => item.path === pathname);
    return idx >= 0 ? idx : 1;
  });

  // Track header visibility on scroll
  const [isVisible, setIsVisible] = useState(true);

  // Refs for each element to animate
  const elementsRef = useRef<Array<HTMLDivElement | null>>([]);

  // Update activeIndex on route change
  useEffect(() => {
    const idx = items.findIndex(item => item.path === pathname);
    setActiveIndex(idx >= 0 ? idx : 1);
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
