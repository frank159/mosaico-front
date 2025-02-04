import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import School from './pages/School/School';
import Mosaico from './pages/Mosaico/Mosaico';
import Header from './components/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import Projetos from './pages/Projetos/projetos';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/EcoAcao" element={<Home />} />
        <Route path="/Ceepa" element={<School />} />
        <Route path="/mosaico" element={<Mosaico />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Projetos" element={<Projetos />} />
      </Routes>
    </Router>
  );
};

export default App;
