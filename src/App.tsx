import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Mosaico from './pages/Mosaico/Mosaico';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <Router>
        <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mosaico" element={<Mosaico />} />
      </Routes>
    </Router>
  );
};

export default App;
