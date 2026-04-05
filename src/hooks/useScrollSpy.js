import { useState, useEffect } from 'react'

/**
 * Hook to track which section is currently in view for navbar highlighting.
 */
export function useScrollSpy(sectionIds, offset = 80) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset + 1

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(sectionIds[i])
          return
        }
      }
      setActiveId('')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeId
}
