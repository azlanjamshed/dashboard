import dummyAgents from "../assets/Agent";

// const AgentData = () => (
//   <div>
//     <h1 className="text-2xl font-bold mb-4">Agent Data</h1>
//     <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//       <thead className="bg-blue-600 text-white">
//         <tr>
//           <th className="py-2 px-4 text-left">Agent ID</th>
//           <th className="py-2 px-4 text-left">Name</th>
//           <th className="py-2 px-4 text-left">Location</th>
//           <th className="py-2 px-4 text-left">Rating</th>
//         </tr>
//       </thead>
//       <tbody>
//         {dummyAgents.map((agent) => (
//           <tr key={agent.id} className="border-b hover:bg-gray-100">
//             <td className="py-2 px-4">{agent.id}</td>
//             <td className="py-2 px-4">{agent.name}</td>
//             <td className="py-2 px-4">{agent.location}</td>
//             <td className="py-2 px-4">{agent.rating} ⭐</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
const AgentData = ({ agent }) => (
  <div className="max-w-2xl bg-white shadow-md rounded-lg p-6 mx-auto">
    <h1 className="text-2xl font-bold mb-4 text-blue-700">Agent Profile</h1>
    <div className="space-y-3">
      <p>
        <strong>Agent ID:</strong> {agent.id}
      </p>
      <p>
        <strong>Name:</strong> {agent.name}
      </p>
      <p>
        <strong>Email:</strong> {agent.email}
      </p>
      <p>
        <strong>Location:</strong> {agent.location}
      </p>
      <p>
        <strong>Rating:</strong> ⭐ {agent.rating}
      </p>
      <p>
        <strong>Total Bookings:</strong> {agent.totalBookings}
      </p>
      <p>
        <strong>Joined:</strong> {agent.joinedDate}
      </p>
    </div>
  </div>
);
export default AgentData;
