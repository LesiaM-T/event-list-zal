import React from 'react';
import './footer.scss';
import Template from '../template/Template';

const Footer = () => (
  <div className="footer">
   <Template>
    <h6>Всі події в Заліщиках на одному сайті</h6>
    <div className="buttons">
      <p>Find us</p>
      <a href="https://www.facebook.com/Zalishchykyturystychni">
        <div className="btn2" />
      </a>
      <a href="https://www.instagram.com/tic.zal/">
        <div className="btn3" />
      </a>
      <a href="http://zalrada.gov.ua/">
        <div className="btn4" />
      </a>
    </div>
    </Template>
  </div>
);

export default Footer;
