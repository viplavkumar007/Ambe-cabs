import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import { brand } from '../data/siteContent'
import logoImage from '../assets/ambe-cabs-logo.png'

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
            ? 'border-b border-navy-100/50 bg-white/95 shadow-sm backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="group flex items-center gap-3"
            >
              <div className="flex w-[9.75rem] items-center justify-center sm:w-[11rem] lg:w-[13rem]">
                <img
                  src={logoImage}
                  alt="Ambe Cabs"
                  className="h-auto w-full object-contain drop-shadow-[0_8px_24px_rgba(10,16,25,0.18)] transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="hidden sm:block">
                <div className={`font-display text-lg font-semibold leading-none tracking-[-0.02em] transition-colors group-hover:text-gold-500 ${
                  scrolled ? 'text-navy-700' : 'text-white'
                }`}>
                  {brand.name}
                </div>
                <div className={`mt-0.5 text-[10px] font-mono uppercase tracking-widest ${
                  scrolled ? 'text-navy-400' : 'text-white/75'
                }`}>
                  Udaipur | Rajasthan
                </div>
              </div>
            </a>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className={`group relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-gold-500'
                        : scrolled
                          ? 'text-navy-600 hover:text-gold-500'
                          : 'text-white hover:text-gold-300'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-px origin-left bg-gold-500 transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                )
              })}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={`tel:${brand.phone}`}
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold-500 ${
                  scrolled ? 'text-navy-600' : 'text-white'
                }`}
              >
                <Phone size={15} />
                <span className="font-mono">{brand.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${brand.whatsapp}?text=Hello! I'd like to book a cab with Ambe Cabs.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-5 py-2.5 text-sm"
              >
                Book Now
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`rounded-sm p-2 transition-colors hover:text-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500 lg:hidden ${
                scrolled ? 'text-navy-700' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-16 z-40 border-b border-navy-100 bg-white shadow-lg"
          >
            <div className="section-container flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="rounded-sm px-4 py-3 font-medium text-navy-700 transition-colors hover:bg-cream hover:text-gold-500"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-navy-100 pt-4">
                <a href={`tel:${brand.phone}`} className="btn-secondary justify-center text-center">
                  <Phone size={16} /> {brand.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${brand.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp justify-center text-center"
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
