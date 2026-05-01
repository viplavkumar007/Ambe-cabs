import { motion } from 'framer-motion'
import { Car, Users, Briefcase, MessageCircle, Crown } from 'lucide-react'
import { useScrollReveal, staggerContainer, revealVariants } from '../components/ScrollReveal'
import { brand, cabFleet } from '../data/siteContent'

export default function CarsEnquiry() {
  const { ref, isInView } = useScrollReveal(0.15)
  const remainder = cabFleet.length % 3

  return (
    <section
      id="cars"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(212,184,150,0.22),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(84,122,149,0.18),_transparent_28%),linear-gradient(180deg,#fbfcfe_0%,#eef4fa_100%)] py-24"
      aria-labelledby="cars-heading"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-navy-700/8 blur-3xl" />

      <div className="section-container relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={revealVariants}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="section-label">Our Fleet</span>
          <div className="divider-gold mx-auto mb-4" />
          <h2 id="cars-heading" className="section-title">
            Explore Our <span className="text-gold-500">Fleet</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-500">
            Browse our available fleet for Udaipur sedan bookings, Innova travel, group vans, mini buses, luxury coaches, and AC buses.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-6"
        >
          {cabFleet.map((car, index) => (
            <motion.article
              key={car.id}
              variants={revealVariants}
              custom={index}
              className={`group overflow-hidden rounded-[2rem] border bg-white/55 shadow-[0_20px_60px_rgba(31,44,60,0.12)] backdrop-blur-xl card-hover xl:col-span-2 ${
                remainder === 2 && index === cabFleet.length - 2 ? 'xl:col-start-2' : ''
              } ${
                remainder === 2 && index === cabFleet.length - 1 ? 'xl:col-start-4' : ''
              } ${
                car.specialRequest
                  ? 'border-gold-300/70 shadow-[0_22px_65px_rgba(184,148,74,0.18)]'
                  : 'border-white/70'
              }`}
            >
              <div className="flex h-full flex-col">
                <div className="relative h-56 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),rgba(232,240,248,0.78)_42%,rgba(214,226,238,0.92)_100%)]">
                  <div className="pointer-events-none absolute inset-x-5 top-4 z-10 h-16 rounded-full bg-white/35 blur-2xl" />
                  <img
                    src={car.image}
                    alt={car.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09131f]/90 via-[#09131f]/18 to-white/5" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex flex-wrap gap-2">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-white/95 backdrop-blur-md">
                        <Car size={13} />
                        {car.type}
                      </div>
                      {car.specialRequest && (
                        <div className="inline-flex items-center gap-2 rounded-full border border-gold-300/45 bg-gradient-to-r from-gold-500/35 to-amber-300/20 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-gold-50 backdrop-blur-md">
                          <Crown size={13} />
                          Special Request
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="relative flex h-full flex-col bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(248,251,255,0.92)_100%)] p-5">
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                  <div className="mb-3">
                    <h3 className="font-display text-[1.55rem] font-bold tracking-[-0.02em] text-navy-700">{car.name}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-navy-500">{car.note}</p>
                  </div>

                  <div className="mb-5 grid gap-2.5 text-sm text-navy-600">
                    <div className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/60 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                      <Users size={17} className="mt-0.5 flex-shrink-0 text-gold-500" />
                      <div>
                        <div className="font-semibold text-navy-700">Seating</div>
                        <div>{car.seats}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/60 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                      <Briefcase size={17} className="mt-0.5 flex-shrink-0 text-gold-500" />
                      <div>
                        <div className="font-semibold text-navy-700">Luggage</div>
                        <div>{car.luggage}</div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-gold-200/80 bg-gradient-to-r from-gold-500/12 to-amber-100/55 px-4 py-3">
                      <div className="mb-1 text-xs font-mono uppercase tracking-widest text-gold-600">Best for</div>
                      <div className="text-[13px] leading-relaxed text-navy-600">{car.useCase}</div>
                    </div>

                    {car.specialRequest && (
                      <div className="rounded-2xl border border-gold-300/80 bg-gradient-to-r from-gold-500/16 via-amber-50 to-white px-4 py-3">
                        <div className="mb-1 text-xs font-mono uppercase tracking-widest text-gold-700">Premium availability</div>
                        <div className="text-[13px] leading-relaxed text-navy-600">
                          This vehicle is arranged only on advance confirmation and may require schedule coordination.
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3">
                    <a
                      href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(car.ctaMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex flex-1 items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
                        car.specialRequest
                          ? 'bg-[linear-gradient(135deg,#c18a2d_0%,#e1b866_45%,#8a5e1c_100%)] shadow-amber-500/30 hover:shadow-amber-500/45'
                          : 'bg-[linear-gradient(135deg,#22c55e_0%,#25D366_45%,#0f9f4b_100%)] shadow-green-500/25 hover:shadow-green-500/40'
                      }`}
                    >
                      <MessageCircle size={16} />
                      Book Now
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
