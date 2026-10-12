"use client";

import { useEffect, useRef } from "react";
import { experiences } from "@/data/experience";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".exp-reveal");
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = "1";
                (item as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="px-6 md:px-10 py-24 md:py-32 grid-bg border-t border-steel"
      aria-labelledby="experience-heading"
    >
      {/* Header */}
      <div className="flex items-end justify-between mb-16 border-b border-steel pb-6">
        <h2
          id="experience-heading"
          className="font-display text-[clamp(2rem,5vw,3.5rem)] text-bone leading-none"
        >
          Experience
        </h2>
        <span className="font-mono text-xs text-fog uppercase tracking-widest">
          Where I&apos;ve worked
        </span>
      </div>

      {/* Experience Timeline */}
      <ol className="relative divide-y divide-steel border-b border-steel">
        {experiences.map((exp) => (
          <li
            key={exp.id}
            className="exp-reveal py-10 md:py-12 transition-all duration-700 motion-reduce:transition-none"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Period & Type */}
              <div className="lg:col-span-3 flex flex-row lg:flex-col justify-between lg:justify-start gap-2">
                <span className="font-mono text-xs text-accent uppercase tracking-widest">
                  {exp.period}
                </span>
                <span className="font-mono text-[10px] text-fog uppercase tracking-widest border border-steel/60 px-2 py-0.5 rounded-sm self-start">
                  {exp.type}
                </span>
              </div>

              {/* Role & Company */}
              <div className="lg:col-span-4">
                <h3 className="font-display text-xl md:text-2xl text-bone leading-tight mb-1">
                  {exp.role}
                </h3>
                <p className="font-sans text-sm text-cloud font-medium">
                  {exp.company}
                </p>
                <p className="font-mono text-xs text-fog mt-1">{exp.location}</p>
              </div>

              {/* Description & Highlights */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <p className="font-sans text-sm text-fog leading-relaxed">
                  {exp.description}
                </p>
                <ul className="space-y-1.5 mt-2">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="font-sans text-xs text-cloud/80 flex items-start gap-2"
                    >
                      <span className="text-accent text-xs select-none">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
