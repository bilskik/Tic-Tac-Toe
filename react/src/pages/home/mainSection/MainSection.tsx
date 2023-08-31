import { Init } from "v8";
import ButtonPlayContainer from "./buttonContainer/ButtonContainer"
import LeaderBoards from "./buttonContainer/LeaderBoards"
import "./mainsection.css"
import { useReducer } from "react";
import { menuButtonInitState, menuButtonReducer, REDUCER_ACTION_TYPE } from "../../../reducer/menuButtonReducer";

const MainSection = () => {
  const [state, dispatch] = useReducer(menuButtonReducer,menuButtonInitState);

  const displayPlayWithFriendPopup = () => {
      dispatch({ type : REDUCER_ACTION_TYPE.PLAY_WITH_FRIEND_MENU});
      console.log(state);
  }

  return (
    <div className="mainmenu">
      <div className="menucontainer">
        <ButtonPlayContainer displayPlayWithFriendPopup={displayPlayWithFriendPopup}/>
        <LeaderBoards/>
      </div>
    </div>

  )
}

export default MainSection