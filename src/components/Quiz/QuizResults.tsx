import { QuizResult } from "../../data/quiz";

interface Props {
  score: number;
  total: number;
  result: QuizResult;
}

export default function QuizResults({ score, total, result }: Props) {
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
      <h3 className="font-head font-bold text-white text-2xl mt-3 mb-2">
        {result.title}
      </h3>
      <p className="text-white/50 mb-8">{result.msg}</p>
      <a href="#contact" className="btn-primary">
        Contact Alix →
      </a>
    </div>
  );
}
