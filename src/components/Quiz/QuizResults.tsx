import { QuizResult } from "../../data/quiz";
import { useT } from "../../hooks/useT";

interface Props {
  score: number;
  total: number;
  result: QuizResult;
}

export default function QuizResults({ score, total, result }: Props) {
  const t = useT();
  const tResult =
    t.quiz.results[score.toString() as keyof typeof t.quiz.results];

  return (
    <div className="text-center max-w-lg mx-auto pt-4">
      <div className="text-5xl mb-4 confetti-spin inline-block">
        {result.emoji}
      </div>
      <div
        className="font-head font-extrabold text-white leading-none"
        style={{ fontSize: "clamp(4rem,12vw,7rem)" }}
      >
        <span className="text-accent-mid">{score}</span> / {total}
      </div>
      <div className="flex items-center gap-6 mt-8 text-left">
        <div className="flex-1">
          <h3 className="font-head font-bold text-white text-2xl mb-2">
            {tResult.title}
          </h3>
          <p className="text-white/50">{tResult.msg}</p>
        </div>
        {result.meme && (
          <img
            src={result.meme}
            alt="meme"
            className="w-40 rounded-lg flex-shrink-0"
          />
        )}
      </div>
      <div className="mt-8">
        <a href="#contact" className="btn-primary">
          {t.quiz.contactBtn}
        </a>
      </div>
    </div>
  );
}
