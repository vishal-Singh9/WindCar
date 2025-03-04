import { notFound } from "next/navigation";
import CarSlider from "@/components/CarSlider";
import '../../../styles/CarDetails.css'

export default async function CarDetails({ params }) {
  const { slug } = await params;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cars/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) return notFound();

    const car = await res.json();

    return (
      <div className="car-details-container">
        {/* Left Section - Image Gallery */}
        <div className="car-images-section">
          <CarSlider images={[car.thumbnail, ...(car.images || [])]} />
          <div className="offers-container">
            <OfferBox className="offer-box" title="Security Deposit" details={["$2k - $10k", "Minimum Day: 1"]} />
            <OfferBox className="offer-box" title="Mileage Policy" details={["50 free miles a day", "$5 per extra mile"]} />
          </div>
          <p className="car-description">
            <strong>Description:</strong> {car?.details}
          </p>
        </div>

        {/* Right Section - Car Details */}
        <div className="car-info">
          <h1 className="car-name">{car?.name}</h1>
          <CarDetail label="Price" value={`$${car?.price}/day`} />
          <CarDetail label="Color" value={car?.color} />
          <CarDetail label="Engine" value={car?.engine} />
          <CarDetail label="Model" value={car?.model} />
          <CarDetail label="Year" value={car?.year} />
          <CarDetail label="Mileage" value={`${car?.mileage} km`} />
          <CarDetail label="Fuel Type" value={car?.fuelType} />
          <CarDetail label="Transmission" value={car?.transmission} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching car data:", error);
    return notFound();
  }
}

const OfferBox = ({ title, details }) => (
  <div className="offer-box">
    <span className="icon icon-dollar-square1"></span>
    <ul className="offer-content">
      {details.map((detail, index) => (
        <li key={index}><span>{detail}</span></li>
      ))}
    </ul>
  </div>
);

const CarDetail = ({ label, value }) => (
  <p className="car-details"><strong>{label}:</strong> {value}</p>
);
