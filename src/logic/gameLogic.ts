import { GameState } from "../models/gameState";

export interface GameLogic {
    lives: number;
    word: string;
    gussedLetters: string[];
    gameState: GameState;
}

export default function useGameLogic(): GameLogic {
    return {lives: 0, word: "Hello", gussedLetters: [], gameState: GameState.Playing };
}