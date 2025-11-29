import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/auth");
  };

  if (!user) return null;

  const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <div className="min-h-screen bg-slate-900 text-yellow-300 flex flex-col md:flex-row">
      {/* SIDEBAR */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-64 bg-slate-800 border-r border-yellow-700 p-5"
      >
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <ul className="flex flex-col gap-4 text-lg">
          <li className="hover:text-yellow-400 cursor-pointer">Overview</li>
          <li className="hover:text-yellow-400 cursor-pointer">Profile</li>
          <li className="hover:text-yellow-400 cursor-pointer">Settings</li>
          <li onClick={handleLogout} className="hover:text-red-400 cursor-pointer mt-6">Logout</li>
        </ul>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="bg-slate-800 border border-yellow-700 p-6 rounded-xl shadow-xl max-w-3xl mx-auto">
          {/* User Info */}
          <motion.div className="flex flex-col items-center gap-4 mb-8" variants={itemVariants}>
            <img src={user.avatar} alt="avatar" className="w-28 h-28 rounded-full border-4 border-yellow-500 shadow-xl" />
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-yellow-400">{user.email}</p>
            <p className="text-yellow-400">{user.phone}</p>
            <p className="text-yellow-400">{user.country}</p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div variants={containerVariants}>
            <h2 className="text-2xl font-semibold mb-3">Quick Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[{ title: "Tasks", value: 15 }, { title: "Messages", value: 8 }, { title: "Projects", value: 3 }].map((item, index) => (
                <motion.div key={index} className="bg-slate-700 border border-yellow-700 p-5 rounded-xl text-center" variants={itemVariants}>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-3xl font-bold mt-2">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
