import marketItems from "../assets/marketItems";

// const MarketplaceManager = () => (
//   <div>
//     <h1 className="text-2xl font-bold mb-4">Marketplace Manager</h1>
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//       {marketItems.map((item, i) => (
//         <div
//           key={i}
//           className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition"
//         >
//           <h2 className="font-semibold">{item.product}</h2>
//           <p className="text-gray-500 text-sm mt-1">{item.category}</p>
//           <p className="mt-2 font-bold text-blue-600">{item.price}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

const MarketplaceManager = ({ agent }) => {
  const products = [
    { id: 1, agentId: "AG007", product: "Goa Tour", price: "₹15,000" },
    { id: 2, agentId: "AG002", product: "Ladakh Ride", price: "₹30,000" },
    { id: 3, agentId: "AG007", product: "Manali Adventure", price: "₹20,000" },
  ];

  const myProducts = products.filter((p) => p.agentId === agent.id);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Marketplace Manager</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {myProducts.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold">{item.product}</h2>
            <p className="text-blue-600 font-medium mt-1">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceManager;
