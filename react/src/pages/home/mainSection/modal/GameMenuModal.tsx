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
import LinkCopy from "./linkCopy/LinkCopy";

const GameMenuModal = () => {
  const { state, dispatch } = useGameMenuDisplay();
  const { gameData, setGameData, saveData, removeData }  = useGame();
  const [code,setCode] = useState<string | null>();
  const [gameURL, setGameURL] = useState<string | null>(null);

  const handleClickOnBackgroundModal = () => {
    dispatch({ type : REDUCER_ACTION_TYPE.PLAY_WITH_FRIEND_MENU});
    setCode(null);
    removeData();
  }

  const handleGameSetup = (code : string) => {
      setCode(code);
      setGameData({
        ...gameData,
        gameCode : code
      });
      saveData({
        ...gameData,
        gameCode : code
      });
      setGameURL(`http://localhost:3000/friendgame/${code}`)
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
          <LinkCopy
            gameURL={gameURL}
          />
          <Link to={`/friendgame/${code}`}>
            <button>Play</button>
          </Link>
        </div>
    </div>
  )
}

export default GameMenuModal