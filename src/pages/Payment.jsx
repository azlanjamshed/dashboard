import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import travelPackages from "../assets/Packages";

const Payment = () => {
  const { id } = useParams();
  const pkg = travelPackages.find((p) => p.id === Number(id));
  const [booking, setBooking] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Load booking info from localStorage
  useEffect(() => {
    const storedBooking = JSON.parse(localStorage.getItem(`booking_${id}`));
    if (storedBooking) setBooking(storedBooking);
  }, [id]);

  if (!pkg) return <div className="text-center mt-10">Package not found</div>;
  if (!booking)
    return <div className="text-center mt-10">No booking data found</div>;

  const totalPrice = pkg.price * booking.travelers.length;

  const handlePayment = () => {
    alert(
      `Payment successful!\n\nPackage: ${pkg.title}\nTotal Travelers: ${booking.travelers.length}\nTotal Price: $${totalPrice}\nPayment Method: ${paymentMethod}`
    );
    // Here you can integrate a real payment gateway later
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Payment</h1>

      {/* Package Info */}
      <div className="mb-6 p-4 border rounded-lg bg-gray-50">
        <h2 className="font-semibold text-gray-700 mb-2">Package Details</h2>
        <p>
          <strong>{pkg.title}</strong>
        </p>
        <p>
          Price per person: <span className="text-green-700">${pkg.price}</span>
        </p>
        <p>
          Travel Dates: {booking.startDate} → {booking.endDate}
        </p>
        <p>Number of Travelers: {booking.travelers.length}</p>
        <p>
          Total Price: <span className="text-green-700">${totalPrice}</span>
        </p>
      </div>

      {/* Traveler Names */}
      <div className="mb-6 p-4 border rounded-lg bg-gray-50">
        <h2 className="font-semibold text-gray-700 mb-2">Traveler Names</h2>
        <ul className="list-disc pl-5">
          {booking.travelers.map((t) => (
            <li key={t.id}>{t.name}</li>
          ))}
        </ul>
      </div>

      {/* Payment Method */}
      <div className="mb-6">
        <h2 className="font-semibold text-gray-700 mb-2">
          Select Payment Method
        </h2>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="card">Credit/Debit Card</option>
          <option value="upi">UPI</option>
          <option value="netbanking">Net Banking</option>
          <option value="cod">Cash on Arrival</option>
        </select>
      </div>

      <button
        onClick={handlePayment}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg w-full font-medium transition"
      >
        Pay ${totalPrice}
      </button>
    </div>
  );
};

export default Payment;
