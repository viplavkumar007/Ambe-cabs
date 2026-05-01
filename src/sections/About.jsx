import { motion } from 'framer-motion'
import { CheckCircle2, Shield, Star, Clock } from 'lucide-react'
import { useScrollReveal, revealVariants } from '../components/ScrollReveal'
import { about, brand } from '../data/siteContent'
const trustIcons = [Shield, Star, Clock, CheckCircle2]

export default function About() {
  const { ref, isInView } = useScrollReveal(0.2)
  const { ref: imgRef, isInView: imgInView } = useScrollReveal(0.2)

  return (
    <section id="about" className="overflow-hidden bg-white py-24" aria-labelledby="about-heading">
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -50 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=800&q=80"
                alt="Udaipur City Palace"
                loading="lazy"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-800/40 to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 rounded-sm border border-navy-100 bg-white p-5 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm bg-gold-500">
                  <Star size={20} className="fill-white text-white" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-navy-700">4.9 star</div>
                  <div className="text-xs uppercase tracking-wider text-navy-400">Avg. Rating</div>
                </div>
              </div>
            </motion.div>

            <div className="absolute -left-4 -top-4 -z-10 h-24 w-24 rounded-sm border-2 border-gold-500/30" />
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            variants={revealVariants}
          >
            <span className="section-label">Our Story</span>
            <div className="divider-gold mb-4" />
            <h2 id="about-heading" className="section-title mb-6">{about.headline}</h2>
            <p className="mb-8 text-lg leading-relaxed text-navy-500">{about.body}</p>

            <ul className="mb-10 space-y-4" role="list">
              {about.points.map((point, i) => {
                const Icon = trustIcons[i] || CheckCircle2
                return (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-sm bg-gold-500/10">
                      <Icon size={15} className="text-gold-500" />
                    </div>
                    <p className="leading-relaxed text-navy-600">{point}</p>
                  </li>
                )
              })}
            </ul>

            <a
              href={`https://wa.me/${brand.whatsapp}?text=Hello! I'd like to book a cab with Ambe Cabs.`}
              target="_blank"
              rel="noopener noreferrer"
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
