import { useState } from 'react'

const WORDS = ['Je ', 'bois ', 'deux ', 'cafés ', 'par ', 'jour']
const HIDDEN = 'Je déteste le café !!!'

// Crack SVG overlays — one per click
const CRACKS = [
  <svg key={1} className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 40"><path d="M80 5 L95 20 L85 35" stroke="#7c3aed" strokeWidth="1.5" fill="none" opacity="0.6"/></svg>,
  <svg key={2} className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 40"><path d="M80 5 L95 20 L85 35" stroke="#7c3aed" strokeWidth="1.5" fill="none" opacity="0.7"/><path d="M150 2 L140 18 L155 22 L145 38" stroke="#7c3aed" strokeWidth="1.5" fill="none" opacity="0.5"/></svg>,
  <svg key={3} className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 40"><path d="M80 5 L95 20 L85 35" stroke="#7c3aed" strokeWidth="2" fill="none"/><path d="M150 2 L140 18 L155 22 L145 38" stroke="#7c3aed" strokeWidth="1.5" fill="none"/><path d="M200 8 L210 20 L195 28 L205 38" stroke="#7c3aed" strokeWidth="1.5" fill="none" opacity="0.7"/></svg>,
  <svg key={4} className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 40"><path d="M80 5 L95 20 L85 35" stroke="#7c3aed" strokeWidth="2.5" fill="none"/><path d="M150 2 L140 18 L155 22 L145 38" stroke="#7c3aed" strokeWidth="2" fill="none"/><path d="M200 8 L210 20 L195 28 L205 38" stroke="#7c3aed" strokeWidth="2" fill="none"/><path d="M30 10 L50 20 L35 30" stroke="#7c3aed" strokeWidth="1.5" fill="none"/><path d="M250 5 L260 22 L248 35" stroke="#7c3aed" strokeWidth="1.5" fill="none"/></svg>,
]

const shakeAnim = [
  '',
  'animate-[wiggle1_0.3s_ease]',
  'animate-[wiggle2_0.3s_ease]',
  'animate-[wiggle3_0.3s_ease]',
  'animate-[wiggle4_0.4s_ease]',
]

export function CafeEasterEgg() {
  const [clicks, setClicks] = useState(0)
  const [shattered, setShattered] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [shaking, setShaking] = useState(false)

  function handleClick() {
    if (revealed) return
    const next = clicks + 1
    setClicks(next)
    setShaking(true)
    setTimeout(() => setShaking(false), 350)

    if (next >= 5) {
      setShattered(true)
      setTimeout(() => setRevealed(true), 600)
    }
  }

  if (revealed) {
    return (
      <span className="inline-flex items-center gap-2 font-semibold text-accent animate-[popIn_0.5s_cubic-bezier(0.34,1.56,0.64,1)_forwards]">
        Je déteste le café !!! ☕🚫
      </span>
    )
  }

  return (
    <span className="relative inline-block">
      {/* Crack overlays */}
      {clicks > 0 && CRACKS[Math.min(clicks - 1, 3)]}

      {/* The phrase — shatters on 5th click */}
      <span
        className={`inline-flex gap-0 transition-all duration-500 ${
          shattered ? 'opacity-0 scale-110 blur-sm' : ''
        } ${shaking ? 'animate-[shake_0.3s_ease]' : ''}`}
        style={{ display: 'inline-flex', flexWrap: 'wrap' }}
      >
        {WORDS.map((word, i) => {
          const isCafe = word.trim() === 'cafés'
          return (
            <span
              key={i}
              onClick={isCafe ? handleClick : undefined}
              className={`transition-all duration-300 ${
                shattered
                  ? i % 2 === 0
                    ? 'translate-y-[-20px] opacity-0 rotate-[-15deg]'
                    : 'translate-y-[20px] opacity-0 rotate-[15deg]'
                  : ''
              } ${
                isCafe
                  ? 'text-accent underline decoration-dashed decoration-accent/50 cursor-pointer hover:decoration-solid hover:text-accent-dark select-none'
                  : ''
              }`}
              title={isCafe ? `${5 - clicks} click${5 - clicks !== 1 ? 's' : ''} restant${5 - clicks !== 1 ? 's' : ''}...` : undefined}
            >
              {word}
            </span>
          )
        })}
      </span>
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <span className="section-label reveal">About</span>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-head font-bold leading-tight tracking-tight mb-5">
              "Building fast,<br />
              <span className="text-accent">shipping faster.</span>"
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              I'm a fullstack developer with a Master 2 from Epitech. I spent 3 years at fast-moving French
              startups — where I learned to build end-to-end, own features, and ship things that matter.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Now freelancing, I bring that startup mindset — speed, ownership, pragmatism — to every project I take on.
            </p>
            {/* Easter egg sentence */}
            <p className="text-gray-500 leading-relaxed">
              <CafeEasterEgg />
            </p>
          </div>

          {/* Right */}
          <div className="reveal">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { num: '3', label: 'Years exp' },
                { num: '3', label: 'Startups' },
                { num: '5+', label: 'Projects' },
              ].map(({ num, label }) => (
                <div key={label} className="border border-gray-200 rounded-xl p-4 text-center">
                  <div className="text-3xl font-extrabold font-head text-accent">{num}</div>
                  <div className="text-xs text-gray-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
            <div className="bg-accent-light border-l-4 border-accent rounded-lg p-4">
              <p className="text-sm text-accent-dark italic">
                "Give me a clear problem and I'll have a working solution before the standup ends."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
