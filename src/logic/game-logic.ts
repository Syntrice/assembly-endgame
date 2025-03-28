import { useState } from "react";
import { GameState } from "../models/game-state";

export interface GameLogic {
    lives: number;
    word: string;
    gussedLetters: string[];
    gameState: GameState;
    guess: (letter: string) => void;
}

export default function useGameLogic(): GameLogic {
    const [guesses, setGuesses] = useState<Set<string>>(new Set());

    function guess(letter: string) {
        setGuesses(prev => prev.add(letter));
        console.log(guesses);
    }

    return {
        lives: 7,
        word: "Hello",
        gussedLetters: [],
        gameState: GameState.Win,
        guess: guess
    };
}
