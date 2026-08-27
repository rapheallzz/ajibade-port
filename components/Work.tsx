"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".reveal-item");
            items.forEach((item, i) => {
              setTimeout(() => {
                item.classList.add("animate-fade-up");
                (item as HTMLElement).style.opacity = "1";
              }, i * 80);
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
    <section id="work" ref={sectionRef} className="px-6 md:px-10 py-24 md:py-32">
      {/* Header */}
      <div className="flex items-end justify-between mb-16 border-b border-steel pb-6">
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-bone leading-none">
          Selected Work
        </h2>
        <span className="font-mono text-xs text-fog uppercase tracking-widest">
          {projects.length} projects
        </span>
      </div>

      {/* Project list */}
      <div className="divide-y divide-steel">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="work-item reveal-item opacity-0 group py-6 md:py-8"
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <Link
              href={`/work/${project.id}`}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0"
            >
              {/* Number */}
              <span className="work-num font-mono text-xs text-fog transition-colors duration-300 md:w-16 flex-shrink-0">
                {project.num}
              </span>

              {/* Title + tags */}
              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <h3 className="font-display text-[clamp(1.4rem,3vw,2rem)] text-bone group-hover:text-accent transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-fog uppercase tracking-widest border border-steel px-2 py-1 rounded-sm group-hover:border-accent/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desc — desktop only */}
              <p className="hidden lg:block font-sans text-xs text-fog max-w-[260px] leading-relaxed">
                {project.desc}
              </p>

              {/* Year + arrow */}
              <div className="flex items-center gap-4 md:ml-8 flex-shrink-0">
                <span className="font-mono text-xs text-steel">{project.year}</span>
                <span className="work-arrow text-bone transition-transform duration-300 text-lg">
                  ↗
                </span>
              </div>
            </Link>

            {/* Hover preview image (mobile hidden) */}
            {hoveredIdx === i && (
              <div className="hidden md:block fixed right-16 top-1/2 -translate-y-1/2 w-56 h-36 overflow-hidden z-30 pointer-events-none">
                <div className="img-reveal w-full h-full" style={{ clipPath: "inset(0 0 0 0)" }}>
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="224px"
                  />
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{ background: project.color }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
