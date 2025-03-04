"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/CarSlider.css";

export default function CarSlider({ images }) {
    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        arrows: false,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        customPaging: function (i) {
            return (
                <a>
                    <Image
                        src={images[i]}
                        alt={`Thumbnail${i + 1}`}
                        width={300}
                        height={300}
                        style={{ objectFit: "cover" }}
                    />
                </a>
            );
        },
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images?.map((img, index) => (
                    <div key={index}>
                        <Image
                            src={img}
                            alt={`Car image ${index + 1}`}
                            layout="responsive"
                            width={600}
                            height={100}
                            style={{ objectFit: "cover" }}
                            className="main-car-image"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}