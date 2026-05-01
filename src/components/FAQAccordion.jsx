import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQAccordion({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-navy-100 rounded-sm overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-cream transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold-500 group"
        aria-expanded={open}
        id={`faq-btn-${index}`}
        aria-controls={`faq-panel-${index}`}
      >
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <span className="font-mono text-xs text-gold-500 flex-shrink-0">Q{String(index + 1).padStart(2, '0')}</span>
          <span className="font-body font-semibold text-navy-700 group-hover:text-gold-600 transition-colors text-base pr-4">
            {faq.q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} className={`transition-colors ${open ? 'text-gold-500' : 'text-navy-400'}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-btn-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-2 border-t border-navy-100">
              <p className="text-navy-500 leading-relaxed pl-9">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
