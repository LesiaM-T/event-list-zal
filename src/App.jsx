import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/home';
import About from './components/about';
import Navbar from './components/structure/navbar/navbar';
import Footer from './components/structure/footer/footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact='true' element={<Home />} />
        <Route path="/about" element={<About />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
