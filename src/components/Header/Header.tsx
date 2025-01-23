import React, { useState, useEffect } from "react";
import { Container, Element, Img, ShadowDiv } from "./HeaderStyled";
import img1 from "../../assets/images/logo/1.png";
import img2 from "../../assets/images/logo/2.png";
import img3 from "../../assets/images/logo/3.png";

import { gsap } from "gsap";
import { useNavigate } from "react-router-dom"; // Para navegação interna com React Router

const Header: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const navigate = useNavigate(); // Hook para navegação interna

  const images = [img1, img2, img3];

  const handleClick = (index: number) => {
    setActiveIndex(index);

    // Redirecionamento baseado no índice do elemento clicado
    switch (index) {
      case 0:
        navigate("/mosaico"); // Redireciona para "page1"
        break;
      case 1:
        navigate("/Home"); // Redireciona para "page2"
        break;
      case 2:
        navigate("/about"); // Redireciona para "page3"
        break;
      default:
        console.error("Índice não reconhecido!");
    }
  };

  useEffect(() => {
    organizeElements(activeIndex);
  }, [activeIndex]);

  const organizeElements = (centerIndex: number) => {
    const container = document.querySelector(".container") as HTMLElement;
    const elements = document.querySelectorAll(".element");
    const containerWidth = container.offsetWidth;

    let positions = {
      A: -containerWidth / 2 + 60,
      B: -containerWidth / 2.35 + 1,
      C: 0,
      D: containerWidth / 2.35 - 1,
      F: containerWidth / 2 - 60,
    };

    if (centerIndex === 1) {
      positions = {
        ...positions,
        B: -containerWidth / 2 + 60,
        D: containerWidth / 2 - 60,
      };
    }

    elements.forEach((el, index) => {
      let targetPosition;

      if (index === centerIndex) {
        targetPosition = positions.C;
      } else if (index < centerIndex) {
        targetPosition = index === centerIndex - 1 ? positions.B : positions.A;
      } else {
        targetPosition = index === centerIndex + 1 ? positions.D : positions.F;
      }

      gsap.to(el, {
        x: targetPosition,
        duration: 0.5,
        ease: "power3.out",
      });
    });
  };

  return (
    <>
      <Container className="container">
        {[1, 2, 3].map((item, index) => (
          <Element
            key={index}
            className="element"
            isActive={activeIndex === index}
            onClick={() => handleClick(index)}
          >
            <Img src={images[index]} alt={`Elemento ${item}`} />
          </Element>
        ))}
      </Container>
      <ShadowDiv />
    </>
  );
};

export default Header;
