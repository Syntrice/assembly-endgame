import { GameState } from "../models/game-state";

export interface GameLogic {
    lives: number;
    word: string;
    gussedLetters: string[];
    gameState: GameState;
}

export default function useGameLogic(): GameLogic {
    return {lives: 7, word: "Hello", gussedLetters: [], gameState: GameState.Win };
}