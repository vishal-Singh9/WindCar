'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const CarSearchForm = () => {
  const [pickupLocation, setPickupLocation] = useState('New York, USA');
  const [dropoffLocation, setDropoffLocation] = useState('Delaware, USA');
  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  return (
    <div className="bg-white border border-gray-300 shadow-lg p-6 rounded-xl w-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="space-x-4">
          <button className="text-blue-600 font-semibold">All Cars</button>
          <button className="text-gray-600">New Cars</button>
          <button className="text-gray-600">Used Cars</button>
        </div>
        <Link href="/contact" className="text-blue-500 hidden md:block">Need help?</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-gray-700 font-bold">Pick Up Location</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold">Drop Off Location</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={dropoffLocation}
            onChange={(e) => setDropoffLocation(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold">Pick Up Date & Time</label>
          <DatePicker selected={pickupDate} onChange={(date) => setPickupDate(date)} className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700 font-bold">Return Date & Time</label>
          <DatePicker selected={returnDate} onChange={(date) => setReturnDate(date)} className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center shadow-md">
          <FaSearch className="mr-2" /> Find a Vehicle
        </button>
      </div>
    </div>
  );
};

export default CarSearchForm;
