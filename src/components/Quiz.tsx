import { useState } from "react";
import { QUESTIONS, RESULTS, Question } from "../data/quiz";

function CoffeeCups({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-2 mb-4">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={`text-2xl transition-all duration-300 ${
            i < count ? "opacity-100 scale-110 cup-filled" : "opacity-25"
          }`}
        >
          ☕
        </span>
      ))}
    </div>
  );
}

function QuizQuestion({
  q,
  onAnswer,
}: {
  q: Question;
  onAnswer: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [coffeeCups, setCoffeeCups] = useState(0);

  function handleSelect(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    if (q.type === "coffee") setCoffeeCups(idx + 1);
    onAnswer(idx === q.correct);
  }

  function optionClass(i: number) {
    if (selected === null)
      return "border-white/10 text-white/80 hover:border-accent-mid hover:bg-accent/20 hover:text-white";
    if (i === q.correct)
      return "border-emerald-400 bg-emerald-400/15 text-emerald-300";
    if (i === selected) return "border-red-400 bg-red-400/10 text-red-300";
    return "border-white/5 text-white/30";
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
      {q.type === "coffee" && <CoffeeCups count={coffeeCups} />}
      <p className="text-xs text-accent-mid font-head font-semibold tracking-widest uppercase mb-2">
        {q.label}
      </p>
      <p className="text-xl font-head font-bold text-white mb-5 leading-snug">
        {q.question}
      </p>

      <div className="grid grid-cols-2 gap-2.5">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            disabled={selected !== null}
            className={`flex items-center gap-2.5 px-4 py-3 border rounded-lg text-sm text-left transition-all duration-200 ${optionClass(
              i,
            )}`}
          >
            <span className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center text-xs flex-shrink-0">
              {selected !== null && i === q.correct
                ? "✓"
                : selected === i && i !== q.correct
                ? "✗"
                : String.fromCharCode(65 + i)}
            </span>
            {opt}
          </button>
        ))}
      </div>

      {selected !== null && (
        <p
          className={`mt-4 text-sm rounded-lg px-4 py-2.5 ${
            selected === q.correct
              ? "bg-emerald-400/10 text-emerald-300"
              : "bg-red-400/10 text-red-300"
          }`}
        >
          {selected === q.correct ? "✓ Correct! " : "✗ Not quite. "}
          {q.explanation}
        </p>
      )}
    </div>
  );
}

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [waitingNext, setWaitingNext] = useState(false);
  const [done, setDone] = useState(false);

  function handleAnswer(correct: boolean) {
    setAnswers((prev) => [...prev, correct]);
    setWaitingNext(true);
  }

  function handleNext() {
    setWaitingNext(false);
    if (current < QUESTIONS.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      setDone(true);
    }
  }

  const score = answers.filter(Boolean).length;
  const progress = (current / QUESTIONS.length) * 100;
  const result = RESULTS[score] || RESULTS[0];

  return (
    <section id="quiz" className="py-24 bg-dark border-t-0">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-head font-semibold tracking-widest uppercase text-accent-mid block mb-3">
            The Quiz
          </span>
          <h2 className="font-head font-bold text-white text-[clamp(1.8rem,4vw,2.8rem)] leading-tight mb-3">
            Can you beat Emilien?
          </h2>
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent-mid/30 rounded-full px-4 py-1.5 text-sm text-accent-mid">
            🏆 Emilien · Les 12 Coups de Midi · Score: 5/5 — literally
            unbeatable
          </div>
        </div>

        {!done ? (
          <>
            {/* Progress */}
            <div className="max-w-2xl mx-auto mb-2">
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-white/30 mt-1.5">
                <span>{QUESTIONS[current].label}</span>
                <span>
                  {current + 1} / {QUESTIONS.length}
                </span>
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
                  {current < QUESTIONS.length - 1
                    ? "Next question →"
                    : "See your results 🏆"}
                </button>
              </div>
            )}
          </>
        ) : (
          // Results
          <div className="text-center max-w-lg mx-auto pt-4">
            <div className="text-5xl mb-4 confetti-spin inline-block">
              {result.emoji}
            </div>
            <div
              className="font-head font-extrabold text-white leading-none"
              style={{ fontSize: "clamp(4rem,12vw,7rem)" }}
            >
              <span className="text-accent-mid">{score}</span> / 5
            </div>
            <h3 className="font-head font-bold text-white text-2xl mt-3 mb-2">
              {result.title}
            </h3>
            <p className="text-white/50 mb-8">{result.msg}</p>
            <a href="#contact" className="btn-primary">
              Contact Alix →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
