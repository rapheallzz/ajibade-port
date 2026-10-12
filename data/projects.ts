export interface Project {
  id: string;
  num: string;
  title: string;
  type: "Production" | "Self-initiated";
  tags: string[];
  desc: string; // One-line overview for homepage grid
  fullDesc: string; // Overview description
  year: string;
  img: string;
  link: string; // legacy fallback link
  color: string;
  role: string;
  liveUrl?: string;
  repoUrl?: string;
  scenario?: string;
  problem?: string;
  solution?: string;
  results?: string;
  stack?: string[];
  features?: string[];
}

export const projects: Project[] = [
  {
    id: "01",
    num: "01",
    title: "Gobokin",
    type: "Production",
    role: "Frontend Developer",
    tags: ["React", "TypeScript", "Next.js"],
    desc: "All-in-one venue search, booking, and event ticketing platform.",
    fullDesc:
      "All-in-one web platform enabling users in Nigeria to discover venues, compare prices and dates, and book or sell tickets securely.",
    year: "2025",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    link: "https://www.gobokin.com",
    color: "#2ecc71",
    liveUrl: "https://www.gobokin.com",
    stack: ["React", "TypeScript", "Next.js"],
    scenario:
      "Planning an event in Nigeria often means calling venue owners and negotiating over WhatsApp, while organizers sell tickets through bank transfers and screenshots.",
    problem:
      "There was no single place to discover venues, compare them on price, date and capacity, and book or sell tickets securely.",
    solution:
      "Built the web platform with venue search by location, price range, date and guest capacity, a separate event portal for discovery and ticketing, and a listing flow for hosts.",
    results:
      "The platform has 100+ venues listed, 200 events hosted and 1,000+ visitors, and is live in production.",
  },
  {
    id: "02",
    num: "02",
    title: "PlaymoodTV",
    type: "Production",
    role: "Frontend Developer at Barril Enterprises",
    tags: ["React", "Vite", "Node.js REST"],
    desc: "Interactive media streaming platform with custom creator channels and live feeds.",
    fullDesc:
      "Next-generation media streaming application built on top of existing Node.js REST services.",
    year: "2025",
    img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&q=80",
    link: "https://www.playmoodtv.com",
    color: "#1abc9c",
    liveUrl: "https://www.playmoodtv.com",
    stack: ["React", "Vite", "Node.js REST"],
    scenario:
      "Viewers expect streaming to feel instant on any device, with no friction between picking something and watching it.",
    problem:
      "The platform needed a polished front end that turned complex design files into a fast, consistent interface on top of existing backend services.",
    solution:
      "Converted designs into React and Vite interfaces and integrated them with Node.js REST services, working across time zones with designers and backend engineers. Built authentication, a creator dashboard, creator channels, content sliders, live feeds and content highlights.",
    results: "Shipped to production.",
  },
  {
    id: "03",
    num: "03",
    title: "Fieldwork E-Commerce",
    type: "Self-initiated",
    role: "Full-Stack Developer",
    tags: ["Next.js", "TypeScript", "Stripe"],
    desc: "Full-stack storefront with real-time inventory, cart animations, and Stripe checkout.",
    fullDesc:
      "A scarce-stock gear storefront built to show accurate real-time availability and seamless cart interactions.",
    year: "2025",
    img: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80",
    link: "https://stephinomart.vercel.app",
    color: "#c8f542",
    liveUrl: "https://stephinomart.vercel.app",
    stack: ["Next.js", "TypeScript", "Stripe"],
    scenario:
      "A small-batch outdoor gear brand restocks often and sells limited quantities, so customers must never buy something that is already gone.",
    problem:
      "A storefront for scarce stock must show accurate availability and make adding to the cart feel smooth.",
    solution:
      "A full-stack storefront with product detail pages, an animated cart, a low-stock badge, a sold-out state with a disabled button, and Stripe payments in test mode.",
    results: "A working demo with a complete checkout flow.",
  },
  {
    id: "04",
    num: "04",
    title: "Atlas, 3D Product Configurator",
    type: "Self-initiated",
    role: "Frontend Engineer",
    tags: ["Three.js", "React", "WebGL"],
    desc: "Real-time 3D product visualizer with instant material swapping and AR support.",
    fullDesc:
      "Interactive 3D WebGL viewer allowing customers to rotate products, inspect materials, and view items in AR.",
    year: "2024",
    img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80",
    link: "https://3d-product-ten.vercel.app",
    color: "#3498db",
    liveUrl: "https://3d-product-ten.vercel.app",
    stack: ["Three.js", "React", "WebGL"],
    scenario:
      "A small footwear or furniture brand sells online, but photos cannot show every colour and material, so buyers hesitate or return items.",
    problem:
      "Customers need to see how a product looks in different finishes before they buy.",
    solution:
      "A real-time 3D viewer where users rotate the product and swap materials instantly, with AR support to place it in their own space.",
    results: "A working live demo.",
  },
  {
    id: "05",
    num: "05",
    title: "AI Writer",
    type: "Self-initiated",
    role: "Full-Stack Developer",
    tags: ["Next.js", "OpenAI API", "Prisma"],
    desc: "Document editor with inline OpenAI completions, real-time collaboration, and version history.",
    fullDesc:
      "An integrated drafting editor unifying context-aware AI completions, document management, and version history.",
    year: "2024",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    link: "https://aiwriter-sandy.vercel.app",
    color: "#e74c3c",
    liveUrl: "https://aiwriter-sandy.vercel.app",
    stack: ["Next.js", "OpenAI API", "Prisma"],
    scenario:
      "A small content team drafts in an editor, copies text to a separate AI chat for rewrites, and pastes it back, losing track of versions.",
    problem:
      "AI help sits outside the editor, and collaboration and version control live in separate tools.",
    solution:
      "A single editor with AI completions through the OpenAI API, real-time collaboration, and version history stored with Prisma.",
    results: "A working live demo.",
  },
  {
    id: "06",
    num: "06",
    title: "Motion Design System",
    type: "Self-initiated",
    role: "UI/UX & Frontend Engineer",
    tags: ["React", "Framer Motion", "Storybook"],
    desc: "A unified component library with consistent motion tokens documented in Storybook.",
    fullDesc:
      "Shared motion design system featuring reusable components, motion tokens, and interactive Storybook documentation.",
    year: "2025",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    link: "https://motion-design-system-b5sm.vercel.app",
    color: "#f5a623",
    liveUrl: "https://motion-design-system-b5sm.vercel.app",
    stack: ["React", "Framer Motion", "Storybook"],
    scenario:
      "A fast-moving product team has every developer building hover effects and transitions differently, so the app feels inconsistent.",
    problem:
      "There was no shared set of animation rules or reusable animated components.",
    solution:
      "A component library with consistent motion tokens (timing, easing, springs), documented in a showcase site.",
    // TODO(stephen): [COUNT NEEDED] Count distinct animated components from source if available.
    results: "A working live showcase site.",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
