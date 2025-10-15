// import { Link } from "react-router-dom";

// const PackageCard = ({ pkg }) => (
//   <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-101 transition my-5">
//     <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
//     <div className="p-4">
//       <h2 className="text-xl font-bold">{pkg.title}</h2>
//       <p className="text-gray-500">{pkg.location}</p>
//       <p className="text-green-600 font-semibold mt-2">${pkg.price}</p>
//       <p className="text-sm text-gray-600 mt-1">{pkg.duration}</p>
//       <Link
//         to={`/package/${pkg.id}`}
//         className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
//       >
//         View Details
//       </Link>
//     </div>
//   </div>
// );

// export default PackageCard;

import { Link } from "react-router-dom";

const PackageCard = ({ pkg }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition my-5">
    <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-bold">{pkg.title}</h2>
      <p className="text-gray-500">
        {pkg.location} • {pkg.category}
      </p>
      <p className="text-gray-600 text-sm">
        Duration: {pkg.duration} ({pkg.days} days)
      </p>
      <p className="text-green-600 font-semibold mt-2">${pkg.price}</p>
      <p className="text-sm text-gray-700 mt-2 line-clamp-3">
        {pkg.description}
      </p>
      <p className="text-gray-500 text-sm mt-1">Agent: {pkg.agent}</p>
      <Link
        to={`/package/${pkg.id}`}
        className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
      >
        View Details
      </Link>
    </div>
  </div>
);

export default PackageCard;
