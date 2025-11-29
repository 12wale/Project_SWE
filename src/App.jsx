import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from './Pages/Contact'
import { useEffect } from 'react'
import ScrollToTop from './layouts/ScrollToTop'
import AOS from 'aos'
import 'aos/dist/aos.css'

import AuthPage from "./components/LoginSign/AuthPage";
import Dashboard from "./components/LoginSign/Dashboard";
import ProtectedRoute from "./components/LoginSign/ProtectedRoute";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

/**
 * import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import { useEffect } from 'react'
import ScrollToTop from './layouts/ScrollToTop'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <>
     <BrowserRouter>
     <Header />
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
 */