'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

export default function CarVideoSlider() {
    const videos = [
        "https://cdn.pixabay.com/video/2023/09/21/181537-866999852_large.mp4",
        "https://cdn.pixabay.com/video/2022/10/05/133698-757782420_large.mp4",
        "https://cdn.pixabay.com/video/2023/04/10/158316-816359649_large.mp4"
    ];

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video Slider */}
            <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                navigation
                className="absolute top-0 left-0 w-full h-full"
            >
                {videos?.map((video, index) => (
                    <SwiperSlide key={index}>
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                        >
                            <source src={video} type="video/mp4" />
                        </video>
                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    );
}
