import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import { brand, footer } from '../data/siteContent'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
      const sections = ['services', 'about', 'testimonials', 'faq', 'contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-navy-100/50'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
               className="flex items-center gap-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-sm overflow-hidden border border-gold-500/30 flex-shrink-0">
                {/* Logo placeholder — replace with actual logo img */}
                <div className="w-full h-full bg-navy-700 flex items-center justify-center">
                  <span className="text-gold-500 font-display font-bold text-lg">AC</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-lg text-navy-700 leading-none group-hover:text-gold-500 transition-colors">
                  Ambe Cabs
                </div>
                <div className="text-[10px] font-mono tracking-widest text-navy-400 uppercase mt-0.5">
                  Udaipur · Rajasthan
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className={`relative px-4 py-2 text-sm font-medium font-body transition-colors duration-200 group ${
                      isActive ? 'text-gold-500' : 'text-navy-600 hover:text-gold-500'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-4 right-4 h-px bg-gold-500 origin-left transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </a>
                )
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href={`tel:${brand.phone}`}
                 className="flex items-center gap-2 text-sm font-medium text-navy-600 hover:text-gold-500 transition-colors">
                <Phone size={15} />
                <span className="font-mono">{brand.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${brand.whatsapp}?text=Hello! I'd like to book a cab with Ambe Cabs.`}
                target="_blank" rel="noopener noreferrer"
                className="btn-primary text-sm py-2.5 px-5"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-navy-700 hover:text-gold-500 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-sm"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-navy-100 shadow-lg"
          >
            <div className="section-container py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="py-3 px-4 text-navy-700 font-medium hover:text-gold-500 hover:bg-cream rounded-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-navy-100 flex flex-col gap-3">
                <a href={`tel:${brand.phone}`} className="btn-secondary text-center justify-center">
                  <Phone size={16} /> {brand.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${brand.whatsapp}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-whatsapp text-center justify-center"
                >
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
