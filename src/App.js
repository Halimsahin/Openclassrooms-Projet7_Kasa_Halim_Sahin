import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./styles/app.scss";
import Home from './pages/Home';
import About from './pages/About';
import Logements from './pages/Logements';
import Erreur from './pages/Erreur';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements" element={<Logements />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;