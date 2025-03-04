"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import back from '../../public/bbcc.webp'
import '../styles/Counter.css'



const Counter = ({ value, title1, title2 }) => {
  const counterRef = useRef();

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 50);

    const countUp = () => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      counterRef.current.innerText = Math.floor(start);
    };

    const interval = setInterval(countUp, 50);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="counter-column">
      <div className="counter-box">
        <span ref={counterRef} className="counter-number">
          0
        </span>
        <h2 className="counter-title">
          {title1} <br />
          {title2}
        </h2>
      </div>
    </div>
  );
};

const StatisticsSection = () => {
  const stats = [
    { value: 15, title1: "YEARS OF", title2: "EXPERIENCE" },
    { value: 27, title1: "TECHNICIANS &", title2: "WORKERS" },
    { value: 3277, title1: "SATISFIED", title2: "CUSTOMERS" },
  ];

  return (
    <section className="statistics-section"
      style={{
        backgroundImage: `url(${back.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div className="statistics-container" >

        <div className="statistics-row">
          {stats.map((stat, index) => (
            <Counter
              key={index}
              value={stat.value}
              title1={stat.title1}
              title2={stat.title2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

