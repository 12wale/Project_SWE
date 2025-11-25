import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
function App() {

  return (
    <>
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
