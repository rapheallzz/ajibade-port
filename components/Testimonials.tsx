"use client";

import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className="px-6 md:px-10 py-20 bg-ash border-t border-steel"
    >
      <div className="flex items-end justify-between mb-12 border-b border-steel pb-6">
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-bone leading-none">
          Testimonials
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="border border-steel p-8 bg-ink/30">
            <p className="font-sans text-sm text-fog italic leading-relaxed mb-6">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="font-display text-base text-bone">{t.author}</p>
              <p className="font-mono text-xs text-steel">
                {t.role} — {t.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
