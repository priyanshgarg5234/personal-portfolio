import { useState, useEffect } from 'react'

/**
 * Custom hook to manage dark mode state.
 * Persists preference in localStorage and respects system preference.
 */
export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then system preference
    const stored = localStorage.getItem('darkMode')
    if (stored !== null) return stored === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('darkMode', isDark)
  }, [isDark])

  return [isDark, setIsDark]
}
