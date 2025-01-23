import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import School from './pages/School/School';
import Mosaico from './pages/Mosaico/Mosaico';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<School />} />
        <Route path="/mosaico" element={<Mosaico />} />
      </Routes>
    </Router>
  );
};

export default App;
