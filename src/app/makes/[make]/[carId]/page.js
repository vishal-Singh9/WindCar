// File: app/makes/[make]/[carId]/page.js
// This remains a Server Component - no 'use client' here
import CarDetailsClient from "@/components/CarDetails";
import { notFound } from "next/navigation";

// Fetch car details function
async function getCarDetails(make, carId) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/makes/${make}/${carId}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) throw new Error("Failed to fetch car details");
    return await res.json();
  } catch (error) {
    console.error("Error fetching car details:", error);
    return null;
  }
}

// Server Component - handles data fetching
export default async function CarDetailsPage({ params }) {
  const { make, carId } = params;
  const car = await getCarDetails(make, carId);

  if (!car) {
    return notFound();
  }

  // Pass fetched data to the client component
  return <CarDetailsClient car={car} make={make} />;
}