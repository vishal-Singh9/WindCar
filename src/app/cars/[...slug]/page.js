import CarDetails from "../../../components/CarDetails";

export default function CarPage({ params }) {

    return (
        <div>
            <CarDetails slug={params.slug} />
        </div>
    );
}


