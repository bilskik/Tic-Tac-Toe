import { useEffect } from "react"
import "./gameboard.css"
import ScoreBoard from "./scoreboard/ScoreBoard"
import Board from "./board/Board"
import useGame from "../../hooks/useGame"

const GameBoard = () => {
  const { gameData, setGameData, getDataAfterRefresh} = useGame();
  useEffect(() => {
    if(performance.getEntriesByType("navigation")[0]) {
      getDataAfterRefresh()
    }
  },[])
  console.log("normalni")
  return (
      <>
          <ScoreBoard/>
          <Board/>
      </>
    )
}

export default GameBoard