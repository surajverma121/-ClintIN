import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css';
import img1 from '../assets/Images/z1.jpg';
import img2 from '../assets/Images/z2.jpg';
import img3 from '../assets/Images/z3.jpg';
import img4 from '../assets/Images/z4.jpg';
import img5 from '../assets/Images/z5.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [img1, img2, img3, img4, img5];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false, // Ensure autoplay is not paused on hover
    pauseOnFocus: false, // Ensure autoplay is not paused on focus
    pauseOnDotsHover: false // Ensure autoplay is not paused on dots hover
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
