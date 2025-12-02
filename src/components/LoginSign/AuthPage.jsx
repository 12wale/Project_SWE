import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./Login";
import Signup from "./Signup";

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Tilt effect
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e) => {
      const evt = e.touches ? e.touches[0] : e;
      const rect = el.getBoundingClientRect();
      const x = evt.clientX - rect.left - rect.width / 2;
      const y = evt.clientY - rect.top - rect.height / 2;
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

  // Parallax background motion
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallaxStyle = {
    transform: `translate3d(${mousePos.x / 50}px, ${mousePos.y / 50}px, 0)`
  };

  const handleSuccess = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-700">

      {/* Night Egyptian Museum Background with Motion Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/6/65/Egyptian_Museum%2C_Cairo_by_Night.jpg')",
        }}
        animate={parallaxStyle}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"></div>

      {/* Gold particles */}
      <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none"></div>

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
          className="text-3xl font-extrabold cinzel-decorative mb-6 text-yellow-400 text-center drop-shadow-[0_0_12px_rgba(255,215,0,0.7)]"
        >
          {mode === "login" ? "Welcome Back" : "Create Your Account"}
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
          >
            {mode === "login" ? (
              <Login switchMode={() => setMode("signup")} onSuccess={handleSuccess} />
            ) : (
              <Signup switchMode={() => setMode("login")} onSuccess={handleSuccess} />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
