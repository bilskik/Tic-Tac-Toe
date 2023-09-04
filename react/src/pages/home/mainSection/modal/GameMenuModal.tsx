import GenerateCodeButton  from "../../../../components/buttons/generateCode/GenerateCodeButton";
import useGameMenuDisplay from "../../../../hooks/useGameMenuDisplay"
import { REDUCER_ACTION_TYPE } from "../../../../reducer/menuButtonReducer";
import { useState } from "react";
import "./gamemenumodal.css"

const GameMenuModal = () => {
  const { state, dispatch } = useGameMenuDisplay();
  const [code,setCode] = useState<string | null>();

  const handleClickOnBackgroundModal = () => {
    dispatch({ type : REDUCER_ACTION_TYPE.PLAY_WITH_FRIEND_MENU});
    setCode(null);
  }
  const handleSetCode = (code : string) => {
      setCode(code);
  }
  return (
    <div className="modal" >
        <div className="modal__overlay" onClick={handleClickOnBackgroundModal}></div>
        <div className="modal__content">
          Generate game code:
          <GenerateCodeButton
            handleSetCode={handleSetCode}
          />
          Insert code from your friend here:
          <input></input>
          <button></button>
        </div>
    </div>
  )
}

export default GameMenuModal