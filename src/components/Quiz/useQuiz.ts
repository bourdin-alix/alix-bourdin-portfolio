import { useState } from "react";
import { QUESTIONS } from "../../data/quiz-questions";
import { RESULTS } from "../../data/quiz-results";

export function useQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  function handleSelect(idx: number) {
    if (selectedIdx !== null) return;
    setSelectedIdx(idx);
    setAnswers((prev) => [...prev, idx === QUESTIONS[current].correct]);
  }

  function handleNext() {
    if (current < QUESTIONS.length - 1) {
      setCurrent((c) => c + 1);
      setSelectedIdx(null);
    } else {
      setDone(true);
    }
  }

  const score = answers.filter(Boolean).length;
  const progress = (current / QUESTIONS.length) * 100;
  const result = RESULTS[score] ?? RESULTS[0];

  return {
    question: QUESTIONS[current],
    selectedIdx,
    done,
    score,
    progress,
    result,
    handleSelect,
    handleNext,
    isLast: current === QUESTIONS.length - 1,
  };
}
