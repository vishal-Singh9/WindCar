import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../styles/GallerySection.css";

import Gallery1 from "../../public/gallery1.webp";
import Gallery2 from "../../public/gallery2.webp";
import Gallery3 from "../../public/gallery3.webp";
import Gallery4 from "../../public/gallery4.webp";
import Gallery5 from "../../public/gallery5.webp";
import Gallery6 from "../../public/gallery6.webp";
import Gallery7 from "../../public/gallery7.webp";
import Gallery8 from "../../public/gallery8.webp";
import Gallery9 from "../../public/gallery9.webp";
import Gallery10 from "../../public/gallery10.webp";

const images = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
  Gallery9,
  Gallery10,
];

export default function GallerySection() {
  return (
    <section className="section-gallery w-full">
      <div className="w-full">
        <div className="text-center">
          <h1 className="ui-title text-5xl font-bold mb-2"> <strong>Picture Gallery</strong></h1>
          <p className="description">
            <i>
            Explore our latest car collection in a smooth horizontal scrolling gallery.

            </i>
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3} // Adjust this for responsiveness
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          speed={2000}
          className="gallery-slider w-full"
          modules={[Autoplay]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="w-full">
              <div className="gallery-item w-full">
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  width={1920} // Full width
                  height={500}
                  className="img-scale w-full h-[500px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
