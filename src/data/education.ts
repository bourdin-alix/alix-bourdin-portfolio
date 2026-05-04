export interface EducationItem {
  year: string;
  degree: string;
  school: string;
  last?: boolean;
}

export const EDU: EducationItem[] = [
  { year: "2019–2021", degree: "BTS SIO", school: "IRIS, Paris" },
  { year: "2021–2022", degree: "Bachelor", school: "Epitech" },
  { year: "2022–2024", degree: "Master 2", school: "Epitech", last: true },
];
