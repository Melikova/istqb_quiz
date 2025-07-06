export type GameState = "entry" | "start" | "playing"| "end";

export interface Question {
    id: number,
    topicId: string,
    question: string;
    options: string[][];
    correct: number;
    shuffledOptions?: string[][];
    correctIndexInShuffled?: number;
    keyPoints: string;
}
