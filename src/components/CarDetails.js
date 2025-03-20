'use client';
import { useState } from "react";
import CarSlider from "@/components/CarSlider";
import Image from "next/image";
import BCA from "../../public/bc-a.webp";
import Link from "next/link";
import '../styles/CarDetails.css'
// Client Component - handles all interactivity
export default function CarDetailsClient({ car, make }) {
    // All client-side state and interactivity goes here
    const [activeTab, setActiveTab] = useState("description");
    const [pickupDate, setPickupDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    // Set minimum dates to prevent past date selection
    const today = new Date().toISOString().split("T")[0];

    // Calculate minimum return date (1 day after pickup)
    const getMinReturnDate = () => {
        if (!pickupDate) return today;
        const nextDay = new Date(pickupDate);
        nextDay.setDate(nextDay.getDate() + 1);
        return nextDay.toISOString().split("T")[0];
    };

    return (
        <main className="page-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="breadcrumbs mb-4 text-sm">
                <div className="breadcrumbs-link">
                    <span>
                        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
                    </span>{" "}
                    &gt;{" "}
                    <span>
                        <Link href={`/makes/${make}`} className="text-blue-600 hover:text-blue-800">Makes</Link>
                    </span>{" "}
                    &gt; <span className="font-medium">{car.name}</span>
                </div>
            </div>

            <div className="car-details-container grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="car-images-section lg:col-span-2">
                    <div className="car-slider-container mb-8 rounded-lg overflow-hidden shadow-lg">
                        <CarSlider images={[car.thumbnail, ...(car.images || [])]} />
                    </div>

                    <div className="car-header mb-6">
                        <h1 className="text-3xl font-bold mb-2">Rent a {car.name}</h1>
                        <div className="rating flex items-center">
                            <span className="stars text-yellow-400">★★★★★</span>
                            <span className="review-count text-gray-600 ml-2">(32 reviews)</span>
                        </div>
                    </div>

                    <CarSpecifications car={car} />

                    {/* Rental dates section */}
                    <div className="booking-dates bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                        <h3 className="text-xl font-semibold mb-4">Select Rental Dates</h3>
                        <div className="date-inputs grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700 mb-1">
                                    Pick-up Date
                                </label>
                                <input
                                    type="date"
                                    id="pickup-date"
                                    className="date-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    min={today}
                                    value={pickupDate}
                                    onChange={(e) => setPickupDate(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="return-date" className="block text-sm font-medium text-gray-700 mb-1">
                                    Return Date
                                </label>
                                <input
                                    type="date"
                                    id="return-date"
                                    className="date-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    min={getMinReturnDate()}
                                    value={returnDate}
                                    disabled={!pickupDate}
                                    onChange={(e) => setReturnDate(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <OffersSection />

                    {/* Tabs section */}
                    <div className="tabs-container mb-8">
                        <div className="tabs flex border-b">
                            <button
                                className={`tab px-4 py-2 font-medium ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                                onClick={() => setActiveTab('description')}
                            >
                                Description
                            </button>
                            <button
                                className={`tab px-4 py-2 font-medium ${activeTab === 'features' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                                onClick={() => setActiveTab('features')}
                            >
                                Features
                            </button>
                            <button
                                className={`tab px-4 py-2 font-medium ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                                onClick={() => setActiveTab('reviews')}
                            >
                                Reviews
                            </button>
                        </div>

                        <div className="tab-content pt-4">
                            {activeTab === 'description' && <Description details={car.details} />}

                            {activeTab === 'features' && (
                                <div className="features-section">
                                    <h3 className="text-xl font-semibold mb-4">Car Features</h3>
                                    <ul className="features-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                        {[
                                            "Bluetooth Connectivity",
                                            "Leather Seats",
                                            "Navigation System",
                                            "Backup Camera",
                                            "Keyless Entry",
                                            "Apple CarPlay",
                                            "Heated Seats",
                                            "Lane Assist"
                                        ].map((feature, i) => (
                                            <li key={i} className="flex items-center">
                                                <span className="text-green-500 mr-2">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {activeTab === 'reviews' && (
                                <div className="reviews-section">
                                    <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                                    <div className="reviews-list space-y-4">
                                        {[
                                            {
                                                name: "John D.",
                                                date: "March 10, 2025",
                                                rating: 5,
                                                comment: "Amazing car! Smooth ride and excellent condition."
                                            },
                                            {
                                                name: "Sarah M.",
                                                date: "February 22, 2025",
                                                rating: 4,
                                                comment: "Great experience overall. Pickup was easy and the car was clean."
                                            },
                                            {
                                                name: "Michael K.",
                                                date: "January 15, 2025",
                                                rating: 5,
                                                comment: "Perfect for my weekend trip. Would definitely rent again!"
                                            }
                                        ].map((review, i) => (
                                            <div key={i} className="review-item border-b pb-4">
                                                <div className="flex justify-between items-center mb-2">
                                                    <div className="reviewer-info">
                                                        <h4 className="font-medium">{review.name}</h4>
                                                        <span className="text-sm text-gray-500">{review.date}</span>
                                                    </div>
                                                    <div className="rating text-yellow-400">
                                                        {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                                                    </div>
                                                </div>
                                                <p>{review.comment}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <RelatedCars car={car} />
                </div>

                <CarInfo car={car} />
            </div>

            <FaqSection />
        </main>
    );
}

// Rest of the components (Description, OffersSection, CarInfo, etc.) remain the same
// but now they're part of the client component file

// Offer Box Component
const OffersSection = () => (
    <div className="offers-container grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <OfferBox
            icon="icon-dollar-square1"
            title="Security Deposit"
            details={["$2k - $10k", "Minimum Day: 1"]}
        />
        <OfferBox
            icon="icon-miles"
            title="Mileage Policy"
            details={["50 free miles a day", "$5 per extra mile"]}
        />
        <OfferBox
            icon="icon-shield"
            title="Insurance"
            details={["Full coverage included", "Zero deductible"]}
        />
    </div>
);

const OfferBox = ({ icon, title, details }) => (
    <div className="offer-box bg-white border border-gray-200 rounded-lg p-4 flex items-start">
        <span className={`icon text-blue-500 text-xl mr-3`}>
            {icon === "icon-dollar-square1" && "💰"}
            {icon === "icon-miles" && "🚗"}
            {icon === "icon-shield" && "🛡️"}
        </span>
        <div className="offer-content-wrapper">
            <h3 className="font-semibold mb-2">{title}</h3>
            <ul className="offer-content text-sm text-gray-600">
                {details.map((detail, index) => (
                    <li key={index} className="mb-1">
                        <span>{detail}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Description = ({ details }) => (
    <div className="car-description">
        <p className="mb-4">{details || "This luxury vehicle offers a smooth ride with state-of-the-art features and impressive performance."}</p>

        <div className="highlights bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Highlights</h3>
            <ul className="list-disc pl-5 space-y-1">
                <li>Perfect for city driving and weekend getaways</li>
                <li>Exceptional fuel economy</li>
                <li>Premium sound system for an enhanced driving experience</li>
                <li>
                    Advanced safety features including lane assist and collision warning
                </li>
            </ul>
        </div>
    </div>
);

// Car Info Component
const CarInfo = ({ car }) => (
    <div className="car-info bg-white shadow-lg rounded-lg p-6 sticky top-4 h-fit">
        <h1 className="text-2xl font-bold mb-4">{car.name}</h1>
        <div className="car-price-highlight bg-green-50 p-4 rounded-lg mb-6 text-center">
            <span className="price-label block text-sm text-gray-600">Daily Rate</span>
            <span className="price-value block text-3xl font-bold text-green-600">${car.price || 199}</span>
            <span className="price-period block text-sm text-gray-600">per day</span>
        </div>

        <div className="car-details-list space-y-2 mb-6">
            {infoFields.map(({ label, key, format }) => (
                <CarDetail
                    key={key}
                    label={label}
                    value={format && car[key] ? format(car[key]) : car[key] || 'N/A'}
                />
            ))}
        </div>

        <div className="availability flex items-center mb-6">
            <span className="availability-indicator available inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
            <span className="text-green-600 font-medium">Available Now</span>
        </div>

        <button className="rent-now-btn bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg w-full mb-4 transition-colors">
            Book This Car
        </button>

        <div className="contact-options grid grid-cols-2 gap-3 mb-6">
            <button className="contact-btn phone bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded flex items-center justify-center">
                <span className="icon-phone mr-2">📞</span> Call Us
            </button>
            <button className="contact-btn message bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded flex items-center justify-center">
                <span className="icon-message mr-2">💬</span> Message
            </button>
        </div>

        <div className="promo-banner bg-blue-50 border border-blue-200 p-4 rounded-lg flex items-start">
            <span className="promo-icon text-2xl mr-3">🎁</span>
            <p>
                Use code <strong className="text-blue-600">FIRST10</strong> for 10% off your first rental!
            </p>
        </div>
    </div>
);

// Car Detail Item Component
const CarDetail = ({ label, value }) => (
    <p className="car-details flex justify-between">
        <strong className="text-gray-600">{label}:</strong> <span className="font-medium">{value}</span>
    </p>
);

// Specification Item Component
const SpecItem = ({ icon, label, value }) => (
    <li className="flex items-center bg-white rounded-lg border border-gray-200 p-3">
        <span className={`icon text-blue-500 text-xl mr-3`}>
            {icon === "icon-engine-new" && "🔧"}
            {icon === "icon-mph-new" && "⚡"}
            {icon === "icon-car-seat" && "💺"}
            {icon === "icon-msrp" && "💵"}
            {icon === "icon-transmission" && "⚙️"}
        </span>
        <div className="spec-content">
            <b className="block text-sm text-gray-600">{label}</b>
            <em className="block font-normal text-lg">{value}</em>
        </div>
    </li>
);

// Car Specifications Component
const CarSpecifications = ({ car }) => (
    <ul className="car-specification grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
        <SpecItem
            icon="icon-engine-new"
            label="Engine"
            value={`${car.engine || '350'} hp`}
        />
        <SpecItem
            icon="icon-mph-new"
            label="0-60 mph"
            value={car?.mileage ? `${car.mileage}s` : '4.5s'}
        />
        <SpecItem
            icon="icon-car-seat"
            label="Seats"
            value={car.seats || '5'}
        />
        <SpecItem
            icon="icon-msrp"
            label="MSRP"
            value={`$${car.msrp || '45'}k`}
        />
        <SpecItem
            icon="icon-transmission"
            label="Transmission"
            value={car.transmission || 'Automatic'}
        />
    </ul>
);

// Related Cars Component
const RelatedCars = ({ car }) => (
    <div className="related-cars">
        <h2 className="text-2xl font-bold mb-4">Similar Cars You Might Like</h2>
        <div className="related-cars-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array(3)
                .fill()
                .map((_, i) => (
                    <div key={i} className="related-car-card bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
                        <div className="related-car-image">
                            <Image
                                src={car.thumbnail || BCA}
                                alt="Car Image"
                                width={400}
                                height={225}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold mb-2">Similar {car.make?.name || 'Luxury'} Model</h3>
                            <p className="related-car-price text-xl text-green-600 font-semibold mb-3">$199/day</p>
                            <button className="view-details-btn bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded w-full transition-colors">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
        </div>
    </div>
);

// FAQ Section Component
const FaqSection = () => (
    <div className="faq-section mt-16 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="faq-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
                {
                    question: "What's included in the rental?",
                    answer: "All our rentals include insurance, roadside assistance, and unlimited miles."
                },
                {
                    question: "How do I pick up the car?",
                    answer: "You can pick up your car at any of our locations. We also offer delivery service for an additional fee."
                },
                {
                    question: "What happens if I return the car late?",
                    answer: "Late returns are charged at hourly rates for the first 3 hours, then a full additional day."
                },
                {
                    question: "Can I cancel my reservation?",
                    answer: "Reservations can be cancelled up to 24 hours before pickup for a full refund."
                }
            ].map((faq, index) => (
                <div key={index} className="faq-item bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                </div>
            ))}
        </div>
    </div>
);

const infoFields = [
    { label: "Color", key: "color" },
    { label: "Engine", key: "engine" },
    { label: "Model", key: "model" },
    { label: "Year", key: "year" },
    { label: "Mileage", key: "mileage", format: (val) => `${val} miles` },
    { label: "Transmission", key: "transmission" },
];