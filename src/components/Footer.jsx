import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { brand, footer, contactInfo } from '../data/siteContent'

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
      {/* Top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-navy-700 border border-gold-500/40 rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="font-display font-bold text-gold-500 text-lg">AC</span>
              </div>
              <div>
                <div className="font-display font-bold text-xl text-white">{brand.name}</div>
                <div className="font-display italic text-gold-400 text-sm">{brand.tagline}</div>
              </div>
            </div>
            <p className="text-navy-300 leading-relaxed mb-6 max-w-sm text-sm">
              Udaipur's most trusted cab service. Serving locals, tourists, and corporates with premium, reliable transportation across Rajasthan.
            </p>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}?text=Hello! I'd like to book a cab with Ambe Cabs.`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-semibold rounded-sm text-sm hover:bg-[#1fb855] transition-colors"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold font-mono text-xs uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-navy-300 hover:text-gold-400 transition-colors text-sm font-body flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold-500/0 group-hover:bg-gold-500/100 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold font-mono text-xs uppercase tracking-widest mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${brand.phone}`} className="flex items-start gap-3 text-navy-300 hover:text-gold-400 transition-colors group">
                  <Phone size={15} className="mt-0.5 flex-shrink-0 group-hover:text-gold-400" />
                  <span className="text-sm font-mono">{brand.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="flex items-start gap-3 text-navy-300 hover:text-gold-400 transition-colors group">
                  <Mail size={15} className="mt-0.5 flex-shrink-0 group-hover:text-gold-400" />
                  <span className="text-sm break-all">{brand.email}</span>
                </a>
              </li>
              <li>
                <a href={contactInfo.mapUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 text-navy-300 hover:text-gold-400 transition-colors group">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0 group-hover:text-gold-400" />
                  <span className="text-sm">{brand.address}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-navy-700">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-navy-400 text-xs font-mono">{footer.copyright}</p>
          <p className="text-navy-500 text-xs">Built with care for Udaipur 🏰</p>
        </div>
      </div>
    </footer>
  )
}
