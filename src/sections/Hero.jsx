import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { personal } from '../data/portfolio'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

/**
 * Hero section with animated entrance, name, title, bio, and CTAs.
 */
export default function Hero() {
  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Status badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {personal.availability}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-7xl md:text-8xl font-black text-zinc-900 dark:text-white leading-none tracking-tight mb-4"
          >
            {personal.name.split(' ').map((word, i) => (
              <span key={i} className={`block ${i === 1 ? 'text-gradient' : ''}`}>
                {word}
              </span>
            ))}
          </motion.h1>

          {/* Title */}
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">
              {personal.title}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed mb-10"
          >
            {personal.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-16">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-6 py-3 bg-accent text-black font-medium rounded-lg hover:bg-accent-dark transition-all duration-200 flex items-center gap-2"
            >
              View my work
              <HiArrowDown className="group-hover:translate-y-0.5 transition-transform duration-200" />
            </button>
            <a
              href={`mailto:${personal.email}`}
              className="px-6 py-3 border border-zinc-300 dark:border-surface-border text-zinc-700 dark:text-zinc-300 font-medium rounded-lg hover:border-accent hover:text-accent transition-all duration-200"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-5">
            {[
              { Icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
              { Icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { Icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 dark:text-zinc-500 hover:text-accent transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
            <span className="ml-2 h-px w-16 bg-zinc-300 dark:bg-zinc-700" />
            <span className="text-xs text-zinc-400 font-mono">{personal.location}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-400 dark:text-zinc-600 hover:text-accent transition-colors duration-200"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <HiArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  )
}
