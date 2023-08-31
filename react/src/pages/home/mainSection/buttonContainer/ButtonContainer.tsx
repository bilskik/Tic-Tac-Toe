import { useState } from "react";
import Button from "../../../../components/buttons/Button";



type buttonPlayContainerType = {
  displayPlayWithFriendPopup  : () => void
}

const ButtonPlayContainer = ( { displayPlayWithFriendPopup } : buttonPlayContainerType ) => {
    const buttonTextData = ["Quick play", "Play ranked", "Play with friend"];
    const [playWithFriendPopup, setPlayWithFriendPopup] = useState(false);
    const handlePlayWithFriendClick = () => {
      displayPlayWithFriendPopup()
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