"use client";
import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://www.mwtv.in/storage/image/post/1920x1080/post_64f81817490f1.jpg",
  "https://wallpapers.com/images/featured/4k-ultra-hd-mustang-vcoontzbldwccn6z.jpg",
  "https://wallpapersmug.com/download/2248x2248/a56fb5/rolls-royce-wraith-luminary-collection-luxrious-2018-4k.jpeg",
  "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/nfl/nfl-media-hd-02a.jpg",
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
            ></div>
          ))}

          {/* Left & Right Buttons */}
          <button className="prev-btn" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>

        <header className="hero">
          <h1>Find Your Dream Vehicle Today!</h1>
          <p>Explore the best deals on cars, bikes, and more.</p>
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
