import Link from 'next/link';
import '../../styles/Makes.css';

const carBrands = [
    { name: 'Toyota', logo: '/brands/toyota-logo.png' },
    { name: 'Honda', logo: '/brands/honda-logo.png' },
    { name: 'Ford', logo: '/brands/ford-logo.png' },
    { name: 'Tesla', logo: '/brands/tesla-logo.png' },
    { name: 'BMW', logo: '/brands/bmw-logo.png' },
    { name: 'Mercedes-Benz', logo: '/brands/mercedes-logo.png' },
    { name: 'Nissan', logo: '/brands/nissan-logo.png' },
    { name: 'Porsche', logo: '/brands/porsche-logo.png' },
    { name: 'Audi', logo: '/brands/audi-logo.png' },
    { name: 'Chevrolet', logo: '/brands/chevrolet-logo.png' }
];

export default function MakesPage() {
    return (
        <div className="makes-container">
            <h1>Car Brands</h1>
            <div className="makes-grid">
                {carBrands.map((brand) => (
                    <Link 
                        key={brand.name} 
                        href={`/makes/${brand.name.toLowerCase()}`} 
                        className="make-card"
                    >
                        <div className="make-logo">
                            <img 
                                src={brand.logo} 
                                alt={`${brand.name} logo`} 
                                width={100} 
                                height={100} 
                            />
                        </div>
                        <h2>{brand.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}