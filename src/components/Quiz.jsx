import { useState } from 'react'

const QUESTIONS = [
  {
    id: 1,
    type: 'coffee',
    label: 'Question 1 / 5 · ☕ Personal',
    question: 'How many coffees does Alix drink per day?',
    options: ['1 ☕', '2 ☕☕', '3 ☕☕☕', '0 — just vibes 🧃'],
    correct: 1,
    explanation: 'Two coffees minimum to reach peak developer mode. ☕☕',
  },
  {
    id: 2,
    label: 'Question 2 / 5 · ⚽ Personal',
    question: 'What position does Alix play in football?',
    options: ['Goalkeeper', 'Defender', 'Midfielder', 'Striker'],
    correct: 2,
    explanation: 'Midfielder — controlling the game, just like controlling the codebase.',
  },
  {
    id: 3,
    label: 'Question 3 / 5 · 🎮 Personal',
    question: "What's Alix's go-to video game genre?",
    options: ['FPS', 'RPG', 'Strategy', 'Sports'],
    correct: 0,
    explanation: 'FPS — fast reflexes carry over to debugging sessions too.',
  },
  {
    id: 4,
    label: 'Question 4 / 5 · ✈️ Personal',
    question: 'If Alix could travel anywhere right now, where would it be?',
    options: ['Japan', 'USA', 'Brazil', 'Australia'],
    correct: 0,
    explanation: 'Japan — the culture, the food, and yes, the tech.',
  },
  {
    id: 5,
    label: 'Question 5 / 5 · 💻 Technical',
    question: "What HTTP status code means \"I'm a teapot\"?",
    options: ['404', '418', '500', '200'],
    correct: 1,
    explanation: "418 I'm a Teapot — the most important RFC ever written. Any real fullstack dev knows this. ☕",
  },
]

const RESULTS = {
  5: { emoji: '🏆', title: 'You ARE Emilien!', msg: 'Legendary status unlocked. Les 12 Coups de Midi would never be the same.' },
  4: { emoji: '💪', title: 'Almost Emilien level!', msg: 'Respect. You clearly paid attention. One slip-up away from legend status.' },
  3: { emoji: '😄', title: 'Not bad at all!', msg: 'You know your stuff — just not all of it. Good try!' },
  2: { emoji: '🤔', title: 'Still learning...', msg: 'Good try! Even champions lose sometimes. Emilien remains undefeated.' },
  1: { emoji: '😅', title: 'Lucky guess?', msg: 'One point is a start. Emilien sends his regards.' },
  0: { emoji: '💀', title: 'Emilien is not impressed.', msg: '0/5. Remarkable in its own way. Emilien sends his regards.' },
}

function CoffeeCups({ count }) {
  return (
    <div className="flex justify-center gap-2 mb-4">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={`text-2xl transition-all duration-300 ${i < count ? 'opacity-100 scale-110 cup-filled' : 'opacity-25'}`}
        >
          ☕
        </span>
      ))}
    </div>
  )
}

function QuizQuestion({ q, onAnswer }) {
  const [selected, setSelected] = useState(null)
  const [coffeeCups, setCoffeeCups] = useState(0)

  function handleSelect(idx) {
    if (selected !== null) return
    setSelected(idx)
    if (q.type === 'coffee') setCoffeeCups(idx + 1)
    onAnswer(idx === q.correct)
  }

  function optionClass(i) {
    if (selected === null) return 'border-white/10 text-white/80 hover:border-accent-mid hover:bg-accent/20 hover:text-white'
    if (i === q.correct) return 'border-emerald-400 bg-emerald-400/15 text-emerald-300'
    if (i === selected) return 'border-red-400 bg-red-400/10 text-red-300'
    return 'border-white/5 text-white/30'
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
      {q.type === 'coffee' && <CoffeeCups count={coffeeCups} />}
      <p className="text-xs text-accent-mid font-head font-semibold tracking-widest uppercase mb-2">{q.label}</p>
      <p className="text-xl font-head font-bold text-white mb-5 leading-snug">{q.question}</p>

      <div className="grid grid-cols-2 gap-2.5">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            disabled={selected !== null}
            className={`flex items-center gap-2.5 px-4 py-3 border rounded-lg text-sm text-left transition-all duration-200 ${optionClass(i)}`}
          >
            <span className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center text-xs flex-shrink-0">
              {selected !== null && i === q.correct ? '✓' : selected === i && i !== q.correct ? '✗' : String.fromCharCode(65 + i)}
            </span>
            {opt}
          </button>
        ))}
      </div>

      {selected !== null && (
        <p className={`mt-4 text-sm rounded-lg px-4 py-2.5 ${selected === q.correct ? 'bg-emerald-400/10 text-emerald-300' : 'bg-red-400/10 text-red-300'}`}>
          {selected === q.correct ? '✓ Correct! ' : '✗ Not quite. '}{q.explanation}
        </p>
      )}

      {selected !== null && (
        <button
          onClick={() => { /* handled by parent via onAnswer */ }}
          id="quiz-next"
          className="mt-5 w-full py-3 bg-accent hover:bg-accent-dark text-white font-head font-bold rounded-lg transition-colors"
        >
          Next →
        </button>
      )}
    </div>
  )
}

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [waitingNext, setWaitingNext] = useState(false)
  const [done, setDone] = useState(false)

  function handleAnswer(correct) {
    setAnswers((prev) => [...prev, correct])
    setWaitingNext(true)
  }

  function handleNext() {
    setWaitingNext(false)
    if (current < QUESTIONS.length - 1) {
      setCurrent((c) => c + 1)
    } else {
      setDone(true)
    }
  }

  const score = answers.filter(Boolean).length
  const progress = (current / QUESTIONS.length) * 100
  const result = RESULTS[score] || RESULTS[0]

  return (
    <section id="quiz" className="py-24 bg-dark border-t-0">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-head font-semibold tracking-widest uppercase text-accent-mid block mb-3">The Quiz</span>
          <h2 className="font-head font-bold text-white text-[clamp(1.8rem,4vw,2.8rem)] leading-tight mb-3">
            Can you beat Emilien?
          </h2>
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent-mid/30 rounded-full px-4 py-1.5 text-sm text-accent-mid">
            🏆 Emilien · Les 12 Coups de Midi · Score: 5/5 — literally unbeatable
          </div>
        </div>

        {!done ? (
          <>
            {/* Progress */}
            <div className="max-w-2xl mx-auto mb-2">
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
              <div className="flex justify-between text-xs text-white/30 mt-1.5">
                <span>{QUESTIONS[current].label}</span>
                <span>{current + 1} / {QUESTIONS.length}</span>
              </div>
            </div>

            <QuizQuestion
              key={current}
              q={QUESTIONS[current]}
              onAnswer={handleAnswer}
            />

            {waitingNext && (
              <div className="max-w-2xl mx-auto mt-4">
                <button
                  onClick={handleNext}
                  className="w-full py-3 bg-accent hover:bg-accent-dark text-white font-head font-bold rounded-lg transition-colors"
                >
                  {current < QUESTIONS.length - 1 ? 'Next question →' : 'See your results 🏆'}
                </button>
              </div>
            )}
          </>
        ) : (
          // Results
          <div className="text-center max-w-lg mx-auto pt-4">
            <div className="text-5xl mb-4 confetti-spin inline-block">{result.emoji}</div>
            <div className="font-head font-extrabold text-white leading-none" style={{ fontSize: 'clamp(4rem,12vw,7rem)' }}>
              <span className="text-accent-mid">{score}</span> / 5
            </div>
            <h3 className="font-head font-bold text-white text-2xl mt-3 mb-2">{result.title}</h3>
            <p className="text-white/50 mb-8">{result.msg}</p>
            <a href="#contact" className="btn-primary">Contact Alix →</a>
          </div>
        )}
      </div>
    </section>
  )
}
