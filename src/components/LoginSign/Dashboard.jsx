// Dashboard.jsx — Smooth Egyptian Royal UI
// Tailwind + Framer Motion + Glass UI

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data));

    const handleStorage = () => {
      const updated = localStorage.getItem("user");
      if (updated) setUser(JSON.parse(updated));
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  if (!user) return null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  const tabs = ["Overview", "Booking History", "Profile", "Settings"];

  const saveProfile = () => {
    const updatedUser = { ...user, ...editData };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setEditData(null);
  };

  const fadeAnim = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.045),transparent_65%),radial-gradient(circle_at_bottom,rgba(255,180,0,0.04),transparent_70%)] text-yellow-200 flex flex-col md:flex-row font-sans select-none overflow-hidden">

      {/* Sidebar */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-72 bg-[#0b0f16]/80 backdrop-blur-2xl border-r border-yellow-600/30 p-7 flex flex-col shadow-[0_0_20px_rgba(255,200,0,0.12)]"
      >
        <h2 className="cinzel-decorative text-4xl font-extrabold mb-10 text-center text-yellow-400 drop-shadow-[0_0_8px_rgba(255,215,0,0.6)] tracking-wide">
          Dashboard
        </h2>

        <ul className="flex flex-col gap-4 cinzel-decorative mt-4">
          {tabs.map((tab) => (
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-5 py-3 rounded-xl text-center transition-all duration-300 font-semibold tracking-wide shadow-md border border-yellow-500/20 backdrop-blur-sm ${
                activeTab === tab
                  ? "bg-yellow-500 text-black shadow-yellow-400/50 border-yellow-500"
                  : "hover:bg-yellow-700/10 text-yellow-300 hover:border-yellow-500/30"
              }`}
            >
              {tab}
            </motion.li>
          ))}

          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="cursor-pointer mt-10 px-5 py-3 rounded-xl text-center bg-red-600/80 hover:bg-red-700 text-white font-bold transition-all duration-300 shadow-md border border-red-700/40"
          >
            Logout
          </motion.li>
        </ul>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* User Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-yellow-500/7 via-yellow-300/6 to-yellow-500/7 border border-yellow-600/20 rounded-3xl shadow-[0_0_25px_rgba(255,200,0,0.12)] p-10 flex flex-col items-center gap-6 backdrop-blur-xl"
          >
            <img
              src={user.avatar || "https://ui-avatars.com/api/?name=" + user.name}
              alt="avatar"
              className="w-36 h-36 rounded-full border-4 border-yellow-500 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
            />
            <h1 className="cinzel-decorative text-4xl font-extrabold text-yellow-300 drop-shadow-[0_0_8px_rgba(255,215,0,0.55)] tracking-wider">
              {user.name}
            </h1>
          </motion.div>

          {/* TAB CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={fadeAnim}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-[#0b0f16]/70 backdrop-blur-2xl border border-yellow-600/20 rounded-3xl shadow-[0_0_25px_rgba(255,200,0,0.1)] p-10"
            >

              {/* OVERVIEW */}
              {activeTab === "Overview" && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-yellow-300 mb-4">Booking Overview</h2>

                  {user.booking ? (
                    <div className="space-y-3 text-yellow-200">
                      <p><strong>Visit Date:</strong> {user.booking.date}</p>
                      <p><strong>Total Paid:</strong> {user.booking.total} EGP</p>
                    </div>
                  ) : (
                    <p className="text-yellow-400 text-center mt-4 font-semibold">No bookings found.</p>
                  )}
                </div>
              )}

              {/* BOOKING HISTORY */}
              {activeTab === "Booking History" && (
                <div>
                  <h2 className="text-3xl font-bold text-yellow-300 mb-6">Your Booking History</h2>

                  {user.history && user.history.length > 0 ? (
                    <div className="space-y-4">
                      {user.history.map((item, i) => (
                        <div key={i} className="border border-yellow-500/30 p-5 rounded-xl bg-black/20">
                          <p><strong>Date:</strong> {item.date}</p>
                          <p><strong>Total Paid:</strong> {item.total} EGP</p>

                          <p className="mt-2"><strong>Tickets:</strong></p>
                          {Object.keys(item.tickets).map((group) => (
                            <p key={group} className="ml-4 text-yellow-100">
                              {group}: {Object.values(item.tickets[group]).reduce((a, b) => a + b)}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-yellow-400">No previous bookings found.</p>
                  )}
                </div>
              )}

              {/* PROFILE */}
              {activeTab === "Profile" && (
                <div className="space-y-4 text-yellow-200">
                  <h2 className="text-3xl font-bold text-yellow-300 mb-6">Profile Information</h2>

                  {!editData ? (
                    <>
                      <p><strong>Name:</strong> {user.name}</p>
                      <p><strong>Email:</strong> {user.email}</p>
                      <p><strong>Phone:</strong> {user.phone}</p>
                      <p><strong>Country:</strong> {user.country}</p>

                      <button
                        onClick={() => setEditData(user)}
                        className="mt-5 bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-600 transition"
                      >
                        Edit Profile
                      </button>
                    </>
                  ) : (
                    <>
                      <input
                        type="text"
                        className="w-full bg-black/30 border p-3 rounded-xl"
                        value={editData.name}
                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                      />

                      <input
                        type="email"
                        className="w-full bg-black/30 border p-3 rounded-xl"
                        value={editData.email}
                        onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                      />

                      <input
                        type="text"
                        className="w-full bg-black/30 border p-3 rounded-xl"
                        value={editData.phone}
                        onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                      />

                      <input
                        type="text"
                        className="w-full bg-black/30 border p-3 rounded-xl"
                        value={editData.country}
                        onChange={(e) => setEditData({ ...editData, country: e.target.value })}
                      />

                      <div className="flex gap-4 mt-5">
                        <button
                          onClick={saveProfile}
                          className="bg-green-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-green-600"
                        >
                          Save
                        </button>

                        <button
                          onClick={() => setEditData(null)}
                          className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-600"
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* SETTINGS */}
              {activeTab === "Settings" && (
                <div className="text-yellow-200">
                  <h2 className="text-3xl font-bold text-yellow-300 mb-6">Settings</h2>
                  <p>More settings will be added later.</p>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
