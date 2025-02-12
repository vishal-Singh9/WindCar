import Link from 'next/link';
import '../../../styles/Makes.css';

// This would typically come from a database or API
const carsByMake = {
    toyota: [
        { id: 't1', name: 'Camry', price: '$25,000', image: '/cars/toyota-camry.jpg' },
        { id: 't2', name: 'RAV4', price: '$28,000', image: '/cars/toyota-rav4.jpg' },
        { id: 't3', name: 'Corolla', price: '$22,000', image: '/cars/toyota-corolla.jpg' }
    ],
    honda: [
        { id: 'h1', name: 'Civic', price: '$23,000', image: '/cars/honda-civic.jpg' },
        { id: 'h2', name: 'Accord', price: '$27,000', image: '/cars/honda-accord.jpg' },
        { id: 'h3', name: 'CR-V', price: '$26,000', image: '/cars/honda-crv.jpg' }
    ],
    tesla: [
        { id: 'ts1', name: 'Model 3', price: '$40,000', image: '/cars/tesla-model3.jpg' },
        { id: 'ts2', name: 'Model Y', price: '$45,000', image: '/cars/tesla-modely.jpg' }
    ]
    // Add more makes and cars as needed
};

export default function MakePage({ params }) {
    // Use optional chaining and nullish coalescing to handle potential undefined values
    const make = params?.makes?.toLowerCase() ?? '';
    const cars = carsByMake[make] || [];

    return (
        <div className="make-cars-container">
            <h1>{make ? `${make.charAt(0).toUpperCase() + make.slice(1)} Cars` : 'Car Brand'}</h1>
            {cars.length === 0 ? (
                <p>No cars found for this brand.</p>
            ) : (
                <div className="make-cars-grid">
                    {cars.map((car) => (
                        <Link 
                            key={car.id} 
                            href={`/makes/${make}/${car.id}`} 
                            className="make-car-card"
                        >
                            <div className="make-car-image">
                                <img 
                                    src={car.image} 
                                    alt={car.name} 
                                    width={250} 
                                    height={150} 
                                />
                            </div>
                            <div className="make-car-details">
                                <h2>{car.name}</h2>
                                <p>{car.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}