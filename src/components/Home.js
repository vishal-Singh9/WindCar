"use client";
import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import FordMustang from '../../public/FordMustang.webp';
import BCA from '../../public/bc-a.webp';
import BCB from '../../public/bc-b.webp';
import BCC from '../../public/bc-c.webp';
import BCE from '../../public/bc-e.webp';
import { SiTicktick } from "react-icons/si";



const images = [
  BCA,
  BCE,
  BCC,
  FordMustang,
  BCB,
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handle click on left/right screen sides
  const handleSlideClick = (event) => {
    const { clientX, currentTarget } = event;
    const middle = currentTarget.clientWidth / 2;

    if (clientX < middle) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  return (
    <div className="home">


      <div onClick={handleSlideClick}>
        <div className="slideshow-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${image})` }}
            >
              {index === currentIndex && <Image src={image} alt={`Slide ${index}`} priority />}

            </div>
          ))}

          <button className="prev-btn" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>

        <header className="hero">
          <p>Find Your Perfect Car!</p>
          <h1>Looking For a Car? <br />You are in the perfect spot!</h1>
          <ul>
            <li> <SiTicktick /> High quality at a low cost.</li>
            <li> <SiTicktick /> Premium services</li>
            <li> <SiTicktick /> 24/7 roadside support.</li>
          </ul>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Now</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Home;
