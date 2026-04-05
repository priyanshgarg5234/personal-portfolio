/**
 * Reusable badge for tech stack labels.
 */
export default function Badge({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-zinc-100 text-zinc-600 dark:bg-surface-border dark:text-zinc-400',
    accent: 'bg-accent/10 text-accent border border-accent/20',
    outline: 'border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400',
  }
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-mono font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}
