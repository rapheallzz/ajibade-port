"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = heroRef.current?.querySelectorAll(".anim-in");
    els?.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 120}ms`;
      el.classList.remove("opacity-0-init");
      el.classList.add("animate-fade-up");
    });
  }, []);

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen grid-bg flex flex-col justify-end pb-16 px-6 md:px-10 pt-32"
    >
      {/* Top-right status pill */}
      <div className="absolute top-24 right-6 md:right-10 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="font-mono text-xs text-fog uppercase tracking-widest">
          Available Worldwide
        </span>
      </div>

      {/* Prominent Name Header */}
      <div className="mb-4">
        <span className="opacity-0-init anim-in inline-block font-mono text-xs md:text-sm text-accent uppercase tracking-widest border border-accent/40 bg-accent/10 px-3 py-1 rounded-full mb-3">
          Stephen A. Ibiotye
        </span>
      </div>

      {/* Main headline */}
      <div className="mb-8">
        <h1 className="font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.9] text-bone tracking-tight">
          <span className="opacity-0-init anim-in block overflow-hidden">
            <span className="block">Frontend</span>
          </span>
          <span className="opacity-0-init anim-in block overflow-hidden">
            <span className="block italic text-fog">Developer</span>
          </span>
          <span className="opacity-0-init anim-in flex items-end gap-6">
            <span>&amp;</span>
            <span className="text-accent text-[clamp(1.2rem,3vw,2.5rem)] font-sans font-light mb-2 tracking-wide">
              UI Engineer
            </span>
          </span>
        </h1>
      </div>

      {/* Description & Download CV Button */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex flex-col items-start gap-5 max-w-sm">
          <p className="opacity-0-init anim-in font-sans text-fog text-sm md:text-base leading-relaxed">
            I build interfaces that people remember — with React, Next.js,
            TypeScript, and thoughtful motion design.
          </p>

          <a
            href="/cv.pdf"
            download="Stephen_A_Ibiotye_CV.pdf"
            className="opacity-0-init anim-in inline-flex items-center gap-2 px-6 py-3 bg-accent text-ink font-mono text-xs uppercase tracking-wider font-semibold rounded hover:bg-bone transition-colors duration-300 shadow-md group"
          >
            <span>Download CV</span>
            <span className="group-hover:translate-y-0.5 transition-transform duration-300">
              ↓
            </span>
          </a>
        </div>

        <button
          onClick={scrollToWork}
          className="opacity-0-init anim-in group flex items-center gap-3 font-mono text-xs text-fog uppercase tracking-widest hover:text-accent transition-colors duration-300 self-start md:self-end"
        >
          <span>Scroll to work</span>
          <span className="block w-6 h-px bg-fog group-hover:bg-accent group-hover:w-12 transition-all duration-500" />
        </button>
      </div>

      {/* Decorative year */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden md:block">
        <span className="font-mono text-xs text-steel">©2026</span>
      </div>
    </section>
  );
}
