export interface ContactLink {
  icon: string;
  label: string;
  sub: string;
  href: string;
  external?: boolean;
}

export const LINKS: ContactLink[] = [
  {
    icon: "✉",
    label: "Email",
    sub: "bourdinalix@gmail.com",
    href: "mailto:bourdinalix@gmail.com",
  },
  {
    icon: "in",
    label: "LinkedIn",
    sub: "linkedin.com/in/alixbourdin",
    href: "https://linkedin.com/in/alixbourdin",
    external: true,
  },
  {
    icon: "M",
    label: "Malt",
    sub: "malt.fr/profile/alixbourdin",
    href: "https://www.malt.fr/profile/alixbourdin",
    external: true,
  },
  {
    icon: "⌥",
    label: "GitHub",
    sub: "github.com/bourdin-alix",
    href: "https://github.com/bourdin-alix",
    external: true,
  },
];
