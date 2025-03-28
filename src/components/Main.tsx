import useGameLogic, { GameLogic } from "../logic/game-logic";
import Button from "./common/Button";
import Keyboard from "./keyboard/Keyboard";
import LifeIndicator from "./life-indicator/LifeIndicator";
import StatusDisplay from "./status-display/StatusDisplay";
import WordDisplay from "./word-display/WordDisplay";

export default function Main() {

    const gameLogic: GameLogic = useGameLogic();

    return (
        <main className="flex flex-col gap-10">
            <StatusDisplay status={gameLogic.gameState} />
            <LifeIndicator lives={gameLogic.lives} />
            <WordDisplay word={gameLogic.word} />
            <Keyboard />
            <div className="flex justify-center">
                <Button />
            </div>
        </main>
    );
}
