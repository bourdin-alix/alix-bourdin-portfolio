export interface Project {
  name: string;
  slug: string;
  status: "live" | "dev";
  tags: string[];
  link?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    name: "Wingstop Landing Page",
    slug: "wingstop",
    status: "live",
    tags: ["React", "TypeScript"],
    link: "#",
    featured: true,
  },
  {
    name: "Stan Delivery",
    slug: "stanDelivery",
    status: "dev",
    tags: ["React", "Node.js"],
  },
  {
    name: "Risk Management SaaS",
    slug: "riskManagement",
    status: "dev",
    tags: ["Python", "FastAPI", "Streamlit"],
  },
];
