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
  link: string; // legacy fallback link
  color: string;
  role?: string;
  liveUrl?: string;
  repoUrl?: string;
  problem?: string;
  solution?: string;
  results?: string;
  stack?: string[];
}

export const projects: Project[] = [
  {
    id: "01",
    num: "01",
    title: "Gobokin",
    tags: ["React", "TypeScript", "Ticketing", "Venue Booking"],
    desc: "All-in-one platform to book venues, sell tickets, reserve spaces, and manage event operations seamlessly.",
    fullDesc:
      "Gobokin is an end-to-end event and venue ticketing solution. It empowers organizers and venues to manage space reservations, market event tickets, process secure payments, and streamline attendee check-ins—all within a unified, modern web ecosystem.",
    features: [
      "Comprehensive venue reservation and management system",
      "Digital ticketing sales and instant automated delivery",
      "Real-time seating and venue availability tracking",
      "Integrated secure payment processing and reporting analytics",
    ],
    year: "2025",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    link: "https://gobokin.com/",
    color: "#2ecc71",
    role: "Frontend Developer",
    liveUrl: "https://gobokin.com",
    stack: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    problem:
      "Event managers and venues struggled with fragmented platforms for ticketing, seating, and check-ins, creating operational friction and poor user booking experiences.",
    solution:
      "Engineered an intuitive, high-performance web platform in React and TypeScript that unifies real-time venue booking, seating selection, ticket generation, and automated check-ins.",
    results:
      "Streamlined event operations and venue booking into a single unified dashboard with real-time updates.",
  },
  {
    id: "02",
    num: "02",
    title: "Playmoodtv",
    tags: ["React", "Vite", "Media Streaming", "UI/UX"],
    desc: "Next-generation interactive media streaming platform delivering curated channels and video experiences.",
    fullDesc:
      "Playmoodtv is a sleek, modern streaming platform built for high-performance media delivery and interactive video curation. Designed with a custom media engine and dynamic playlists, it delivers seamless entertainment across devices.",
    features: [
      "High-definition video playback with custom streaming controls",
      "Curated channel discovery and automated playlist creation",
      "Ultra-responsive aesthetic user interface built for mobile and desktop",
      "Fast asset loading and optimized content rendering pipeline",
    ],
    year: "2025",
    img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&q=80",
    link: "https://www.playmoodtv.com",
    color: "#1abc9c",
    role: "Frontend Developer",
    liveUrl: "https://www.playmoodtv.com",
    stack: ["React", "Vite", "Node.js", "Tailwind CSS"],
    problem:
      "Standard video curation platforms lacked interactive responsiveness and seamless playlist navigation across low-bandwidth mobile environments.",
    solution:
      "Developed a custom video streaming UI using React and Vite, optimizing media rendering and dynamic playlist state management for low-latency playback.",
    results:
      "Delivered a fluid media streaming application with instant channel switching and responsive UI across all screen sizes.",
  },
  {
    id: "03",
    num: "03",
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
    role: "Full-Stack Developer",
    // TODO(stephen): add liveUrl, repoUrl, role, and verified results
    stack: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    problem:
      "E-commerce storefronts frequently suffer from laggy cart interactions and complex, multi-step checkout friction.",
    solution:
      "Built a modern Next.js e-commerce app with state-persisted shopping carts, optimized product filters, and direct Stripe payment gateway integration.",
    results:
      "Delivered a fast shopping flow with persistent cart state and secure transaction processing.",
  },
  {
    id: "04",
    num: "04",
    // TODO(stephen): verify numeric claim "60+ animated components"
    title: "Motion Design System",
    tags: ["React", "Framer Motion", "Storybook"],
    desc: "A component library with 60+ animated components and comprehensive design tokens.",
    fullDesc:
      "A comprehensive design system and UI library focused on micro-interactions and smooth user animations. Engineered with Framer Motion and React to provide modular, reusable, accessible components for scalable web design.",
    features: [
      // TODO(stephen): verify numeric claim "60+ pre-built accessible animated components"
      "60+ pre-built accessible animated components",
      "Comprehensive design token ecosystem",
      "Storybook documentation and interactive playground",
      "Custom animation primitives and layout transition hooks",
    ],
    year: "2025",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    link: "https://motion-design-system-b5sm.vercel.app/",
    color: "#f5a623",
    role: "UI/UX & Frontend Engineer",
    // TODO(stephen): add liveUrl, repoUrl, role, and verified results
    stack: ["React", "Framer Motion", "Storybook", "Tailwind CSS"],
    problem:
      "Development teams struggle with inconsistent motion design and uncoordinated micro-interactions across large product suites.",
    solution:
      "Engineered an accessible design system with customizable animation primitives, design tokens, and interactive Storybook documentation.",
    results:
      "Standardized UI motion guidelines and component usage for cohesive web interfaces.",
  },
  {
    id: "05",
    num: "05",
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
    role: "Frontend Engineer",
    liveUrl: "https://3d-product-ten.vercel.app",
    stack: ["Three.js", "React", "WebGL", "Tailwind CSS"],
    problem:
      "Static product images fail to showcase product details and dynamic material options effectively.",
    solution:
      "Created an interactive 3D WebGL configurator using Three.js and React, allowing users to rotate, inspect, and swap materials in real time.",
    results:
      "Enabled photorealistic 3D product inspection directly within web browsers without heavy engine overhead.",
  },
  {
    id: "06",
    num: "06",
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
    role: "Full-Stack Developer",
    liveUrl: "https://aiwriter-sandy.vercel.app",
    stack: ["Next.js", "OpenAI API", "Prisma", "Tailwind CSS"],
    problem:
      "Content creators spend excessive time switching between external AI tools and primary document drafting editors.",
    solution:
      "Integrated OpenAI API completions directly inside a rich-text Next.js document editor with context-aware rewriting and tone adjustment options.",
    results:
      "Accelerated document creation with inline AI writing suggestions and Markdown exports.",
  },
  {
    id: "07",
    num: "07",
    // TODO(stephen): verify numeric claims "1M+ events" and "60fps"
    title: "Analytics Dashboard",
    tags: ["React", "D3.js", "TailwindCSS"],
    desc: "Real-time data visualisation platform processing 1M+ events with smooth 60fps charts.",
    fullDesc:
      "Enterprise analytics dashboard designed to visualize massive data streams in real time. Features interactive D3.js charting, custom date range filtering, export capabilities, and dark mode UI optimization.",
    features: [
      "Real-time data streaming and aggregation",
      // TODO(stephen): verify numeric claim "60fps smooth rendering"
      "Custom D3.js charts with 60fps smooth rendering",
      "Customizable widgets and view layouts",
      "Exportable CSV/PDF reporting capabilities",
    ],
    year: "2024",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "#",
    color: "#9b59b6",
    role: "Frontend Developer",
    // TODO(stephen): add liveUrl, repoUrl, role, and verified results
    stack: ["React", "D3.js", "Tailwind CSS"],
    problem:
      "High-density data streams frequently cause web browser UI freezes and rendering lag during real-time updates.",
    solution:
      "Optimized D3.js chart rendering routines and data aggregation pipes in React for smooth, non-blocking visualization.",
    results:
      "Provided an interactive real-time dashboard for visual analytics and data export.",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
