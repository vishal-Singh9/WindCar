import { notFound } from "next/navigation";
import CarSlider from "@/components/CarSlider";
import '../../../styles/CarDetails.css';
import Link from "next/link";

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
    <main className="page-container">
      <div className="breadcrumbs">
        <div className="breadcrumbs-link">

          <span><Link href="/">Home </Link></span> &gt; <span><Link href="/cars">Cars </Link></span> &gt; <span>{car.name}</span>
        </div>
      </div>

      <div className="car-details-container">
        <div className="car-images-section">
          <div className="car-slider-container">
            <CarSlider images={[car.thumbnail, ...(car.images || [])]} />

          </div>

          <div className="car-header">
            <h1>Rent a {car.name}</h1>
            <div className="rating">
              <span className="stars">★★★★★</span>
              <span className="review-count">(32 reviews)</span>
            </div>
          </div>

          <CarSpecifications car={car} />

          <div className="booking-dates">
            <h3>Select Rental Dates</h3>
            <div className="date-inputs">
              <div>
                <label htmlFor="pickup-date">Pick-up Date</label>
                <input type="date" id="pickup-date" className="date-input" />
              </div>
              <div>
                <label htmlFor="return-date">Return Date</label>
                <input type="date" id="return-date" className="date-input" />
              </div>
            </div>
          </div>

          <OffersSection />

          <div className="tabs-container">
            <div className="tabs">
              <button className="tab active">Description</button>
              <button className="tab">Features</button>
              <button className="tab">Reviews</button>
            </div>

            <div className="tab-content">
              <Description details={car.details} />

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
            </div>
          </div>

          <div className="related-cars">
            <h2>Similar Cars You Might Like</h2>
            <div className="related-cars-grid">
              {Array(3).fill().map((_, i) => (
                <div key={i} className="related-car-card">
                  <div className="related-car-image"></div>
                  <h3>Similar {car.make} Model</h3>
                  <p className="related-car-price">$199/day</p>
                  <button className="view-details-btn">View Details</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CarInfo car={car} />
      </div>

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
    </main>
  );
}

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

const CarInfo = ({ car }) => (
  <div className="car-info">
    <h1 className="car-name">{car.name}</h1>
    <div className="car-price-highlight">
      <span className="price-label">Daily Rate</span>
      <span className="price-value">${car.price}</span>
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

    <button className="rent-now-btn">Book This Car</button>

    <div className="contact-options">
      <button className="contact-btn phone">
        <span className="icon-phone"></span> Call Us
      </button>
      <button className="contact-btn message">
        <span className="icon-message"></span> Message
      </button>
    </div>

    <div className="promo-banner">
      <span className="promo-icon">🎁</span>
      <p>Use code <strong>FIRST10</strong> for 10% off your first rental!</p>
    </div>
  </div>
);

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

const CarDetail = ({ label, value }) => (
  <p className="car-details"><strong>{label}:</strong> <span>{value}</span></p>
);

const SpecItem = ({ icon, label, value }) => (
  <li>
    <span className={`icon ${icon}`}></span>
    <div className="spec-content">
      <b>{label}</b>
      <em>{value}</em>
    </div>
  </li>
);

const CarSpecifications = ({ car }) => (
  <ul className="car-specification">
    <SpecItem icon="icon-engine-new" label="Engine" value={`${car.engine} hp`} />
    <SpecItem icon="icon-mph-new" label="0-60 mph" value={car?.mileage} />
    <SpecItem icon="icon-car-seat" label="Seats" value={car.seats} />
    <SpecItem icon="icon-msrp" label="MSRP" value={`${car.msrp}k`} />
    <SpecItem icon="icon-transmission" label="Transmission" value={car.transmission} />
  </ul>
);

const infoFields = [
  { label: "Color", key: "color" },
  { label: "Engine", key: "engine" },
  { label: "Model", key: "model" },
  { label: "Year", key: "year" },
  { label: "Mileage", key: "mileage", format: (val) => `${val}` },
  { label: "Transmission", key: "transmission" }
];