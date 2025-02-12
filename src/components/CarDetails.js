"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "../styles/CarDetails.css";

export default function CarDetails() {
    const { slug } = useParams(); // Get the dynamic slug from URL

    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState("");

    // Convert slug to string, taking the first element if it's an array

    useEffect(() => {

        fetch(`/api/cars/${slug}`) // Fetch car details by slug
            .then((res) => res.json())
            .then((data) => {
                setCar(data);
                setLoading(false);
                setSelectedImage(data.thumbnail)
            })
            .catch((error) => {
                console.error("Error fetching car:", error);
                setLoading(false);
            });
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (!car) return <p>No car found!</p>;

    return (
        <div className="car-details-container">
            {/* Left Section - Image Gallery */}
            <div className="car-images-section">
                <img className="main-car-image" src={selectedImage} alt={car.name || "Car"} />
                <div className="image-gallery">
                    {[car.thumbnail, ...(car.images || [])].map((img, index) => (
                        img && (
                            <img
                                key={index}
                                src={img}
                                alt={`Car image ${index + 1}`}
                                className={`gallery-image ${selectedImage === img ? "active" : ""}`}
                                onClick={() => setSelectedImage(img)}
                            />
                        )
                    ))}
                </div>
                <div className="offers-container">
                    {/* Left Offer Box */}
                    <div className="offer-box">
                        <span className="icon icon-dollar-square1"></span>
                        <ul className="offer-content">
                            <li><span>Security Deposit: $2k - $10k</span></li>
                            <li><span>Minimum Day: 1</span></li>
                        </ul>
                    </div>

                    {/* Right Offer Box */}
                    <div className="offer-box">
                        <span className="icon icon-dollar-square1"></span>
                        <ul className="offer-content">
                            <li><span>50 free miles a day</span></li>
                            <li><span>$5 per extra mile</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Right Section - Car Details */}
            <div className="car-info">
                <h1 className="car-name"><strong>{car.name}</strong> </h1>
                <p className="car-price"><strong>Price:</strong> ${car.price}/day</p>
                <p className="car-details"><strong>Color:</strong> {car.color}</p>
                <p className="car-details"><strong>Engine:</strong> {car.engine}</p>
                <p className="car-details"><strong>Model:</strong> {car.model}</p>
                <p className="car-details"><strong>Year:</strong> {car.year}</p>
                <p className="car-details"><strong>Mileage:</strong> {car.mileage} km</p>
                <p className="car-details"><strong>Fuel Type:</strong> {car.fuelType}</p>
                <p className="car-details"><strong>Transmission:</strong> {car.transmission}</p>
                <p className="car-description"><strong>Description:</strong> {car.details}</p>
            </div>
        </div>
    );
}
