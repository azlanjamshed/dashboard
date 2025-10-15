// import { useParams, Link } from "react-router-dom";
// import travelPackages from "../assets/Packages";

// const PackageDetails = () => {
// const { id } = useParams();
// const pkg = travelPackages.find((p) => p.id === Number(id));

// if (!pkg) return <div className="text-center mt-10">Package not found</div>;

// return (
//     <div className="p-8 max-w-3xl mx-auto">
//     <img
//         src={pkg.image}
//         alt={pkg.title}
//         className="rounded-xl mb-4 w-full h-64 object-cover"
//     />
//     <h1 className="text-3xl font-bold">{pkg.title}</h1>
//     <p className="text-gray-500 mb-2">{pkg.location}</p>
//     <p className="text-green-700 font-semibold">${pkg.price}</p>
//     <p className="text-sm text-gray-600 mb-4">{pkg.duration}</p>
//     <p className="mb-4">{pkg.description}</p>
//     <h3 className="font-semibold mb-2">Itinerary:</h3>
//     <ul className="list-disc pl-5 mb-6">
//         {pkg.itinerary.map((item, i) => (
//         <li key={i}>{item}</li>
//         ))}
//     </ul>
//     <p className="text-gray-700 mb-4">Agent: {pkg.agent}</p>
//     <Link
//         to={`/book/${pkg.id}`}
//         className="bg-blue-600 text-white px-6 py-2 rounded-lg"
//     >
//         Book Now
//     </Link>
//     </div>
// );
// };

// export default PackageDetails;

import { useParams, Link } from "react-router-dom";
import travelPackages from "../assets/Packages";

const PackageDetails = () => {
  const { id } = useParams();
  const pkg = travelPackages.find((p) => p.id === Number(id));

  if (!pkg)
    return (
      <div className="text-center mt-10 text-red-500 font-semibold text-xl">
        Package not found
      </div>
    );

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white rounded-2xl shadow-md">
      <img
        src={pkg.image}
        alt={pkg.title}
        className="rounded-xl mb-6 w-full h-72 object-cover"
      />
      <h1 className="text-3xl font-bold mb-2">{pkg.title}</h1>
      <p className="text-gray-500 mb-1">
        {pkg.location} • <span className="font-medium">{pkg.category}</span>
      </p>
      <p className="text-gray-600 text-sm mb-2">
        Duration: {pkg.duration} ({pkg.days} days)
      </p>
      <p className="text-green-700 font-semibold mb-4">${pkg.price}</p>
      <p className="text-gray-700 mb-6">{pkg.description}</p>

      <h3 className="font-semibold mb-2 text-lg">Itinerary:</h3>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        {pkg.itinerary.map((item, i) => (
          <li key={i} className="text-gray-600">
            {item}
          </li>
        ))}
      </ul>

      <p className="text-gray-700 mb-6">
        <span className="font-semibold">Agent:</span> {pkg.agent}
      </p>

      <Link
        to={`/book/${pkg.id}`}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
      >
        Book Now
      </Link>
    </div>
  );
};

export default PackageDetails;
