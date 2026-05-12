import { QUESTIONS } from "../../data/quiz";
import { useQuiz } from "./useQuiz";
import QuizQuestion from "./QuizQuestion";
import QuizResults from "./QuizResults";

export default function Quiz() {
  const {
    question,
    selectedIdx,
    done,
    score,
    progress,
    result,
    handleSelect,
    handleNext,
    isLast,
  } = useQuiz();

  return (
    <section id="quiz" className="py-24 bg-dark border-t-0">
      <div className="max-w-5xl mx-auto px-6">
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
            <div className="max-w-2xl mx-auto mb-2">
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-white/30 mt-1.5">
                <span>{question.label}</span>
                <span>
                  {question.id} / {QUESTIONS.length}
                </span>
              </div>
            </div>

            <QuizQuestion
              question={question}
              selectedIdx={selectedIdx}
              onSelect={handleSelect}
            />

            {selectedIdx !== null && (
              <div className="max-w-2xl mx-auto mt-4">
                <button
                  onClick={handleNext}
                  className="w-full py-3 bg-accent hover:bg-accent-dark text-white font-head font-bold rounded-lg transition-colors"
                >
                  {isLast ? "See your results 🏆" : "Next question →"}
                </button>
              </div>
            )}
          </>
        ) : (
          <QuizResults score={score} total={QUESTIONS.length} result={result} />
        )}
      </div>
    </section>
  );
}
