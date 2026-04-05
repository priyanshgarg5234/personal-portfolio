/**
 * Reusable section heading with number label and divider.
 */
export default function SectionHeading({ number, title, subtitle }) {
  return (
    <div className="mb-14">
      <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">
        {String(number).padStart(2, '0')} — {subtitle}
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
        {title}
      </h2>
      <div className="mt-4 w-12 h-0.5 bg-accent" />
    </div>
  )
}
