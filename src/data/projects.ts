export interface Project {
  name: string;
  slug: string;
  status: "live" | "dev";
  tags: string[];
  link?: string;
  featured?: boolean;
  video?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Risk Management SaaS",
    slug: "riskManagement",
    status: "dev",
    tags: ["Python", "FastAPI", "Streamlit"],
    featured: true,
    video: "/videos/project-risk-management.mp4",
  },
  {
    name: "Stan Delivery",
    slug: "stanDelivery",
    status: "dev",
    tags: ["React", "Node.js"],
    video: "/videos/project-stan-delivery.mp4",
  },
  {
    name: "Wingstop Landing Page",
    slug: "wingstop",
    status: "live",
    tags: ["React", "TypeScript"],
    link: "#",
    video: "/videos/project-wingstop.mp4",
  },
];
