import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { useT } from "../hooks/useT";
import type { Language } from "../context/LanguageContext";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
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
          {/* Language selector */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Language)}
            className="text-xs font-head font-semibold text-gray-500 hover:text-accent transition-colors bg-transparent border-none cursor-pointer outline-none"
            aria-label="Select language"
          >
            <option value="fr">🇫🇷 FR</option>
            <option value="en">🇬🇧 EN</option>
          </select>

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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-bg px-6 py-4 flex flex-col gap-3">
          {[...navItems, { label: t.nav.contact, anchor: "contact" }].map(
            ({ label, anchor }) => (
              <a
                key={anchor}
                href={`#${anchor}`}
                className="text-sm font-medium text-gray-600 hover:text-accent transition-colors no-underline"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ),
          )}
          <select
            value={lang}
            onChange={(e) => {
              setLang(e.target.value as Language);
              setOpen(false);
            }}
            className="text-sm font-medium text-gray-500 bg-transparent border-none cursor-pointer outline-none"
            aria-label="Select language"
          >
            <option value="fr">🇫🇷 Français</option>
            <option value="en">🇬🇧 English</option>
          </select>
        </div>
      )}
    </nav>
  );
}
