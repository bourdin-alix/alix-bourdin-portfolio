import { Question } from "../../data/quiz";
import QuizFeedback from "./QuizFeedback";

interface Props {
  question: Question;
  selectedIdx: number | null;
  onSelect: (idx: number) => void;
}

function getOptionClass(
  i: number,
  selectedIdx: number | null,
  correct: number,
) {
  if (selectedIdx === null)
    return "border-white/10 text-white/80 hover:border-accent-mid hover:bg-accent/20 hover:text-white";
  if (i === correct)
    return "border-emerald-400 bg-emerald-400/15 text-emerald-300";
  if (i === selectedIdx) return "border-red-400 bg-red-400/10 text-red-300";
  return "border-white/5 text-white/30";
}

function getOptionLabel(
  i: number,
  selectedIdx: number | null,
  correct: number,
) {
  if (selectedIdx !== null && i === correct) return "✓";
  if (selectedIdx === i && i !== correct) return "✗";
  return String.fromCharCode(65 + i);
}

export default function QuizQuestion({
  question,
  selectedIdx,
  onSelect,
}: Props) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
      <p className="text-xs text-accent-mid font-head font-semibold tracking-widest uppercase mb-2">
        {question.label}
      </p>
      <p className="text-xl font-head font-bold text-white mb-5 leading-snug">
        {question.question}
      </p>

      <div className="grid grid-cols-2 gap-2.5">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            disabled={selectedIdx !== null}
            className={`flex items-center gap-2.5 px-4 py-3 border rounded-lg text-sm text-left transition-all duration-200 ${getOptionClass(
              i,
              selectedIdx,
              question.correct,
            )}`}
          >
            <span className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center text-xs flex-shrink-0">
              {getOptionLabel(i, selectedIdx, question.correct)}
            </span>
            {opt}
          </button>
        ))}
      </div>

      {selectedIdx !== null && (
        <QuizFeedback question={question} selectedIdx={selectedIdx} />
      )}
    </div>
  );
}
