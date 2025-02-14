import { Car } from "../../../../../models/Car";
import { db } from "../../../../../lib/db";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    const { slug } = params;

    let car;
    try {
        await db.MongoDB();

        // Build the query
        const query = {
            $or: [
                { name: { $regex: new RegExp(slug, "i") } },
                { color: { $regex: new RegExp(slug, "i") } },
                { brand: { $regex: new RegExp(slug, "i") } }
            ]
        };

        // Check if slug is a valid ObjectId and add it to the query if valid
        if (ObjectId.isValid(slug)) {
            query.$or.push({ _id: new ObjectId(slug) });
        }

        car = await Car.findOne(query); // Fetch car based on the query

        if (!car) {
            return Response.json({ error: "Car not found" }, { status: 404 });
        }
      

        return Response.json(car, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ error: "Server Error" }, { status: 500 });
    }
}