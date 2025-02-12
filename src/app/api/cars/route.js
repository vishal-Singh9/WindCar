import { NextResponse } from "next/server";
import {Car} from "../../../../models/Car";
import { db } from "../../../../lib/db";

export async function GET() {
    try {
        await db.MongoDB(); // Ensure database connection is established
        const cars = await Car.find({}); // Fetch all cars
        return NextResponse.json(cars, { status: 200 });
    } catch (error) {
        console.error("Error fetching cars:", error);
        return NextResponse.json({ error: "Error fetching cars" }, { status: 500 });
    }

}