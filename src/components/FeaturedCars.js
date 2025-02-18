import Image from 'next/image';
import Link from 'next/link';
import Nissan from '../../public/Nissan.webp';
import Porsche from '../../public/porsche.webp';
import Tesla from '../../public/teslas.webp';

const featuredCars = [
  {
    id: 1,
    name: 'Tesla Model S',
    category: 'Electric',
    price: 299,
    image: Tesla,
    rating: 4.9,
    reviews: 128,
    features: ['Autopilot', '400mi Range', 'Ludicrous Mode'],
  },
  {
    id: 2,
    name: 'Porsche 911',
    category: 'Sports',
    price: 399,
    image: Porsche,
    rating: 4.8,
    reviews: 96,
    features: ['450hp', '0-60 in 3.2s', 'Sport Chrono'],
  },
  {
    id: 3,
    name: 'Nissan',
    category: 'SUV',
    price: 349,
    image: Nissan,
    rating: 4.7,
    reviews: 84,
    features: ['Terrain Response', 'Panoramic Roof', 'Premium Audio'],
  },
];

const StarRating = ({ rating, reviews }) => (
  <div className="flex items-center gap-1 text-yellow-400 text-sm">
    {[...Array(5)].map((_, index) => (
      <span key={index}>{index < rating ? '★' : '☆'}</span>
    ))}
    <span className="text-gray-500 ml-2">({reviews} reviews)</span>
  </div>
);

export default function FeaturedCars() {
  return (
    <section
      className="relative py-16 bg-gray-100 text-center"
      style={{
        backgroundImage: "url('https://api.lakewanaka.co.nz/assets/Uploads/ImportedImages/2019-12-28-9__FocusFillWzI1NjAsMTQ0MCwieSIsMTYwXQ.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10 text-white">
          <h2 className="text-3xl font-semibold">Featured Cars</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto my-3"></div>
          <p className="text-gray-300">
            Explore our premium vehicles, chosen for performance, comfort, and style.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white bg-opacity-90 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              {/* Car Image */}
              <div className="relative h-48">
                <Image
                  src={car.image}
                  alt={car.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
                  {car.category}
                </span>
              </div>

              {/* Car Details */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">{car.name}</h3>
                <StarRating rating={car.rating} reviews={car.reviews} />

                {/* Features */}
                <ul className="text-sm text-gray-600 my-2">
                  {car.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>

                {/* Price & Button */}
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-blue-600">${car.price} /day</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10">
          <Link href="/cars">
            <span className="text-blue-400 font-semibold hover:underline cursor-pointer">
              View All Cars
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
