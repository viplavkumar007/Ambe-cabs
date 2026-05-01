import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import { useScrollReveal, revealVariants } from '../components/ScrollReveal'
import ContactForm from '../components/ContactForm'
import { brand, contactInfo } from '../data/siteContent'
import lakePicholaImage from '../assets/lake-pichola.jpg'

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
    <section id="contact" className="bg-[#f4f7fa] py-24" aria-labelledby="contact-heading">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={revealVariants}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="section-label">Get In Touch</span>
          <div className="divider-gold mx-auto mb-4" />
          <h2 id="contact-heading" className="section-title">
            Book Your <span className="text-gold-500">Ride</span> Today
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            Fill the form below, call us, or WhatsApp directly. We&apos;re always ready to take you where you need to go.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {contactCards.map((card) => {
            const Icon = card.icon
            const inner = (
              <div className={`flex flex-col items-center rounded-sm border p-5 text-center transition-all duration-200 ${card.color} ${card.href ? 'cursor-pointer hover:-translate-y-1 hover:shadow-md' : ''}`}>
                <Icon size={22} className="mb-2" />
                <div className="mb-1 text-xs uppercase tracking-wider text-navy-400">{card.label}</div>
                <div className="break-all text-sm font-semibold leading-snug text-navy-700">{card.value}</div>
                <div className="mt-1 text-xs text-navy-400">{card.sub}</div>
              </div>
            )

            return card.href ? (
              <a
                key={card.label}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
              >
                {inner}
              </a>
            ) : (
              <div key={card.label}>{inner}</div>
            )
          })}
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-sm border border-navy-100 bg-white p-8 shadow-sm"
          >
            <div className="mb-6">
              <h3 className="mb-1 font-display text-2xl font-bold text-navy-700">Send Us an Enquiry</h3>
              <p className="text-sm text-navy-400">We&apos;ll confirm your booking within 30 minutes.</p>
            </div>
            <ContactForm onToast={onToast} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-sm border border-navy-100 shadow-sm">
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

            <div className="rounded-sm border border-navy-100 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-navy-700">
                  <MapPin size={18} className="text-gold-400" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-navy-700">Ambe Cabs - Udaipur</h4>
                  <p className="text-sm leading-relaxed text-navy-400">{brand.address}</p>
                  <a
                    href={contactInfo.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-xs text-gold-500 underline underline-offset-4 hover:text-gold-600"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-sm border border-navy-100 shadow-sm">
              <img
                src={lakePicholaImage}
                alt="Lake Pichola view in Udaipur"
                loading="lazy"
                className="h-40 w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
