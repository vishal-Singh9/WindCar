import { NextResponse } from "next/server";

import { db } from "../../../../../lib/db";
import { Car } from "../../../../../models/Car";

export async function GET(req, { params }) {
    const { slug } = params;

    try {
        await db.MongoDB();

        // Fetch cars from MongoDB and filter in the query itself
        const filteredCars = await Car.find({
            $or: [
                {_id: { $regex: slug, $options: "i" } },
                { name: { $regex: slug, $options: "i" } }, // Case-insensitive search
                { color: { $regex: slug, $options: "i" } },
                { brand: { $regex: slug, $options: "i" } },
            ],
        });
console.log(filteredCars)
        if (!filteredCars.length) {
            return NextResponse.json({ error: "No cars found" }, { status: 404 });
        }

        return NextResponse.json(filteredCars);
    } catch (error) {
        console.error("Error fetching cars:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
