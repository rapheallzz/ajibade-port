export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Frontend Developer",
    company: "Barril Enterprises",
    location: "Spain (Remote)",
    period: "2023 – 2026",
    type: "Remote",
    description:
      "Built and maintained the PlaymoodTV and Teresa web platforms for international remote teams.",
    highlights: [
      "Turned complex UI/UX designs into pixel-perfect React web applications",
      "Built and consumed REST services with Node.js",
      "Collaborated across time zones with designers and engineers to deliver production-ready features",
    ],
  },
  {
    id: "exp-2",
    role: "Frontend Developer / UI/UX Designer",
    company: "IMPRXX Media Ltd",
    location: "Remote",
    period: "2024 – 2025",
    type: "Part-Time",
    description:
      "Engineered end-to-end web applications and interfaces from wireframes to high-performance production code.",
    highlights: [
      "Turned wireframes and PSD designs into responsive web apps using React, Redux, Node.js, and MongoDB",
      "Built RESTful services and APIs",
      "Wrote comprehensive unit and integration tests to ensure code reliability",
    ],
  },
  {
    id: "exp-3",
    role: "Robotics Coach / UI/UX Instructor",
    company: "Glisten International Academy",
    location: "Abuja, Nigeria",
    period: "2023 – 2025",
    type: "Part-Time",
    description:
      "Coached students for international STEM robotics competitions and taught foundational UI/UX design principles.",
    highlights: [
      "Coached VEX IQ and VEX V5 teams for local and international robotics competitions",
      "Taught VEXcode, Blockly, and Python programming",
      "Taught UI/UX design fundamentals using Figma, Adobe XD, and Sketch",
    ],
  },
  {
    id: "exp-4",
    role: "Head Graphic Designer",
    company: "Rex Grafics Nig. Ltd",
    location: "Abuja, Nigeria",
    period: "2015 – 2020",
    type: "Full-Time",
    description:
      "Led visual communication, brand strategy, 3D motion graphics, and print/digital production.",
    highlights: [
      "Led branding, print, and digital design projects for diverse client portfolios",
      "Produced 3D animations, video editing, and interactive media assets",
      "Established foundational design systems and visual standards across media formats",
    ],
  },
];
