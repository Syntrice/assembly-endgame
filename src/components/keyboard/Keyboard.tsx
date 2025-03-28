import { KeyState } from "../../models/keyState";
import Key from "./Key";

export default function Keyboard() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    return (
        <div className="flex justify-center flex-wrap gap-3">
            {alphabet.split("").map((letter, index) => (
                <Key key={index} keyState={KeyState.Unknown}>{letter}</Key>
            ))}
        </div>
    );
}