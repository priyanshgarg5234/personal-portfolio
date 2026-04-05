import { useDarkMode } from './hooks/useDarkMode'
import Navbar     from './components/Navbar'
import Hero       from './sections/Hero'
import About      from './sections/About'
import Projects   from './sections/Projects'
import Experience from './sections/Experience'
import Contact    from './sections/Contact'
import Footer     from './sections/Footer'

/**
 * Root application component.
 * Composes all sections and passes dark-mode state down to the Navbar.
 */
export default function App() {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <div className="min-h-screen">
      {/* Skip to content link for accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-accent focus:text-black focus:rounded-lg focus:font-medium focus:text-sm"
      >
        Skip to content
      </a>

      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
