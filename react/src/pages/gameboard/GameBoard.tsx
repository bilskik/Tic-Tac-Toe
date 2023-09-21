import { useEffect, useMemo, useState} from "react"
import "./gameboard.css"
import ScoreBoard from "./scoreboard/ScoreBoard"
import Board from "./board/Board"
import useGame from "../../hooks/useGame"
import useAuth from "../../hooks/useAuth"
import useFetch from "../../hooks/useFetch"
import Loading from "./loading/Loading"
const GameBoard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { gameData, getDataAfterRefresh, saveData, setGameData } = useGame();
  const { auth } = useAuth();
  const { postData } = useFetch({
    url : `/friendgame/${gameData.gameCode}`,
    isJWT : true,
    data : {
      ...gameData,
      marksToWin : gameData.markNumber,
      host : auth.username
    }
  });

  const boardTotalSize = useMemo<number>(() => {
    return gameData.boardSize * gameData.boardSize 
  },[gameData])

  useEffect(() => {
      getDataAfterRefresh()
      const postDataAndProcess = async () => {
        const data = await postData().then(
            response => {
              console.log(response);
              setGameData({
                ...gameData,
                mark : response
              })
              saveData({
                ...gameData,
                mark : response
              })
            }
        );
    } 
    postDataAndProcess()
  },[])

  return (
      <>
      {
        isLoading && <Loading/>
      }
          <ScoreBoard/>
          <Board
            boardTotalSize={boardTotalSize}
            loggedUsername={auth.username}
          />
      </>
    )
}

export default GameBoard