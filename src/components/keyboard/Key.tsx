import React from "react";
import { KeyState } from "../../models/keyState";

interface KeyProps {
    keyState: KeyState;
    children: React.ReactNode;
    onClick?: () => void;
}

export default function Key({ keyState, onClick, children }: KeyProps) {
    const keyColor = () => {
        switch (keyState) {
            case KeyState.Correct:
                return " bg-theme-green";
            case KeyState.Incorrect:
                return " bg-theme-red";
            case KeyState.Unknown:
                return " bg-theme-amber";
        }
    };

    return (
        <button
            className={
                "text-theme-dark border-2 rounded-md border-theme-foreground flex w-10 h-10 justify-center items-center text-2xl shadow-2xl" +
                keyColor()
            }
            onClick={onClick}
        >
            {children}
        </button>
    );
}
