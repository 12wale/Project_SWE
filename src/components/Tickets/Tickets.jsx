// Tickets.jsx - Golden Pharaonic Premium
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Tickets() {
  const navigate = useNavigate();

  const [tickets, setTickets] = useState({
    egyptians: { adult: 0, child: 0, student: 0, senior: 0 },
    arabs: { adult: 0, child: 0, student: 0 },
    expats: { adult: 0, child: 0, student: 0 },
  });

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    visitDate: "",
    avatar: null,
    booking: null,
  });

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data));
  }, []);

  const handleUserChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar" && files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedUser = { ...user, avatar: reader.result };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
      };
      reader.readAsDataURL(files[0]);
    } else {
      const updatedUser = { ...user, [name]: value };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  };

  const prices = {
    egyptians: { adult: 200, child: 100, student: 100, senior: 100 },
    arabs: { adult: 1450, child: 730, student: 730 },
    expats: { adult: 730, child: 370, student: 370 },
  };

  const updateCount = (group, type, increment) => {
    setTickets((prev) => {
      const updated = {
        ...prev,
        [group]: { ...prev[group], [type]: Math.max(0, prev[group][type] + increment) },
      };
      return updated;
    });
  };

  const calculateTotal = () => {
    let total = 0;
    Object.keys(tickets).forEach((group) =>
      Object.keys(tickets[group]).forEach((type) => {
        total += tickets[group][type] * prices[group][type];
      })
    );
    return total;
  };

const goNext = () => {
  if (!user.name || !user.email || !user.phone || !user.visitDate || !user.country) {
    alert("Please fill all required fields!");
    return;
  }

  const total = calculateTotal();
  const booking = { user, tickets, total };


  const updatedUser = { ...user, booking };
  setUser(updatedUser);
  localStorage.setItem("user", JSON.stringify(updatedUser));

  localStorage.setItem("temp_booking", JSON.stringify(booking));


  navigate("/confirm-booking");
};


  // Parallax transforms for layers
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const depth = (factor) => ({
    x: (mouse.x - centerX) / factor,
    y: (mouse.y - centerY) / factor,
  });

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900 text-gray-100">
   
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          background: "linear-gradient(to bottom, #0a0a0a, #1a0f00)"}}
        animate={{ x: depth(40).x, y: depth(40).y }}
        transition={{ type: "spring", stiffness: 30, damping: 25 }}
      />

      
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: depth(80).x, y: depth(80).y }}
        transition={{ type: "spring", stiffness: 40, damping: 30 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/80"></div>
        {/* golden haze spotlight */}
        <div
          style={{
            transform: `translate3d(${depth(120).x}px, ${depth(120).y}px, 0)`,
          }}
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[70px] opacity-30 bg-amber-400/20 pointer-events-none"
        />
      </motion.div>

      {/* Decorative Egyptian border (top) */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg width="100%" height="60" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0%" stopColor="#ffd54a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#b8860b" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="1200" height="60" fill="url(#g)" opacity="0.06" />
          {/* simple repeating pattern */}
          <g fill="#d4af37" opacity="0.12">
            {Array.from({ length: 40 }).map((_, i) => (
              <rect key={i} x={i * 30 + 5} y="10" width="16" height="40" rx="3" />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative z-20 px-6 py-10  bg-gray-900">
        <div className="max-w-5xl mx-auto space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center text-3xl md:text-4xl font-extrabold text-amber-300 drop-shadow-[0_6px_20px_rgba(218,165,32,0.15)]"
          >
            Egyptian Museum — <span className="text-yellow-200">Golden Ticket Booking</span>
          </motion.h1>

          {/* User Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-black/60 via-slate-800/50 to-black/60 border border-amber-400/20 rounded-2xl p-6 shadow-2xl backdrop-blur-md"
          >
            <h2 className="text-xl font-semibold text-amber-200 mb-4">Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["name", "Full Name"],
                ["email", "Email"],
                ["password", "Password"],
                ["phone", "Phone Number"],
                ["country", "Country"],
              ].map(([field, placeholder]) => (
                <input
                  key={field}
                  type={field === "password" ? "password" : field === "email" ? "email" : "text"}
                 name={field}
                  placeholder={placeholder}
                  value={user[field]}
                  onChange={handleUserChange}
                  className="p-3 bg-black/40 border border-amber-400/10 rounded-lg text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
                />
              ))}

              <input
                type="date"
                name="visitDate"
                value={user.visitDate}
                onChange={handleUserChange}
                className="p-3 bg-black/40 border border-amber-400/10 rounded-lg text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
              />

              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleUserChange}
                className="p-2 bg-black/40 border border-amber-400/10 rounded-lg text-amber-100 cursor-pointer"
              />
            </div>
          </motion.div>

          {/* Ticket Groups - Golden Pharaonic style */}
          <div className="space-y-6">
            <TicketGroup title="Egyptians" group="egyptians" prices={prices.egyptians} data={tickets.egyptians} updateCount={updateCount} />
            <TicketGroup title="Arabs / Other Nationalities" group="arabs" prices={prices.arabs} data={tickets.arabs} updateCount={updateCount} />
            <TicketGroup title="Expatriates" group="expats" prices={prices.expats} data={tickets.expats} updateCount={updateCount} />
          </div>

          {/* Total & Next */}
          <div className="flex flex-col items-center gap-4">
            <div className="text-center">
              <p className="text-lg md:text-xl text-amber-200">Total Price</p>
              <p className="text-3xl font-extrabold text-yellow-300">{calculateTotal()} EGP</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={goNext}
              className="px-8 py-3 bg-gradient-to-br from-amber-500 to-yellow-400 text-black font-bold rounded-full shadow-[0_10px_30px_rgba(218,165,32,0.18)]"
            >
              Proceed to Dashboard
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg width="100%" height="60" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <rect x="0" y="0" width="1200" height="60" fill="#000" opacity="0.2" />
          <g fill="#d4af37" opacity="0.12">
            {Array.from({ length: 40 }).map((_, i) => (
              <rect key={i} x={i * 30 + 8} y="5" width="14" height="50" rx="3" />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}


function TicketGroup({ title, group, prices, data, updateCount }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-amber-400/20">
        <div className="bg-gradient-to-r from-amber-600 to-yellow-400 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* small pharaonic icon */}
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 8H9L12 2Z" fill="#2b2b2b" opacity="0.12" />
              <path d="M4 22H20L18 16H6L4 22Z" fill="#2b2b2b" opacity="0.12" />
              <path d="M12 2L9 8H15L12 2Z" stroke="#fff" strokeOpacity="0.2" />
            </svg>
            <h3 className="text-white font-bold text-lg md:text-xl">{title}</h3>
          </div>
          <div className="text-sm text-black/70 font-semibold">Pharaonic Premium</div>
        </div>

        <div className="bg-gray-900 p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          {Object.keys(prices).map((type, i) => (
            <div key={i} className="flex justify-between items-center p-4 border border-amber-400/8 rounded-lg bg-gradient-to-b from-black/30 to-black/10">
              <div>
                <p className="font-semibold capitalize text-amber-100">{type}</p>
                <p className="text-amber-300">EGP {prices[type]}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateCount(group, type, -1)}
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-amber-300/30 text-amber-100 hover:bg-amber-500/10 transition"
                >
                  -
                </button>
                <div className="w-8 text-center font-bold text-amber-100">{data[type]}</div>
                <button
                  onClick={() => updateCount(group, type, 1)}
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-amber-300/30 text-amber-100 hover:bg-amber-500/10 transition"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
