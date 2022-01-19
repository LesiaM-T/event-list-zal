import React from 'react';
import Slideshow from '../slides/slides';
import './home.scss';

const Home = () => {
  return (
    <>
      <Slideshow />
      <div className="main-page">
        <div className="categories-block">
          <h3> На нашому сайті зібрано усі події:</h3>

          <ul className="categories-list">
            <li className="ctg-item"> Урочисті події</li>
            <li className="ctg-item"> Розваги</li>
            <li className="ctg-item"> Освітні</li>
            <li className="ctg-item"> Для дітей</li>
            <li className="ctg-item"> Спорт</li>
            <li className="ctg-item"> Туризм </li>
            <li className="ctg-item"> Онлайн </li>
          </ul>
        </div>

        <h1 className="invite">
          Все що відбувається в Заліщиках - запрошуємо !!
        </h1>
        <h2>
          Якщо ви організовуєте щось цікаве і хочете щоб про вашу подію
          дізналося більше людей,
          <a href="mailto:zalrbk@ukr.net"> напишіть нам!</a>
        </h2>
      </div>
    </>
  );
};
export default Home;
