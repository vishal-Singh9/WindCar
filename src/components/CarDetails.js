"use client";
// CarDetailsClient.jsx (Client Component)
import { useState } from "react";
import { useRouter } from "next/navigation";
import '../styles/CarDetails.css';

// The main client component that holds all interactive elements
export default function CarDetailsClient({ data, serverRenderedOffers, serverRenderedRelatedCars }) {
    const { car, description } = data;

    return (
        <>
            <BookingDates />
            <OffersSection />

            {/* Server-rendered content passed through */}
            {serverRenderedOffers}

            <TabsSection description={description} />

            {/* Server-rendered content passed through */}
            {serverRenderedRelatedCars}
        </>
    );
}

const OfferBox = ({ icon, title, details }) => (
    <div className="offer-box">
        <span className={`icon ${icon}`}></span>
        <div className="offer-content-wrapper">
            <h3>{title}</h3>
            <ul className="offer-content">
                {details.map((detail, index) => (
                    <li key={index}><span>{detail}</span></li>
                ))}
            </ul>
        </div>
    </div>
);
const OffersSection = () => (
    <div className="offers-container">
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

function BookingDates() {
    const [pickupDate, setPickupDate] = useState("");
    const [returnDate, setReturnDate] = useState("");


    const today = new Date().toISOString().split('T')[0];


    const minReturnDate = pickupDate || today;

    return (
        <div className="booking-dates">
            <h3>Select Rental Dates</h3>
            <div className="date-inputs">
                <div>
                    <label htmlFor="pickup-date">Pick-up Date</label>
                    <input
                        type="date"
                        id="pickup-date"
                        className="date-input"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        min={today}
                    />
                </div>
                <div>
                    <label htmlFor="return-date">Return Date</label>
                    <input
                        type="date"
                        id="return-date"
                        className="date-input"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        min={minReturnDate}
                        disabled={!pickupDate} // Disable until pickup date is selected
                    />
                </div>
            </div>
        </div>
    );
}

// Interactive tabs component
function TabsSection({ description }) {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <div className="tabs-container">
            <div className="tabs">
                <button
                    className={`tab ${activeTab === "description" ? "active" : ""}`}
                    onClick={() => setActiveTab("description")}
                >
                    Description
                </button>
                <button
                    className={`tab ${activeTab === "features" ? "active" : ""}`}
                    onClick={() => setActiveTab("features")}
                >
                    Features
                </button>
                <button
                    className={`tab ${activeTab === "reviews" ? "active" : ""}`}
                    onClick={() => setActiveTab("reviews")}
                >
                    Reviews
                </button>
            </div>

            <div className="tab-content">
                {activeTab === "description" && <Description details={description} />}
                {activeTab === "features" && <FeaturesSection />}
                {activeTab === "reviews" && <ReviewsSection />}
            </div>
        </div>
    );
}

// Booking button component with navigation
export function BookNowButton() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleBooking = () => {
        setIsLoading(true);
        // Simulate API call or processing
        setTimeout(() => {
            router.push('/booking-confirmation');
        }, 500);
    };

    return (
        <button
            className={`rent-now-btn ${isLoading ? 'loading' : ''}`}
            onClick={handleBooking}
            disabled={isLoading}
        >
            {isLoading ? 'Processing...' : 'Book This Car'}
        </button>
    );
}

// Tab content components
const Description = ({ details }) => (
    <div className="car-description">
        <p>{details}</p>

        <div className="highlights">
            <h3>Highlights</h3>
            <ul>
                <li>Perfect for city driving and weekend getaways</li>
                <li>Exceptional fuel economy</li>
                <li>Premium sound system for an enhanced driving experience</li>
                <li>Advanced safety features including lane assist and collision warning</li>
            </ul>
        </div>
    </div>
);

const FeaturesSection = () => (
    <div className="features-section">
        <h3>Car Features</h3>
        <ul className="features-list">
            <li>Bluetooth Connectivity</li>
            <li>Leather Seats</li>
            <li>Navigation System</li>
            <li>Backup Camera</li>
            <li>Keyless Entry</li>
            <li>Apple CarPlay</li>
            <li>Heated Seats</li>
            <li>Lane Assist</li>
        </ul>
    </div>
);

const ReviewsSection = () => {
    const [expandedReview, setExpandedReview] = useState(null);

    const reviews = [
        {
            id: 1,
            name: "John D.",
            rating: 5,
            date: "2025-02-15",
            comment: "Great car, smooth ride, and excellent service! Would definitely rent again. The pickup was quick and the car was in perfect condition."
        },
        {
            id: 2,
            name: "Sarah M.",
            rating: 4,
            date: "2025-01-28",
            comment: "Very good experience overall. The car was clean and well-maintained. Only giving 4 stars because the pickup took longer than expected."
        },
        {
            id: 3,
            name: "Michael T.",
            rating: 5,
            date: "2025-03-05",
            comment: "Absolutely fantastic experience from start to finish. The car was exactly as described and the staff was very helpful."
        }
    ];

    return (
        <div className="reviews-section">
            <h3>Customer Reviews</h3>

            {reviews.map((review) => (
                <div key={review.id} className="review-item">
                    <div className="reviewer-info">
                        <div className="reviewer-avatar"></div>
                        <div>
                            <h4>{review.name}</h4>
                            <div className="review-meta">
                                <span className="stars">{"★".repeat(review.rating)}</span>
                                <span className="review-date">{review.date}</span>
                            </div>
                        </div>
                    </div>

                    <p className={expandedReview === review.id ? "expanded" : ""}>
                        {expandedReview === review.id
                            ? review.comment
                            : review.comment.length > 100
                                ? `${review.comment.substring(0, 100)}...`
                                : review.comment}
                    </p>

                    {review.comment.length > 100 && (
                        <button
                            className="read-more-btn"
                            onClick={() => setExpandedReview(expandedReview === review.id ? null : review.id)}
                        >
                            {expandedReview === review.id ? "Read less" : "Read more"}
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};
