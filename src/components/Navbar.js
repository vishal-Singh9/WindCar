'use client'
import Link from "next/link";
import { useState } from "react";
import '../styles/Navbar.css';
import { useParams } from "next/navigation";

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const { slug } = useParams();
    console.log("slug", slug)

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
                <div
                    className="dropdown"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                >
                    <span>Makes</span>

                    {dropdown && (
                        <ul className='dropdown-menu' >
                            <li ><Link href="/makes">All Brands</Link>
                                <Link href="/cars">Roll Royce</Link>
                                <Link href={`/cars/${slug}`}>Lamborghini</Link>
                                <Link href="/cars">Ferrari</Link>
                                <Link href="/cars">Bugatti</Link>
                                <Link href="/cars">Porsche</Link>
                            </li>
                            <li><Link href="/cars">Audi</Link></li>
                            <li><Link href="/cars">BMW</Link></li>
                        </ul>
                    )}
                </div>
                <div
                    className="dropdown"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                >
                    <span>Categories</span>
                    {dropdown && (
                        <div className="dropdown-menu">
                            <Link href="/cars">All Cars</Link>
                            <Link href="/categories/luxury">Luxury</Link>
                            <Link href="/categories/economy">Economy</Link>
                        </div>
                    )}
                </div>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    );
}
