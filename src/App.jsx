import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.scss';
import Header from './Redux/Components/Structure/header';


function App() {
  return (
    <div className="Conteiner">
      <Router>
        <Header />
      </Router>

      <h1>Події в твоєму місті </h1>
      <h2>Заліщики</h2>
    </div>
  );
}

export default App;
