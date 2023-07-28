import ButtonPlayContainer from "./buttonContainer/ButtonContainer"
import LeaderBoards from "./buttonContainer/LeaderBoards"
import "./mainsection.css"
const MainSection = () => {
  return (
    <div className="mainmenu">
      <div className="menucontainer">
        <ButtonPlayContainer/>
        <LeaderBoards/>
      </div>
    </div>

  )
}

export default MainSection