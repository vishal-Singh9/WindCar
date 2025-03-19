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
        setPickupDate(new Date());
        setReturnDate(new Date());
        setPickupLocation("");
        setDropoffLocation("");
      } else {
        alert("Error submitting search. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting search:", error);
    }
  };

  return (
    <div className="box-search-advance background-card fadeIn">
      <div className="box-bottom-search">
        <div className="item-search">
          <label>Pick Up</label>
          <div className="select-wrapper">
            <select value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}>
              <option value="">Select Pickup Location</option>
              {locations?.map((loc, index) => (
                <option key={index} value={loc}>{loc}</option>
              ))}
            </select>
            <IoLocationSharp className="location-icon" />
          </div>
        </div>

        <div className="item-search">
          <label>Drop Off</label>
          <div className="select-wrapper">
            <select value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)}>
              <option value="">Select Dropoff Location</option>
              {locations?.map((loc, index) => (
                <option key={index} value={loc}>{loc}</option>
              ))}
            </select>
            <IoLocationSharp className="location-icon" />
          </div>
        </div>

        <div className="item-search">
          <label>Pick Up Date</label>
          <DatePicker
            selected={pickupDate}
            onChange={(date) => setPickupDate(date)}
            className="search-input datepicker"
          />
        </div>

        <div className="item-search">
          <label>Return Date</label>
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            className="search-input datepicker"
          />
        </div>

        <button className="btn-brand-2" onClick={handleSubmit}>
          <FaSearch /> Find a Vehicle
        </button>
      </div>
    </div>
  );
};

export default CarSearchForm;
