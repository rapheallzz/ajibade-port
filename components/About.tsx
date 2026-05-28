"use client";

import { useEffect, useRef } from "react";

const services = [
  "UI Engineering",
  "Design Systems",
  "Motion & Animation",
  "Performance Optimisation",
  "API Integration",
  "Responsive Design",
];

const clients = [
  "Startup A",
  "Agency B",
  "SaaS Platform C",
  "E-commerce D",
  "FinTech E",
  "Media Brand F",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".about-reveal");
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = "1";
                (item as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="px-6 md:px-10 py-24 md:py-32 grid-bg"
    >
      <div className="flex items-end justify-between mb-16 border-b border-steel pb-6">
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-bone leading-none">
          About
        </h2>
        <span className="font-mono text-xs text-fog uppercase tracking-widest">
          est. 2019
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: bio */}
        <div>
          <p
            className="about-reveal font-display text-[clamp(1.4rem,2.5vw,1.9rem)] text-bone leading-snug mb-8 transition-all duration-700"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            I help brands and startups{" "}
            <em className="text-fog not-italic">tell their story</em> through
            interfaces built with precision and craft.
          </p>

          <p
            className="about-reveal font-sans text-sm text-fog leading-relaxed mb-6 max-w-md transition-all duration-700"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            With 5+ years of experience across agencies and product teams, I
            bridge the gap between design and engineering — turning Figma frames
            into pixel-perfect, performant, and accessible web experiences.
          </p>

          <p
            className="about-reveal font-sans text-sm text-fog leading-relaxed max-w-md transition-all duration-700"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            I care deeply about details: the spring on a hover, the stagger on a
            list reveal, the 2ms difference in perceived load time. Great frontend
            is invisible — you feel it before you see it.
          </p>
        </div>

        {/* Right: services + clients */}
        <div className="flex flex-col gap-12">
          <div
            className="about-reveal transition-all duration-700"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            <p className="font-mono text-xs text-fog uppercase tracking-widest mb-5">
              Services
            </p>
            <ul className="space-y-2">
              {services.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 font-sans text-sm text-cloud"
                >
                  <span className="text-accent text-xs">—</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="about-reveal transition-all duration-700"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            <p className="font-mono text-xs text-fog uppercase tracking-widest mb-5">
              Clients &amp; Brands
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {clients.map((c) => (
                <span key={c} className="font-sans text-sm text-fog">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
