import { createContext, useState, ReactNode } from "react";

type GameProviderProps = {
    children : ReactNode
}
type GameContextType = {
    gameData : GameDataType
    setGameData : React.Dispatch<React.SetStateAction<GameDataType>>
    getDataAfterRefresh : () => void
    saveData : (dataToUpdate : GameDataType) => void
    removeData : () => void
}
type GameDataType = {
    gameCode : string,
    boardSize : number,
    markNumber : number,
    mark : string
}

const GameContext = createContext<GameContextType>({
    gameData : {
        gameCode : "",
        boardSize : 5,
        markNumber : 3,
        mark : ""
    },
    setGameData : () => undefined,
    getDataAfterRefresh : () => undefined,
    saveData : () => undefined,
    removeData : () => undefined
})
export const GameProvider = ({ children } : GameProviderProps) => {
    const objectName = "gameData";
    const defaultGameData : GameDataType = {
        gameCode : "",
        boardSize : 5,
        markNumber : 3,
        mark : ""
    }
    const checkProperDefaultValue : () => GameDataType = () =>  {
        const storedGameData = localStorage.getItem(objectName);
        if(storedGameData != null) {
            return JSON.parse(storedGameData);
        } else {
            return defaultGameData;
        }
    }
    const dataToSet = checkProperDefaultValue();
    const [gameData, setGameData] = useState<GameDataType>(dataToSet);
    
    const saveData = (dataToUpdate : GameDataType) => {
        localStorage.setItem(objectName,JSON.stringify(dataToUpdate));
    }
    const getDataAfterRefresh = () => {
        const storedGameData = localStorage.getItem(objectName);
        console.log(storedGameData)
        if(storedGameData != null) {
            setGameData(JSON.parse(storedGameData));
        } else {
            setGameData(defaultGameData)
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