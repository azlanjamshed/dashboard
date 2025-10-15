// import { useState } from "react";
// import AgentDashboard from "./pages/AgentDashboard";

// function App() {
//   return (
//     <>
//       {/* <AgentDashboard /> */}

//     </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PackageDetails from "./pages/PackageDetails";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import AgentDashboard from "./pages/AgentDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/package/:id" element={<PackageDetails />} />
      <Route path="/book/:id" element={<Booking />} />
      <Route path="/payment/:id" element={<Payment />} />
      <Route path="/agent-dashboard" element={<AgentDashboard />} />
    </Routes>
  );
}

export default App;
