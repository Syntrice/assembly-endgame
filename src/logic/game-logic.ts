import { useState } from "react";

export enum GameState {
    Playing,
    Win,
    Lose
};

export interface GameLogic {
    lives: number;
    correctWord: string;
    gussedLetters: Set<string>;
    gameState: GameState;
    guess: (letter: string) => void;
}

export default function useGameLogic(): GameLogic {
    const [guesses, setGuesses] = useState<Set<string>>(new Set());

    function guess(letter: string) {
        setGuesses(prev => new Set(prev).add(letter));
    }

    return {
        lives: 7 - guesses.size,
        correctWord: "HELLO",
        gussedLetters: guesses,
        gameState: GameState.Win,
        guess: guess
    };
}

export enum KeyState {
    Unknown,
    Correct,
    Incorrect,
}

