import { useRef } from "react";
import { JOBS } from "../data/experience";
import { useT } from "../hooks/useT";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Experience() {
  const t = useT();
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 xl:py-36 border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <span className="section-label reveal">
          {t.experience.sectionLabel}
        </span>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-head font-bold leading-tight tracking-tight mb-10 xl:mb-16 reveal">
          {t.experience.heading1}
          <br />
          {t.experience.heading2}
        </h2>

        <div className="flex flex-col gap-5 xl:gap-7">
          {JOBS.map(({ company, role, period, slug, tags }) => (
            <div
              key={company}
              className="grid bg-white border border-gray-200 rounded-xl overflow-hidden reveal
                         hover:shadow-lg hover:translate-x-1 transition-all duration-250"
              style={{ gridTemplateColumns: "6px 1fr" }}
            >
              <div className="bg-accent" />
              <div className="p-5 xl:p-8">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div>
                    <h3 className="font-head font-bold text-lg">{company}</h3>
                    <p className="text-sm text-gray-400 font-medium">{role}</p>
                  </div>
                  <span className="text-xs text-gray-400 font-mono whitespace-nowrap mt-0.5">
                    {period}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mt-2 mb-3">
                  {t.experience.descriptions[slug]}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
