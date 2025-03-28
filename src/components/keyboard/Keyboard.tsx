import { KeyState } from "../../models/key-state";
import Key from "./Key";

interface KeyboardProps {
    onType: (letter: string) => void
}

export default function Keyboard( { onType }: KeyboardProps) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    return (
        <div className="flex justify-center flex-wrap gap-3">
            {alphabet.split("").map((letter, index) => (
                <Key onClick={() => onType(letter)} key={index} keyState={KeyState.Unknown}>{letter}</Key>
            ))}
        </div>
    );
}