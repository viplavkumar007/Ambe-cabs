import { motion } from 'framer-motion'
import { CheckCircle2, Shield, Star, Clock } from 'lucide-react'
import { useScrollReveal, revealVariants } from '../components/ScrollReveal'
import { about, brand } from '../data/siteContent'

const trustIcons = [Shield, Star, Clock, CheckCircle2]

export default function About() {
  const { ref, isInView } = useScrollReveal(0.2)
  const { ref: imgRef, isInView: imgInView } = useScrollReveal(0.2)

  return (
    <section id="about" className="py-24 bg-white overflow-hidden" aria-labelledby="about-heading">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -50 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=800&q=80"
                alt="Udaipur City Palace"
                loading="lazy"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-800/40 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 bg-white rounded-sm shadow-xl p-5 border border-navy-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold-500 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Star size={20} className="fill-white text-white" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-navy-700">4.9★</div>
                  <div className="text-xs font-mono text-navy-400 uppercase tracking-wider">Avg. Rating</div>
                </div>
              </div>
            </motion.div>

            {/* Accent decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold-500/30 rounded-sm -z-10" />
          </motion.div>

          {/* Content side */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={revealVariants}
          >
            <span className="section-label">Our Story</span>
            <div className="divider-gold mb-4" />
            <h2 id="about-heading" className="section-title mb-6">{about.headline}</h2>
            <p className="text-navy-500 text-lg leading-relaxed mb-8">{about.body}</p>

            {/* Trust points */}
            <ul className="space-y-4 mb-10" role="list">
              {about.points.map((point, i) => {
                const Icon = trustIcons[i] || CheckCircle2
                return (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gold-500/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={15} className="text-gold-500" />
                    </div>
                    <p className="text-navy-600 leading-relaxed">{point}</p>
                  </li>
                )
              })}
            </ul>

            {/* CTA */}
            <a
              href={`https://wa.me/${brand.whatsapp}?text=Hello! I'd like to book a cab with Ambe Cabs.`}
              target="_blank" rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Your Ride Today
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
