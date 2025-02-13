'use client';
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import '../styles/Navbar.css';

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
    const { slug } = useParams();

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo">
                <Link href="/">
                    <img src="/windcarlogo.png" alt="Car Rentals" />
                </Link>
            </div>

            {/* Hamburger Menu */}
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Navigation Links */}
            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>

                <div
                    className="dropdown"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                >
                    <span>Makes</span>
                    {dropdown && (
                        <ul className="dropdown-menu">
                            <li><Link href="/makes">All Brands</Link></li>
                            <li><Link href="/cars">Roll Royce</Link></li>
                            <li><Link href={`/makes/${slug}`}>Lamborghini</Link></li>
                            <li><Link href="/cars">Ferrari</Link></li>
                            <li><Link href="/cars">Bugatti</Link></li>
                            <li><Link href="/cars">Porsche</Link></li>
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

                <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
        </nav>
    );
}
