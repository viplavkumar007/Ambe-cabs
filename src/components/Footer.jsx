import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { brand, footer, contactInfo } from '../data/siteContent'
import logoImage from '../assets/ambe-cabs-logo.png'

export default function Footer() {
  const navLinks = footer.links

  const handleNav = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-800 text-navy-200">
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="section-container py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="w-28 flex-shrink-0 sm:w-32">
                <img
                  src={logoImage}
                  alt="Ambe Cabs"
                  className="h-auto w-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.22)]"
                />
              </div>
              <div>
                <div className="font-display text-xl font-semibold tracking-[-0.02em] text-white">
                  {brand.name}
                </div>
                <div className="font-body text-sm text-gold-400">{brand.tagline}</div>
              </div>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-navy-300">
              Udaipur&apos;s most trusted cab service. Serving locals, tourists, and corporates with premium, reliable transportation across Rajasthan.
            </p>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}?text=Hello! I'd like to book a cab with Ambe Cabs.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1fb855]"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>

          <div>
            <h3 className="mb-5 font-mono text-xs font-semibold uppercase tracking-widest text-white">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="group flex items-center gap-2 text-sm text-navy-300 transition-colors hover:text-gold-400"
                  >
                    <span className="h-px w-4 bg-gold-500/0 transition-all duration-200 group-hover:bg-gold-500/100" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-mono text-xs font-semibold uppercase tracking-widest text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${brand.phone}`}
                  className="group flex items-start gap-3 text-navy-300 transition-colors hover:text-gold-400"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0 group-hover:text-gold-400" />
                  <span className="font-mono text-sm">{brand.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="group flex items-start gap-3 text-navy-300 transition-colors hover:text-gold-400"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0 group-hover:text-gold-400" />
                  <span className="break-all text-sm">{brand.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-navy-300 transition-colors hover:text-gold-400"
                >
                  <MapPin size={15} className="mt-0.5 flex-shrink-0 group-hover:text-gold-400" />
                  <span className="text-sm">{brand.address}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-700">
        <div className="section-container flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-xs text-navy-400">{footer.copyright}</p>
          <p className="text-xs text-navy-500">Built with care for Udaipur</p>
        </div>
      </div>
    </footer>
  )
}
