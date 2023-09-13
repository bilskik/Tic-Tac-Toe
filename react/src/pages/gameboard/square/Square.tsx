import { BoardArrayType } from "../shared.types";
import "./square.css"

type SquareProps = {
    index : number;
    handleSquareClick : (index : number) => void
    board: BoardArrayType
}
const Square = ({index, handleSquareClick, board} : SquareProps) => {
  return (
    <div className="square" onClick={(e) => handleSquareClick(index)}>
        Square
        {board[index].mark}
    </div>
  )
}

export default Square