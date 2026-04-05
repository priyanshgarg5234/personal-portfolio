import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import Badge from '../components/Badge'
import { projects } from '../data/portfolio'

/**
 * Project card component.
 */
function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col p-6 rounded-2xl border border-zinc-200 dark:border-surface-border bg-white dark:bg-surface-card card-hover"
    >
      {/* Accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl" />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
            {project.category}
          </span>
          <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-white mt-1 group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
        </div>
        {/* Links */}
        <div className="flex items-center gap-2 ml-4 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-surface-hover transition-all duration-200"
            >
              <FiGithub size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live`}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-500 hover:text-accent hover:bg-accent/10 transition-all duration-200"
            >
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-grow mb-5">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Badge key={t} variant="default">{t}</Badge>
        ))}
      </div>
    </motion.article>
  )
}

/**
 * Projects section with filterable project grid.
 */
export default function Projects() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...new Set(projects.map((p) => p.category))]
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <AnimatedSection id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number={2} title="Selected Work" subtitle="Projects" />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-accent text-black'
                  : 'text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-surface-border hover:border-accent/50 hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500 hover:text-accent transition-colors duration-200"
          >
            <FiGithub size={16} />
            See more on GitHub →
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
