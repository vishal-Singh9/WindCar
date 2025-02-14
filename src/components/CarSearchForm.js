"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";
import "../styles/CarSearchForm.css";

const locations = [
  "New York, USA",
  "Los Angeles, USA",
  "Miami, USA",
  "Chicago, USA",
  "Houston, USA",
  "San Francisco, USA",
  "Las Vegas, USA",
  "Dallas, USA",
];

const CarSearchForm = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [showPickupList, setShowPickupList] = useState(false);
  const [showDropoffList, setShowDropoffList] = useState(false);

  const handleSubmit = async () => {
    if (!pickupLocation || !dropoffLocation) {
      alert("Please select both pickup and dropoff locations.");
      return;
    }
  
    const formData = {
      pickupLocation,
      dropoffLocation,
      pickupDate: pickupDate.toISOString(),
      returnDate: returnDate.toISOString(),
    };
  
  
    try {
      const response = await fetch("/api/carSearch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
  
      if (response.ok) {
        alert("Search submitted successfully!");
      } else {
        alert("Error submitting search. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting search:", error);
    }
  };
  

  return (
    <div className="box-search-advance background-card fadeIn">
      {/* Top Section */}
      <div className="box-top-search">
        <div className="left-top-search">
          <button className="category-link text-sm-bold btn-click active">All Cars</button>
        </div>
        <div className="right-top-search d-none d-md-flex">
          <Link href="/contact" className="text-sm-medium need-some-help">Need help?</Link>
        </div>
      </div>

      {/* Search Form */}
      <div className="box-bottom-search">
        {/* Pickup Location */}
        <div className="item-search">
          <label className="text-sm-bold neutral-500">Pick Up</label>
          <div className="search-input-wrapper">
            <input
              type="text"
              className="search-input"
              value={pickupLocation}
              placeholder="Select Pickup Location"
              readOnly
              onClick={() => setShowPickupList(!showPickupList)}
            />
            <IoLocationSharp className="location-icon" />
          </div>
          {showPickupList && (
            <ul className="location-dropdown">
              {locations.map((loc, index) => (
                <li key={index} onClick={() => {
                  setPickupLocation(loc);
                  setShowPickupList(false);
                }}>
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Dropoff Location */}
        <div className="item-search">
          <label className="text-sm-bold neutral-500">Drop Off</label>
          <div className="search-input-wrapper">
            <input
              type="text"
              className="search-input"
              value={dropoffLocation}
              placeholder="Select Dropoff Location"
              readOnly
              onClick={() => setShowDropoffList(!showDropoffList)}
            />
            <IoLocationSharp className="location-icon" />
          </div>
          {showDropoffList && (
            <ul className="location-dropdown">
              {locations.map((loc, index) => (
                <li key={index} onClick={() => {
                  setDropoffLocation(loc);
                  setShowDropoffList(false);
                }}>
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Pickup Date */}
        <div className="item-search">
          <label className="text-sm-bold neutral-500">Pick Up Date</label>
          <DatePicker
            selected={pickupDate}
            onChange={(date) => setPickupDate(date)}
            className="search-input datepicker"
          />
        </div>

        {/* Return Date */}
        <div className="item-search">
          <label className="text-sm-bold neutral-500">Return Date</label>
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            className="search-input datepicker"
          />
        </div>

        {/* Search Button */}
        <button className="btn-brand-2" onClick={handleSubmit}>
          <FaSearch />
          Find a Vehicle
        </button>
      </div>
    </div>
  );
};

export default CarSearchForm;
