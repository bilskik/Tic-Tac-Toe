import "./gameboard.css"
import ScoreBoard from "./scoreboard/ScoreBoard"
import Board from "./board/Board"
import { DndProvider } from "react-dnd/dist/core"
import { HTML5Backend } from "react-dnd-html5-backend"

const GameBoard = () => {
  return (
    <DndProvider backend={HTML5Backend} >
        <ScoreBoard/>
        <Board/>
    </DndProvider>
    )
}

export default GameBoard