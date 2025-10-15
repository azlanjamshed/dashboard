import { Link } from "react-router-dom";

const PackageCard = ({ pkg }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition">
    <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-bold">{pkg.title}</h2>
      <p className="text-gray-500">{pkg.location}</p>
      <p className="text-green-600 font-semibold mt-2">${pkg.price}</p>
      <p className="text-sm text-gray-600 mt-1">{pkg.duration}</p>
      <Link
        to={`/package/${pkg.id}`}
        className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        View Details
      </Link>
    </div>
  </div>
);

export default PackageCard;
