import Link from 'next/link';
import '../../styles/Makes.css'
export default async function MakesPage() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/makes`, { cache: 'no-store' });
    const makes = await res.json();

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
