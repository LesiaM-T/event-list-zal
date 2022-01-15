import React from 'react';
import { Slide } from 'react-slideshow-image';
import './slides.scss';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: 'images/slide_2.jpg',
    caption: 'Slide 1',
  },
  {
    url: 'images/slide_3.jpg',
    caption: 'Slide 2',
  },
  {
    url: 'images/slide_4.jpg',
    caption: 'Slide 3',
  },
  {
    url: 'images/slide_5.jpg',
    caption: 'Slide 4',
  },
  {
    url: 'images/slide_6.jpg',
    caption: 'Slide 5',
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map(slideImage => (
          <div className="each-slide" key={slideImage.caption}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
