import React, { useState } from "react";
import { UserCircle2, Globe2, Users, Store, CreditCard } from "lucide-react";
import menuItems from "../assets/MenuItems";
import AgentData from "../components/AgentData";
import TravelHub from "../components/TravelHub";
import CustomerRelation from "../components/CustomerRelation";
import MarketplaceManager from "../components/MarketPlaceManager";
import Payment from "../components/Payment";
const AgentDashboard = () => {
  const [activeTab, setActiveTab] = useState("agentData");

  const loggedAgent = {
    id: "AG007",
    name: "Azlan Jamshed",
    email: "azlan@gen2de.com",
    location: "Bhopal, India",
    rating: 4.9,
    totalBookings: 128,
    joinedDate: "March 2024",
  };

  const renderContent = () => {
    switch (activeTab) {
      case "agentData":
        return <AgentData agent={loggedAgent} />;
      case "travelHub":
        return <TravelHub agent={loggedAgent} />;
      case "customerRelation":
        return <CustomerRelation agent={loggedAgent} />;
      case "marketplaceManager":
        return <MarketplaceManager agent={loggedAgent} />;
      case "payment":
        return <Payment agent={loggedAgent} />;
      default:
        return <AgentData agent={loggedAgent} />;
    }
  };
  return (
    // <div className="flex min-h-screen bg-gray-100 text-gray-800">
    //   {/* Sidebar */}
    //   <div className="w-64 bg-white shadow-lg flex flex-col justify-between">
    //     <div>
    //       <h2 className="text-2xl font-bold text-blue-600 p-6">
    //         Agent Dashboard
    //       </h2>

    //       <nav className="space-y-2 px-4">
    //         {menuItems.map((item) => (
    //           <button
    //             key={item.id}
    //             onClick={() => setActiveTab(item.id)}
    //             className={`flex items-center w-full px-4 py-2 rounded-lg font-medium transition ${
    //               activeTab === item.id
    //                 ? "bg-blue-600 text-white"
    //                 : "hover:bg-blue-100"
    //             }`}
    //           >
    //             <item.icon className="mr-3 w-5 h-5" />
    //             {item.label}
    //           </button>
    //         ))}
    //       </nav>
    //     </div>

    //     <footer className="p-4 text-center text-sm text-gray-500 border-t">
    //       © 2025 Gen 2De
    //     </footer>
    //   </div>

    //   {/* Main Content */}
    //   <div className="flex-1 p-6">{renderContent()}</div>
    // </div>

    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-blue-600 p-6">
            Agent Dashboard
          </h2>

          <nav className="space-y-2 px-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center w-full px-4 py-2 rounded-lg font-medium transition ${
                  activeTab === item.id
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-100"
                }`}
              >
                <item.icon className="mr-3 w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <footer className="p-4 text-center text-sm text-gray-500 border-t">
          © 2025 Gen 2De
        </footer>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
};

export default AgentDashboard;
