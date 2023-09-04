import GenerateCodeButton  from "../../../../components/buttons/generateCode/GenerateCodeButton";
import useGameMenuDisplay from "../../../../hooks/useGameMenuDisplay"
import { REDUCER_ACTION_TYPE } from "../../../../reducer/menuButtonReducer";
import { useState } from "react";
import "./gamemenumodal.css"
import useAuth from "../../../../hooks/useAuth";

const GameMenuModal = () => {
  const { state, dispatch } = useGameMenuDisplay();
  const [code,setCode] = useState<string | null>();
  const { auth } = useAuth();
  console.log(auth.accessToken)
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
          <GenerateCodeButton
            handleSetCode={handleSetCode}
          />
          {
            code && 
            <span className="modal__code">
              { code }
            </span>
          }
          <button onClick={(e) => {handleSetCode("siasdas")}}>Play</button>
        </div>
    </div>
  )
}

export default GameMenuModal