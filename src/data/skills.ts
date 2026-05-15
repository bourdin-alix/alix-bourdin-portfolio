export interface Skill {
  name: string;
  w: number;
  favorite?: boolean;
}

export const FRONTEND: Skill[] = [
  { name: "React", w: 90 },
  { name: "TypeScript", w: 85 },
  { name: "CSS / HTML", w: 88 },
  { name: "PostgreSQL", w: 80 },
];

export const BACKEND: Skill[] = [
  { name: "Node.js", w: 85 },
  { name: "Python", w: 80, favorite: true },
  { name: "FastAPI", w: 60 },
  { name: "Git / Docker", w: 70 },
];
