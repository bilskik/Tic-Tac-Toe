import { useEffect } from "react"
import GenerateCodeButton  from "../../../../components/buttons/generateCode/GenerateCodeButton";
import useGameMenuDisplay from "../../../../hooks/useGameMenuDisplay"
import { REDUCER_ACTION_TYPE } from "../../../../reducer/menuButtonReducer";
import { useState } from "react";
import "./gamemenumodal.css"
import useAuth from "../../../../hooks/useAuth";
import useGame from "../../../../hooks/useGame";
import { Link } from "react-router-dom";
import GameBoard from "../../../gameboard/GameBoard";
import MarkGenerator from "./markgenerator/MarkGenerator";

const GameMenuModal = () => {
  const { state, dispatch } = useGameMenuDisplay();
  const { gameData, setGameData, saveData }  = useGame();
  const [code,setCode] = useState<string | null>();

  const handleClickOnBackgroundModal = () => {
    dispatch({ type : REDUCER_ACTION_TYPE.PLAY_WITH_FRIEND_MENU});
    setCode(null);
    // setGameData()  should be reset
  }
  const handleGameSetup = (code : string) => {
      setCode(code);
      setGameData({
        ...gameData,
        gameCode : code
      });
      console.log(gameData);
      saveData();
  }
  const handleRangeSlider = (value : number) => {
    setGameData({
      ...gameData,
      boardSize : value
    })
  }
  const handleSelectedMarkNumber = (value : number) => {
    setGameData({
      ...gameData,
      markNumber : value
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
          <MarkGenerator
            handleSelectedMarkNumber={handleSelectedMarkNumber}
          />
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