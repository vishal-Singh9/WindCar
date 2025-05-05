import CarMakeDetails from "@/components/CarMakeDetails";
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
  const { make, carId } = await params;
  const car = await getCarDetails(make, carId);

  if (!car) {
    return notFound();
  }

  return <CarMakeDetails car={car} make={make} />;
}