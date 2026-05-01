import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, X } from 'lucide-react'

export default function Toast({ message, type = 'success', onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 60, scale: 0.9 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        role="alert"
        aria-live="polite"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-sm shadow-2xl border max-w-sm ${
          type === 'success'
            ? 'bg-white border-green-200 text-green-800'
            : 'bg-white border-red-200 text-red-800'
        }`}
      >
        {type === 'success'
          ? <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
          : <XCircle size={20} className="text-red-500 flex-shrink-0" />
        }
        <p className="text-sm font-medium flex-1">{message}</p>
        <button onClick={onClose} className="ml-2 text-gray-400 hover:text-gray-600 flex-shrink-0 focus:outline-none" aria-label="Close">
          <X size={16} />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
