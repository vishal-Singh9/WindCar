
import Image from "next/image";
import LuxuryCar from '../../public/luxuryy.webp'
import EconomyCar from '../../public/economy.webp'
import SUVCar from '../../public/Suv .webp'
import VanCar from '../../public/Van.webp'
import ConvertibleCar from '../../public/convertible.webp'
import ElectricCar from '../../public/electric.webp'

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Luxury Car Rental",
    link: "/luxury-cars",
    image: LuxuryCar,
    icon: "icon-luxury",
  },
  {
    title: "Economy Car Rental",
    link: "/economy-cars",
    image: EconomyCar,
    icon: "icon-economy",
  },
  {
    title: "SUV Rental",
    link: "/suv-rental",
    image: SUVCar,
    icon: "icon-suv",
  },
  {
    title: "Convertible Cars",
    link: "/convertible-cars",
    image: ConvertibleCar,
    icon: "icon-convertible",
  },
  {
    title: "Electric Cars",
    link: "/electric-cars",
    image: ElectricCar,
    icon: "icon-electric",
  },
  {
    title: "Van & Minivan Rental",
    link: "/van-rental",
    image: VanCar,
    icon: "icon-van",
  },
];

export default function CarRentalServices() {
  return (
    <section className="relative py-16 bg-gray-50">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/_next/static/media/car-rental-pattern.png')" }}
      ></div>

      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-red-600 font-semibold uppercase tracking-wide text-lg">
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Choose Your Perfect Ride
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition"
            >
              <div className="relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-60 object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white p-2 rounded-full shadow-md">
                  <span className={`text-2xl ${service.icon}`}></span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  <Link href={service.link} className="hover:text-red-500">
                    {service.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mt-2">
                  Rent top-quality cars at the best rates for every occasion.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
