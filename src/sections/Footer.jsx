import { FiGithub, FiLinkedin, FiTwitter, FiDribbble } from 'react-icons/fi'
import { personal } from '../data/portfolio'

const SOCIALS = [
  { Icon: FiGithub,   href: 'https://github.com',   label: 'GitHub'   },
  { Icon: FiLinkedin, href: 'https://linkedin.com',  label: 'LinkedIn' },
  { Icon: FiTwitter,  href: 'https://twitter.com',   label: 'Twitter'  },
  { Icon: FiDribbble, href: 'https://dribbble.com',  label: 'Dribbble' },
]

const NAV = [
  { label: 'About',      href: '#about'      },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]

/**
 * Footer with social links, nav links, and copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  const handleNav = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-zinc-200 dark:border-surface-border bg-white dark:bg-surface-dark">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="font-mono text-sm font-medium text-zinc-900 dark:text-white flex items-center gap-2 group justify-center md:justify-start"
            >
              <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform duration-200" />
              {personal.name.split(' ')[0].toLowerCase()}.dev
            </a>
            <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-1.5">
              Designed &amp; built with ♥ by {personal.name}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNav(e, href)}
                className="text-sm text-zinc-500 dark:text-zinc-500 hover:text-accent transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-400 dark:text-zinc-600 hover:text-accent hover:bg-accent/10 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-surface-border/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-400 dark:text-zinc-600">
          <p>© {year} {personal.name}. All rights reserved.</p>
          <p className="font-mono">React + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
