import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ConfirmBooking() {
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("temp_booking");
    if (saved) setBooking(JSON.parse(saved));
    else navigate("/tickets");
  }, []);

  if (!booking) return null;

  const { user, tickets, total } = booking;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-10 px-4">
      <h1 className="text-center text-3xl font-bold mb-8 text-white">Confirm Your Booking</h1>

      {/* User Info */}
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-md shadow mb-8">
        <h2 className="text-xl font-semibold text-orange-400 mb-4">Visitor Information</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Country:</strong> {user.country}</p>
        <p><strong>Visit Date:</strong> {user.visitDate}</p>
      </div>

      {/* Tickets */}
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-md shadow mb-8">
        <h2 className="text-xl font-semibold text-orange-400 mb-4">Ticket Summary</h2>
        {Object.keys(tickets).map((group) => (
          <div key={group} className="mb-4">
            <h3 className="text-lg font-bold capitalize text-white mb-2">{group}</h3>
            {Object.entries(tickets[group]).map(([type, count]) =>
              count > 0 && <p key={type} className="ml-4 text-gray-300">{type}: {count}</p>
            )}
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-2xl font-bold text-white">
          Total Price: <span className="text-orange-400">{total} EGP</span>
        </h2>
      </div>

      {/* Buttons */}
      <div className="max-w-3xl mx-auto flex justify-center gap-4">
        <button
          onClick={() => navigate("/tickets")}
          className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Back
        </button>
      <button
  onClick={() => {
    // احفظ الحجز مؤقتًا للتأكد من توفره في صفحة الدفع
    localStorage.setItem("temp_booking", JSON.stringify(booking));
    navigate("/payment");
  }}
  className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
>
  Confirm & Continue
</button>

      </div>
    </div>
  );
}
