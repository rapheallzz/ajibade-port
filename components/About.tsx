"use client";

import { useEffect, useRef } from "react";

const services = [
  "Full-Stack Development",
  "UI/UX Design & Systems",
  "React & Next.js Architecture",
  "API Development (Node.js/Express)",
  "Motion & Interaction Design",
  "Performance & Accessibility",
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
          6+ Years Experience
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: bio & background */}
        <div>
          <p
            className="about-reveal font-display text-[clamp(1.4rem,2.5vw,1.9rem)] text-bone leading-snug mb-8 transition-all duration-700"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            I build fast, accessible, <em className="text-fog not-italic">production-ready web products</em> that scale.
          </p>

          <p
            className="about-reveal font-sans text-sm text-fog leading-relaxed mb-6 max-w-md transition-all duration-700"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            With 6+ years of professional web development experience, I have shipped web platforms for international remote teams in Spain (Barril Enterprises), built AI-powered applications leveraging the OpenAI API, and taught programming and UI/UX to students preparing for international robotics competitions.
          </p>

          <div
            className="about-reveal border-l-2 border-accent/40 pl-4 my-8 transition-all duration-700"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-2">
              Background &amp; Training
            </p>
            <p className="font-sans text-xs text-fog leading-relaxed">
              Rooted in graphic design since 2015, I formalised my product design skills through UX Design Fundamentals (CalArts via Coursera). This hybrid background allows me to bridge complex design systems with clean, performant TypeScript and React architectures.
            </p>
          </div>

          <p
            className="about-reveal font-sans text-sm text-fog leading-relaxed max-w-md transition-all duration-700"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            I focus on engineering excellence: robust component design, seamless API integrations, micro-interactions, and high performance that feels effortless to the user.
          </p>
        </div>

        {/* Right: services */}
        <div className="flex flex-col gap-12">
          <div
            className="about-reveal transition-all duration-700"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            <p className="font-mono text-xs text-fog uppercase tracking-widest mb-5">
              Core Capabilities
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 font-sans text-sm text-cloud border-b border-steel/30 pb-2"
                >
                  <span className="text-accent text-xs">—</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
