export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-6 border-t border-steel flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <p className="font-mono text-xs text-steel">©Stephen A. Ibiotye 2026</p>

      <p className="font-mono text-xs text-steel">
        Built with Next.js, TypeScript &amp; Tailwind
      </p>

      <div className="flex items-center gap-4 font-mono text-xs">
        <a
          href="mailto:rightsortace@gmail.com"
          className="text-fog hover:text-accent transition-colors duration-300"
        >
          rightsortace@gmail.com
        </a>
        <a
          href="https://www.fiverr.com/rightsort/code-or-design-your-business-website-from-scratch?ref_ctx_id=ece88dfc1b4b4a68bdb02a4ee20bc6c6&pckg_id=1&source=seller_page"
          target="_blank"
          rel="noreferrer"
          className="text-fog hover:text-accent transition-colors duration-300 flex items-center gap-1"
        >
          Fiverr ↗
        </a>
      </div>
    </footer>
  );
}
