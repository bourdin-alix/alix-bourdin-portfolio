import { PROJECTS } from "../data/projects";
import { useT } from "../hooks/useT";
import { VideoPreview } from "./VideoPreview";
import { StatusBadge } from "./StatusBadge";

export default function Projects() {
  const t = useT();
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projects" className="py-24 xl:py-36 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <span className="section-label reveal">{t.projects.sectionLabel}</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-head font-bold leading-tight tracking-tight mb-10 xl:mb-16 reveal">
          {t.projects.heading}
        </h2>

        <div className="grid md:grid-cols-2 gap-5 xl:gap-7">
          {/* Featured */}
          <div className="md:col-span-2 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-250 reveal">
            {featured.video && <VideoPreview src={featured.video} tall />}
            <div className="p-5 xl:p-8">
              <StatusBadge
                status={featured.status}
                labelLive={t.projects.statusLive}
                labelDev={t.projects.statusDev}
              />
              <h3 className="font-head font-bold text-xl mt-2 mb-1">
                {featured.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {
                  t.projects.descriptions[
                    featured.slug as keyof typeof t.projects.descriptions
                  ]
                }
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {featured.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              {featured.link && (
                <a
                  href={featured.link}
                  className="text-sm font-head font-semibold text-accent hover:text-accent-dark transition-colors"
                >
                  {t.projects.viewLive}
                </a>
              )}
            </div>
          </div>

          {/* Grid cards */}
          {rest.map(({ name, slug, status, tags, video }) => (
            <div
              key={name}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-250 reveal"
            >
              {video ? (
                <VideoPreview src={video} />
              ) : (
                <div className="h-36 bg-accent-light flex items-center justify-center text-accent-mid text-sm font-medium border-b border-gray-100">
                  [ {name} ]
                </div>
              )}
              <div className="p-5 xl:p-8">
                <StatusBadge
                  status={status}
                  labelLive={t.projects.statusLive}
                  labelDev={t.projects.statusDev}
                />
                <h3 className="font-head font-bold text-lg mt-2 mb-1">
                  {name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {
                    t.projects.descriptions[
                      slug as keyof typeof t.projects.descriptions
                    ]
                  }
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
