const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "Framer Motion",
  "Three.js",
  "GraphQL",
  "Node.js",
  "PostgreSQL",
  "Figma",
  "WebGL",
  "D3.js",
  "React Query",
  "Zustand",
  "Testing Library",
  "Storybook",
];

export default function Marquee() {
  const doubled = [...skills, ...skills];

  return (
    <section className="py-10 border-y border-steel overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((skill, i) => (
          <span key={i} className="flex items-center gap-6 mx-6">
            <span className="font-display italic text-[clamp(1.5rem,3vw,2.2rem)] text-fog hover:text-bone transition-colors duration-300">
              {skill}
            </span>
            <span className="text-accent text-xs">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
