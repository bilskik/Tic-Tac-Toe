import ButtonPlayContainer from "./buttonContainer/ButtonContainer"
import LeaderBoards from "./buttonContainer/LeaderBoards"
import "./mainsection.css"
import GameMenuModal from "./modal/GameMenuModal";

const MainSection = () => {

  const displayPlayWithFriendPopup = () => {
      // dispatch({ type : REDUCER_ACTION_TYPE.PLAY_WITH_FRIEND_MENU});
      // console.log(state);
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