import Link from "next/link";
import '../../styles/CarList.css'

export default async function CarList() {
    // Fetching data on the server side
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cars`, { cache: "no-store" }); 
    const cars = await res.json();



    return (
        <div className="container">
            <h1>Available Cars</h1>
            <ul className="car-list">
                {cars.map((car) => (
                    <li key={car._id} className="car-item">
                        <Link 
                            href={`/cars/${car?.name || car?.slug}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <div>
                                <img src={car.thumbnail} alt={car.name} />
                                <div>
                                    <h3><strong>{car.company}</strong></h3>
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
