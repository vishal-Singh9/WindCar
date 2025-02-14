'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function MakesPage() {
    const [makes, setMakes] = useState([]);

    useEffect(() => {
        fetch('/api/makes')
            .then(res => res.json())
            .then(data => setMakes(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="makes-container">
            <h1>Car Brands</h1>
            <div className="makes-grid">
                {makes.map((make) => (
                    <Link key={make._id} href={`/makes/${make.name.toLowerCase()}`} className="make-card">
                        <img src={make.logo} alt={make.name} width={100} height={100} />
                        <h2>{make.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}
