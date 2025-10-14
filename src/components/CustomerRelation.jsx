import customers from "../assets/customers";

// const CustomerRelation = () => (
//   <div>
//     <h1 className="text-2xl font-bold mb-4">Customer Relations</h1>
//     <ul className="space-y-3">
//       {customers.map((cust, i) => (
//         <li
//           key={i}
//           className="bg-white p-4 rounded-lg shadow flex justify-between items-center hover:bg-gray-50"
//         >
//           <div>
//             <p className="font-semibold">{cust.name}</p>
//             <p className="text-sm text-gray-600">{cust.feedback}</p>
//           </div>
//           <span className="text-sm font-medium text-blue-600">
//             {cust.status}
//           </span>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

const CustomerRelation = ({ agent }) => {
  const feedbacks = [
    { id: 1, agentId: "AG007", name: "Neha Patel", feedback: "Very helpful!" },
    { id: 2, agentId: "AG002", name: "Ravi Singh", feedback: "Late response" },
    {
      id: 3,
      agentId: "AG007",
      name: "Simran Kaur",
      feedback: "Loved the trip!",
    },
  ];

  const myFeedbacks = feedbacks.filter((f) => f.agentId === agent.id);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customer Relations</h1>
      <ul className="space-y-3">
        {myFeedbacks.map((f) => (
          <li key={f.id} className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold">{f.name}</p>
            <p className="text-gray-600">{f.feedback}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CustomerRelation;
