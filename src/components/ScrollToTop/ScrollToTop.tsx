import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo
  }, [pathname]); // Executa quando a rota muda

  return null;
};

export default ScrollToTop;
