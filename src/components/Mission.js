import Image from "next/image";
import Mission1 from '../../public/mission1.webp'
import Mission2 from '../../public/mission2.webp'
import Mission3 from '../../public/mission3.webp'
import Mission4 from '../../public/Mission4.webp'
import { motion } from "framer-motion";
import Link from "next/link";

export default function OurMission() {
  return (
    <div className="relative py-20 bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >


            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-semibold shadow-lg"
            >
              Our Mission
            </motion.div>
            <h4 className="text-4xl font-extrabold text-gray-900 leading-snug">
              Sell your car at a fair price.<br /> Get started with us today.
            </h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to make car rental easy, accessible, and affordable for everyone.
              We ensure a seamless experience for every customer, helping them find the perfect
              vehicle for their journey.
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-900 space-y-2">
              <li>Wide range of flexible rental options</li>
              <li>Comprehensive insurance coverage</li>
              <li>24/7 customer support available</li>
            </ul>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#"
                className="mt-4 inline-flex items-center bg-blue-600 text-white px-6 py-3 text-lg rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Get Started Now
                <svg className="ml-2" width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side Images with Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative grid grid-cols-2 gap-6"
          >

            <Image
              src={Mission1}
              alt="Carento"
              width={300}
              height={200}
              className="rounded-lg object-cover transform hover:scale-105 transition duration-500"
            />
            <Image
              src={Mission2}
              alt="Carento"
              width={300}
              height={200}
              className="rounded-lg object-cover transform hover:scale-105 transition duration-500"
            />
            <Image
              src={Mission3}
              alt="Carento"
              width={300}
              height={200}
              className="rounded-lg object-cover transform hover:scale-105 transition duration-500"
            ></Image>
            <Image
              src={Mission4}
              alt="Carento"
              width={300}
              height={200}
              className="rounded-lg object-cover transform hover:scale-105 transition duration-500"
            ></Image>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
