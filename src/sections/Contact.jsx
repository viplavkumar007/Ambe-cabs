import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import { useScrollReveal, revealVariants } from '../components/ScrollReveal'
import ContactForm from '../components/ContactForm'
import { brand, contactInfo } from '../data/siteContent'

export default function Contact({ onToast }) {
  const { ref, isInView } = useScrollReveal(0.15)

  const contactCards = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: brand.phoneDisplay,
      sub: 'Instant booking & support',
      href: `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`,
      external: true,
      color: 'bg-green-50 text-green-600 border-green-200',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: brand.phoneDisplay,
      sub: 'Direct line, 24/7',
      href: `tel:${brand.phone}`,
      external: false,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      icon: Mail,
      label: 'Email',
      value: brand.email,
      sub: 'Response within 2 hours',
      href: `mailto:${brand.email}`,
      external: false,
      color: 'bg-gold-500/5 text-gold-600 border-gold-200',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: '24 / 7 / 365',
      sub: 'Always available',
      href: null,
      color: 'bg-navy-50 text-navy-600 border-navy-200',
    },
  ]

  return (
    <section id="contact" className="py-24 bg-[#f4f7fa]" aria-labelledby="contact-heading">
      <div className="section-container">

        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={revealVariants}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-label">Get In Touch</span>
          <div className="divider-gold mx-auto mb-4" />
          <h2 id="contact-heading" className="section-title">
            Book Your <span className="text-gold-500">Ride</span> Today
          </h2>
          <p className="text-navy-500 text-lg mt-4">
            Fill the form below, call us, or WhatsApp directly. We're always ready to take you where you need to go.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {contactCards.map((card) => {
            const Icon = card.icon
            const inner = (
              <div className={`border rounded-sm p-5 flex flex-col items-center text-center transition-all duration-200 ${card.color} ${card.href ? 'hover:-translate-y-1 hover:shadow-md cursor-pointer' : ''}`}>
                <Icon size={22} className="mb-2" />
                <div className="text-xs font-mono uppercase tracking-wider text-navy-400 mb-1">{card.label}</div>
                <div className="font-semibold text-navy-700 text-sm break-all leading-snug">{card.value}</div>
                <div className="text-xs text-navy-400 mt-1">{card.sub}</div>
              </div>
            )
            return card.href ? (
              <a key={card.label} href={card.href} target={card.external ? '_blank' : undefined} rel={card.external ? 'noopener noreferrer' : undefined}>
                {inner}
              </a>
            ) : <div key={card.label}>{inner}</div>
          })}
        </motion.div>

        {/* Main grid: Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white border border-navy-100 rounded-sm p-8 shadow-sm"
          >
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-navy-700 mb-1">Send Us an Enquiry</h3>
              <p className="text-navy-400 text-sm">We'll confirm your booking within 30 minutes.</p>
            </div>
            <ContactForm onToast={onToast} />
          </motion.div>

          {/* Right: Map + info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            {/* Udaipur map embed */}
            <div className="rounded-sm overflow-hidden shadow-sm border border-navy-100 aspect-[4/3]">
              <iframe
                title="Ambe Cabs Location - Udaipur, Rajasthan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58303.81999793185!2d73.6516!3d24.5854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56cc17c1a45%3A0x9b24d5a979a07d90!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1620000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address card */}
            <div className="bg-white border border-navy-100 rounded-sm p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy-700 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} className="text-gold-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-700 mb-1">Ambe Cabs — Udaipur</h4>
                  <p className="text-navy-400 text-sm leading-relaxed">{brand.address}</p>
                  <a href={contactInfo.mapUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-block mt-3 text-xs font-mono text-gold-500 hover:text-gold-600 underline underline-offset-4">
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Udaipur highlight image */}
            <div className="rounded-sm overflow-hidden shadow-sm border border-navy-100">
              <img
                src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=600&q=80"
                alt="Udaipur Rajasthan"
                loading="lazy"
                className="w-full h-40 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
