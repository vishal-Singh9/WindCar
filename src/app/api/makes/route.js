import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";
import { Make } from "../../../../models/Car";



export async function GET() {
    try {
        await db.MongoDB(); // Ensure database connection is established
        const makes = await Make.find({}); // Fetch all cars
        return NextResponse.json(makes, { status: 200 });
    } catch (error) {
        console.error("Error fetching makes:", error);
        return NextResponse.json({ error: "Error fetching makes" }, { status: 500 });
    }
  }

