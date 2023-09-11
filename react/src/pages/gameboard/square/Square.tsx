import "./square.css"

type SquareProps = {
    index : number;
    handleSquareClick : (index : number) => void
}

const Square = ({index, handleSquareClick} : SquareProps) => {
  return (
    <div className="square" onClick={(e) => handleSquareClick(index)}>
        Square
    </div>
  )
}

export default Square