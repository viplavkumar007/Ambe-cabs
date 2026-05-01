import { motion } from 'framer-motion'
import { useScrollReveal, staggerContainer, revealVariants } from '../components/ScrollReveal'
import FAQAccordion from '../components/FAQAccordion'
import { faqs } from '../data/siteContent'

export default function FAQ() {
  const { ref: headerRef, isInView: headerInView } = useScrollReveal(0.2)
  const { ref, isInView } = useScrollReveal(0.1)

  return (
    <section id="faq" className="py-24 bg-white" aria-labelledby="faq-heading">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Header + image */}
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? "show" : "hidden"}
            variants={revealVariants}
            className="lg:sticky lg:top-24"
          >
            <span className="section-label">Got Questions?</span>
            <div className="divider-gold mb-4" />
            <h2 id="faq-heading" className="section-title mb-4">
              Frequently Asked <span className="text-gold-500">Questions</span>
            </h2>
            <p className="text-navy-500 text-lg leading-relaxed mb-8">
              Everything you need to know about booking with Ambe Cabs. Still have a question? Just WhatsApp us!
            </p>

            {/* Udaipur image */}
            <div className="rounded-sm overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80"
                alt="Udaipur Lake View"
                loading="lazy"
                className="w-full h-52 object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Accordions */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={staggerContainer}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={revealVariants}>
                <FAQAccordion faq={faq} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
