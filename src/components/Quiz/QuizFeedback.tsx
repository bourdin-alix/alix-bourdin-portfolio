import { Question } from "../../data/quiz-questions";
import { useT } from "../../hooks/useT";

interface Props {
  question: Question;
  selectedIdx: number;
}

export default function QuizFeedback({ question, selectedIdx }: Props) {
  const t = useT();
  const tQuestion =
    t.quiz.questions[question.slug as keyof typeof t.quiz.questions];
  const isCorrect = selectedIdx === question.correct;
  const feedback = question.feedback[selectedIdx];
  const message = tQuestion.feedback[selectedIdx];

  return (
    <div
      className={`mt-4 rounded-lg px-6 py-4 flex items-center gap-4 ${
        isCorrect
          ? "bg-emerald-400/10 text-emerald-300"
          : "bg-red-400/10 text-red-300"
      }`}
    >
      <p className="text-base flex-1">
        {isCorrect ? t.quiz.correctLabel : t.quiz.wrongLabel} {message}
      </p>
      {feedback.meme && (
        <img
          src={feedback.meme}
          alt="meme"
          className="w-40 h-40 object-cover rounded-lg flex-shrink-0"
        />
      )}
    </div>
  );
}
