import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup({ switchMode, onSuccess }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    country: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});

  const countryCodes = {
    Egypt: "+20",
    USA: "+1",
    UK: "+44",
    France: "+33",
    Germany: "+49",
    Canada: "+1",
    Australia: "+61",
    India: "+91",
  };

  const update = (key, val) => {
    setForm((prev) => ({ ...prev, [key]: val }));
    switch (key) {
      case "name":
        setErrors((prev) => ({ ...prev, name: val.trim() ? undefined : "Name is required" }));
        break;
      case "country":
        setErrors((prev) => ({ ...prev, country: val ? undefined : "Select your country" }));
        break;
      case "email":
        setErrors((prev) => ({
          ...prev,
          email: /\S+@\S+\.\S+/.test(val) ? undefined : "Invalid email",
        }));
        break;
      case "phone":
        setErrors((prev) => ({ ...prev, phone: val.trim() ? undefined : "Phone required" }));
        break;
      case "password":
        setErrors((prev) => ({
          ...prev,
          password: val ? undefined : "Password required",
          confirm: form.confirm && form.confirm !== val ? "Passwords do not match" : undefined,
        }));
        break;
      case "confirm":
        setErrors((prev) => ({
          ...prev,
          confirm: val === form.password ? undefined : "Passwords do not match",
        }));
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors =
      Object.values(errors).some(Boolean) ||
      !form.name ||
      !form.country ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.confirm;
    if (hasErrors) return;

    const code = countryCodes[form.country] || "+";
    const phone = code + form.phone.replace(/\D/g, "");
    const userData = {
      name: form.name,
      email: form.email,
      country: form.country,
      phone,
      avatar: "https://i.imgur.com/4ZQZ4WQ.png",
    };

    localStorage.setItem("user", JSON.stringify(userData));

    // إذا تم تمرير callback من AuthPage
    if (onSuccess) {
      onSuccess(); // يعمل refresh للصفحة
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md mx-auto px-4 sm:px-0"
    >
      {/* Full Name */}
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className="bg-white/10 backdrop-blur-md border border-yellow-600 text-yellow-300 placeholder-yellow-400 px-4 py-3 rounded-xl outline-none w-full focus:ring-2 focus:ring-yellow-400 transition-all"
        />
        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Country */}
      <div className="flex flex-col">
        <select
          value={form.country}
          onChange={(e) => update("country", e.target.value)}
          className="bg-white/10 backdrop-blur-md border border-yellow-600 text-yellow-300 px-4 py-3 rounded-xl outline-none w-full focus:ring-2 focus:ring-yellow-400 transition-all"
        >
          <option value="">Select Country</option>
          {Object.keys(countryCodes).map((c) => (
            <option key={c} value={c}>
              {c} ({countryCodes[c]})
            </option>
          ))}
        </select>
        {errors.country && <p className="text-red-400 text-sm mt-1">{errors.country}</p>}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="bg-white/10 backdrop-blur-md border border-yellow-600 text-yellow-300 placeholder-yellow-400 px-4 py-3 rounded-xl outline-none w-full focus:ring-2 focus:ring-yellow-400 transition-all"
        />
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div className="flex flex-col">
        <input
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          className="bg-white/10 backdrop-blur-md border border-yellow-600 text-yellow-300 placeholder-yellow-400 px-4 py-3 rounded-xl outline-none w-full focus:ring-2 focus:ring-yellow-400 transition-all"
        />
        <span className="text-yellow-400 text-sm mt-1">Code: {countryCodes[form.country] || "+"}</span>
        {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* Password */}
      <div className="flex flex-col">
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => update("password", e.target.value)}
          className="bg-white/10 backdrop-blur-md border border-yellow-600 text-yellow-300 placeholder-yellow-400 px-4 py-3 rounded-xl outline-none w-full focus:ring-2 focus:ring-yellow-400 transition-all"
        />
        {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
      </div>

      {/* Confirm Password */}
      <div className="flex flex-col">
        <input
          type="password"
          placeholder="Confirm Password"
          value={form.confirm}
          onChange={(e) => update("confirm", e.target.value)}
          className="bg-white/10 backdrop-blur-md border border-yellow-600 text-yellow-300 placeholder-yellow-400 px-4 py-3 rounded-xl outline-none w-full focus:ring-2 focus:ring-yellow-400 transition-all"
        />
        {errors.confirm && <p className="text-red-400 text-sm mt-1">{errors.confirm}</p>}
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 bg-yellow-600 hover:bg-yellow-500 text-slate-900 font-bold py-3 rounded-xl text-lg relative overflow-hidden group"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 opacity-20 animate-[shine_2s_linear_infinite]"></span>
        <span className="relative z-10">Sign Up</span>
      </motion.button>

      <p className="text-center text-gray-300 mt-3">
        Already have an account?{" "}
        <span
          onClick={() => switchMode("login")}
          className="text-yellow-400 cursor-pointer hover:underline select-none"
        >
          Login
        </span>
      </p>
    </motion.form>
  );
}
