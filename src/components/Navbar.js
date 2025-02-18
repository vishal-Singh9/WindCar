import Link from "next/link";
import '../styles/Navbar.css';

export default async function Navbar() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}`;
  

  const res = await fetch(`${url}/api/makes`, { cache: "no-store" });
  const makes = await res.json();

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link href="/">
          <img src="/windcarlogo.png" alt="Car Rentals" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link href="/">Home</Link>

        {/* Makes Dropdown */}
        <div className="dropdown">
          <span>Makes</span>
          <ul className="dropdown-menu">
            {makes.map((make) => (
              <li key={make._id}>
                <Link href={`/makes/${make.name.toLowerCase()}`}>
                  {make.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/makes">All Brands</Link>
            </li>
          </ul>
        </div>

        {/* Categories Dropdown */}
        <div className="dropdown">
          <span>Categories</span>
          <ul className="dropdown-menu">
            <li>
              <Link href="/cars">All Cars</Link>
            </li>
            <li>
              <Link href="/categories/luxury">Luxury</Link>
            </li>
            <li>
              <Link href="/categories/economy">Economy</Link>
            </li>
          </ul>
       
        </div>

        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
