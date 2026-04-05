import { motion } from 'framer-motion'
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/portfolio'

/**
 * Single timeline entry.
 */
function TimelineItem({ item, index, isLast }) {
  const Icon = item.type === 'education' ? HiAcademicCap : HiBriefcase

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6"
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-xl border-2 border-accent bg-accent/10 flex items-center justify-center shrink-0 z-10">
          <Icon className="text-accent" size={16} />
        </div>
        {!isLast && <div className="w-px flex-grow bg-zinc-200 dark:bg-surface-border mt-2 mb-0" />}
      </div>

      {/* Content */}
      <div className={`pb-10 ${isLast ? 'pb-0' : ''} flex-grow min-w-0`}>
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <div>
            <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-white">{item.role}</h3>
            <p className="text-accent font-medium text-sm">{item.company}</p>
          </div>
          <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-surface-border px-2.5 py-1 rounded-full shrink-0">
            {item.period}
          </span>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mt-3 mb-4">
          {item.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5">
          {item.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-500">
              <span className="text-accent mt-1 shrink-0">▸</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

/**
 * Experience & Education section rendered as a vertical timeline.
 */
export default function Experience() {
  return (
    <AnimatedSection id="experience" className="py-24 md:py-32 bg-zinc-50 dark:bg-surface-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number={3} title="Experience" subtitle="Career & Education" />

        <div className="max-w-3xl">
          {experience.map((item, i) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
