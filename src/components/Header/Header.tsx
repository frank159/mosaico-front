import React, { useState, useEffect } from "react";
import { Container, Element, Img, ShadowDiv } from "./HeaderStyled";
import img2 from "../../assets/images/icons/mosaicoIconeMonoW.png";
import img1 from "../../assets/images/logo/cooperativa.png";
import img3 from "../../assets/images/icons/estrutura.png";

import { gsap } from "gsap";
import { useNavigate, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation(); // Hook para obter a URL atual
  const navigate = useNavigate();

  // Imagens e links
  const images = [img1, img2, img3];
  const routes = ["/Cooperativa", "", "/Projetos"];

  // Determinar o índice ativo com base na URL atual
  const getActiveIndex = (currentLocation: string): number => {
    const index = routes.indexOf(currentLocation);
    return index !== -1 ? index : 1; // Se não encontrar, define o índice 1 (padrão)
  };

  const [activeIndex, setActiveIndex] = useState<number>(getActiveIndex(location.pathname));
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // Estado para controlar visibilidade do header

  const handleClick = (index: number) => {
    setActiveIndex(index);
    navigate(routes[index]); // Redireciona para a rota correspondente
  };

  useEffect(() => {
    setActiveIndex(getActiveIndex(location.pathname)); // Atualiza o índice ativo ao mudar de rota
    organizeElements(activeIndex);
  }, [location, activeIndex]); // Atualiza quando a rota ou o índice mudar

  // Lógica para esconder ou mostrar o header
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Rolou para baixo
        setIsHeaderVisible(false);
      } else {
        // Rolou para cima
        setIsHeaderVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const organizeElements = (centerIndex: number) => {
    const container = document.querySelector(".container") as HTMLElement;
    const elements = document.querySelectorAll(".element");
    const containerWidth = container.offsetWidth;

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // Para mobile, manter posições fixas simples
      const mobilePositions = [-80, 0, 80];

      elements.forEach((el, index) => {
        gsap.to(el, {
          x: mobilePositions[index],
          duration: 0,
        });
      });
      return;
    }

    // Configuração para margens
    const margin = 60; // Distância entre os elementos
    const leftExtreme = -containerWidth / 2 + margin; // Extrema esquerda
    const rightExtreme = containerWidth / 2 - margin; // Extrema direita

    elements.forEach((el, index) => {
      let targetPosition;

      if (index === centerIndex) {
        // Elemento centralizado
        targetPosition = 0;
      } else if (index < centerIndex) {
        // Elementos à esquerda
        targetPosition = leftExtreme + (index * margin); // Adiciona margem acumulada
      } else {
        // Elementos à direita
        targetPosition = rightExtreme - ((elements.length - index - 1) * margin); // Subtrai margem acumulada
      }

      // Animação para posição alvo
      gsap.to(el, {
        x: targetPosition,
        duration: 0.5,
        ease: "power3.out",
      });
    });
  };

  return (
    <>
      <Container
        className={`container ${isHeaderVisible ? "visible" : "hidden"}`}
        isVisible={isHeaderVisible} // Passando a propriedade 'isVisible'
      >
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
    </>
  );
  
};

export default Header;
