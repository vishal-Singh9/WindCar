'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function CarPage() {
    const { make, carId } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        fetch(`/api/makes/${make}/${carId}`)
            .then(res => res.json())
            .then(data => setCar(data))
            .catch(err => console.error(err));
    }, [make, carId]);

    if (!car) return <p>Loading...</p>;

    return (
        <div className="car-details">
            <img src={car.image} alt={car.name} width={400} height={250} />
            <h1>{car.name}</h1>
            <p>Price: {car.price}</p>
        </div>
    );
}
