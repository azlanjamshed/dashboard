import { useParams, Link } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Payment Page</h1>
      <p>
        Mock payment for booking ID: <span className="font-semibold">{id}</span>
      </p>
      <p className="mt-4 text-green-600 font-bold">✅ Payment Successful!</p>
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Payment;
