import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { brand, ctaStrip } from '../data/siteContent'
import { useScrollReveal } from './ScrollReveal'

export default function CTAStrip() {
  const { ref, isInView } = useScrollReveal(0.3)

  return (
    <section className="relative overflow-hidden bg-navy-700 py-20">
      {/* Animated glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="relative z-10 section-container text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-label text-gold-400 mb-4">{ctaStrip.subtext}</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
            {ctaStrip.headline}
          </h2>
          <a
            href={`https://wa.me/${brand.whatsapp}?text=Hello! I'd like to book a cab with Ambe Cabs.`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-white font-semibold text-lg rounded-sm
              hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold-500/40
              active:translate-y-0 transition-all duration-200 animate-pulse-gold group"
          >
            <MessageCircle size={22} />
            {ctaStrip.cta}
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
