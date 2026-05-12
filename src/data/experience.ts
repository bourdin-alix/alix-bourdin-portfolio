export interface Job {
  company: string;
  role: string;
  period: string;
  desc: string;
  descFr?: string;
  tags: string[];
}

export const JOBS: Job[] = [
  {
    company: "Eteos",
    role: "Fullstack Developer",
    period: "2023 – 2024",
    desc: "Worked on the core platform end-to-end — from React frontends to backend APIs. Shipped features in a fast-moving environment.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    company: "Upfund",
    role: "Fullstack Developer",
    period: "2022 – 2023",
    desc: "Built and maintained the crowdfunding platform. Worked on both the investor-facing UI and the backend infrastructure.",
    tags: ["React", "TypeScript", "Python", "FastAPI"],
  },
  {
    company: "Petite Marelle",
    role: "Fullstack Developer",
    period: "2021 – 2022",
    desc: "First startup experience. Contributed to e-commerce features while finishing my Bachelor's — learned to ship under real product pressure.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
];
