import { motion } from 'framer-motion'

/**
 * Wraps any section with a fade-up animation triggered on scroll.
 * Uses Framer Motion's whileInView for performance.
 */
export default function AnimatedSection({ children, className = '', delay = 0, id }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.section>
  )
}
