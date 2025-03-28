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
    const correctWord = "HELLO";

    function guess(letter: string) {
        setGuesses(prev => new Set(prev).add(letter));
    }

    function getGameState() {
        if (guesses.size === 8) {
            return GameState.Lose;
        }

        if (correctWord.split("").every(letter => guesses.has(letter))) {
            return GameState.Win;
        }

        return GameState.Playing;
    }

    return {
        lives: Math.max(0,8 - guesses.size),
        correctWord: correctWord,
        gussedLetters: guesses,
        gameState: getGameState(),
        guess: guess
    };
}

export enum KeyState {
    Unknown,
    Correct,
    Incorrect,
}

