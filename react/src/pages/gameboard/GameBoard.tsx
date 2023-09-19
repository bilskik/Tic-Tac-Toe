import { useEffect, useMemo } from "react"
import "./gameboard.css"
import ScoreBoard from "./scoreboard/ScoreBoard"
import Board from "./board/Board"
import useGame from "../../hooks/useGame"
import useAuth from "../../hooks/useAuth"
const GameBoard = () => {

  const { gameData, getDataAfterRefresh } = useGame();
  const boardTotalSize = useMemo<number>(() => {
    return gameData.boardSize * gameData.boardSize 
  },[gameData])

  useEffect(() => {
      getDataAfterRefresh()
  },[])

  return (
      <>
          <ScoreBoard/>
          <Board
            boardTotalSize={boardTotalSize}
          />
      </>
    )
}

export default GameBoard