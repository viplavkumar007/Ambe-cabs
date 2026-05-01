import { motion } from 'framer-motion'
import { Phone, MessageCircle, Star, ChevronDown } from 'lucide-react'
import { brand, hero } from '../data/siteContent'
import udaipurCoverImage from '../assets/udaipur-cover.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
}

export default function Hero() {
  const [headlinePrefix, headlineSuffix = ''] = hero.headline.split('Trusted')

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" aria-label="Hero">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={udaipurCoverImage}
          alt="Udaipur cityscape with City Palace"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Layered overlays for industrial-premium feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-800/90 via-navy-700/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-navy-800/20" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Gold accent line left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold-500 to-transparent z-10 opacity-60" />

      <div className="relative z-10 flex-1 flex flex-col justify-center section-container pt-28 pb-20">
        <div className="max-w-2xl">

          {/* Badge */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-gold-500/40 bg-gold-500/10 backdrop-blur-sm rounded-sm"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-gold-400 text-gold-400" />)}
            </div>
            <span className="text-xs font-mono text-gold-300 tracking-widest uppercase">{hero.badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-4"
          >
            {headlinePrefix}
            <span className="gold-shimmer">Trusted</span>
            {headlineSuffix}
          </motion.h1>

          {/* Tagline */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-gold-500" />
            <span className="font-display italic text-gold-300 text-lg">{brand.tagline}</span>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="text-navy-100 text-lg leading-relaxed mb-8 max-w-xl"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href={`https://wa.me/${brand.whatsapp}?text=Hello! I'd like to book a cab with Ambe Cabs.`}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp text-base px-7 py-3.5"
            >
              <MessageCircle size={18} />
              {hero.cta.primary}
            </a>
            <a
              href={`tel:${brand.phone}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/40 text-white font-semibold rounded-sm hover:border-gold-400 hover:text-gold-400 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
            >
              <Phone size={18} />
              {hero.cta.secondary}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={5}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {hero.stats.map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="font-display text-2xl sm:text-3xl font-bold text-gold-400">{stat.value}</div>
                <div className="text-xs text-navy-200 mt-1 font-mono tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <button
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-gold-400 transition-colors group"
          aria-label="Scroll to services"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}
