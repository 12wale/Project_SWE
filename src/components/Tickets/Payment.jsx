import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [isPaying, setIsPaying] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("temp_booking");
    if (saved) setBooking(JSON.parse(saved));
    else navigate("/tickets");
  }, []);

  if (!booking) return null;

  const handlePayment = () => {
    setIsPaying(true);

    setTimeout(() => {
      // Save booking permanently
      const userData = JSON.parse(localStorage.getItem("user")) || { ...booking.user };
      userData.booking = { ...booking, date: booking.user.visitDate };
      localStorage.setItem("user", JSON.stringify(userData));

      // Clear temp booking
      localStorage.removeItem("temp_booking");

      navigate("/final-booking");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-orange-400 mb-6">Payment</h1>

      <div className="bg-gray-800 p-6 rounded-md shadow max-w-md w-full mb-6">
        <h2 className="text-xl font-semibold mb-4 text-yellow-400">Booking Summary</h2>
        <p><strong>Name:</strong> {booking.user.name}</p>
        <p><strong>Email:</strong> {booking.user.email}</p>
        <p><strong>Date:</strong> {booking.user.visitDate}</p>
        <p><strong>Total:</strong> {booking.total} EGP</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-md shadow max-w-md w-full mb-6">
        <h2 className="text-xl font-semibold mb-4 text-yellow-400">Select Payment Method</h2>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-3 rounded bg-gray-700 text-gray-100 border border-gray-600"
        >
          <option value="credit">Credit / Debit Card</option>
          <option value="paypal">PayPal</option>
          <option value="cash">Cash on Arrival</option>
        </select>
      </div>

      <button
        onClick={handlePayment}
        className={`px-6 py-3 rounded bg-orange-500 hover:bg-orange-600 transition font-semibold w-full max-w-md ${isPaying ? "opacity-70 cursor-not-allowed" : ""}`}
        disabled={isPaying}
      >
        {isPaying ? "Processing Payment..." : `Pay ${booking.total} EGP`}
      </button>
    </div>
  );
}
