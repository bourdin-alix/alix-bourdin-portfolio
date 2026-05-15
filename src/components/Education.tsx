import { useRef } from "react";
import { EDU } from "../data/education";
import { useT } from "../hooks/useT";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Education() {
  const t = useT();
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-24 border-t border-gray-100"
    >
      <div className="max-w-5xl mx-auto px-6">
        <span className="section-label reveal">{t.education.sectionLabel}</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-head font-bold leading-tight tracking-tight mb-12 reveal">
          {t.education.heading1}
          <br />
          {t.education.heading2}
        </h2>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:flex relative reveal">
          <div className="absolute top-3 left-0 right-0 h-0.5 bg-gray-200" />
          {EDU.map(({ year, degree, school, last }) => (
            <div key={degree} className="flex-1 relative pt-10 pr-6">
              <div
                className={`absolute top-1.5 left-0 w-3 h-3 rounded-full border-2 z-10
                  ${
                    last
                      ? "bg-accent border-accent shadow-[0_0_0_4px_#ede9fe]"
                      : "bg-white border-gray-300"
                  }`}
              />
              <div className="text-xs text-accent font-head font-semibold mb-1">
                {year}
              </div>
              <div className="font-head font-bold text-base">{degree}</div>
              <div className="text-sm text-gray-500">{school}</div>
            </div>
          ))}
        </div>

        {/* Mobile stacked */}
        <div className="md:hidden flex flex-col gap-6 reveal">
          {EDU.map(({ year, degree, school, last }) => (
            <div key={degree} className="flex items-start gap-4 pl-2">
              <div
                className={`mt-1 w-3 h-3 rounded-full border-2 flex-shrink-0
                ${
                  last ? "bg-accent border-accent" : "bg-white border-gray-300"
                }`}
              />
              <div>
                <div className="text-xs text-accent font-head font-semibold">
                  {year}
                </div>
                <div className="font-head font-bold">{degree}</div>
                <div className="text-sm text-gray-500">{school}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
