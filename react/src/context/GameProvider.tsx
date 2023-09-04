import { createContext, useState, ReactNode } from "react";

type GameProviderProps = {
    children : ReactNode
}
type GameContextType = {
    gameData : {
        gameCode : string
    },
    setGameData : React.Dispatch<React.SetStateAction<{
        gameCode: string;
    }>>
}

const GameContext = createContext<GameContextType>({
    gameData : {
        gameCode : ""
    },
    setGameData : () => undefined

})
const GameProvider = ({ children } : GameProviderProps) => {
    const [gameData, setGameData] = useState({
        gameCode : ""
    });
    return (
        <GameContext.Provider value={{ gameData, setGameData}}>
            { children }
        </GameContext.Provider>
    )
}

export default GameProvider