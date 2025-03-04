import CarSlider from '@/components/CarSlider';
import '../../../../styles/CarDetails.css'
async function getCarDetails(make, carId) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/makes/${make}/${carId}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch car details");

    return await res.json();
  } catch (error) {
    console.error("Error fetching car details:", error);
    return null;
  }
}

export default async function CarDetailsPage({ params }) {
  const { make, carId } = await params;
  const car = await getCarDetails(make, carId);

  if (!car) {
    return <p>Failed to load car details.</p>;
  }

  return (
    <div className="car-details-container">
      {/* Left Section - Image Gallery */}
      <div className="car-images-section">
        <CarSlider images={[car.thumbnail, ...(car.images || [])]} />





        <div className="offers-container">
          <OfferBox className="offer-box" title="Security Deposit" details={["$2k - $10k", "Minimum Day: 1"]} />
          <OfferBox className="offer-box" title="Mileage Policy" details={["50 free miles a day", "$5 per extra mile"]} />
        </div>
        <div>
          <h1 className="car-description">Description: </h1>
          <p> {car.details}</p>

        </div> </div>


      {/* Right Section - Car Details */}
      <div className="car-info">
        <h1 className="car-name">{car.name}</h1>
        <CarDetail label="Price" value={`$${car.price}/day`} />
        <CarDetail label="Color" value={car.color} />
        <CarDetail label="Engine" value={car.engine} />
        <CarDetail label="Model" value={car.model} />
        <CarDetail label="Year" value={car.year} />
        <CarDetail label="Mileage" value={`${car.mileage} km`} />
        <CarDetail label="Fuel Type" value={car.fuelType} />
        <CarDetail label="Transmission" value={car.transmission} />
      </div>
    </div>
  );
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
