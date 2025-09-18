import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/LuzCameraEcoAcao/LuzCameraEcoAcao';
import School from './pages/CEEPA/CEEPA';
import Mosaico from './pages/Mosaico/Mosaico';
import Header from './components/Header/Header';
import MosaicoPage from './pages/Mosaico/MosaicoPage/MosaicoPage';
import Projetos from './pages/ProjetoList/ProjetoList';
import CAP from './pages/CAP/CAP';
import Cooperativa from './pages/Cooperativa/Cooperativa';
import ProjetoIdentidade from './pages/FilmesCooperativa/ProjetoIdentidade/ProjetoIdentidade';
import OsXeretas from './pages/FilmesCooperativa/OsXeretas/OsXeretas';
import FrenteFria from './pages/FilmesCooperativa/FrenteFria/FrenteFria';
import Tropicais from './pages/FilmesCooperativa/Tropicais/Tropicais';
import CooperativaCurriculo from './pages/CooperativaCurriculo/CooperativaCurriculo';
import EstadoResistencia from './pages/FilmesCooperativa/EstadoResistencia/EstadoResistencia';
import ProjetoFilmes from './pages/ProjetosPages/ProjetoFilmes/ProjetoFilmes';
import ProjetoSeries from './pages/ProjetosPages/ProjetoSeries/ProjetoSeries';
import ProjetoDocumentarios from './pages/ProjetosPages/ProjetoDocumentarios/ProjetoDocumentarios';
import DocumentarioChocolate from './pages/ProjetosPages/ProjetoDocumentarios/DocumentariosPage/DocumentarioChocolate/DocumentarioChocolate';
import DocumentarioComitivaTrilhasDasTropas from './pages/ProjetosPages/ProjetoDocumentarios/DocumentariosPage/DocumentariosComitivaTrilhasDasTropas/DocumentariosComitivaTrilhasDasTropas';
import DocumentarioMestreLeonildo from './pages/ProjetosPages/ProjetoDocumentarios/DocumentariosPage/DocumentarioMestreLeonildo/DocumentarioMestreLeonildo';
import SeriePuruna from './pages/ProjetosPages/ProjetoSeries/SeriesPages/SeriePuruna/SeriePuruna';
import FilmeDianaDoAsfalto from './pages/ProjetosPages/ProjetoFilmes/FilmesPage/FilmeDianaDoAsfalto/FilmeDianaDoAsfalto';
import FilmeMataramZacarias from './pages/ProjetosPages/ProjetoFilmes/FilmesPage/FilmeMataramZacarias/FilmeMataramZacarias';
import FilmeMentesArtificiais from './pages/ProjetosPages/ProjetoFilmes/FilmesPage/FilmeMentesArtificiais/FilmeMentesArtificiais';
import SeriePalcoDeRua from './pages/ProjetosPages/ProjetoSeries/SeriesPages/SeriePalcoDeRua/SeriePalcoDeRua';
import FilmeEçaDeQueiroz from './pages/ProjetosPages/ProjetoFilmes/FilmesPage/FilmeEçaDeQueiroz/FilmeEçaDeQueiroz';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Mosaico />} />
        <Route path="/EcoAcao" element={<Home />} />
        <Route path="/Ceepa" element={<School />} />
        <Route path="/Cooperativa" element={<Cooperativa />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/CAP" element={<CAP />} />

        <Route path="/Filmes" element={<ProjetoFilmes />} />
        <Route path="/FilmeDianaDoAsfalto" element={<FilmeDianaDoAsfalto />} />
        <Route path="/FilmeMataramZacarias" element={<FilmeMataramZacarias />} />
        <Route path="/FilmeMentesArtificiais" element={<FilmeMentesArtificiais />} />

        <Route path="/FilmeEçaDeQueiroz" element={<FilmeEçaDeQueiroz />} />

        <Route path="/Series" element={<ProjetoSeries />} />
        <Route path="/SeriePuruna" element={<SeriePuruna />} />
        <Route path="/SeriePalcoDeRua" element={<SeriePalcoDeRua />} />

        <Route path="/Documentarios" element={<ProjetoDocumentarios />} />
        <Route path="/DocumentarioComitivaTrilhasDasTropas" element={<DocumentarioComitivaTrilhasDasTropas />} />
        <Route path="/DocumentarioMestreLeonildo" element={<DocumentarioMestreLeonildo />} />
        <Route path="/DocumentarioChocolate" element={<DocumentarioChocolate />} />

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
