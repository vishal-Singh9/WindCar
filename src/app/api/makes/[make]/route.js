import { NextResponse } from 'next/server';
import { db } from '../../../../lib/db';
import { Car } from '../../../../models/Car';



export async function GET(request, { params }) {
    await db.MongoDB()
    const cars = await Car.find({ make: params.make }).populate('make');
    return NextResponse.json(cars);

}