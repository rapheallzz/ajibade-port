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
      {/* Top-right section: Name & Download CV button */}
      <div className="absolute top-24 right-6 md:right-10 flex flex-col items-end gap-3 text-right z-10">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs text-fog uppercase tracking-widest">
            Available Worldwide
          </span>
        </div>

        {/* Prominent Name Header on the Right */}
        <h2 className="opacity-0-init anim-in font-display text-2xl md:text-3xl text-bone tracking-tight">
          Stephen A. Ibiotye
        </h2>

        {/* Download CV button directly underneath the name on the right */}
        <a
          href="/cv.pdf"
          download="Stephen_A_Ibiotye_CV.pdf"
          className="opacity-0-init anim-in inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-ink font-mono text-xs uppercase tracking-wider font-semibold rounded hover:bg-bone transition-colors duration-300 shadow-md group mt-1"
        >
          <span>Download CV</span>
          <span className="group-hover:translate-y-0.5 transition-transform duration-300">
            ↓
          </span>
        </a>
      </div>

      {/* Main headline */}
      <div className="mb-8">
        <h1 className="font-display text-[clamp(3.5rem,11vw,10rem)] leading-[0.9] text-bone tracking-tight">
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

      {/* Description & Scroll to work button */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <p className="opacity-0-init anim-in font-sans text-fog text-sm md:text-base max-w-xs leading-relaxed">
          I build interfaces that people remember — with React, Next.js,
          TypeScript, and thoughtful motion design.
        </p>

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
