import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getProjectById, projects } from "@/data/projects";

interface PageProps {
  params: { id: string };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { id } = params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const isLive = project.link && project.link !== "#";

  return (
    <>
      <Cursor />
      <Nav />
      <main className="min-h-screen px-6 md:px-10 pt-32 pb-24 max-w-7xl mx-auto">
        {/* Back navigation */}
        <div className="mb-12">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-fog hover:text-accent transition-colors duration-300 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">
              ←
            </span>
            Back to Work
          </Link>
        </div>

        {/* Header section */}
        <div className="border-b border-steel pb-12 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm text-accent font-semibold">
              {project.num}
            </span>
            <span className="font-mono text-xs text-fog uppercase tracking-widest border border-steel px-2 py-1 rounded-sm">
              {project.year}
            </span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-bone leading-none mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs text-fog uppercase tracking-widest border border-steel px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left / Top column: Image preview & live button */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-steel/50 bg-ash group">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: project.color }}
              />
            </div>

            {/* Visit Live Project CTA */}
            <div className="pt-2">
              {isLive ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-accent text-ink font-mono text-sm uppercase tracking-wider font-semibold rounded hover:bg-bone transition-colors duration-300"
                >
                  Visit Live Project
                  <span className="text-lg">↗</span>
                </a>
              ) : (
                <div className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-mist text-fog font-mono text-sm uppercase tracking-wider rounded border border-steel cursor-not-allowed">
                  Live Preview Coming Soon
                </div>
              )}
            </div>
          </div>

          {/* Right column: Detailed text overview & key features */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <h2 className="font-mono text-xs text-fog uppercase tracking-widest mb-3 border-b border-steel/50 pb-2">
                Overview
              </h2>
              <p className="font-sans text-bone/90 leading-relaxed text-base md:text-lg">
                {project.fullDesc}
              </p>
            </div>

            <div>
              <h2 className="font-mono text-xs text-fog uppercase tracking-widest mb-4 border-b border-steel/50 pb-2">
                Key Features
              </h2>
              <ul className="space-y-3 font-sans text-sm text-fog">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent font-mono text-xs mt-1">
                      ✦
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Dynamic Project Navigation (Previous / Next) */}
        <div className="border-t border-steel pt-12 flex justify-between items-center">
          {projects.map((p, index) => {
            if (p.id !== project.id) return null;
            const prevProject = projects[(index - 1 + projects.length) % projects.length];
            const nextProject = projects[(index + 1) % projects.length];

            return (
              <div key={p.id} className="w-full flex justify-between items-center">
                <Link
                  href={`/work/${prevProject.id}`}
                  className="font-mono text-xs uppercase tracking-widest text-fog hover:text-accent transition-colors duration-300 flex items-center gap-2"
                >
                  ← Previous ({prevProject.num})
                </Link>
                <Link
                  href={`/work/${nextProject.id}`}
                  className="font-mono text-xs uppercase tracking-widest text-fog hover:text-accent transition-colors duration-300 flex items-center gap-2"
                >
                  Next ({nextProject.num}) →
                </Link>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
