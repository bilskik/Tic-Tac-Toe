import "./square.css"

type SquareProps = {
    index : number;
    click : (index : number) => void
}

const Square = ({index, click} : SquareProps) => {
  return (
    <div className="square" onClick={(e) => click(index)}>
        Square
    </div>
  )
}

export default Square