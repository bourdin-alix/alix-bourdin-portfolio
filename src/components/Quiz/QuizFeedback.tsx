import { Question } from "../../data/quiz";

interface Props {
  question: Question;
  selectedIdx: number;
}

export default function QuizFeedback({ question, selectedIdx }: Props) {
  const isCorrect = selectedIdx === question.correct;
  const feedback = question.feedback[selectedIdx];

  return (
    <p
      className={`mt-4 text-sm rounded-lg px-4 py-2.5 ${
        isCorrect
          ? "bg-emerald-400/10 text-emerald-300"
          : "bg-red-400/10 text-red-300"
      }`}
    >
      {isCorrect ? "✓ Correct! " : "✗ Not quite. "}
      {feedback.message}
    </p>
  );
}
