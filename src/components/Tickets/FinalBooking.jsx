import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FinalBooking() {
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const user = JSON.parse(data);
      if (user.booking) setBooking(user.booking);
      else navigate("/tickets");
    } else {
      navigate("/auth");
    }
  }, []);

  if (!booking) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-10 px-4">
      <h1 className="text-center text-3xl font-bold mb-6 text-orange-400">Booking Confirmed!</h1>

      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-md shadow mb-8">
        <h2 className="text-xl font-semibold text-yellow-400 mb-4">Visitor Information</h2>
        <p><strong>Name:</strong> {booking.user.name}</p>
        <p><strong>Email:</strong> {booking.user.email}</p>
        <p><strong>Phone:</strong> {booking.user.phone}</p>
        <p><strong>Visit Date:</strong> {booking.user.visitDate}</p>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-md shadow mb-8">
        <h2 className="text-xl font-semibold text-yellow-400 mb-4">Ticket Summary</h2>
        {Object.keys(booking.tickets).map((group) => (
          <div key={group} className="mb-4">
            <h3 className="text-lg font-bold capitalize text-white mb-2">{group}</h3>
            {Object.entries(booking.tickets[group]).map(([type, count]) => count > 0 && (
              <p key={type} className="ml-4 text-gray-300">{type}: {count}</p>
            ))}
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-2xl font-bold text-white">
          Total Paid: <span className="text-orange-400">{booking.total} EGP</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto flex justify-center gap-4">
        <button
          onClick={() => navigate("/dashboard")}
          className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Go to Dashboard
        </button>
        <button
          onClick={() => navigate("/tickets")}
          className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Book Another Ticket
        </button>
      </div>
    </div>
  );
}
