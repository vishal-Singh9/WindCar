// CarDetails.jsx (Server Component)
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import CarSlider from "@/components/CarSlider";
import CarDetailsClient from "@/components/CarDetails";
import '../../../styles/CarDetails.css';

// Server-side data fetching
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

// Server-side components
const CarInfo = ({ car }) => (
  <div className="car-info">
    <h1 className="car-name">{car?.name}</h1>
    <div className="car-price-highlight">
      <span className="price-label">Daily Rate</span>
      <span className="price-value">${car?.price}</span>
      <span className="price-period">per day</span>
    </div>

    {infoFields.map(({ label, key, format }) => (
      <CarDetail
        key={key}
        label={label}
        value={format ? format(car[key]) : car[key]}
      />
    ))}

    <div className="availability">
      <span className="availability-indicator available"></span>
      <span>Available Now</span>
    </div>

    {/* The BookNowButton will be passed from the client component */}

    <div className="contact-options">
      <button className="contact-btn phone">
        <span className="icon-phone"></span> Call Us
      </button>
      <button className="contact-btn message">
        <span className="icon-message"></span> Message
      </button>
    </div>

    <button className="rent-now-btn bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg w-full mb-4 transition-colors">
      Book This Car
    </button>
    <div className="promo-banner">
      <span className="promo-icon">🎁</span>
      <p>Use code <strong>FIRST10</strong> for 10% off your first rental!</p>
    </div>
  </div>
);


const CarDetail = ({ label, value }) => (
  <p className="car-details"><strong>{label}:</strong> <span>{value || "N/A"}</span></p>
);

const SpecItem = ({ icon, label, value }) => (
  <li>
    <span className={`icon ${icon}`}></span>
    <div className="spec-content">
      <b>{label}</b>
      <em>{value || "N/A"}</em>
    </div>
  </li>
);

const CarSpecifications = ({ car }) => (
  <ul className="car-specification">
    <SpecItem icon="icon-engine-new" label="Engine" value={`${car.engine || 0} hp`} />
    <SpecItem icon="icon-mph-new" label="0-60 mph" value={car?.mileage} />
    <SpecItem icon="icon-car-seat" label="Seats" value={car.seats} />
    <SpecItem icon="icon-msrp" label="MSRP" value={`${car.msrp || 0}k`} />
    <SpecItem icon="icon-transmission" label="Transmission" value={car.transmission} />
  </ul>
);





const RelatedCars = ({ make }) => (
  <div className="related-cars">
    <h2>Similar Cars You Might Like</h2>
    <div className="related-cars-grid">
      {Array(3).fill().map((_, i) => (
        <div key={i} className="related-car-card">
          <div className="related-car-image"></div>
          <h3>Similar {make} Model</h3>
          <p className="related-car-price">$199/day</p>
          <Link href={`/cars/similar-${make}-${i + 1}`} className="view-details-btn">
            View Details
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const FaqSection = () => (
  <div className="faq-section">
    <h2>Frequently Asked Questions</h2>
    <div className="faq-grid">
      <div className="faq-item">
        <h3>What's included in the rental?</h3>
        <p>All our rentals include insurance, roadside assistance, and unlimited miles.</p>
      </div>
      <div className="faq-item">
        <h3>How do I pick up the car?</h3>
        <p>You can pick up your car at any of our locations. We also offer delivery service for an additional fee.</p>
      </div>
      <div className="faq-item">
        <h3>What happens if I return the car late?</h3>
        <p>Late returns are charged at hourly rates for the first 3 hours, then a full additional day.</p>
      </div>
      <div className="faq-item">
        <h3>Can I cancel my reservation?</h3>
        <p>Reservations can be cancelled up to 24 hours before pickup for a full refund.</p>
      </div>
    </div>
  </div>
);

const infoFields = [
  { label: "Color", key: "color" },
  { label: "Engine", key: "engine" },
  { label: "Model", key: "model" },
  { label: "Year", key: "year" },
  { label: "Mileage", key: "mileage", format: (val) => val ? `${val} miles` : "N/A" },
  { label: "Transmission", key: "transmission" }
];

// Main Server Component
export default async function CarDetails({ params }) {
  const { slug } = await params;
  const car = await fetchCarDetails(slug);

  if (!car) return notFound();

  // Prepare server-rendered parts and data for client components
  const serverParts = {
    breadcrumbs: (
      <div className="breadcrumbs">
        <div className="breadcrumbs-link">
          <span><Link href="/">Home</Link></span> &gt;
          <span><Link href="/cars">Cars</Link></span> &gt;
          <span>{car.name}</span>
        </div>
      </div>
    ),
    carInfo: <CarInfo car={car} />,
    carSlider: (
      <div className="car-slider-container">
        <Suspense fallback={<div className="loading-slider">Loading images...</div>}>
          <CarSlider images={[car.thumbnail, ...(car.images || [])]} />
        </Suspense>
      </div>
    ),
    carHeader: (
      <div className="car-header">
        <h1>Rent a {car.name}</h1>
        <div className="rating">
          <span className="stars">★★★★★</span>
          <span className="review-count">(32 reviews)</span>
        </div>
      </div>
    ),
    carSpecs: <CarSpecifications car={car} />,

    relatedCars: <RelatedCars make={car.make} />,
    faqSection: <FaqSection />
  };

  // Prepare data for client components
  const clientData = {
    car: {
      ...car,
      // Include any necessary data fields
    },
    description: car.details || "",
  };

  return (
    <main className="page-container">
      {serverParts.breadcrumbs}

      <div className="car-details-container">
        <div className="car-images-section">
          {serverParts.carSlider}
          {serverParts.carHeader}
          {serverParts.carSpecs}

          {/* Client Component */}
          <CarDetailsClient
            data={clientData}
            serverRenderedOffers={serverParts.offersSection}
            serverRenderedRelatedCars={serverParts.relatedCars}
          />
        </div>

        {serverParts.carInfo}
      </div>

      {serverParts.faqSection}
    </main>
  );
}