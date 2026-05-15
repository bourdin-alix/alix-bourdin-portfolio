import { useRef } from "react";
import { FRONTEND, BACKEND, Skill } from "../data/skills";
import { useT } from "../hooks/useT";
import { useScrollReveal } from "../hooks/useScrollReveal";

function SkillBar({ name, w, favorite }: Skill) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="text-sm font-medium w-28 flex-shrink-0">
        {name}
        {favorite && <span className="ml-1 text-red-400">❤️</span>}
      </span>
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="skill-fill h-full bg-accent rounded-full"
          style={{ width: `${w}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const t = useT();
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 border-t border-gray-100"
    >
      <div className="max-w-5xl mx-auto px-6">
        <span className="section-label reveal">{t.skills.sectionLabel}</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-head font-bold leading-tight tracking-tight mb-10 reveal">
          {t.skills.heading}
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="reveal">
            <p className="text-xs font-head font-semibold uppercase tracking-widest text-gray-500 mb-4">
              {t.skills.frontend}
            </p>
            {FRONTEND.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>
          <div className="reveal">
            <p className="text-xs font-head font-semibold uppercase tracking-widest text-gray-500 mb-4">
              {t.skills.backend}
            </p>
            {BACKEND.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>
        </div>

        <div className="mt-8 bg-accent-light border-l-4 border-accent rounded-lg p-4 reveal">
          <p className="text-sm text-accent-dark italic">{t.skills.bonus}</p>
        </div>
      </div>
    </section>
  );
}
