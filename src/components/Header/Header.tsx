import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { Container, Element, StyledImg } from "./HeaderStyled";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const getActiveIndex = (path: string) => {
    if (path.endsWith("/Ceepa") || /^\/projeto-\w+/.test(path)) return 2;
    if (
      path.includes("/projeto-id?fromCooperativa=true") ||
      [
        "/Ox-Xeretas",
        "/FrenteFria",
        "/CooperativaCurriculo",
        "/Tropicais",
        "/EstadoResistencia",
      ].some((p) => path.endsWith(p))
    )
      return 0;
    if (path === "/Cooperativa") return 0;
    if (path === "/") return 1;
    if (path === "/CAP") return 2;
    return 1;
  };

  const [activeIndex, setActiveIndex] = useState(() =>
    getActiveIndex(pathname)
  );
  const [isVisible, setIsVisible] = useState(true);

  const ref0 = useRef<HTMLDivElement | null>(null);
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setActiveIndex(getActiveIndex(pathname));
  }, [pathname]);

  useEffect(() => {
    const positions = [-80, 0, 80];
    [ref0, ref1, ref2].forEach((ref, idx) => {
      if (ref.current) {
        gsap.to(ref.current, { x: positions[idx], duration: 0 });
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      setIsVisible(window.scrollY <= lastY);
      lastY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Container isVisible={isVisible}>
      <Element
        ref={ref0}
        isActive={activeIndex === 0}
        onClick={() => {
          setActiveIndex(0);
          navigate("/Cooperativa");
        }}
      >
        <StyledImg
          src="https://res.cloudinary.com/djg8c78mb/image/upload/v1746324711/cooperativa_lvklpg.png"
          alt="Cooperativa"
          isActive={activeIndex === 0}
        />
      </Element>

      <Element
        ref={ref1}
        isActive={activeIndex === 1}
        onClick={() => {
          setActiveIndex(1);
          navigate("/");
        }}
      >
        <StyledImg
          src="https://res.cloudinary.com/djg8c78mb/image/upload/v1746324730/mosaicoIconeMonoW_sqiexp.png"
          alt="Mosaico"
          isActive={activeIndex === 0}
        />
      </Element>

      <Element
        ref={ref2}
        isActive={activeIndex === 2}
        onClick={() => {
          setActiveIndex(2);
          navigate("/CAP");
        }}
      >
        <StyledImg
          src="https://res.cloudinary.com/djg8c78mb/image/upload/v1746324728/logotipoCAP_cc0xev.png"
          alt="CAP"
          isActive={activeIndex === 0}
        />
      </Element>
    </Container>
  );
};

export default Header;
