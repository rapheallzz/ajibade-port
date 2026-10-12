import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectById } from "@/data/projects";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}) {
  const project = getProjectById(params.id);
  if (!project) return {};

  return {
    title: `${project.title} — Stephen A. Ibitoye Case Study`,
    description: project.desc,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  // Calculate prev/next project navigation
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen grid-bg flex flex-col justify-between">
      <Nav />

      <main className="pt-32 pb-24 px-6 md:px-10 max-w-6xl mx-auto w-full">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs text-fog uppercase tracking-widest hover:text-accent transition-colors duration-300"
          >
            <span>←</span> Back to selected work
          </Link>
        </div>

        {/* Title & Metadata Header */}
        <header className="border-b border-steel pb-10 mb-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-accent uppercase tracking-widest mb-4">
            <span>Project {project.num}</span>
            <span>/</span>
            <span>{project.year}</span>
            {project.type === "Self-initiated" && (
              <>
                <span>/</span>
                <span className="border border-accent/40 bg-accent/10 text-accent px-2 py-0.5 rounded-sm text-[10px] lowercase tracking-normal font-sans">
                  Self-initiated project
                </span>
              </>
            )}
          </div>

          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] text-bone leading-none mb-6">
            {project.title}
          </h1>

          <p className="font-sans text-fog text-base md:text-lg max-w-2xl leading-relaxed mb-8">
            {project.desc}
          </p>

          {/* Key Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-steel/40">
            {project.role && (
              <div>
                <span className="font-mono text-[11px] text-fog uppercase tracking-widest block mb-1">
                  Role
                </span>
                <span className="font-sans text-sm text-bone font-medium">
                  {project.role}
                </span>
              </div>
            )}

            <div>
              <span className="font-mono text-[11px] text-fog uppercase tracking-widest block mb-1">
                Year
              </span>
              <span className="font-sans text-sm text-bone font-medium">
                {project.year}
              </span>
            </div>

            {project.stack && project.stack.length > 0 && (
              <div className="sm:col-span-2">
                <span className="font-mono text-[11px] text-fog uppercase tracking-widest block mb-1">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[10px] text-fog uppercase tracking-wider border border-steel px-2 py-0.5 rounded-sm bg-ash/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {(project.liveUrl || project.repoUrl) && (
            <div className="flex flex-wrap items-center gap-4 mt-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-wider bg-accent text-ink px-5 py-2.5 font-semibold hover:bg-bone transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <span>View live</span>
                  <span>↗</span>
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-wider border border-steel text-bone px-5 py-2.5 font-semibold hover:border-accent hover:text-accent transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <span>View code</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          )}
        </header>

        {/* Featured Project Banner Image */}
        <div className="relative w-full h-[320px] md:h-[500px] border border-steel overflow-hidden mb-16 rounded-sm">
          <Image
            src={project.img}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ background: project.color }}
          />
        </div>

        {/* Overview Description */}
        {project.fullDesc && (
          <section className="mb-16 border-b border-steel pb-12">
            <h2 className="font-mono text-xs text-fog uppercase tracking-widest mb-4">
              Overview
            </h2>
            <p className="font-sans text-sm md:text-base text-cloud leading-relaxed max-w-3xl">
              {project.fullDesc}
            </p>
          </section>
        )}

        {/* Scenario, Problem, Solution & Results */}
        {(project.scenario ||
          project.problem ||
          project.solution ||
          project.results) && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 border-b border-steel pb-16">
            {project.scenario && (
              <div className="border border-steel p-6 bg-ash/30">
                <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
                  01 / Scenario
                </h3>
                <p className="font-sans text-sm text-fog leading-relaxed">
                  {project.scenario}
                </p>
              </div>
            )}

            {project.problem && (
              <div className="border border-steel p-6 bg-ash/30">
                <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
                  02 / Problem
                </h3>
                <p className="font-sans text-sm text-fog leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="border border-steel p-6 bg-ash/30">
                <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
                  03 / Solution
                </h3>
                <p className="font-sans text-sm text-fog leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}

            {project.results && (
              <div className="border border-steel p-6 bg-ash/30">
                <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
                  04 / Impact &amp; Results
                </h3>
                <p className="font-sans text-sm text-fog leading-relaxed">
                  {project.results}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Previous / Next Project Navigation */}
        <nav className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
          <Link
            href={`/work/${prevProject.id}`}
            className="group flex flex-col items-start p-4 border border-steel/60 hover:border-accent w-full sm:w-auto transition-colors duration-300"
          >
            <span className="font-mono text-[10px] text-fog uppercase tracking-widest flex items-center gap-1 group-hover:text-accent">
              <span>←</span> Previous Project
            </span>
            <span className="font-display text-lg text-bone group-hover:text-accent transition-colors duration-300">
              {prevProject.title}
            </span>
          </Link>

          <Link
            href={`/work/${nextProject.id}`}
            className="group flex flex-col items-end p-4 border border-steel/60 hover:border-accent w-full sm:w-auto transition-colors duration-300 text-right"
          >
            <span className="font-mono text-[10px] text-fog uppercase tracking-widest flex items-center gap-1 group-hover:text-accent">
              Next Project <span>→</span>
            </span>
            <span className="font-display text-lg text-bone group-hover:text-accent transition-colors duration-300">
              {nextProject.title}
            </span>
          </Link>
        </nav>
      </main>

      <Footer />
    </div>
  );
}
