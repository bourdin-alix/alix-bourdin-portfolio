export interface Question {
  id: number;
  type?: "coffee" | "personal" | "technical";
  label: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface QuizResult {
  emoji: string;
  title: string;
  msg: string;
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    type: "coffee",
    label: "Question 1 / 5 · ☕ Personal",
    question: "How many coffees does Alix drink per day?",
    options: ["1 ☕", "2 ☕☕", "3 ☕☕☕", "0 — just vibes 🧃"],
    correct: 1,
    explanation: "Two coffees minimum to reach peak developer mode. ☕☕",
  },
  {
    id: 2,
    label: "Question 2 / 5 · ⚽ Personal",
    question: "What position does Alix play in football?",
    options: ["Goalkeeper", "Defender", "Midfielder", "Striker"],
    correct: 2,
    explanation:
      "Midfielder — controlling the game, just like controlling the codebase.",
  },
  {
    id: 3,
    label: "Question 3 / 5 · 🎮 Personal",
    question: "What's Alix's go-to video game genre?",
    options: ["FPS", "RPG", "Strategy", "Sports"],
    correct: 0,
    explanation: "FPS — fast reflexes carry over to debugging sessions too.",
  },
  {
    id: 4,
    label: "Question 4 / 5 · ✈️ Personal",
    question: "If Alix could travel anywhere right now, where would it be?",
    options: ["Japan", "USA", "Brazil", "Australia"],
    correct: 0,
    explanation: "Japan — the culture, the food, and yes, the tech.",
  },
  {
    id: 5,
    label: "Question 5 / 5 · 💻 Technical",
    question: 'What HTTP status code means "I\'m a teapot"?',
    options: ["404", "418", "500", "200"],
    correct: 1,
    explanation:
      "418 I'm a Teapot — the most important RFC ever written. Any real fullstack dev knows this. ☕",
  },
];

export const RESULTS: Record<number, QuizResult> = {
  5: {
    emoji: "🏆",
    title: "You ARE Emilien!",
    msg: "Legendary status unlocked. Les 12 Coups de Midi would never be the same.",
  },
  4: {
    emoji: "💪",
    title: "Almost Emilien level!",
    msg: "Respect. You clearly paid attention. One slip-up away from legend status.",
  },
  3: {
    emoji: "😄",
    title: "Not bad at all!",
    msg: "You know your stuff — just not all of it. Good try!",
  },
  2: {
    emoji: "🤔",
    title: "Still learning...",
    msg: "Good try! Even champions lose sometimes. Emilien remains undefeated.",
  },
  1: {
    emoji: "😅",
    title: "Lucky guess?",
    msg: "One point is a start. Emilien sends his regards.",
  },
  0: {
    emoji: "💀",
    title: "Emilien is not impressed.",
    msg: "0/5. Remarkable in its own way. Emilien sends his regards.",
  },
};
