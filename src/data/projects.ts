export interface Project {
  name: string;
  desc: string;
  status: "live" | "dev";
  tags: string[];
  link?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    name: "Wingstop Landing Page",
    desc: "Production landing page for Wingstop France. Fast, clean, conversion-focused.",
    status: "live",
    tags: ["React", "TypeScript"],
    link: "#",
    featured: true,
  },
  {
    name: "Stan Delivery",
    desc: "Full-stack website for a delivery agency — modern design, brand identity, and SEO built from scratch. End-to-end, from Figma to production.",
    status: "dev",
    tags: ["React", "Node.js"],
  },
  {
    name: "Risk Management SaaS",
    desc: "Multi-user crypto portfolio management. Secure Binance API integration, real-time analytics, and automated risk strategies — because watching a chart manually is for amateurs.",
    status: "dev",
    tags: ["Python", "FastAPI", "Streamlit"],
  },
];
