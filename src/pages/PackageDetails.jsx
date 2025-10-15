import { useParams, Link } from "react-router-dom";
import travelPackages from "../assets/Packages";

const PackageDetails = () => {
  const { id } = useParams();
  const pkg = travelPackages.find((p) => p.id === Number(id));

  if (!pkg) return <div className="text-center mt-10">Package not found</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <img
        src={pkg.image}
        alt={pkg.title}
        className="rounded-xl mb-4 w-full h-64 object-cover"
      />
      <h1 className="text-3xl font-bold">{pkg.title}</h1>
      <p className="text-gray-500 mb-2">{pkg.location}</p>
      <p className="text-green-700 font-semibold">${pkg.price}</p>
      <p className="text-sm text-gray-600 mb-4">{pkg.duration}</p>
      <p className="mb-4">{pkg.description}</p>
      <h3 className="font-semibold mb-2">Itinerary:</h3>
      <ul className="list-disc pl-5 mb-6">
        {pkg.itinerary.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p className="text-gray-700 mb-4">Agent: {pkg.agent}</p>
      <Link
        to={`/book/${pkg.id}`}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        Book Now
      </Link>
    </div>
  );
};

export default PackageDetails;
