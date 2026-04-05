import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiLocationMarker, HiCheckCircle } from 'react-icons/hi'
import { FiSend } from 'react-icons/fi'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import { personal } from '../data/portfolio'

// ─── Form validation helpers ──────────────────────────────────────────────────
function validate(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = 'Name is required.'
  if (!fields.email.trim()) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = 'Enter a valid email.'
  if (!fields.message.trim()) errors.message = 'Message is required.'
  else if (fields.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.'
  return errors
}

// ─── Input component ──────────────────────────────────────────────────────────
function Field({ label, id, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-xs text-red-500"
          role="alert"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

const inputClass = (hasError) =>
  `w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 dark:bg-surface-hover border transition-all duration-200 outline-none
  text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600
  focus:ring-2 focus:ring-accent/30 focus:border-accent
  ${hasError
    ? 'border-red-400 dark:border-red-500'
    : 'border-zinc-200 dark:border-surface-border hover:border-zinc-300 dark:hover:border-zinc-600'
  }`

// ─── Main component ───────────────────────────────────────────────────────────
const INITIAL = { name: '', email: '', message: '' }

export default function Contact() {
  const [fields, setFields] = useState(INITIAL)
  const [errors, setErrors]   = useState({})
  const [status, setStatus]   = useState('idle') // idle | sending | success | error
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((f) => ({ ...f, [name]: value }))
    // Live-validate only fields the user has already blurred
    if (touched[name]) {
      const errs = validate({ ...fields, [name]: value })
      setErrors((prev) => ({ ...prev, [name]: errs[name] }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    const errs = validate(fields)
    setErrors((prev) => ({ ...prev, [name]: errs[name] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    const errs = validate(fields)
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')
    // Simulate network request — replace with your actual endpoint
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
    setFields(INITIAL)
    setErrors({})
    setTouched({})
  }

  return (
    <AnimatedSection id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number={4} title="Get In Touch" subtitle="Contact" />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — copy */}
          <div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg mb-8">
              Have a project in mind, a role to fill, or just want to say hello?
              My inbox is always open — I'll get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 group text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors duration-200"
              >
                <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <HiMail size={18} />
                </span>
                <span className="text-sm">{personal.email}</span>
              </a>

              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                <span className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-surface-border flex items-center justify-center shrink-0">
                  <HiLocationMarker size={18} />
                </span>
                <span className="text-sm">{personal.location}</span>
              </div>
            </div>

            {/* Availability banner */}
            <div className="mt-10 p-4 rounded-xl border border-accent/20 bg-accent/5">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-accent">{personal.availability}</span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">
                Currently accepting new projects and full-time opportunities.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center gap-4 py-16"
              >
                <HiCheckCircle className="text-accent" size={48} />
                <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-white">
                  Message sent!
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-sm text-accent hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" id="name" error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={fields.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClass(!!errors.name)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                  </Field>

                  <Field label="Email" id="email" error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@example.com"
                      value={fields.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClass(!!errors.email)}
                      aria-invalid={!!errors.email}
                    />
                  </Field>
                </div>

                <Field label="Message" id="message" error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={fields.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputClass(!!errors.message)} resize-none`}
                    aria-invalid={!!errors.message}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 px-6 bg-accent text-black font-semibold rounded-xl hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="60" strokeDashoffset="20" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <FiSend size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
