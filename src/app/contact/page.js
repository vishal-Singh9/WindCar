'use client'
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { m, motion } from "framer-motion";
import NewYork from "../../../public/newyork.webp";
import Tokyo from "../../../public/tokyo.webp";
import London from "../../../public/london.webp";
import Paris from "../../../public/paris.webp";
import { useState } from "react";
import Link from "next/link";


const team = [
  {
    city: "New York",
    image: NewYork,
    location: "123 5th Ave, NY, USA",
    email: "john@example.com",
    phone: "+1 234 567 890",
  },
  {
    city: "Tokyo",
    image: Tokyo,
    location: "Shibuya, Tokyo, Japan",
    email: "sara@example.com",
    phone: "+81 90 1234 5678",
  },
  {
    city: "Paris",
    image: Paris,
    location: "Champs-Élysées, Paris, France",
    email: "michael@example.com",
    phone: "+33 1 23 45 67 89",
  },
  {
    city: "London",
    image: London,
    location: "Oxford St, London, UK",
    email: "emma@example.com",
    phone: "+44 20 7946 0123",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreed: false,
  });



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("You must agree to the Terms of Service and Privacy Policy.");

      return;
    }
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      agreed: false
    })
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex items-center justify-start text-white px-10 border border-white border-opacity-50 rounded-lg"
        style={{
          backgroundImage: "url('https://carento-nextjs.vercel.app/assets/imgs/page-header/banner4.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          border: "2px solid rgba(255, 255, 255, 0.5)",
          boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1750px",
          height: "400px",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg border border-white border-opacity-50"></div>

        {/* Content Box */}
        <div className="relative text-left bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-lg border border-white border-opacity-50">
          <motion.h1
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-5xl font-bold mb-4 text-white border-b border-white border-opacity-50 pb-2"
          >
            Get In Touch
          </motion.h1>
        </div>
      </motion.div>




      {/* Meet Our Team */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Agents Worldwide</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>

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
                  alt={member.city}
                  layout="fill"
                  objectFit="cover"
                  className="transform transition duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.city}</h3>

              {/* Contact Info with Icons */}
              <div className="mt-4 space-y-3 text-gray-600 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <FaMapMarkerAlt className="text-blue-600" />
                  <span>{member.location}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <FaEnvelope className="text-blue-600" />
                  <a href={`mailto:${member.email}`} className="hover:text-blue-500">
                    {member.email}
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <FaPhoneAlt className="text-blue-600" />
                  <a href={`tel:${member.phone}`} className="hover:text-blue-500">
                    {member.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <div className="max-w-8xl mx-auto px-6 lg:px-8 py-20 flex justify-end"
        style={{ backgroundImage: "url('https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/blue-shadow_cullinan/page-properties/D-Bespoke-Update.jpg/jcr:content/renditions/original')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>

        <div className="flex flex-col items-center px-6 text-center">
          <h1 className="text-4xl font-bold mb-6 text-white">Our Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9161.69152318644!2d72.50482906977537!3d23.011752099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3daed52865%3A0xd2f9b0181324a75f!2sAnand%20Travels!5e1!3m2!1sen!2sin!4v1739531687328!5m2!1sen!2sin"
            width="500"
            height="500"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>


        </div>

        <div className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg flex flex-col justify-left items-center" >
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@domain.com"
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Leave us a message..."
                className="w-full border p-2 rounded"
                rows={5}
                required
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-gray-700 text-sm">
                Agree to our <Link href="/term" className="text-blue-500">Terms of Service</Link> and <Link href="/privacy" className="text-blue-500">Privacy Policy</Link>
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 flex items-center"
            >
              Send Message
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>


      </div>


    </div>
  );
}
