import CarSlider from '@/components/CarSlider';
import '../../../../styles/CarDetails.css';

// Fetch car details function
async function getCarDetails(make, carId) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/makes/${make}/${carId}`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch car details');
    return await res.json();
  } catch (error) {
    console.error('Error fetching car details:', error);
    return null;
  }
}

// Car Details Page Component
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
        <OffersSection />
        <CarSpecifications car={car} />
        <h1>Rent a {car.name}</h1>
        <CarDescription details={car.details} />
      </div>

      {/* Right Section - Car Info */}
      <CarInfo car={car} />
    </div>
  );
}

// Offers Section Component
const OffersSection = () => (
  <div className="offers-container">
    <OfferBox title="Security Deposit" details={["$2k - $10k", "Minimum Day: 1"]} />
    <OfferBox title="Mileage Policy" details={["50 free miles a day", "$5 per extra mile"]} />
  </div>
);

// Car Specifications Component
const CarSpecifications = ({ car }) => (
  <ul className="car-specification">
    <SpecItem icon="icon-engine-new" label="Engine" value={`${car.engine} hp`} />
    <SpecItem icon="icon-mph-new" label="0-60 mph" value={car?.mileage} />
    <SpecItem icon="icon-car-seat" label="Seats" value={car.seats} />
    <SpecItem icon="icon-msrp" label="MSRP" value={`${car.msrp}k`} />
  </ul>
);

// Car Description Component
const CarDescription = ({ details }) => (
  <div className="car-description">
    <strong>Description:</strong>
    <p>{details}</p>
  </div>
);

// Car Info Component
const CarInfo = ({ car }) => (
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
);

// Offer Box Component
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

// Car Detail Item Component
const CarDetail = ({ label, value }) => (
  <p className="car-details"><strong>{label}:</strong> {value}</p>
);

// Specification Item Component
const SpecItem = ({ icon, label, value }) => (
  <li>
    <span className={`icon ${icon}`}></span>
    <div className="d-flex flex-column align-items-center">
      <b>{label}</b>
      <br />
      <em>{value}</em>
    </div>
  </li>
);
