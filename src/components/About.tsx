import { useState } from "react";
import { useT } from "../hooks/useT";

interface CafeEasterEggProps {
  words: string[];
  hidden: string;
}

const CRACKS = [
  <svg
    key={1}
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 300 40"
    style={{ filter: "drop-shadow(0 0 3px #7c3aed)" }}
  >
    <path
      className="crack-line"
      d="M145 0 L158 12 L150 22 L162 40"
      stroke="#7c3aed"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      className="crack-line"
      d="M150 22 L138 34"
      stroke="#7c3aed"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      style={{ animationDelay: "0.12s" }}
    />
  </svg>,
  <svg
    key={2}
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 300 40"
    style={{ filter: "drop-shadow(0 0 5px #7c3aed)" }}
  >
    <path
      className="crack-line"
      d="M145 0 L158 12 L150 22 L162 40"
      stroke="#7c3aed"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      className="crack-line"
      d="M150 22 L138 34"
      stroke="#7c3aed"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      style={{ animationDelay: "0.08s" }}
    />
    <path
      className="crack-line"
      d="M55 5 L44 18 L58 30 L48 40"
      stroke="#7c3aed"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ animationDelay: "0.06s" }}
    />
    <path
      className="crack-line"
      d="M235 3 L248 16 L236 27 L245 40"
      stroke="#7c3aed"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ animationDelay: "0.1s" }}
    />
    <path
      className="crack-line"
      d="M158 12 L172 20 L168 36"
      stroke="#7c3aed"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      opacity="0.7"
      style={{ animationDelay: "0.15s" }}
    />
  </svg>,
];

const SCATTER = [
  { x: -30, y: -40, rot: -25 },
  { x: -8, y: 38, rot: 20 },
  { x: 18, y: -32, rot: -18 },
  { x: 28, y: 32, rot: 22 },
  { x: -26, y: 22, rot: -20 },
  { x: 12, y: -38, rot: 15 },
  { x: 32, y: 18, rot: -22 },
  { x: -22, y: -28, rot: 25 },
  { x: 22, y: 42, rot: -15 },
  { x: -16, y: 32, rot: 18 },
  { x: 26, y: -22, rot: -25 },
  { x: -28, y: -38, rot: 20 },
];

export function CafeEasterEgg({ words, hidden }: CafeEasterEggProps) {
  const [clicks, setClicks] = useState(0);
  const [shattered, setShattered] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [shaking, setShaking] = useState(false);

  function handleClick() {
    if (revealed) return;
    const next = clicks + 1;
    setClicks(next);
    setShaking(true);
    setTimeout(() => setShaking(false), 350);

    if (next >= 3) {
      setShattered(true);
      setTimeout(() => setRevealed(true), 600);
    }
  }

  if (revealed) {
    return (
      <span className="inline-flex items-center gap-2 font-semibold text-accent animate-[popIn_0.5s_cubic-bezier(0.34,1.56,0.64,1)_forwards]">
        {hidden} ☕🚫
      </span>
    );
  }

  return (
    <span className="relative inline-block">
      {clicks > 0 && CRACKS[Math.min(clicks - 1, 1)]}

      <span
        onClick={handleClick}
        className={`inline-flex flex-wrap gap-0 transition-all duration-500 cursor-pointer select-none ${
          shattered ? "opacity-0 scale-110 blur-sm" : ""
        } ${
          shaking
            ? clicks >= 2
              ? "animate-[shake-hard_0.45s_ease]"
              : "animate-[shake_0.3s_ease]"
            : ""
        }`}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="whitespace-pre transition-all duration-500"
            style={
              shattered
                ? {
                    transform: `translate(${SCATTER[i].x}px, ${SCATTER[i].y}px) rotate(${SCATTER[i].rot}deg) scale(0.4)`,
                    opacity: 0,
                  }
                : {}
            }
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  );
}

export default function About() {
  const t = useT();

  return (
    <section id="about" className="py-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <span className="section-label reveal">{t.about.sectionLabel}</span>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-head font-bold leading-tight tracking-tight mb-5">
              {t.about.heading1}
              <br />
              <span className="text-accent">{t.about.heading2}</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">{t.about.bio1}</p>
            <p className="text-gray-500 leading-relaxed mb-4">{t.about.bio2}</p>
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
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { num: "3", label: t.about.statsYears },
                { num: "3", label: t.about.statsStartups },
                { num: "5+", label: t.about.statsProjects },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="border border-gray-200 rounded-xl p-4 text-center"
                >
                  <div className="text-3xl font-extrabold font-head text-accent">
                    {num}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
            <div className="bg-accent-light border-l-4 border-accent rounded-lg p-4">
              <p className="text-sm text-accent-dark italic">
                "{t.about.quote}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
