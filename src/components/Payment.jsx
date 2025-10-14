import payments from "../assets/payments";

// const Payment = () => (
//   <div>
//     <h1 className="text-2xl font-bold mb-4">Payments</h1>
//     <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//       <thead className="bg-blue-600 text-white">
//         <tr>
//           <th className="py-2 px-4 text-left">Transaction ID</th>
//           <th className="py-2 px-4 text-left">Customer</th>
//           <th className="py-2 px-4 text-left">Amount</th>
//           <th className="py-2 px-4 text-left">Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {payments.map((p, i) => (
//           <tr key={i} className="border-b hover:bg-gray-100">
//             <td className="py-2 px-4">{p.id}</td>
//             <td className="py-2 px-4">{p.customer}</td>
//             <td className="py-2 px-4">{p.amount}</td>
//             <td
//               className={`py-2 px-4 font-semibold ${
//                 p.status === "Completed"
//                   ? "text-green-600"
//                   : p.status === "Pending"
//                   ? "text-yellow-500"
//                   : "text-red-600"
//               }`}
//             >
//               {p.status}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );

const Payment = ({ agent }) => {
  const allPayments = [
    { id: "TX1001", agentId: "AG007", amount: "₹12,000", status: "Completed" },
    { id: "TX1002", agentId: "AG002", amount: "₹8,500", status: "Pending" },
    { id: "TX1003", agentId: "AG007", amount: "₹5,000", status: "Completed" },
  ];

  const myPayments = allPayments.filter((p) => p.agentId === agent.id);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Payments</h1>
      <table className="w-full bg-white rounded-lg shadow overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Transaction ID</th>
            <th className="py-2 px-4 text-left">Amount</th>
            <th className="py-2 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {myPayments.map((p) => (
            <tr key={p.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{p.id}</td>
              <td className="py-2 px-4">{p.amount}</td>
              <td
                className={`py-2 px-4 font-semibold ${
                  p.status === "Completed"
                    ? "text-green-600"
                    : p.status === "Pending"
                    ? "text-yellow-500"
                    : "text-red-600"
                }`}
              >
                {p.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Payment;
