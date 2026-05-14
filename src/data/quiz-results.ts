export interface QuizResult {
  emoji: string;
  meme?: string;
}

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
