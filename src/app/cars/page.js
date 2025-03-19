import Link from "next/link";
import '../../styles/CarList.css';
import Image from 'next/image'
import Car1 from '../../../public/car1.webp'

export default async function CarList() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cars`);
    const cars = await res.json();

    return (
        <div>
            <div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative bg-cover bg-center h-[450px] flex items-center justify-center text-white px-10"

            >
                <Image src={Car1} alt="Car1" className="absolute top-0 left-0 w-full h-full object-cover"></Image>
                <div className="absolute  bg-black bg-opacity-50"></div>
                <div className="relative text-left bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-lg">
                    <h1
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-5xl font-bold mb-4 text-white"
                    >
                        Our Fleet
                    </h1>
                    <p className="text-lg mb-8 text-white">
                        Your premium car rental experience starts here.
                    </p>
                    <ol className="flex space-x-4  text-center " style={{ marginLeft: "60px" }}>
                        <li>
                            <Link
                                href="/"
                                className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>

                            →
                        </li>
                        <li>
                            <Link
                                href="/cars"
                                className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300"
                            >
                                Listing of Cars
                            </Link>
                        </li>
                    </ol>
                </div>
            </div>


            <div className="container">
                {/* Car List Section */}
                <h1 className="text-center mt-8 text-5xl font-semibold">Available Cars</h1>
                <ul className="car-list">
                    {cars?.map((car) => (
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
        </div>
    );
}
