import { HOBBIES } from "../data/hobbies";
import { useT } from "../hooks/useT";

export default function Hobbies() {
  const t = useT();

  return (
    <section id="hobbies" className="py-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
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
                className="flex-1 min-w-[130px] border border-gray-200 rounded-xl p-6 text-center bg-white
                           hover:border-accent hover:bg-accent-light hover:-translate-y-1 transition-all duration-250 cursor-default reveal"
              >
                <div className="text-4xl mb-2">{icon}</div>
                <div className="font-head font-bold text-base">{item.name}</div>
                <div className="text-xs text-gray-400 mt-1">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
