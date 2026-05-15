import { useRef } from "react";
import { useT } from "../hooks/useT";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Hero() {
  const t = useT();
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="pt-14 min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div
          className="grid gap-10"
          style={{ gridTemplateColumns: "8px 1fr auto" }}
        >
          {/* Left accent bar */}
          <div className="bg-accent rounded-sm" />

          {/* Content */}
          <div className="py-16 xl:py-24">
            <div className="flex items-center gap-3 mb-6 reveal">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
              <span className="text-sm text-gray-500">{t.hero.status}</span>
            </div>

            <h1 className="font-head font-extrabold leading-[0.92] tracking-tight text-[clamp(3rem,8vw,6rem)] mb-4 reveal">
              Alix
              <br />
              <span className="text-accent">Bourdin</span>
            </h1>

            <p className="max-w-md mb-8 reveal">
              <span className="block text-xl font-bold text-gray-800 mb-2">
                {t.hero.bioHookLine1}
                <br />
                {t.hero.bioHookLine2}
              </span>
              <span className="text-lg text-gray-500">{t.hero.bioRest}</span>
            </p>

            <div className="flex flex-wrap gap-2 mb-8 reveal">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "PostgreSQL",
                "Python",
                "FastAPI",
              ].map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 reveal">
              <a href="#contact" className="btn-primary">
                {t.hero.cta}
              </a>
              <a href="#projects" className="btn-ghost">
                {t.hero.secondary}
              </a>
            </div>

            <div className="mt-12 flex items-center gap-3 text-gray-500 text-sm reveal">
              <span className="w-7 h-7 border border-gray-200 rounded-full flex items-center justify-center bounce-arrow">
                ↓
              </span>
              {t.hero.scroll}
            </div>
          </div>

          {/* Photo */}
          <div className="hidden md:block w-82 xl:w-106 self-stretch reveal">
            <img
              src="/images/profile.webp"
              alt="Alix Bourdin"
              className="w-full h-full min-h-[280px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
