import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/LuzCameraEcoAcao/LuzCameraEcoAcao';
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
