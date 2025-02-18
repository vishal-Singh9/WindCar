"use client";
import Image from "next/image";
import Luxury from '../../../public/luxury.webp'
import John from '../../../public/john.webp'
import Sara from '../../../public/sara.webp'
import Michael from '../../../public/michael.webp'
import Emma from '../../../public/emma.webp'
import { motion } from "framer-motion";



const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: John,
    bio: "Leading WindCar with 15+ years of expertise in luxury rentals.",
  },
  {
    name: "Sarah Johnson",
    role: "Operations Director",
    image: Sara,
    bio: "Ensuring smooth operations and customer satisfaction.",
  },
  {
    name: "Michael Chen",
    role: "Fleet Manager",
    image: Michael,
    bio: "Managing our premium fleet for top-quality experiences.",
  },
  {
    name: "Emma Davis",
    role: "Customer Experience",
    image: Emma,
    bio: "Dedicated to providing outstanding customer support.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-cover bg-center h-[450px] flex items-center justify-start text-white px-10"
        style={{ backgroundImage: "url('https://carento-nextjs.vercel.app/assets/imgs/page-header/banner.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-left bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-lg">
          <motion.h1
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-5xl font-bold mb-4 text-white"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-blue-200"
          >
            Your premium car rental experience starts here.
          </motion.p>
        </div>
      </motion.div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 border-l-8 border-blue-600 pl-4">
              Our Journey
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2015, WindCar has grown into a trusted premium car rental service, offering an exclusive fleet of luxury and high-performance vehicles.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We prioritize customer satisfaction, ensuring that every ride is a seamless and elite experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg border-4 border-blue-600"
          >
            <Image
              src={Luxury}
              alt="Luxury Car"
              fill
              objectFit="cover"
              className="transform transition duration-500 hover:scale-110"
            />
          </motion.div>
        </div>

      

        {/* Meet Our Team */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our dedicated professionals are here to make your experience exceptional.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
                className="bg-white rounded-lg shadow-lg p-6 transition transform hover:shadow-2xl border-t-4 border-blue-600"
              >
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-md border-4 border-blue-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="transform transition duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
