import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ switchMode }) {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const updateEmailOrPhone = (val) => {
    setEmailOrPhone(val);
    setErrors(prev => ({
      ...prev,
      emailOrPhone: val.trim() ? undefined : "Please enter your email or phone"
    }));
  };

  const updatePassword = (val) => {
    setPassword(val);
    setErrors(prev => ({
      ...prev,
      password: val ? undefined : "Password cannot be empty"
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Final validation
    if (!emailOrPhone.trim() || !password.trim()) {
      setErrors({
        emailOrPhone: emailOrPhone.trim() ? undefined : "Please enter your email or phone",
        password: password ? undefined : "Password cannot be empty"
      });
      return;
    }

    const isEmail = emailOrPhone.includes("@");

    const userData = {
      name: "Visitor",
      email: isEmail ? emailOrPhone : "",
      phone: !isEmail ? "+20" + emailOrPhone.replace(/^(\+?20)/, "") : "",
      country: "Egypt",
      avatar: "https://i.imgur.com/4ZQZ4WQ.png",
    };

    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/dashboard");
  };

  return (
    <motion.form onSubmit={handleLogin} className="flex flex-col gap-4 w-full max-w-md mx-auto px-4 sm:px-0">
      {/* Email or Phone */}
      <div className="flex flex-col">
        <input
          type="email"
          placeholder="Email "
          value={emailOrPhone}
          onChange={e => updateEmailOrPhone(e.target.value)}
          className="bg-white/10 backdrop-blur-md border border-yellow-600 text-yellow-300 placeholder-yellow-400 px-4 py-3 rounded-xl outline-none w-full focus:ring-2 focus:ring-yellow-400 transition-all"
        />
        {errors.emailOrPhone && <p className="text-red-400 text-sm mt-1">{errors.emailOrPhone}</p>}
      </div>

      {/* Password */}
      <div className="flex flex-col">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => updatePassword(e.target.value)}
          className="bg-white/10 backdrop-blur-md border border-yellow-600 text-yellow-300 placeholder-yellow-400 px-4 py-3 rounded-xl outline-none w-full focus:ring-2 focus:ring-yellow-400 transition-all"
        />
        {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
      </div>

      {/* Login Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 bg-yellow-600 hover:bg-yellow-500 text-slate-900 font-bold py-3 rounded-xl text-lg relative overflow-hidden group"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 opacity-20 animate-[shine_2s_linear_infinite]"></span>
        <span className="relative z-10">Login</span>
      </motion.button>

      {/* Switch to Signup */}
      <p className="text-center text-gray-300 mt-3">
        New here?{" "}
        <span
          onClick={() => switchMode("signup")}
          className="text-yellow-400 cursor-pointer hover:underline select-none"
        >
          Create an account
        </span>
      </p>
    </motion.form>
  );
}
