import React, { useState, useEffect } from "react";
import { Container, Element, Img } from "./HeaderStyled";
import img2 from "../../assets/images/icons/mosaicoIconeMonoW.png";
import img1 from "../../assets/images/logo/cooperativa.png";
import img3 from "../../assets/images/icons/estrutura.png";

import { useNavigate, useLocation } from "react-router-dom";
import { Motion, spring } from "react-motion";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const images = [img1, img2, img3];
  const routes = ["/Cooperativa", "", "/Projetos"];

  const getActiveIndex = (currentLocation: string): number => {
    const index = routes.indexOf(currentLocation);
    return index !== -1 ? index : 1;
  };

  const [activeIndex, setActiveIndex] = useState<number>(getActiveIndex(location.pathname));
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    navigate(routes[index]);
  };

  useEffect(() => {
    setActiveIndex(getActiveIndex(location.pathname));
  }, [location]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTargetPosition = (index: number, centerIndex: number, containerWidth: number) => {
    const margin = 60;
    const leftExtreme = -containerWidth / 2 + margin;
    const rightExtreme = containerWidth / 2 - margin;

    if (index === centerIndex) {
      return 0;
    } else if (index < centerIndex) {
      return leftExtreme + (index * margin);
    } else {
      return rightExtreme - ((images.length - index - 1) * margin);
    }
  };

  return (
    <Container
      className={`container ${isHeaderVisible ? "visible" : "hidden"}`}
      isVisible={isHeaderVisible}
    >
      {images.map((image, index) => (
        <Motion
          key={index}
          style={{
            x: spring(getTargetPosition(index, activeIndex, window.innerWidth), {
              stiffness: 120, // Increase for faster animation
              damping: 14,    // Increase for less bouncy animation
            }),
          }}
        >
          {(interpolatedStyle: { [key: string]: number }) => (
            <Element
              className="element"
              isActive={activeIndex === index}
              onClick={() => handleClick(index)}
              style={{
                transform: `translateX(${interpolatedStyle.x}px)`,
              }}
            >
              <Img src={image} alt={`Elemento ${index + 1}`} />
            </Element>
          )}
        </Motion>
      ))}
    </Container>
  );
};

export default Header;
