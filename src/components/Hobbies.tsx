import { useRef } from "react";
import { HOBBIES } from "../data/hobbies";
import { useT } from "../hooks/useT";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Hobbies() {
  const t = useT();
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="hobbies"
      className="py-24 border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <span className="section-label reveal">{t.hobbies.sectionLabel}</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-head font-bold leading-tight tracking-tight mb-10 reveal">
          {t.hobbies.heading}
        </h2>

        <div className="flex flex-wrap gap-4">
          {HOBBIES.map(({ icon, slug }) => {
            const item = t.hobbies.items[slug as keyof typeof t.hobbies.items];
            return (
              <div
                key={slug}
                className="group flex-1 min-w-[130px] border border-gray-200 rounded-xl p-6 text-center bg-white
                           hover:border-accent hover:bg-accent-light hover:-translate-y-1 transition-all duration-250 cursor-default reveal"
              >
                <div className="text-4xl mb-2">{icon}</div>
                <div className="font-head font-bold text-base">{item.name}</div>
                <div className="relative mt-1 text-xs min-h-[2.5rem]">
                  <span className="absolute inset-0 flex items-start justify-center text-gray-500 group-hover:opacity-0 transition-opacity duration-200">
                    {item.desc}
                  </span>
                  <span className="absolute inset-0 flex items-start justify-center text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {item.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
