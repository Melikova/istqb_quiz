export type GameState = "start" | "playing"| "end";

export interface Question {
    id: number,
    question: string;
    options: string[][];
    correct: number;
    shuffledOptions?: string[][];
    correctIndexInShuffled?: number;
    keyPoints: string;
}