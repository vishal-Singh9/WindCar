'use client';
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import '../styles/Navbar.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState()
    const { slug } = useParams();

    // Toggle Mobile Menu
    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Toggle Dropdowns
    const handleDropdown = (menu) => {
        setDropdownOpen(dropdownOpen === menu ? null : menu);
    };

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo">
                <Link href="/">
                    <img src="/windcarlogo.png" alt="Car Rentals" />
                </Link>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="menu-toggle" onClick={toggleMenu}>

            </div>

            {/* Navigation Links */}
            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <Link href="/" onClick={toggleMenu}>Home</Link>

                {/* Makes Dropdown */}
                <div
                    className="dropdown"
                    onMouseEnter={() => handleDropdown("makes")}
                    onMouseLeave={() => handleDropdown("null")}
                >
                    <span>Makes</span>
                    {dropdownOpen === "makes" && (
                        <>
                            <ul className="dropdown-menu">
                                <li><Link href="/makes">All Brands</Link></li>
                                <li><Link href="/cars">Rolls Royce</Link></li>
                                <li><Link href={`/makes/${slug}`}>Lamborghini</Link></li>
                                <li><Link href="/makes">Ferrari</Link></li>
                                <li><Link href="/cars">Bugatti</Link></li>
                                <li><Link href="/cars">Porsche</Link></li>
                                <li><Link href="/cars">Audi</Link></li>
                                <li><Link href="/cars">BMW</Link></li>
                            </ul>
                        </>
                    )}
                </div>

                {/* Categories Dropdown */}
                <div
                    className="dropdown"
                    onMouseEnter={() => handleDropdown("categories")}
                    onMouseLeave={() => handleDropdown("null")}
                >
                    <span>Categories</span>
                    {dropdownOpen === "categories" && (
                        <ul className="dropdown-menu">
                            <li><Link href="/cars">All Cars</Link></li>
                            <li><Link href="/categories/luxury">Luxury</Link></li>
                            <li><Link href="/categories/economy">Economy</Link></li>
                        </ul>
                    )}
                </div>

                <Link href="/about" onClick={toggleMenu}>About</Link>
                <Link href="/contact" onClick={toggleMenu}>Contact</Link>
            </div>
        </nav>
    );
}
