import { useRef } from "react";
import { useT } from "../hooks/useT";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { CafeEasterEgg } from "./CafeEasterEgg";

export default function About() {
  const t = useT();
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 xl:py-36 border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <span className="section-label reveal">{t.about.sectionLabel}</span>

        <div className="grid md:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left */}
          <div className="reveal">
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-head font-bold leading-tight tracking-tight mb-5">
              {t.about.heading1}
              <br />
              <span className="text-accent">{t.about.heading2}</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">{t.about.bio1}</p>
            {t.about.bio2 && (
              <p className="text-gray-500 leading-relaxed mb-4">
                {t.about.bio2}
              </p>
            )}
            <p className="text-gray-500 leading-relaxed mb-4">
              {t.about.routine}
            </p>
            {/* Easter egg sentence */}
            <p className="text-gray-500 leading-relaxed">
              <CafeEasterEgg
                words={t.about.easterEggWords}
                hidden={t.about.easterEggHidden}
              />
            </p>
          </div>

          {/* Right */}
          <div className="reveal">
            <div className="grid grid-cols-3 gap-4 mb-6 xl:mb-8">
              {[
                { num: "3", label: t.about.statsYears },
                { num: "3", label: t.about.statsStartups },
                { num: "5+", label: t.about.statsProjects },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="border border-gray-200 rounded-xl p-4 xl:p-6 text-center"
                >
                  <div className="text-3xl font-extrabold font-head text-accent">
                    {num}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
            <div className="bg-accent-light border-l-4 border-accent rounded-lg p-4 mb-6">
              <p className="text-sm text-accent-dark italic">
                "{t.about.quote}"
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="text-gray-500 text-sm leading-relaxed">
                {t.about.quizTeaser}
              </p>
              <a
                href="#quiz"
                className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white font-head font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
              >
                {t.about.quizCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
