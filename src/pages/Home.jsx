import React, { useState } from "react";
import travelPackages from "../assets/Packages";
import PackageCard from "../components/PackageCard";

const Home = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minDays, setMinDays] = useState("");
  const filterData = travelPackages.filter((item) => {
    const searchTerm = search.toLowerCase();

    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm) ||
      item.location.toLowerCase().includes(searchTerm);

    const matchesCategory = category ? item.category === category : true;
    const matchesPrice = maxPrice ? item.price <= Number(maxPrice) : true;
    const matchesDays = minDays ? item.days >= Number(minDays) : true;

    return matchesSearch && matchesCategory && matchesPrice && matchesDays;
  });

  return (
    <>
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="p-6 bg-gray-50 rounded-2xl shadow-md mb-8 sticky top-0 ">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Explore Travel Packages
          </h1>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Search by title/location */}
            <input
              type="text"
              placeholder="Search by title or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 w-64 sm:w-72 md:w-80 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            />

            {/* Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 w-40 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            >
              <option value="">All Categories</option>
              <option value="Beach">Beach</option>
              <option value="Adventure">Adventure</option>
              <option value="Luxury">Luxury</option>
              <option value="Trekking">Trekking</option>
            </select>

            {/* Max Price */}
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="px-4 py-2 w-32 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            />

            {/* Min Days */}
            <input
              type="number"
              placeholder="Min Days"
              value={minDays}
              onChange={(e) => setMinDays(e.target.value)}
              className="px-4 py-2 w-32 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filterData.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              {" "}
              No matching records found 😕
            </p>
          ) : (
            filterData.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
