import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Fleet from './pages/Fleet'
import CarDetail from './pages/CarDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQs from './pages/FAQs'
import Chauffeur from './pages/Chauffeur'
import Locations from './pages/Locations'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/fleet/:id" element={<CarDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/chauffeur" element={<Chauffeur />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
