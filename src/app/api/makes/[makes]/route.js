import { NextResponse } from 'next/server';

// Expanded car data with more details and slugs
const carsByMake = {
    toyota: [
        { 
            id: 'toyota-camry', 
            name: 'Camry', 
            price: '$25,000', 
            image: '/cars/toyota-camry.jpg',
            make: 'Toyota',
            model: 'Camry',
            year: 2023,
            description: 'Reliable midsize sedan with excellent fuel efficiency.'
        },
        { 
            id: 'toyota-rav4', 
            name: 'RAV4', 
            price: '$28,000', 
            image: '/cars/toyota-rav4.jpg',
            make: 'Toyota',
            model: 'RAV4',
            year: 2023,
            description: 'Popular compact SUV with versatile performance.'
        }
    ],
    honda: [
        { 
            id: 'honda-civic', 
            name: 'Civic', 
            price: '$23,000', 
            image: '/cars/honda-civic.jpg',
            make: 'Honda',
            model: 'Civic',
            year: 2023,
            description: 'Compact sedan known for reliability and efficiency.'
        }
    ],
    tesla: [
        { 
            id: 'tesla-model3', 
            name: 'Model 3', 
            price: '$40,000', 
            image: '/cars/tesla-model3.jpg',
            make: 'Tesla',
            model: 'Model 3',
            year: 2023,
            description: 'Electric sedan with cutting-edge technology.'
        }
    ]
};

export async function GET(request, { params }) {
    const make = params.makes.toLowerCase();
    const cars = carsByMake[make] || [];

    return NextResponse.json(cars);
}