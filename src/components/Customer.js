import React from "react";
import Image from "next/image";
import Emry from '../../public/Emry.webp'
import Williams from '../../public/Wiliams.webp'
import Star from '../../public/star.webp'

import '../styles/Customer.css'

const testimonials = [
  {
    id: 1,
    name: "Emry",
    image: Emry,
    rating: 4,
    review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Using Lorem Ipsum makes it look like readable English.",
  },
  {
    id: 2,
    name: "Williams Edward",
    image: Williams,
    rating: 4,
    review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Using Lorem Ipsum makes it look like readable English.",
  },
];



export default function Testimonials() {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i}>
          <Image
            src={i < rating ? Star : Star}
            alt="star"
            width={20}
            height={20}
          />
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="testimonial-section">
      <div className="customer-container">
        <div className="heading">
          <h3> <strong>
            <span className="text-blue-500">What Our Customers Say</span>
          </strong></h3>
        </div>
        <div className="testimonial-wrapper">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-box">
              <div className="testimonial-head">
                <div className="client">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={60}
                    height={60}
                    className="client-img"
                  />
                  <div className="client-info">
                    <p className="client-name">{t.name}</p>
                    <div className="rating">{renderStars(t.rating)}</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-text">
                <p>{t.review}</p>
              </div>
              <div className="quote">
                <Image
                  src="/images/quote.png"
                  alt="quote"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start px-6 text-center mt-9" >

          <iframe
            loading="lazy"
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/54-NEylEUZE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}