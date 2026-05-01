import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './sections/Services'
import TourPackages from './sections/TourPackages'
import CarsEnquiry from './sections/CarsEnquiry'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import CTAStrip from './components/CTA'
import Footer from './components/Footer'
import Toast from './components/Toast'

export default function App() {
  const [toast, setToast] = useState(null)

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 4000)
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] font-body">
      <Navbar />
      <main>
        <Hero />
        <TourPackages />
        <Services />
        <CarsEnquiry />
        <About />
        <Testimonials />
        <CTAStrip />
        <FAQ />
        <Contact onToast={showToast} />
      </main>
      <Footer />
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  )
}
