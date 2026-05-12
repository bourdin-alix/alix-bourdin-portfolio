export interface Question {
  id: number;
  slug: string;
  correct: number;
  feedback: { meme?: string }[];
}

export interface QuizResult {
  emoji: string;
  meme?: string;
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    slug: "q1",
    correct: 1,
    feedback: [
      {
        meme: "https://media1.tenor.com/m/6iuqhjh5vHgAAAAd/michy-batshuayi.gif",
      },
      {
        meme: "https://media1.tenor.com/m/dJLYuptX_lEAAAAC/sergio-ramos-river.gif",
      },
      {
        meme: "https://media1.tenor.com/m/6iuqhjh5vHgAAAAd/michy-batshuayi.gif",
      },
      {
        meme: "https://media1.tenor.com/m/6iuqhjh5vHgAAAAd/michy-batshuayi.gif",
      },
    ],
  },
  {
    id: 2,
    slug: "q2",
    correct: 0,
    feedback: [
      {
        meme: "https://media1.tenor.com/m/7RA3rtOFYVkAAAAd/very-nice-excellent.gif",
      },
      { meme: "https://media1.tenor.com/m/6-sW1bbBIRoAAAAC/air-ball.gif" },
      { meme: "https://media1.tenor.com/m/6-sW1bbBIRoAAAAC/air-ball.gif" },
      { meme: "https://media1.tenor.com/m/6-sW1bbBIRoAAAAC/air-ball.gif" },
    ],
  },
  {
    id: 3,
    slug: "q3",
    correct: 0,
    feedback: [
      {
        meme: "https://media1.tenor.com/m/uOHj2K7TsQQAAAAC/dragon-ball-goku.gif",
      },
      {
        meme: "https://media1.tenor.com/m/81qX_d9U9GQAAAAd/yamcha-yamcha-death-pose.gif",
      },
      {
        meme: "https://media1.tenor.com/m/81qX_d9U9GQAAAAd/yamcha-yamcha-death-pose.gif",
      },
      {
        meme: "https://media1.tenor.com/m/81qX_d9U9GQAAAAd/yamcha-yamcha-death-pose.gif",
      },
    ],
  },
  {
    id: 4,
    slug: "q4",
    correct: 2,
    feedback: [
      {
        meme: "https://media1.tenor.com/m/T42cqp6YKEEAAAAC/damn-damn-damn-damn.gif",
      },
      { meme: "https://media1.tenor.com/m/EIgwLZREaWoAAAAC/nope-no.gif" },
      { meme: "https://media1.tenor.com/m/6vjzHxepwDkAAAAC/pout-kiss.gif" },
      { meme: "https://media1.tenor.com/m/EIgwLZREaWoAAAAC/nope-no.gif" },
    ],
  },
  {
    id: 5,
    slug: "q5",
    correct: 3,
    feedback: [
      { meme: "https://media1.tenor.com/m/vPKL-jpIvPwAAAAd/shrek.gif" },
      { meme: "https://media1.tenor.com/m/vPKL-jpIvPwAAAAd/shrek.gif" },
      { meme: "https://media1.tenor.com/m/vPKL-jpIvPwAAAAd/shrek.gif" },
      { meme: "https://media1.tenor.com/m/mihaFlWstesAAAAd/john-cena.gif" },
    ],
  },
];

export const RESULTS: Record<number, QuizResult> = {
  5: {
    emoji: "🏆",
    meme: "https://media1.tenor.com/m/pg5XnnpbaZYAAAAC/emilien-12coupsdemidi.gif",
  },
  4: {
    emoji: "💪",
    meme: "https://media1.tenor.com/m/3gPvMpiZ9A0AAAAd/h-o-l-y-s-h-i-t-boom.gif",
  },
  3: {
    emoji: "😄",
    meme: "https://media1.tenor.com/m/ry0_qC8zaGMAAAAd/pesado-dios-mio.gif",
  },
  2: {
    emoji: "🤔",
    meme: "https://media1.tenor.com/m/jEea_fsP-IAAAAAd/monkey-thinking.gif",
  },
  1: {
    emoji: "😅",
    meme: "https://media1.tenor.com/m/jEea_fsP-IAAAAAd/monkey-thinking.gif",
  },
  0: {
    emoji: "💀",
    meme: "https://media1.tenor.com/m/61_Dk_6lhAYAAAAd/bad-mood-angry.gif",
  },
};
