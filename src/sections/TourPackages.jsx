import { motion } from 'framer-motion'
import { Clock3, MapPinned, CheckCircle2, MessageCircle } from 'lucide-react'
import { useScrollReveal, staggerContainer, revealVariants } from '../components/ScrollReveal'
import { brand, tourPackages } from '../data/siteContent'

export default function TourPackages() {
  const { ref, isInView } = useScrollReveal(0.15)

  return (
    <section
      id="tour-packages"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(201,169,110,0.14),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(60,92,135,0.12),_transparent_28%),linear-gradient(180deg,#fffdf8_0%,#f5f7fb_100%)] py-24"
      aria-labelledby="tour-packages-heading"
    >
      <div className="pointer-events-none absolute left-0 top-20 h-56 w-56 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-navy-700/8 blur-3xl" />

      <div className="section-container relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={revealVariants}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="section-label">Tour Packages</span>
          <div className="divider-gold mx-auto mb-4" />
          <h2 id="tour-packages-heading" className="section-title">
            Discover <span className="text-gold-500">Udaipur</span> and Nearby Gems
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-500">
            Choose from curated Udaipur sightseeing and nearby Rajasthan tour packages with flexible pickup, comfortable cabs, and experienced local drivers.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          {tourPackages.map((pkg, index) => (
            <motion.article
              key={pkg.id}
              variants={revealVariants}
              custom={index}
              className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-[0_20px_60px_rgba(31,44,60,0.12)] backdrop-blur-xl card-hover"
            >
              <div className="grid h-full grid-cols-1 md:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[260px] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09131f]/85 via-[#09131f]/20 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-white backdrop-blur-md">
                    <Clock3 size={13} />
                    {pkg.duration}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                      <div className="mb-2 text-xs font-mono uppercase tracking-widest text-gold-300">Popular Route</div>
                      <div className="text-sm leading-relaxed text-white/90">{pkg.route}</div>
                    </div>
                  </div>
                </div>

                <div className="flex h-full flex-col p-6">
                  <div className="mb-4">
                    <h3 className="font-display text-[1.7rem] font-bold tracking-[-0.03em] text-navy-700">{pkg.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-navy-500">{pkg.description}</p>
                  </div>

                  <div className="mb-5 rounded-2xl border border-navy-100 bg-[#f8fbff] px-4 py-3">
                    <div className="mb-2 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold-600">
                      <MapPinned size={14} />
                      Coverage
                    </div>
                    <div className="text-sm leading-relaxed text-navy-600">{pkg.route}</div>
                  </div>

                  <div className="mb-6 space-y-3 text-sm text-navy-600">
                    {pkg.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/65 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                        <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-gold-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <a
                      href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(pkg.ctaMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#22c55e_0%,#25D366_45%,#0f9f4b_100%)] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-green-500/40"
                    >
                      <MessageCircle size={16} />
                      Enquire This Package
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
