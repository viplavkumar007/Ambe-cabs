import { motion } from 'framer-motion'
import { useScrollReveal, staggerContainer, revealVariants } from '../components/ScrollReveal'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/siteContent'

export default function Services() {
  const { ref, isInView } = useScrollReveal(0.15)

  return (
    <section id="services" className="py-24 bg-[#f4f7fa]" aria-labelledby="services-heading">
      <div className="section-container">

        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={revealVariants}
          className="max-w-2xl mb-16"
        >
          <span className="section-label">What We Offer</span>
          <div className="divider-gold mb-4" />
          <h2 id="services-heading" className="section-title mb-4">
            Every Ride, <span className="text-gold-500">Crafted</span> for You
          </h2>
          <p className="text-navy-500 text-lg leading-relaxed">
            From early morning airport runs to royal sightseeing tours — Ambe Cabs has a service for every journey in and around Udaipur.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
