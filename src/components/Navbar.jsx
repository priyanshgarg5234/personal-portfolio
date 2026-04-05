import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks, personal } from '../data/portfolio'
import { useScrollSpy } from '../hooks/useScrollSpy'

const SECTION_IDS = ['about', 'projects', 'experience', 'contact']

/**
 * Sticky navbar with dark mode toggle, smooth scroll, and mobile menu.
 */
export default function Navbar({ isDark, setIsDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-surface-dark/80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-surface-border/50 shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="font-mono text-sm font-medium text-zinc-900 dark:text-white flex items-center gap-2 group"
            aria-label="Go to top"
          >
            <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform duration-200" />
            {personal.name.split(' ')[0].toLowerCase()}.dev
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeId === sectionId
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-accent'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                    />
                  )}
                </a>
              )
            })}

            {/* Dark mode toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-surface-border transition-all duration-200"
            >
              {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="px-4 py-2 text-sm font-medium bg-accent text-black rounded-lg hover:bg-accent-dark transition-colors duration-200"
            >
              Hire me
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle dark mode"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-400"
            >
              {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-700 dark:text-zinc-300"
            >
              {menuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white dark:bg-surface-card border-b border-zinc-200 dark:border-surface-border md:hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="py-3 px-4 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-surface-hover transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNav(e, '#contact')}
                className="mt-2 py-3 px-4 rounded-lg text-sm font-medium bg-accent text-black text-center"
              >
                Hire me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
