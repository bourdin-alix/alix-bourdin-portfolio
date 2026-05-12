export interface AnswerFeedback {
  message: string;
  messageFr?: string;
  meme?: string; // future: image path
}

export interface Question {
  id: number;
  label: string;
  labelFr?: string;
  question: string;
  questionFr?: string;
  options: string[];
  optionsFr?: string[];
  correct: number;
  feedback: AnswerFeedback[];
}

export interface QuizResult {
  emoji: string;
  title: string;
  titleFr?: string;
  msg: string;
  msgFr?: string;
  meme?: string;
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    label: "Question 1 / 5 · ⚽ Personal",
    question: "What position does Alix play in football?",
    options: ["Goalkeeper", "Defender", "Midfielder", "Striker"],
    correct: 1,
    feedback: [
      {
        message: "Wrong. That one hit different.",
        meme: "https://media1.tenor.com/m/6iuqhjh5vHgAAAAd/michy-batshuayi.gif",
      },
      {
        message:
          "Defender. I tackle hard — usually get the ball. Sometimes the man. Ramos would be proud.",
        meme: "https://media1.tenor.com/m/dJLYuptX_lEAAAAC/sergio-ramos-river.gif",
      },
      {
        message: "Wrong. That one hit different.",
        meme: "https://media1.tenor.com/m/6iuqhjh5vHgAAAAd/michy-batshuayi.gif",
      },
      {
        message: "Wrong. That one hit different.",
        meme: "https://media1.tenor.com/m/6iuqhjh5vHgAAAAd/michy-batshuayi.gif",
      },
    ],
  },
  {
    id: 2,
    label: "Question 2 / 5 · 🎮 Personal",
    question: "What's Alix's go-to video game genre?",
    options: ["FPS", "RPG", "Strategy", "Sports"],
    correct: 0,
    feedback: [
      {
        message: "FPS. Headshots in-game, hotfixes in prod. Same reflexes.",
        meme: "https://media1.tenor.com/m/7RA3rtOFYVkAAAAd/very-nice-excellent.gif",
      },
      {
        message: "Airball. You were nowhere close.",
        meme: "https://media1.tenor.com/m/6-sW1bbBIRoAAAAC/air-ball.gif",
      },
      {
        message: "Airball. You were nowhere close.",
        meme: "https://media1.tenor.com/m/6-sW1bbBIRoAAAAC/air-ball.gif",
      },
      {
        message: "Airball. You were nowhere close.",
        meme: "https://media1.tenor.com/m/6-sW1bbBIRoAAAAC/air-ball.gif",
      },
    ],
  },
  {
    id: 3,
    label: "Question 3 / 5 · ✈️ Personal",
    question: "If Alix could travel anywhere right now, where would it be?",
    options: ["Japan", "USA", "Brazil", "Australia"],
    correct: 0,
    feedback: [
      {
        message:
          "Japan. Big Dragon Ball fan, big Japanese culture fan. The dream destination. 🐉",
        meme: "https://media1.tenor.com/m/uOHj2K7TsQQAAAAC/dragon-ball-goku.gif",
      },
      {
        message: "Not my dream destination.",
        meme: "https://media1.tenor.com/m/81qX_d9U9GQAAAAd/yamcha-yamcha-death-pose.gif",
      },
      {
        message: "Not my dream destination.",
        meme: "https://media1.tenor.com/m/81qX_d9U9GQAAAAd/yamcha-yamcha-death-pose.gif",
      },
      {
        message: "Not my dream destination.",
        meme: "https://media1.tenor.com/m/81qX_d9U9GQAAAAd/yamcha-yamcha-death-pose.gif",
      },
    ],
  },
  {
    id: 4,
    label: "Question 4 / 5 · 🐍 Technical",
    question: "What's Alix's favorite programming language?",
    options: ["Pascal", "React", "Python", "PHP"],
    correct: 2,
    feedback: [
      {
        message:
          "Pascal? Are you trolling? That's a museum exhibit, not a language. 💀",
        meme: "https://media1.tenor.com/m/T42cqp6YKEEAAAAC/damn-damn-damn-damn.gif",
      },
      {
        message: "Nope.",
        meme: "https://media1.tenor.com/m/EIgwLZREaWoAAAAC/nope-no.gif",
      },
      {
        message: "Obviously. Clean, powerful, and snakes are cool. 🐍",
        meme: "https://media1.tenor.com/m/6vjzHxepwDkAAAAC/pout-kiss.gif",
      },
      {
        message: "Nope.",
        meme: "https://media1.tenor.com/m/EIgwLZREaWoAAAAC/nope-no.gif",
      },
    ],
  },
  {
    id: 5,
    label: "Question 5 / 5 · ☕ Personal",
    question: "How many coffees does Alix drink per day?",
    options: ["1 ☕", "2 ☕☕", "3 ☕☕☕", "0 — just vibes 🧃"],
    correct: 3,
    feedback: [
      {
        message:
          "Wrong. But there's something hidden on this page about coffee... look closer. 👀",
        meme: "https://media1.tenor.com/m/vPKL-jpIvPwAAAAd/shrek.gif",
      },
      {
        message:
          "Wrong. But there's something hidden on this page about coffee... look closer. 👀",
        meme: "https://media1.tenor.com/m/vPKL-jpIvPwAAAAd/shrek.gif",
      },
      {
        message:
          "Wrong. But there's something hidden on this page about coffee... look closer. 👀",
        meme: "https://media1.tenor.com/m/vPKL-jpIvPwAAAAd/shrek.gif",
      },
      {
        message: "Zero?! How did you even figure that out?? 🧃",
        meme: "https://media1.tenor.com/m/mihaFlWstesAAAAd/john-cena.gif",
      },
    ],
  },
];

export const RESULTS: Record<number, QuizResult> = {
  5: {
    emoji: "🏆",
    title: "You're as good as Emilien...",
    msg: "...but not better. The legend stays undefeated.",
    meme: "https://media1.tenor.com/m/pg5XnnpbaZYAAAAC/emilien-12coupsdemidi.gif",
  },
  4: {
    emoji: "💪",
    title: "Great score!",
    msg: "I'm genuinely impressed. Didn't see that coming.",
    meme: "https://media1.tenor.com/m/3gPvMpiZ9A0AAAAd/h-o-l-y-s-h-i-t-boom.gif",
  },
  3: {
    emoji: "😄",
    title: "Not bad...",
    msg: "But could do better. Emilien would have nailed all five.",
    meme: "https://media1.tenor.com/m/ry0_qC8zaGMAAAAd/pesado-dios-mio.gif",
  },
  2: {
    emoji: "🤔",
    title: "That's pretty bad.",
    msg: "Two out of five. Did you guess, or is it actually worse?",
    meme: "https://media1.tenor.com/m/jEea_fsP-IAAAAAd/monkey-thinking.gif",
  },
  1: {
    emoji: "😅",
    title: "That's really bad.",
    msg: "One point out of 5. Was that on purpose? Emilien is devastated.",
    meme: "https://media1.tenor.com/m/jEea_fsP-IAAAAAd/monkey-thinking.gif",
  },
  0: {
    emoji: "💀",
    title: "That's embarrassing.",
    msg: "I've never seen anything like this. Never. Neither has Emilien.",
    meme: "https://media1.tenor.com/m/61_Dk_6lhAYAAAAd/bad-mood-angry.gif",
  },
};
