"use client";

import { useState } from "react";

const contacts = [
  { label: "Projects", email: "hello@yourname.dev" },
  { label: "Freelance", email: "work@yourname.dev" },
  { label: "General", email: "hi@yourname.dev" },
];

export default function Contact() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const copy = (email: string, idx: number) => {
    navigator.clipboard.writeText(email);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-24 md:py-32 bg-ash border-t border-steel"
    >
      <div className="flex items-end justify-between mb-16 border-b border-steel pb-6">
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-bone leading-none">
          Contact
        </h2>
        <span className="font-mono text-xs text-accent uppercase tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Open to work
        </span>
      </div>

      {/* CTA */}
      <div className="mb-20">
        <h3 className="font-display text-[clamp(2.5rem,7vw,6rem)] text-bone leading-none mb-6">
          Let&apos;s build your vision
        </h3>
        <p className="font-sans text-fog text-sm max-w-sm">
          Have a project in mind? Drop me a line and let&apos;s talk about how
          I can help bring it to life.
        </p>
      </div>

      {/* Email list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-steel border border-steel mb-16">
        {contacts.map((c, i) => (
          <button
            key={c.label}
            onClick={() => copy(c.email, i)}
            className="group flex flex-col gap-2 p-6 text-left hover:bg-mist transition-colors duration-300"
          >
            <span className="font-mono text-xs text-fog uppercase tracking-widest">
              {c.label}
            </span>
            <span className="font-sans text-sm text-cloud group-hover:text-accent transition-colors duration-300">
              {copiedIdx === i ? "Copied ✓" : c.email}
            </span>
          </button>
        ))}
      </div>

      {/* Social links */}
      <div className="flex flex-wrap gap-6">
        {[
          { label: "GitHub", href: "https://github.com" },
          { label: "LinkedIn", href: "https://linkedin.com" },
          { label: "Twitter / X", href: "https://twitter.com" },
          { label: "Dribbble", href: "https://dribbble.com" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-fog uppercase tracking-widest hover:text-accent transition-colors duration-300 group flex items-center gap-2"
          >
            {s.label}
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
