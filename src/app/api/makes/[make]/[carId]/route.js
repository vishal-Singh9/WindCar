import { NextResponse } from 'next/server';
import { db } from '../../../../../lib/db'
import { Car } from '../../../../../models/Car';

export async function GET(req, { params }) {
    await db.MongoDB();
    const car = await Car.findById(params.carId).populate('make');
    if (!car) return NextResponse.json({ error: 'Car not found' }, { status: 404 });
    return NextResponse.json(car);
}
