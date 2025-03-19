
import Link from "next/link";
import Image from "next/image";
import '../../../styles/CarMake.css'

async function getCars(make) {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/makes/${make}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch cars");
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching cars:", error);
        return null;
    }
}

export default async function MakePage({ params }) {
    const { make } = await params;
    const cars = await getCars(make);

    if (!cars) {
        return <p>Failed to load cars.</p>;
    }

    return (
        <div className="make-cars-container">
            <h1 className="text-5xl font-bold mb-4 ">{make.toUpperCase()} Cars</h1>
            <div className="make-cars-grid">
                {cars.length === 0 ? (
                    <p>No cars available for this make.</p>
                ) : (
                    cars.map((car) => (
                        <Link key={car._id} href={`/makes/${make}/${car?.name}`} className="make-car-card">
                            {car.thumbnail ? (
                                <Image src={car.thumbnail} alt={car.name} width={400} height={300} />
                            ) : (
                                <div style={{ width: 400, height: 300, background: '#eee' }} />
                            )}
                            <h2>{car.name}</h2>
                            <p>${car.price}/day</p>
                            <p>{car.description}</p>

                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}
