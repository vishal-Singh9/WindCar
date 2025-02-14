'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function MakePage() {
    const { make } = useParams();
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch(`/api/makes/${make}`)
            .then(res => res.json())
            .then(data => setCars(data))
            .catch(err => console.error(err));
    }, [make]);

    return (
        <div className="make-cars-container">
            <h1> Cars</h1>
            <div className="make-cars-grid">
                {cars.map((car) => (
                    <Link key={car._id} href={`/makes/${make}/${car._id}`} className="make-car-card">
                        <img src={car.image} alt={car.name} width={250} height={150} />
                        <h2>{car.name}</h2>
                        <p>{car.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
