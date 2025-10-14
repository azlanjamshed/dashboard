import travelDestinations from "../assets/travelDestinations";

// const TravelHub = () => (
//   <div>
//     <h1 className="text-2xl font-bold mb-4">Travel Hub</h1>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//       {travelDestinations.map((place, index) => (
//         <div
//           key={index}
//           className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
//         >
//           <h2 className="font-semibold text-lg">{place.name}</h2>
//           <p className="text-gray-600 text-sm mt-1">{place.location}</p>
//           <p className="text-blue-600 mt-2">{place.price}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );
const TravelHub = ({ agent }) => {
  const allTrips = [
    { id: 1, agentId: "AG007", name: "Goa Beach Escape", bookings: 45 },
    { id: 2, agentId: "AG002", name: "Kashmir Snow Tour", bookings: 60 },
    { id: 3, agentId: "AG007", name: "Manali Trek", bookings: 23 },
    { id: 4, agentId: "AG002", name: "laddakh tour", bookings: 60 },
  ];

  const agentTrips = allTrips.filter((trip) => trip.agentId === agent.id);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Travel Hub (Your Packages)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {agentTrips.map((trip) => (
          <div key={trip.id} className="bg-white p-4 shadow rounded-lg">
            <h2 className="font-semibold text-lg">{trip.name}</h2>
            <p className="text-gray-600">Bookings: {trip.bookings}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelHub;
