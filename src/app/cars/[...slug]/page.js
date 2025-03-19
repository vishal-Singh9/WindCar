import { notFound } from "next/navigation";
import CarSlider from "@/components/CarSlider";
import '../../../styles/CarDetails.css';

async function fetchCarDetails(slug) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cars/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching car data:", error);
    return null;
  }
}

export default async function CarDetails({ params }) {
  const { slug } = await params;
  const car = await fetchCarDetails(slug);

  if (!car) return notFound();

  return (
    <div className="car-details-container">
      <div className="car-images-section">
        <CarSlider images={[car.thumbnail, ...(car.images || [])]} />
        <OffersSection />
        <Specifications />
        <h1>Rent a {car.name}</h1>
        <Description details={car.details} />
      </div>
      <CarInfo car={car} />
    </div>
  );
}

const OffersSection = () => (
  <div className="offers-container">
    <OfferBox title="Security Deposit" details={["$2k - $10k", "Minimum Day: 1"]} />
    <OfferBox title="Mileage Policy" details={["50 free miles a day", "$5 per extra mile"]} />
  </div>
);

const Specifications = () => (
  <ul className="car-specification">
    {specs.map(({ icon, label, value }, index) => (
      <li key={index}>
        <span className={`icon ${icon}`}></span>
        <div className="d-flex flex-column align-items-center align-items-sm-start">
          <b>{label}</b>
          <br />
          <em>{value}</em>
        </div>
      </li>
    ))}
  </ul>
);

const Description = ({ details }) => (
  <div className="car-description">
    <strong>Description:</strong>
    <p>{details}</p>
  </div>
);

const CarInfo = ({ car }) => (
  <div className="car-info">
    <h1 className="car-name">{car.name}</h1>
    {infoFields.map(({ label, key }) => (
      <CarDetail key={key} label={label} value={car[key]} />
    ))}
  </div>
);

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

const specs = [
  { icon: "icon-engine-new", label: "Engine", value: "600 hp" },
  { icon: "icon-mph-new", label: "0-60 mph", value: "4.5 sec" },
  { icon: "icon-car-seat", label: "Seats", value: "5" },
  { icon: "icon-msrp", label: "MSRP", value: "$580k" }
];

const infoFields = [
  { label: "Price", key: "price" },
  { label: "Color", key: "color" },
  { label: "Engine", key: "engine" },
  { label: "Model", key: "model" },
  { label: "Year", key: "year" },
  { label: "Mileage", key: "mileage" },
  { label: "Fuel Type", key: "fuelType" },
  { label: "Transmission", key: "transmission" }
];
