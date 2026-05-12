export type JobSlug = "eteos" | "upfund" | "petiteMarelle";

export interface Job {
  company: string;
  role: string;
  period: string;
  slug: JobSlug;
  tags: string[];
}

export const JOBS: Job[] = [
  {
    company: "Eteos",
    role: "Fullstack Developer",
    period: "2023 – 2024",
    slug: "eteos",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    company: "Upfund",
    role: "Fullstack Developer",
    period: "2022 – 2023",
    slug: "upfund",
    tags: ["React", "TypeScript", "Python", "FastAPI"],
  },
  {
    company: "Petite Marelle",
    role: "Fullstack Developer",
    period: "2021 – 2022",
    slug: "petiteMarelle",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
];
