import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import School from './pages/School/School';
import EscolaDigital from './pages/EscolaDigital/EscolaDigital';
import Mosaico from './pages/Mosaico/Mosaico';
import Header from './components/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import Projetos from './pages/Projetos/projetos';
import CAP from './pages/CAP/CAP';
import Cooperativa from './pages/Cooperativa/Cooperativa';
import ProjetoIdentidade from './pages/ProjetoIdentidade/ProjetoIdentidade';
import OsXeretas from './pages/OsXeretas/OsXeretas';
import FrenteFria from './pages/FrenteFria/FrenteFria';
import Tropicais from './pages/Tropicais/Tropicais';
import CooperativaCurriculo from './pages/CooperativaCurriculo/CooperativaCurriculo';
import EstadoResistencia from './pages/EstadoResistencia/EstadoResistencia';

const App = () => {
  // useEffect(() => {
  //   const preventZoom = (event: any) => {
  //     // Bloqueia Ctrl + Scroll (zoom)
  //     if (event.ctrlKey && (event.deltaY !== 0 || event.deltaX !== 0)) {
  //       event.preventDefault();
  //     }
  //     // Bloqueia Ctrl + '+' ou Ctrl + '-' (zoom)
  //     if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '=')) {
  //       event.preventDefault();
  //     }
  //     // Bloqueia Ctrl + '0' (resetar zoom)
  //     if (event.ctrlKey && event.key === '0') {
  //       event.preventDefault();
  //     }
  //   };

  //   // Adiciona ouvintes de eventos
  //   window.addEventListener('wheel', preventZoom, { passive: false });
  //   window.addEventListener('keydown', preventZoom);

  //   // Remove ouvintes de eventos na desmontagem do componente
  //   return () => {
  //     window.removeEventListener('wheel', preventZoom);
  //     window.removeEventListener('keydown', preventZoom);
  //   };
  // }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/EcoAcao" element={<Home />} />
        <Route path="/Ceepa" element={<School />} />
        <Route path="" element={<Mosaico />} />
        <Route path="/Cooperativa" element={<Cooperativa />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/CAP" element={<CAP />} />
        <Route path="/Escola-Digital" element={<EscolaDigital />} />
        <Route path="/projeto-id" element={<ProjetoIdentidade />} />
        <Route path="/Ox-Xeretas" element={<OsXeretas />} />
        <Route path="/FrenteFria" element={<FrenteFria />} />
        <Route path="/CooperativaCurriculo" element={<CooperativaCurriculo />} />
        <Route path="/Tropicais" element={<Tropicais />} />
        <Route path="/EstadoResistencia" element={<EstadoResistencia />} />
      </Routes>
    </Router>
  );
};

export default App;
