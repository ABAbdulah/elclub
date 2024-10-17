import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import '../css/HeroSection.css';
import React from 'react';
import img1 from '../assets/bg.jpg';
import img2 from '../assets/bg2.png';
import img3 from '../assets/bg3.jpg';
import img4 from '../assets/bg4.jpg';
import downArrow from '../assets/down-arrow.PNG'
function HeroSection() {
  const images = [img1, img2, img3, img4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Calculate translateX based on the current image index
  const translateX = `-${currentImageIndex * 100}%`;

  return (
    <>
    <div id='home'>
      <div className="image-section position-relative">
        <div className="image-container" style={{ transform: translateX }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={images[currentImageIndex]}
               alt={`Slide ${index}`}
              style={{ height: '50vh', objectFit: 'cover', width: '100%' }} // Ensure each image takes full width
            />
          ))}
        </div>
        <button
          className="arrow-left position-absolute"
          style={{
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: '2rem',
            cursor: 'pointer',
          }}
          onClick={prevImage}
        >
          &#8592; {/* Left arrow */}
        </button>
        <button
          className="arrow-right position-absolute"
          style={{
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: '2rem',
            cursor: 'pointer',
          }}
          onClick={nextImage}
        >
          &#8594; {/* Right arrow */}
        </button>
        <Container className="text-center position-absolute" style={{ top: '30%' }}>
          <h2 className="text-white">Pet Accessories</h2>
        </Container>
      </div>
      <div className="ticker text-white bg-danger text-center py-1">
        Free Home Delivery over an order of $500
      </div>
      {/* Welcome text */}
      <div className="text-center py-4">
        <h1>Welcome to ElClub!</h1>
        <p>because we care...</p>
        <img src={downArrow} alt="Down Arrow" style={{ height: '50px', marginLeft: '5px', marginTop:'30px' }} />
      </div>
      </div>
    </>
  );
}

export default HeroSection;
