import { NextResponse } from "next/server";
import {CarSearch} from "../../../models/Car";
import { db } from "../../../lib/db";


export async function POST(request) {
    try {
      const body = await request.json();      
      const { pickupLocation, dropoffLocation, pickupDate, returnDate } = body;
  
      db.MongoDB(); // Connect to MongoDB
      
      const carSearch = await CarSearch.create({
        Pickup: pickupLocation,
        Dropoff: dropoffLocation,
        PickupDate: pickupDate,
        ReturnDate: returnDate,
      });
  
      return new NextResponse(JSON.stringify(carSearch), { status: 200 });
    } catch (error) {
      console.error("Error:", error);
      return new NextResponse(JSON.stringify({ message: "Internal Server Error", error }), { status: 500 });
    }
  }
  