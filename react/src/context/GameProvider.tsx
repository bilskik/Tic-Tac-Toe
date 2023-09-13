import { createContext, useState, ReactNode } from "react";
import { isObjectLiteralElementLike } from "typescript";

type GameProviderProps = {
    children : ReactNode
}
type GameContextType = {
    gameData : GameDataType
    setGameData : React.Dispatch<React.SetStateAction<GameDataType>>
    getDataAfterRefresh : () => void
    saveData : () => void
    removeData : () => void
}
type GameDataType = {
    gameCode : string,
    boardSize : number
    markNumber : number
}

const GameContext = createContext<GameContextType>({
    gameData : {
        gameCode : "",
        boardSize : 5,
        markNumber : 3
    },
    setGameData : () => undefined,
    getDataAfterRefresh : () => undefined,
    saveData : () => undefined,
    removeData : () => undefined
})
export const GameProvider = ({ children } : GameProviderProps) => {
    const objectName = "gameData";
    const defaultGameData = {
        gameCode : "",
        boardSize : 5,
        markNumber : 3
    }
    const [gameData, setGameData] = useState<GameDataType>(defaultGameData);
    const saveData = () => {
        localStorage.setItem(objectName,JSON.stringify(gameData));
    }
    const getDataAfterRefresh = () => {
        const storedGameData = localStorage.getItem(objectName);
        if(storedGameData != null) {
            setGameData(JSON.parse(storedGameData));
        }
    }
    const removeData = () => {
        localStorage.removeItem(objectName);
        setGameData(defaultGameData)
    }
    return (
        <GameContext.Provider value={{ gameData, setGameData, getDataAfterRefresh, saveData, removeData}}>
            { children }
        </GameContext.Provider>
    )
}

export default GameContext