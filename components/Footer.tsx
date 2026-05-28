export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-6 border-t border-steel flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <p className="font-mono text-xs text-steel">©Your Name 2026</p>

      <p className="font-mono text-xs text-steel">
        Built with Next.js, TypeScript &amp; Tailwind
      </p>

      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="font-mono text-xs text-fog">Available Worldwide</span>
      </div>
    </footer>
  );
}
