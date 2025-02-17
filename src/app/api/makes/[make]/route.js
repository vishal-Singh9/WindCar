import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";
import { Car, Make } from "../../../../models/Car";

export async function GET(request, { params }) {
  const { make } = await params;

  try {
    await db.MongoDB();

    // Find the Make document by name (case-insensitive)
    const makeDoc = await Make.findOne({ name: new RegExp(`^${make}$`, "i") });
    if (!makeDoc) {
      return NextResponse.json({ message: "Make not found" }, { status: 404 });
    }

    // Query cars using the ObjectId of the Make document
    const cars = await Car.find({ make: makeDoc?._id }).populate("make");

    if (!cars.length) {
      return NextResponse.json({ message: "No cars found for this make" }, { status: 404 });
    }

    return NextResponse.json(cars, { status: 200 });
  } catch (error) {
    console.error("Error fetching cars:", error);
    return NextResponse.json({ error: "Error fetching cars" }, { status: 500 });
  }
}
