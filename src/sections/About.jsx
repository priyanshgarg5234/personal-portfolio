import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import Badge from '../components/Badge'
import { personal, skills } from '../data/portfolio'

/**
 * About Me section — bio, skills grid.
 */
export default function About() {
  return (
    <AnimatedSection id="about" className="py-24 md:py-32 bg-zinc-50 dark:bg-surface-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number={1} title="About Me" subtitle="Who I am" />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio */}
          <div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg mb-6">
              {personal.bio}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              When I'm not coding, you'll find me hiking trails, reading about design systems, 
              or contributing to open source. I believe great software is a blend of craft, 
              empathy, and just enough obsession.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Years of experience', value: '5+' },
                { label: 'Projects shipped', value: '40+' },
                { label: 'Open source stars', value: '1.2k' },
                { label: 'Coffee / day', value: '3 ☕' },
              ].map(({ label, value }) => (
                <div key={label} className="p-4 rounded-xl border border-zinc-200 dark:border-surface-border bg-white dark:bg-surface-card">
                  <p className="font-display text-2xl font-bold text-zinc-900 dark:text-white text-gradient">
                    {value}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {skills.map((skillGroup, i) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3">
                  {skillGroup.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
