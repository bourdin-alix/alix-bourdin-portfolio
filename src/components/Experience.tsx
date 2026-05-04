import { JOBS } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <span className="section-label reveal">Experience</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-head font-bold leading-tight tracking-tight mb-10 reveal">
          3 Years,
          <br />3 Startups
        </h2>

        <div className="flex flex-col gap-5">
          {JOBS.map(({ company, role, period, desc, tags }) => (
            <div
              key={company}
              className="grid bg-white border border-gray-200 rounded-xl overflow-hidden reveal
                         hover:shadow-lg hover:translate-x-1 transition-all duration-250"
              style={{ gridTemplateColumns: "6px 1fr" }}
            >
              <div className="bg-accent" />
              <div className="p-5">
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
                  {desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
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
