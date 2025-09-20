import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import {
  Container,
  ContainerContato,
  Element,
  StyledImg,
  ElementsWrapper,
} from "./HeaderStyled";
import { Popover, useMediaQuery } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isMobile = useMediaQuery("(max-width:720px)"); // detecta mobile

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
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  const ref0 = useRef<HTMLDivElement | null>(null);
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setActiveIndex(getActiveIndex(pathname));
  }, [pathname]);

  useEffect(() => {
    const positions = [-80, 0, 80];
    [ref0, ref1, ref2].forEach((ref, idx) => {
      if (ref.current) gsap.to(ref.current, { x: positions[idx], duration: 0 });
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
      <ElementsWrapper>
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
            isActive={activeIndex === 1}
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
            isActive={activeIndex === 2}
          />
        </Element>
      </ElementsWrapper>

      <ContainerContato onClick={handleOpen}>
        {isMobile ? <EmailIcon /> : "CONTATO"}
      </ContainerContato>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        disableScrollLock
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: { sx: { mt: 1 } },
        }}
      >
        <div
          style={{
            padding: "1rem",
            backgroundColor: "#4d5c2b",
            color: "#c2cfb4",
            border: "1px solid #c2cfb4",
            borderRadius: "5px",
          }}
        >
          <p>
            <strong>Email:</strong> cooperativacm@uol.com.br
          </p>
          <p>
            <strong>WhatsApp:</strong> (42) 99102-4351
          </p>
        </div>
      </Popover>
    </Container>
  );
};

export default Header;
