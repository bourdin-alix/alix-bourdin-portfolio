import { HOBBIES } from "../data/hobbies";

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <span className="section-label reveal">Outside the code</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-head font-bold leading-tight tracking-tight mb-10 reveal">
          Beyond the Editor
        </h2>

        <div className="flex flex-wrap gap-4">
          {HOBBIES.map(({ icon, name, desc }) => (
            <div
              key={name}
              className="flex-1 min-w-[130px] border border-gray-200 rounded-xl p-6 text-center bg-white
                         hover:border-accent hover:bg-accent-light hover:-translate-y-1 transition-all duration-250 cursor-default reveal"
            >
              <div className="text-4xl mb-2">{icon}</div>
              <div className="font-head font-bold text-base">{name}</div>
              <div className="text-xs text-gray-400 mt-1">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
