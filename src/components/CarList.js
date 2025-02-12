"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import '../styles/CarList.css'


export default function CarList() {


    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch("/api/cars")
            .then((res) => res.json())
            .then((data) => setCars(data));
    }, []); 

    return (
        <div className="container">
            <h1>Available Cars</h1>
            <ul className="car-list">
                {cars.map((car) => (
                    console.log("cacaca",car),
                    <li key={car._id} className="car-item">
                        <Link 
                            href={`/cars/${car._id}` || `/cars/${car.slug}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <div>
                                <img src={car.thumbnail} alt={car.name} />
                                <div>
                                    <h3><strong>{car?.company}</strong></h3>
                                    <h2>{car.name}</h2>
                                </div>
                                <p>${car.price}/day</p>
                                <p>{car.description}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

