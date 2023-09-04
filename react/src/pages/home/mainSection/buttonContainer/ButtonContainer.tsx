import { useState } from "react";
import Button from "../../../../components/buttons/Button";
import useGameMenuDisplay from "../../../../hooks/useGameMenuDisplay";
import { REDUCER_ACTION_TYPE } from "../../../../reducer/menuButtonReducer";
type buttonPlayContainerType = {
  displayPlayWithFriendPopup  : () => void
}

const ButtonPlayContainer = ( { displayPlayWithFriendPopup } : buttonPlayContainerType ) => {
    const { state, dispatch } = useGameMenuDisplay();
    const handlePlayWithFriendClick = () => {
      dispatch({ type : REDUCER_ACTION_TYPE.PLAY_WITH_FRIEND_MENU});
      console.log(state.showPlayWithFriendMenuPopup);
    }
    return (
      <div className="menucontainer__buttons">
          <Button key="Quick play" style="Quick play" id={`menu`} />
          <Button key="Play ranked" style="Play ranked" id={`menu`}/>
          <Button key="Play with friend" style="Play with friend" id={`menu`} onClick={handlePlayWithFriendClick}/>
      </div>
    )
  }
  export default ButtonPlayContainer;