import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Header from './Components/Structure/header';
import Footer from './Components/Structure/footer';

function App() {
  return (
    <div className="Conteiner">
      <Router>
        <Header />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
