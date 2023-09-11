import GenerateCodeButton  from "../../../../components/buttons/generateCode/GenerateCodeButton";
import useGameMenuDisplay from "../../../../hooks/useGameMenuDisplay"
import { REDUCER_ACTION_TYPE } from "../../../../reducer/menuButtonReducer";
import { useState } from "react";
import "./gamemenumodal.css"
import useAuth from "../../../../hooks/useAuth";
import useGame from "../../../../hooks/useGame";
import { Link } from "react-router-dom";

const GameMenuModal = () => {
  const { state, dispatch } = useGameMenuDisplay();
  const { gameData, setGameData }  = useGame();
  const [code,setCode] = useState<string | null>();
  const [boardSizeValue, setBoardSizeValue] = useState<number>(3);
  const { auth } = useAuth();

  const handleClickOnBackgroundModal = () => {
    dispatch({ type : REDUCER_ACTION_TYPE.PLAY_WITH_FRIEND_MENU});
    setCode(null);
  }
  const handleGameSetup = (code : string) => {
      setCode(code);
      setGameData({
        ...gameData,
        gameCode : code
      });
      console.log(gameData);
  }
  const handleRangeSlider = (value : number) => {
    setGameData({
      ...gameData,
      boardSize : value
    })
  }
  return (
    <div className="modal" >
        <div className="modal__overlay" onClick={handleClickOnBackgroundModal}></div>
        <div className="modal__content">
          <p className="modal__boardSize">
            Board size:
          </p>
          <input
            type="range"
            min="5"
            max="300"
            step="1"
            value={gameData.boardSize}
            onChange={(e) => 
              handleRangeSlider(parseInt(e.target.value))
            }
          />
          {gameData.boardSize}
          <p className="modal__toWin">
            Total marks to win:
          </p>
          
          <GenerateCodeButton
            handleSetCode={handleGameSetup}
          />
          {
            code && 
            <span className="modal__code">
              { code }
            </span>
          }
          <Link to={`${gameData.gameCode}`}>
            <button>Play</button>
          </Link>
        </div>
    </div>
  )
}

export default GameMenuModal