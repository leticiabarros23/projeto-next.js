import { useState } from 'react';
// import '../styles/Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

//   return (
//     <div className="carousel">
//       <button onClick={prevSlide}>Previous</button>
//       <img src={images[currentIndex]} alt="Slide" />
//       <button onClick={nextSlide}>Next</button>
//     </div>
//   );
};

export default Carousel;