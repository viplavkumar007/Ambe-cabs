import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useScrollReveal, staggerContainer, cardReveal, revealVariants } from '../components/ScrollReveal'
import { testimonials } from '../data/siteContent'

export default function Testimonials() {
  const { ref: headerRef, isInView: headerInView } = useScrollReveal(0.2)
  const { ref, isInView } = useScrollReveal(0.1)

  return (
    <section id="testimonials" className="py-24 bg-[#f4f7fa]" aria-labelledby="testimonials-heading">
      <div className="section-container">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "show" : "hidden"}
          variants={revealVariants}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-label">What Passengers Say</span>
          <div className="divider-gold mx-auto mb-4" />
          <h2 id="testimonials-heading" className="section-title">
            Trusted by <span className="text-gold-500">5000+</span> Passengers
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={cardReveal}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white border border-navy-100 rounded-sm p-6 shadow-sm hover:shadow-xl hover:shadow-navy-700/10 transition-shadow duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={20} className="text-gold-500/30 mb-3" />

              {/* Text */}
              <p className="text-navy-500 text-sm leading-relaxed flex-1 mb-5 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-navy-100">
                <div className="w-9 h-9 bg-navy-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-400 text-xs font-mono font-bold">{t.avatar}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy-700">{t.name}</div>
                  <div className="text-xs text-navy-400 font-mono">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { val: '4.9★', label: 'Google Rating' },
            { val: '5000+', label: 'Happy Riders' },
            { val: '98%', label: 'On-Time Rate' },
            { val: '0', label: 'Complaints' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="font-display text-3xl font-bold text-gold-500">{stat.val}</div>
              <div className="text-xs font-mono text-navy-400 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
