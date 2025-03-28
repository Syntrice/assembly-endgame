import { KeyState } from "../../logic/game-logic";
import Key from "./Key";

interface KeyboardProps {
    onType: (letter: string) => void;
    guesses: Set<string>;
    correctWord: string;
}

export default function Keyboard({
    onType,
    guesses,
    correctWord,
}: KeyboardProps) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // function to determine key state
    function getKeyState(letter: string) {
        if (guesses.has(letter)) {
            if (correctWord.includes(letter)) {
                return KeyState.Correct;
            } else {
                return KeyState.Incorrect;
            }
        }
        return KeyState.Unknown;
    }

    return (
        <div className="flex justify-center flex-wrap gap-3">
            {alphabet.split("").map((letter, index) => (
                <Key
                    onClick={() => onType(letter)}
                    key={index}
                    keyState={getKeyState(letter)}
                >
                    {letter}
                </Key>
            ))}
        </div>
    );
}
