import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import ScrollToTop from "./layouts/ScrollToTop";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from './Pages/Contact'
import Souvenirs from './Pages/Souvenirs'
import 'aos/dist/aos.css'
import { CartProvider } from "./context/CartContext";
import AuthPage from "./components/LoginSign/AuthPage";
import Dashboard from "./components/LoginSign/Dashboard";
import ProtectedRoute from "./components/LoginSign/ProtectedRoute";

import Tickets from "./components/Tickets/Tickets";
import ConfirmBooking from "./components/Tickets/ConfirmBooking";
import Payment from "./components/Tickets/Payment";
import FinalBooking from "./components/Tickets/FinalBooking";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <CartProvider>

      <BrowserRouter>
        <ScrollToTop />
        <Header />

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/souvenirs" element={<Souvenirs />} />
        <Route path="/cart" element={<Cart />} />
     
        <Route 
    path="/tickets" 
    element={
      <ProtectedRoute>
        <Tickets />
      </ProtectedRoute>
    } 
  />
        <Route path="/confirm-booking" element={<ConfirmBooking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/final-booking" element={<FinalBooking />} />

        {/* Authentication */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Dashboard (Protected) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

       
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>

    </CartProvider>
  );
}