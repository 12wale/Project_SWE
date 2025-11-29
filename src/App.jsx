import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
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
