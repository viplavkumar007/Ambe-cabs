import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2, CheckCircle2 } from 'lucide-react'
import { brand, contactInfo } from '../data/siteContent'

const SERVICES = [
  'Airport Transfer', 'Udaipur Sightseeing', 'Local City Transfer',
  'Outstation Trip', 'Corporate Travel', 'Wedding & Events', 'Sedan Cab Enquiry',
  'Innova Enquiry', 'Urbania / Mini Bus Enquiry', 'Volvo / AC Bus Enquiry', 'Other'
]

export default function ContactForm({ onToast }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', date: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.phone.trim()) errs.phone = 'Phone number is required'
    else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) errs.phone = 'Enter a valid 10-digit number'
    if (!form.service) errs.service = 'Please select a service'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
    onToast?.('Enquiry sent! We\'ll contact you within 30 minutes.', 'success')

    // Build WhatsApp message
    const msg = encodeURIComponent(
      `🚕 *New Booking Enquiry — Ambe Cabs*\n\n` +
      `👤 Name: ${form.name}\n` +
      `📞 Phone: ${form.phone}\n` +
      `📧 Email: ${form.email || 'N/A'}\n` +
      `🚗 Service: ${form.service}\n` +
      `📅 Date: ${form.date || 'Not specified'}\n` +
      `💬 Message: ${form.message || 'No message'}`
    )
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${msg}`, '_blank')
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 py-16 text-center"
      >
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
          <CheckCircle2 size={32} className="text-green-500" />
        </div>
        <h3 className="font-display text-2xl font-bold text-navy-700">Enquiry Sent!</h3>
        <p className="text-navy-500 max-w-sm">Our team will reach out within 30 minutes. You'll also be redirected to WhatsApp for instant confirmation.</p>
        <button onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', date: '', message: '' }) }}
          className="mt-4 text-sm text-gold-500 underline underline-offset-4 hover:text-gold-600">
          Submit another enquiry
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Booking enquiry form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-mono text-navy-500 mb-1.5 uppercase tracking-wider">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name" name="name" type="text"
            value={form.name} onChange={handleChange}
            placeholder="Your full name"
            className={`input-field ${errors.name ? 'border-red-400 focus:ring-red-400/50 focus:border-red-400' : ''}`}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && <p id="name-error" className="mt-1 text-xs text-red-500" role="alert">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-mono text-navy-500 mb-1.5 uppercase tracking-wider">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            id="phone" name="phone" type="tel"
            value={form.phone} onChange={handleChange}
            placeholder="10-digit mobile number"
            className={`input-field ${errors.phone ? 'border-red-400 focus:ring-red-400/50 focus:border-red-400' : ''}`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500" role="alert">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-mono text-navy-500 mb-1.5 uppercase tracking-wider">
            Email Address
          </label>
          <input
            id="email" name="email" type="email"
            value={form.email} onChange={handleChange}
            placeholder="your@email.com"
            className="input-field"
          />
        </div>

        {/* Travel Date */}
        <div>
          <label htmlFor="date" className="block text-xs font-mono text-navy-500 mb-1.5 uppercase tracking-wider">
            Travel Date
          </label>
          <input
            id="date" name="date" type="date"
            value={form.date} onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="input-field"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-xs font-mono text-navy-500 mb-1.5 uppercase tracking-wider">
          Service Required <span className="text-red-400">*</span>
        </label>
        <select
          id="service" name="service"
          value={form.service} onChange={handleChange}
          className={`input-field appearance-none cursor-pointer ${errors.service ? 'border-red-400' : ''}`}
        >
          <option value="">Select a service...</option>
          {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.service && <p className="mt-1 text-xs text-red-500" role="alert">{errors.service}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-mono text-navy-500 mb-1.5 uppercase tracking-wider">
          Additional Details
        </label>
        <textarea
          id="message" name="message"
          value={form.message} onChange={handleChange}
          rows={4}
          placeholder="Pickup location, drop point, number of passengers, or any special requirements..."
          className="input-field resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending Enquiry...
          </>
        ) : (
          <>
            <Send size={18} /> Send Enquiry via WhatsApp
          </>
        )}
      </button>

      <p className="text-xs text-center text-navy-400 font-mono">
        Submitting will open WhatsApp with your enquiry details pre-filled.
        We also send a copy to <span className="text-gold-500">{brand.email}</span>
      </p>
    </form>
  )
}
