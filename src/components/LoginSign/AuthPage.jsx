import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./Login";
import Signup from "./Signup";

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Mouse + Touch Support
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (event) => {
      const e = event.touches ? event.touches[0] : event;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setTilt({ x, y });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("touchmove", handleMove);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("touchmove", handleMove);
    };
  }, []);

  const cardTilt = {
    transform: `rotateY(${tilt.x / 45}deg) rotateX(${-tilt.y / 45}deg)`,
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden">

      {/* golden noise texture */}
      <div className="absolute inset-0 bg-[url('https://i.imgur.com/YsJj3iH.png')] opacity-20 pointer-events-none"></div>

      <motion.div
        ref={containerRef}
        style={cardTilt}
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-yellow-500/40 shadow-[0_0_40px_rgba(255,215,0,0.4)] rounded-3xl p-8 sm:p-10 relative z-10"
      >
        <motion.h1
          key={mode}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-extrabold cinzel-decorative mb-6 text-yellow-400 text-center drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]"
        >
          {mode === "login" ? "Welcome Back" : "Create Your Account"}
        </motion.h1>

        {/* Smooth transition fix */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
          >
            {mode === "login" ? (
              <Login switchMode={() => setMode("signup")} />
            ) : (
              <Signup switchMode={() => setMode("login")} />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
