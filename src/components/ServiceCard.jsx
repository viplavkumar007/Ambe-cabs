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
      className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/90 shadow-[0_20px_60px_rgba(30,42,53,0.08)] backdrop-blur-sm transition-all duration-300 hover:border-gold-300/70 hover:shadow-[0_28px_80px_rgba(30,42,53,0.16)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-400 via-[#f4d37c] to-gold-500" />

      <div className="relative h-52 overflow-hidden bg-navy-100">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-800/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400/15 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 rounded-full border border-gold-200/80 bg-white/95 px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-[0.22em] text-navy-800 shadow-[0_10px_24px_rgba(10,16,25,0.18)] backdrop-blur-sm">
          Signature
        </div>

        <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/14 shadow-lg backdrop-blur-md">
          <Icon size={18} className="text-gold-300" />
        </div>

        <div className="absolute bottom-4 left-4 font-mono text-xs tracking-[0.3em] text-gold-200">
          0{index + 1}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 inline-flex w-fit items-center rounded-full border border-gold-200 bg-gradient-to-r from-gold-500/10 to-white px-3 py-1 text-[11px] font-mono uppercase tracking-[0.22em] text-gold-600">
          Premium Service
        </div>
        <h3 className="mb-2 font-display text-[1.35rem] font-semibold tracking-[-0.03em] text-navy-700 transition-colors duration-200 group-hover:text-gold-600">
          {service.title}
        </h3>
        <p className="mb-5 flex-1 text-[0.95rem] leading-7 text-navy-500">
          {service.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2.5">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-navy-100 bg-gradient-to-r from-[#f8fbff] to-cream px-3 py-1.5 text-[11px] font-medium text-navy-600 shadow-sm"
            >
              {feature}
            </span>
          ))}
        </div>

        <a
          href={`https://wa.me/${brand.whatsapp}?text=Hi! I'd like to enquire about ${service.title}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group/cta inline-flex items-center justify-between rounded-2xl border border-navy-100 bg-navy-700 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-gold-400 hover:bg-gradient-to-r hover:from-navy-700 hover:to-[#233647]"
        >
          <span>Enquire Now</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gold-300">
            <ArrowRight size={15} className="transition-transform duration-200 group-hover/cta:translate-x-1" />
          </span>
        </a>
      </div>
    </motion.article>
  )
}
