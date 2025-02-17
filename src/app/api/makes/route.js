import { NextResponse } from "next/server";
import { Make } from "../../../models/Car";
import { db } from "../../../lib/db";

// GET: Fetch all makes
export async function GET() {
  try {
    await db.MongoDB();
    const makes = await Make.find({});
    return NextResponse.json(makes, { status: 200 });
  } catch (error) {
    console.error("Error fetching makes:", error);
    return NextResponse.json({ error: "Error fetching makes" }, { status: 500 });
  }
}

// POST: Add a new make
export async function POST(req) {
  try {
    await connectDB();
    const { name, logo } = await req.json();
    const newMake = new Make({ name, logo });
    await newMake.save();
    return NextResponse.json(newMake, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create make" }, { status: 500 });
  }
}
