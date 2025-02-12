'use client'
import React from "react";
import '../styles/Home.css'
import FeaturedCars from "./FeaturedCars";

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Find Your Dream Vehicle Today!</h1>
        <p>Explore the best deals on cars, bikes, and more.</p>
        <div className="hero-buttons">
     
        </div>
      </header>
<FeaturedCars/>
    </div>
  );
};

export default Home;
