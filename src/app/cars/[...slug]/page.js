import CarDetails from "../../../components/CarDetails";

export default async function CarPage({ params }) {
    const slug = await params.slug || [];

    return (
        <div>
            <CarDetails slug={slug} />
        </div>
    );
}


