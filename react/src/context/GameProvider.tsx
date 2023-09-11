import { createContext, useState, ReactNode } from "react";

type GameProviderProps = {
    children : ReactNode
}
type GameContextType = {
    gameData : GameDataType
    setGameData : React.Dispatch<React.SetStateAction<GameDataType>>
}
type GameDataType = {
    gameCode : string,
    boardSize : number
}

const GameContext = createContext<GameContextType>({
    gameData : {
        gameCode : "",
        boardSize : 0
    },
    setGameData : () => undefined

})
export const GameProvider = ({ children } : GameProviderProps) => {
    const [gameData, setGameData] = useState({
        gameCode : "",
        boardSize : 0
    });
    return (
        <GameContext.Provider value={{ gameData, setGameData}}>
            { children }
        </GameContext.Provider>
    )
}

export default GameContext