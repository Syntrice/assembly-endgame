import { GameState } from "../models/gameState";
import Button from "./common/Button";
import Keyboard from "./keyboard/Keyboard";
import LifeIndicator from "./life-indicator/LifeIndicator";
import StatusDisplay from "./status-display/StatusDisplay";
import WordDisplay from "./word-display/WordDisplay";

export default function Main() {
    return (
        <main className="flex flex-col gap-10">
            <StatusDisplay status={GameState.Win} />
            <LifeIndicator />
            <WordDisplay />
            <Keyboard />
            <div className="flex justify-center">
                <Button />
            </div>
        </main>
    );
}
