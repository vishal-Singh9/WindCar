'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarSlider = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [autoPlay, setAutoPlay] = useState(true);

    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [selectedImage, autoPlay]);

    const handleNext = () => {
        const currentIndex = images.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
    };

    const handlePrev = () => {
        const currentIndex = images.indexOf(selectedImage);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <div className="relative w-full h-96 overflow-hidden rounded-xl shadow-lg">
                <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full flex justify-center items-center"
                >
                    <Image
                        src={selectedImage}
                        alt="Selected Car"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                    />
                </motion.div>
                <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    onClick={() => { handlePrev(); setAutoPlay(false); }}
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    onClick={() => { handleNext(); setAutoPlay(false); }}
                >
                    <ChevronRight size={24} />
                </button>
            </div>
            <div className="flex gap-2 mt-4 justify-center">
                <button
                    className=" bg-black bg-opacity-50 text-white p-2 rounded-full"
                    onClick={() => { handlePrev(); setAutoPlay(false); }}
                >
                    <ChevronLeft size={24} />
                </button>
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className={`w-30 h-35 overflow-hidden rounded-lg border-2 cursor-pointer transition-all ${selectedImage === img ? "border-blue-500" : "border-gray-300"}`}
                        onClick={() => { setSelectedImage(img); setAutoPlay(false); }}
                    >
                        <Image src={img} alt="Car Thumbnail" width={160} height={160} objectFit="cover" />
                    </motion.div>
                ))}
                <button
                    className=" bg-black bg-opacity-50 text-white p-2 rounded-full"
                    onClick={() => { handleNext(); setAutoPlay(false); }}
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default CarSlider;