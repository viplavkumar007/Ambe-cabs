import { motion } from 'framer-motion'
import { useScrollReveal, staggerContainer, revealVariants } from '../components/ScrollReveal'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/siteContent'

export default function Services() {
  const { ref, isInView } = useScrollReveal(0.15)

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(201,169,110,0.12),_transparent_32%),linear-gradient(180deg,#f8fafc_0%,#eef3f8_100%)] py-24"
      aria-labelledby="services-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(90deg,rgba(184,148,74,0.08),transparent,rgba(44,57,71,0.05))]" />
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={revealVariants}
          className="mb-16 max-w-2xl"
        >
          <span className="section-label">What We Offer</span>
          <div className="divider-gold mb-4" />
          <h2 id="services-heading" className="section-title mb-4">
            Every Ride, <span className="text-gold-500">Crafted</span> for You
          </h2>
          <p className="text-lg leading-relaxed text-navy-500">
            From early morning airport runs to royal sightseeing tours, Ambe Cabs has a service for every journey in and around Udaipur.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
