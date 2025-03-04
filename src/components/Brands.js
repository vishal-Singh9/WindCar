import React from "react";
import '../styles/Brands.css';

const brands = [
  { name: "Lexus", light: "https://carento-nextjs.vercel.app/assets/imgs/page/homepage2/lexus.png" },
  { name: "Mercedes", light: "https://carento-nextjs.vercel.app/assets/imgs/page/homepage2/mer.png" },
  { name: "Bugatti", light: "https://carento-nextjs.vercel.app/assets/imgs/page/homepage2/bugatti.png" },
  { name: "Jaguar", light: "https://carento-nextjs.vercel.app/assets/imgs/page/homepage2/jaguar.png" },
  { name: "Honda", light: "https://carento-nextjs.vercel.app/assets/imgs/page/homepage2/honda.png" },
  { name: "Chevrolet", light: "https://carento-nextjs.vercel.app/assets/imgs/page/homepage2/chevrolet.png" },
  { name: "Acura", light: "https://carento-nextjs.vercel.app/assets/imgs/page/homepage2/acura.png" },
  { name: "BMW", light: "https://carento-nextjs.vercel.app/assets/imgs/page/homepage2/bmw.png" },
  { name: "Toyota", light: "https://carento-nextjs.vercel.app/assets/imgs/page/homepage2/toyota.png" },

];

const Brands = () => {
  return (
    <div className="brands-section">
      <h1 className="brands-title"><strong>Premium Brands</strong></h1>
      <h2 className="brands-subtitle"><i>Unveil the Finest Selection of High-End Vehicles </i></h2>
      <div className="brands-slider">
        <div className="brands-track">
          {/* Duplicating brands for smooth looping */}
          {brands?.map((brand, index) => (
            <div key={index} className="brand-item">
              <img src={brand?.light} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
