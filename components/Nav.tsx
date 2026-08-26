"use client";

import { useState, useEffect } from "react";

const navLinks = ["work", "about", "contact"];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyEmail = (email: string, label: string) => {
    navigator.clipboard.writeText(email);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* Main nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-500 ${
          scrolled ? "bg-ink/80 backdrop-blur-md" : ""
        }`}
      >
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-bone text-xl tracking-tight hover:text-accent transition-colors duration-300"
        >
          Stephen A. Ibiotye
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-mono text-xs text-fog uppercase tracking-widest hover:text-accent transition-colors duration-300"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 group"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-px bg-bone transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-4 h-px bg-bone transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-bone transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ash flex flex-col justify-between p-8 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-16" />

        <div className="flex flex-col gap-4">
          {navLinks.map((link, i) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-left font-display text-[clamp(3rem,10vw,7rem)] leading-none text-bone hover:text-accent transition-all duration-300 ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {link}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div>
            <p className="font-mono text-xs text-fog uppercase tracking-widest mb-3">
              Location
            </p>
            <p className="font-sans text-sm text-cloud">Lagos, Nigeria</p>
          </div>
          <div>
            <p className="font-mono text-xs text-fog uppercase tracking-widest mb-3">
              Availability
            </p>
            <p className="font-sans text-sm text-accent">Open to work</p>
          </div>
          <div>
            <p className="font-mono text-xs text-fog uppercase tracking-widest mb-3">
              Email
            </p>
            <button
              onClick={() =>
                copyEmail("rightsortace@gmail.com", "email")
              }
              className="font-sans text-sm text-cloud hover:text-accent transition-colors duration-300"
            >
              {copied === "email" ? "Copied!" : "rightsortace@gmail.com"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
