import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Header from './Redux/Components/Structure/header';
import Footer from './Redux/Components/Structure/footer';

function App() {
  return (
    <div className="Conteiner">
      <Router>
        <Header />
        <h1>Події в твоєму місті </h1>
        <h2>Заліщики</h2>
        <aside>
          <h2>Aside Header</h2>
          <p>no facebook</p>
          <p>
            facebook <a href="https://www.facebook.com/Zalishchykyturystychni">Inline Link</a>
          </p>
        </aside>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
