import { useState } from "react";
import { useT } from "../hooks/useT";
import { LanguageSelector } from "./LanguageSelector";
import { MobileMenu } from "./MobileMenu";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const t = useT();

  const navItems = [
    { label: t.nav.about, anchor: "about" },
    { label: t.nav.experience, anchor: "experience" },
    { label: t.nav.projects, anchor: "projects" },
    { label: t.nav.quiz, anchor: "quiz" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <a
          href="#hero"
          className="font-head font-extrabold text-lg text-dark no-underline"
        >
          AB.
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7 list-none">
          {navItems.map(({ label, anchor }) => (
            <li key={anchor}>
              <a
                href={`#${anchor}`}
                className="text-sm font-medium text-gray-500 hover:text-accent transition-colors no-underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSelector variant="compact" />
          <a href="#contact" className="btn-primary text-sm py-2 px-4">
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="block w-5 h-0.5 bg-dark rounded" />
          <span className="block w-5 h-0.5 bg-dark rounded" />
          <span className="block w-5 h-0.5 bg-dark rounded" />
        </button>
      </div>

      <MobileMenu
        isOpen={open}
        navItems={navItems}
        onClose={() => setOpen(false)}
      />
    </nav>
  );
}
