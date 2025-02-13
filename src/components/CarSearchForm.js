"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import '../styles/CarSearchForm.css'

const CarSearch = () => {
  const [pickupLocation, setPickupLocation] = useState("New York, USA");
  const [dropoffLocation, setDropoffLocation] = useState("Delaware, USA");
  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  return (
    <div className="box-search-advance background-card fadeIn">
      {/* Top Section */}
      <div className="box-top-search">
        <div className="left-top-search">
          <button className="category-link text-sm-bold btn-click active">All Cars</button>
          <button className="category-link text-sm-bold btn-click">New Cars</button>
          <button className="category-link text-sm-bold btn-click">Used Cars</button>
        </div>
        <div className="right-top-search d-none d-md-flex">
          <Link href="/contact" className="text-sm-medium need-some-help">
            Need help?
          </Link>
        </div>
      </div>

      {/* Search Form (One Line Layout) */}
      <div className="box-bottom-search">
        <div className="item-search">
          <label className="text-sm-bold neutral-500">Pick Up</label>
          <input
            type="text"
            className="search-input"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          />
        </div>

        <div className="item-search">
          <label className="text-sm-bold neutral-500">Drop Off</label>
          <input
            type="text"
            className="search-input"
            value={dropoffLocation}
            onChange={(e) => setDropoffLocation(e.target.value)}
          />
        </div>

        <div className="item-search">
          <label className="text-sm-bold neutral-500">Pick Up Date</label>
          <DatePicker selected={pickupDate} onChange={(date) => setPickupDate(date)} className="search-input datepicker" />
        </div>

        <div className="item-search">
          <label className="text-sm-bold neutral-500">Return Date</label>
          <DatePicker selected={returnDate} onChange={(date) => setReturnDate(date)} className="search-input datepicker" />
        </div>

        <button className="btn-brand-2">
          <FaSearch />
          Find a Vehicle
        </button>
      </div>
    </div>
  );
};

export default CarSearch;
