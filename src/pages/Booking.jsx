// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";

// const Booking = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     travelers: 1,
//     date: "",
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Booking data:", form);
//     navigate(`/payment/${id}`);
//   };

//   return (
//     <div className="p-8 max-w-lg mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Booking Form</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <input
//           type="number"
//           name="travelers"
//           placeholder="Number of Travelers"
//           value={form.travelers}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//           min="1"
//         />
//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <button
//           type="submit"
//           className="bg-green-600 text-white px-4 py-2 rounded-lg w-full"
//         >
//           Continue to Payment
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Booking;

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import travelPackages from "../assets/Packages";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const pkg = travelPackages.find((p) => p.id === Number(id));
  if (!pkg) return <div className="text-center mt-10">Package not found</div>;

  const [travelers, setTravelers] = useState([
    { id: 1, name: "", email: "", phone: "", errors: {} },
  ]);

  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
    specialRequests: "",
    agreeTerms: false,
  });

  const [formError, setFormError] = useState("");

  // Add new traveler
  const addTraveler = () => {
    setTravelers((prev) => [
      ...prev,
      { id: prev.length + 1, name: "", email: "", phone: "", errors: {} },
    ]);
  };

  // Remove traveler
  const removeTraveler = (index) => {
    setTravelers((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle traveler input change
  const handleTravelerChange = (index, e) => {
    const { name, value } = e.target;
    setTravelers((prev) =>
      prev.map((t, i) => (i === index ? { ...t, [name]: value } : t))
    );
  };

  // Handle other form inputs
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validate form
  const validate = () => {
    let valid = true;
    const newTravelers = travelers.map((t) => {
      const errors = {};
      if (!t.name.trim()) {
        errors.name = "Name required";
        valid = false;
      }
      if (!t.email.match(/^\S+@\S+\.\S+$/)) {
        errors.email = "Valid email required";
        valid = false;
      }
      if (!t.phone.match(/^\d{10}$/)) {
        errors.phone = "Valid 10-digit phone required";
        valid = false;
      }
      return { ...t, errors };
    });

    setTravelers(newTravelers);

    if (!form.startDate || !form.endDate) {
      setFormError("Select valid start and end dates");
      valid = false;
    } else if (form.endDate < form.startDate) {
      setFormError("End date cannot be before start date");
      valid = false;
    } else {
      setFormError("");
    }

    if (!form.agreeTerms) {
      setFormError("You must agree to terms and conditions");
      valid = false;
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Save booking to localStorage for payment page
    localStorage.setItem(
      `booking_${id}`,
      JSON.stringify({ travelers, ...form })
    );

    navigate(`/payment/${id}`);
  };

  const totalPrice = pkg.price * travelers.length;

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {pkg.title} - Booking Form
      </h1>

      <p className="mb-4 text-green-700 font-semibold">
        Price per person: ${pkg.price} | Total: ${totalPrice}
      </p>

      {formError && <p className="text-red-600 mb-2">{formError}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {travelers.map((traveler, index) => (
          <div
            key={traveler.id}
            className="p-4 border rounded-xl shadow-sm bg-gray-50 space-y-2 relative"
          >
            <h2 className="font-semibold text-gray-700">
              Traveler {traveler.id} Details
            </h2>

            {travelers.length > 1 && (
              <button
                type="button"
                onClick={() => removeTraveler(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800 font-semibold"
              >
                Remove
              </button>
            )}

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={traveler.name}
              onChange={(e) => handleTravelerChange(index, e)}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {traveler.errors.name && (
              <p className="text-red-500 text-sm">{traveler.errors.name}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={traveler.email}
              onChange={(e) => handleTravelerChange(index, e)}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {traveler.errors.email && (
              <p className="text-red-500 text-sm">{traveler.errors.email}</p>
            )}

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={traveler.phone}
              onChange={(e) => handleTravelerChange(index, e)}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {traveler.errors.phone && (
              <p className="text-red-500 text-sm">{traveler.errors.phone}</p>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addTraveler}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
        >
          + Add Passenger
        </button>

        <div className="flex gap-2">
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleFormChange}
            className="w-1/2 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleFormChange}
            className="w-1/2 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <textarea
          name="specialRequests"
          placeholder="Special Requests (optional, max 200 chars)"
          value={form.specialRequests}
          onChange={(e) => handleFormChange(e)}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          maxLength={200}
          rows="3"
        />

        <label className="flex items-center gap-2 text-gray-700">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={form.agreeTerms}
            onChange={handleFormChange}
            required
            className="w-4 h-4"
          />
          I agree to the terms and conditions
        </label>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg w-full font-medium transition"
        >
          Continue to Payment (${totalPrice})
        </button>
      </form>
    </div>
  );
};

export default Booking;
