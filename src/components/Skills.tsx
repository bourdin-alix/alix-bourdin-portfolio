import { FRONTEND, BACKEND, Skill } from "../data/skills";

function SkillBar({ name, w }: Skill) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="text-sm font-medium w-28 flex-shrink-0">{name}</span>
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
  return (
    <section id="skills" className="py-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <span className="section-label reveal">Skills</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-head font-bold leading-tight tracking-tight mb-10 reveal">
          What I Work With
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="reveal">
            <p className="text-xs font-head font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Frontend & DB
            </p>
            {FRONTEND.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>
          <div className="reveal">
            <p className="text-xs font-head font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Backend & Tools
            </p>
            {BACKEND.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>
        </div>

        <div className="mt-8 bg-accent-light border-l-4 border-accent rounded-lg p-4 reveal">
          <p className="text-sm text-accent-dark italic">
            🤖 <strong>Bonus skill: Claude-Driven Development</strong> — because
            why solve problems alone when you have AI as a co-pilot? (Claude now
            takes all the credit anyway 😄)
          </p>
        </div>
      </div>
    </section>
  );
}
