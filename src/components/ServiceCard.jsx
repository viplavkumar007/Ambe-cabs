import { motion } from 'framer-motion'
import { Plane, Camera, MapPin, Route, Users, Heart, ArrowRight } from 'lucide-react'
import { cardReveal } from './ScrollReveal'
import { brand } from '../data/siteContent'

const iconMap = { Plane, Camera, MapPin, Route, Users, Heart }

export default function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || MapPin

  return (
    <motion.article
      variants={cardReveal}
      whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
      className="group bg-white border border-navy-100 rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:shadow-navy-700/10 transition-shadow duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-navy-100">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-800/60 to-transparent" />
        {/* Icon badge */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-gold-500 rounded-sm flex items-center justify-center shadow-lg">
          <Icon size={18} className="text-white" />
        </div>
        {/* Number */}
        <div className="absolute bottom-4 left-4 font-mono text-xs text-gold-300 tracking-widest">
          0{index + 1}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl font-bold text-navy-700 mb-2 group-hover:text-gold-500 transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-navy-500 text-sm leading-relaxed mb-4 flex-1">
          {service.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {service.features.map((f) => (
            <span key={f} className="text-xs px-2 py-1 bg-cream text-navy-600 font-mono rounded-sm border border-navy-100">
              {f}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/${brand.whatsapp}?text=Hi! I'd like to enquire about ${service.title}.`}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:gap-4 transition-all duration-200 group/cta"
        >
          Enquire Now
          <ArrowRight size={15} className="transition-transform duration-200 group-hover/cta:translate-x-1" />
        </a>
      </div>
    </motion.article>
  )
}
