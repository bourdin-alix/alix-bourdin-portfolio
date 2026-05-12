import { LINKS } from "../data/contact";
import { useT } from "../hooks/useT";

export default function Contact() {
  const t = useT();

  return (
    <>
      <section id="contact" className="py-24 bg-dark border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="text-xs font-head font-semibold tracking-widest uppercase text-accent-mid block mb-3">
                {t.contact.sectionLabel}
              </span>
              <h2 className="font-head font-bold text-white leading-tight tracking-tight text-[clamp(1.8rem,4vw,3rem)] mb-4">
                {t.contact.heading1}
                <br />
                <span className="text-accent-mid">{t.contact.heading2}</span>
                <br />
                {t.contact.heading3}
              </h2>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                {t.contact.sub}
              </p>
            </div>

            <div className="flex flex-col gap-3 reveal">
              {LINKS.map(({ icon, label, sub, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 border border-white/8 rounded-xl text-white/60 hover:text-accent-mid hover:border-accent-mid/30 transition-all no-underline"
                >
                  <div className="w-9 h-9 bg-accent/20 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {label}
                    </div>
                    <div className="text-xs text-white/40">{sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark border-t border-white/5 py-5">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center text-xs text-white/25">
          <span>{t.contact.footer}</span>
          <span>{t.contact.footerSub}</span>
        </div>
      </footer>
    </>
  );
}
