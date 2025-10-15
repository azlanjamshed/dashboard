import travelPackages from "../assets/Packages";
import PackageCard from "../components/PackageCard";

const Home = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <h1 className="text-3xl font-bold mb-6 text-center">
      Explore Travel Packages
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {travelPackages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}
    </div>
  </div>
);

export default Home;
