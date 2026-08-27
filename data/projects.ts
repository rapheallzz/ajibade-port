export interface Project {
  id: string;
  num: string;
  title: string;
  tags: string[];
  desc: string;
  fullDesc: string;
  features: string[];
  year: string;
  img: string;
  link: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "01",
    num: "01",
    title: "E-Commerce Platform",
    tags: ["Next.js", "TypeScript", "Stripe"],
    desc: "Full-stack storefront with real-time inventory, cart animations, and seamless checkout.",
    fullDesc:
      "A high-performance full-stack e-commerce application built for high conversion and speed. Features real-time stock management, fluid UI transitions, dynamic product filtering, and an integrated Stripe payment gateway.",
    features: [
      "Real-time inventory and stock updates",
      "Optimized shopping cart with state persistence",
      "Seamless and secure Stripe checkout integration",
      "Fully responsive design tuned for mobile commerce",
    ],
    year: "2025",
    img: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80",
    link: "https://stephinomart.vercel.app/",
    color: "#c8f542",
  },
  {
    id: "02",
    num: "02",
    title: "Motion Design System",
    tags: ["React", "Framer Motion", "Storybook"],
    desc: "A component library with 60+ animated components and comprehensive design tokens.",
    fullDesc:
      "A comprehensive design system and UI library focused on micro-interactions and smooth user animations. Engineered with Framer Motion and React to provide modular, reusable, accessible components for scalable web design.",
    features: [
      "60+ pre-built accessible animated components",
      "Comprehensive design token ecosystem",
      "Storybook documentation and interactive playground",
      "Custom animation primitives and layout transition hooks",
    ],
    year: "2025",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    link: "https://motion-design-system-b5sm.vercel.app/",
    color: "#f5a623",
  },
  {
    id: "03",
    num: "03",
    title: "Analytics Dashboard",
    tags: ["React", "D3.js", "TailwindCSS"],
    desc: "Real-time data visualisation platform processing 1M+ events with smooth 60fps charts.",
    fullDesc:
      "Enterprise analytics dashboard designed to visualize massive data streams in real time. Features interactive D3.js charting, custom date range filtering, export capabilities, and dark mode UI optimization.",
    features: [
      "Real-time data streaming and aggregation",
      "Custom D3.js charts with 60fps smooth rendering",
      "Customizable widgets and view layouts",
      "Exportable CSV/PDF reporting capabilities",
    ],
    year: "2024",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "#",
    color: "#9b59b6",
  },
  {
    id: "04",
    num: "04",
    title: "3D Product Configurator",
    tags: ["Three.js", "React", "WebGL"],
    desc: "Interactive 3D product viewer with real-time material swapping and AR support.",
    fullDesc:
      "An immersive 3D product visualizer allowing customers to inspect, customize, and preview products in real time using WebGL. Includes dynamic lighting, custom shader materials, and augmented reality preview.",
    features: [
      "Real-time photorealistic 3D model rendering",
      "Dynamic material and texture swapping",
      "Interactive 360-degree rotation and zoom",
      "Augmented Reality (AR) mobile inspection mode",
    ],
    year: "2024",
    img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80",
    link: "https://3d-product-ten.vercel.app/",
    color: "#3498db",
  },
  {
    id: "05",
    num: "05",
    title: "AI Writing Tool",
    tags: ["Next.js", "OpenAI API", "Prisma"],
    desc: "Document editor with AI completions, real-time collaboration, and version history.",
    fullDesc:
      "An intelligent document editor empowering creators with real-time AI assistance, content generation, inline editing suggestions, smart rewriting, and seamless export options.",
    features: [
      "Context-aware AI auto-completion and generation",
      "Inline text editing, summarization, and tone shifting",
      "Rich-text editor with instant Markdown export",
      "History tracking and document management",
    ],
    year: "2024",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    link: "https://aiwriter-sandy.vercel.app/",
    color: "#e74c3c",
  },
  {
    id: "06",
    num: "06",
    title: "Playmoodtv",
    tags: ["Next.js", "Streaming", "React", "TailwindCSS"],
    desc: "Next-generation video streaming platform delivering curated media experiences and interactive content playback.",
    fullDesc:
      "A modern video streaming platform engineered for high-performance media delivery and curated content browsing. Offers custom video playback controls, dark UI styling, responsive streaming queues, and optimized load times.",
    features: [
      "High-definition video playback and streaming",
      "Curated channels and playlist recommendations",
      "Responsive multimedia layout optimized for modern displays",
      "Seamless content navigation and quick search",
    ],
    year: "2025",
    img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&q=80",
    link: "https://www.playmoodtv.com",
    color: "#1abc9c",
  },
  {
    id: "07",
    num: "07",
    title: "Gobokin",
    tags: ["React", "TypeScript", "Fintech", "TailwindCSS"],
    desc: "Modern digital platform offering streamlined financial workflows, intuitive dashboards, and web solutions.",
    fullDesc:
      "A sleek digital solution built to simplify complex financial workflows and management tasks. Designed with precision typography, real-time data integration, and user-centric navigation to deliver modern enterprise web experiences.",
    features: [
      "Intuitive dashboard interface for complex operations",
      "High-security transactional flow and data displays",
      "Performance-optimized frontend architecture",
      "Cross-device responsiveness and accessibility",
    ],
    year: "2025",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    link: "https://gobokin.com/",
    color: "#2ecc71",
  },
  {
    id: "08",
    num: "08",
    title: "B2B Application",
    tags: ["React", "TypeScript", "Enterprise", "B2B"],
    desc: "Enterprise event and business management portal streamlining multi-tier workflows and real-time operations.",
    fullDesc:
      "A specialized B2B event management platform engineered to connect enterprises, event coordinators, and business stakeholders. Delivers robust scheduling, attendee workflows, transaction management, and automated event analytics.",
    features: [
      "Enterprise event management and workflow automation",
      "Multi-tier access management and stakeholder portals",
      "Real-time schedule tracking and guest coordination",
      "Integrated analytics and transaction reporting",
    ],
    year: "2025",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    link: "https://event.gobokin.com",
    color: "#34495e",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
