export interface AnswerFeedback {
  message: string;
  meme?: string; // future: image path
}

export interface Question {
  id: number;
  label: string;
  question: string;
  options: string[];
  correct: number;
  feedback: AnswerFeedback[];
}

export interface QuizResult {
  emoji: string;
  title: string;
  msg: string;
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    label: "Question 1 / 5 · ⚽ Personal",
    question: "What position does Alix play in football?",
    options: ["Goalkeeper", "Defender", "Midfielder", "Striker"],
    correct: 1,
    feedback: [
      { message: "Goalkeeper? Last line of defense. Not Alix's style." },
      { message: "Solid at the back. No bugs get past the backline." },
      { message: "Controlling the game sounds nice... but no." },
      { message: "All attack, no defense? Missing the point." },
    ],
  },
  {
    id: 2,
    label: "Question 2 / 5 · 🎮 Personal",
    question: "What's Alix's go-to video game genre?",
    options: ["FPS", "RPG", "Strategy", "Sports"],
    correct: 0,
    feedback: [
      { message: "Headshots in-game, hotfixes in prod. Same reflexes." },
      { message: "A 200-hour RPG? Alix values sleep too." },
      { message: "Too much thinking. Already does that at work." },
      { message: "Playing football IRL is enough." },
    ],
  },
  {
    id: 3,
    label: "Question 3 / 5 · ✈️ Personal",
    question: "If Alix could travel anywhere right now, where would it be?",
    options: ["Japan", "USA", "Brazil", "Australia"],
    correct: 0,
    feedback: [
      { message: "Culture, ramen, and pixel-perfect design. Easy choice. 🗾" },
      { message: "Silicon Valley dream? Not quite." },
      { message: "Carnaval sounds fun though." },
      { message: "Spiders the size of your hand. Hard pass." },
    ],
  },
  {
    id: 4,
    label: "Question 4 / 5 · 🐍 Technical",
    question: "What's Alix's favorite programming language?",
    options: ["Pascal", "COBOL", "Python", "Fortran"],
    correct: 2,
    feedback: [
      {
        message:
          "Pascal? Are you trolling? That's a museum exhibit, not a language. 💀",
      },
      { message: "COBOL? Bold choice for someone born after 1970." },
      { message: "Obviously. Clean, powerful, and snakes are cool. 🐍" },
      { message: "Fortran. At least you're original." },
    ],
  },
  {
    id: 5,
    label: "Question 5 / 5 · ☕ Personal",
    question: "How many coffees does Alix drink per day?",
    options: ["1 ☕", "2 ☕☕", "3 ☕☕☕", "0 — just vibes 🧃"],
    correct: 3,
    feedback: [
      { message: "One coffee? Still one too many." },
      { message: "The dev stereotype. Not Alix." },
      { message: "Three coffees? Absolutely not." },
      { message: "Zero. The easter egg doesn't lie. Alix hates coffee. 🧃" },
    ],
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
