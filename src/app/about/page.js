import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Premium Vehicles', value: '100+' },
  { label: 'Happy Customers', value: '50K+' },
  { label: 'Cities Served', value: '25+' }
]

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: '/images/team/john.jpg',
    bio: 'With over 15 years in the luxury car industry, John leads our vision for premium car rentals.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Operations Director',
    image: '/images/team/sarah.jpg',
    bio: 'Sarah ensures smooth operations and maintains our high standards of service.'
  },
  {
    name: 'Michael Chen',
    role: 'Fleet Manager',
    image: '/images/team/michael.jpg',
    bio: 'Michael oversees our premium fleet, ensuring each vehicle meets our quality standards.'
  },
  {
    name: 'Emma Davis',
    role: 'Customer Experience',
    image: '/images/team/emma.jpg',
    bio: 'Emma leads our customer service team, dedicated to providing exceptional experiences.'
  }
]

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[400px] flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About CarWind</h1>
          <p className="text-xl text-blue-100">Your premium car rental service provider</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2015, CarWind has grown from a small local car rental service to a premium provider of luxury and performance vehicles. Our mission is to make premium car rentals accessible, convenient, and memorable.
            </p>
            <p className="text-gray-600">
              We take pride in our meticulously maintained fleet of vehicles and our commitment to exceptional customer service. Whether you're looking for a luxury experience or a performance thrill, we have the perfect car for your journey.
            </p>
          </div>
          <div className="relative w-full h-80">
            <Image
              src="/images/about-hero.jpg"
              alt="CarWind Office"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center my-16">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md bg-white">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our dedicated team of professionals works tirelessly to ensure you have the best car rental experience possible.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full border-4 border-blue-600"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
