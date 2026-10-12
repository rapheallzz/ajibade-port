"use client";

import { useState } from "react";

const mainEmail = "jibzzade@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(mainEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          Open to full-time &amp; remote roles
        </span>
      </div>

      {/* CTA */}
      <div className="mb-16">
        <h3 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] text-bone leading-none mb-6">
          Open to full-time and remote roles
        </h3>
        <p className="font-sans text-fog text-sm md:text-base max-w-xl leading-relaxed">
          I build fast, accessible, production-ready products with React, Next.js, and TypeScript, and am available worldwide. Whether you are hiring for a full-time position or a remote engineering role, let&apos;s connect.
        </p>
      </div>

      {/* Primary Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Email Copy Card */}
        <div className="border border-steel p-8 flex flex-col justify-between gap-6 hover:border-accent/40 transition-colors duration-300 bg-ink/40">
          <div>
            <span className="font-mono text-xs text-fog uppercase tracking-widest block mb-2">
              Direct Contact
            </span>
            <span className="font-sans text-lg text-bone font-medium block">
              {mainEmail}
            </span>
          </div>
          <button
            onClick={copy}
            className="self-start font-mono text-xs text-accent uppercase tracking-wider border border-accent/30 px-4 py-2 hover:bg-accent hover:text-ink transition-colors duration-300"
          >
            {copied ? "Copied to Clipboard ✓" : "Copy Email Address"}
          </button>
        </div>

        {/* Hire Me Mailto Card */}
        <div className="border border-steel p-8 flex flex-col justify-between gap-6 hover:border-accent/40 transition-colors duration-300 bg-ink/40">
          <div>
            <span className="font-mono text-xs text-fog uppercase tracking-widest block mb-2">
              Get In Touch
            </span>
            <span className="font-sans text-lg text-bone font-medium block">
              Send an Inquiry
            </span>
          </div>
          <a
            href={`mailto:${mainEmail}?subject=Opportunity%20for%20Stephen%20Ibitoye`}
            className="self-start font-mono text-xs uppercase tracking-wider bg-accent text-ink px-6 py-2.5 font-semibold hover:bg-bone transition-colors duration-300 inline-flex items-center gap-2"
          >
            <span>Hire me</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Social and Secondary Links */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-8 border-t border-steel">
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://github.com/rapheallzz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-fog uppercase tracking-widest hover:text-accent transition-colors duration-300 group flex items-center gap-2"
          >
            GitHub
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              ↗
            </span>
          </a>
          <a
            href="https://linkedin.com/in/stephen-ibitoye-238962175"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-fog uppercase tracking-widest hover:text-accent transition-colors duration-300 group flex items-center gap-2"
          >
            LinkedIn
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              ↗
            </span>
          </a>
        </div>

        {/* Secondary Freelance Link */}
        <div className="flex items-center gap-2 text-xs font-mono text-steel">
          <span>Freelance work:</span>
          <a
            href="https://www.fiverr.com/rightsort/code-or-design-your-business-website-from-scratch?ref_ctx_id=ece88dfc1b4b4a68bdb02a4ee20bc6c6&pckg_id=1&source=seller_page"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fog hover:text-accent transition-colors duration-300 underline underline-offset-2 flex items-center gap-1"
          >
            Fiverr Profile ↗
          </a>
        </div>
      </div>
    </section>
  );
}
