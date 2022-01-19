import React from 'react';
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <h5>By LesiaMandziuk@gmail.com</h5>
    <div className="buttons">
      <p>Find us</p>
      <a
        href="https://www.facebook.com/Zalishchykyturystychni"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="btn2" />
      </a>
      <a
        href="https://www.instagram.com/tic.zal/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="btn3" />
      </a>
      <a
        href="http://zalrada.gov.ua/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="btn4" />
      </a>
    </div>
  </div>
);

export default Footer;
