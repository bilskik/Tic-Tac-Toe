import { useEffect, useMemo } from "react"
import "./gameboard.css"
import ScoreBoard from "./scoreboard/ScoreBoard"
import Board from "./board/Board"
import useGame from "../../hooks/useGame"
import useAuth from "../../hooks/useAuth"
import useFetch from "../../hooks/useFetch"
const GameBoard = () => {
  const { gameData, getDataAfterRefresh } = useGame();
  const { auth } = useAuth();
  const { postData } = useFetch({
    url : `/friendgame/${gameData.gameCode}`,
    isJWT : true,
    data : {
      ...gameData,
      marksToWin : gameData.markNumber
    }
  });

  const boardTotalSize = useMemo<number>(() => {
    return gameData.boardSize * gameData.boardSize 
  },[gameData])

  useEffect(() => {
      getDataAfterRefresh()
      postData()
  },[])

  return (
      <>
          <ScoreBoard/>
          <Board
            boardTotalSize={boardTotalSize}
            loggedUsername={auth.username}
          />
      </>
    )
}

export default GameBoard