import "./board.css"
import io from "socket.io-client";
import { useMemo, useState } from "react";
import Square from "../square/Square";
import useGame from "../../../hooks/useGame";
import { BoardArrayType } from "../shared.types";
// const socket = io("http://localhost:8080")

type BoardProps = {
    boardTotalSize : number
}

const Board = ({ boardTotalSize } : BoardProps) => {
    const { gameData } = useGame();
    const boardArray : BoardArrayType= Array.from({ length : boardTotalSize}, (_, index) => ({
        index : index + 1,
        mark : ''
    }))
    const [board,setBoard] = useState(boardArray);
    const gridStyles = {
        gridTemplateColumns : `repeat(${gameData.boardSize}, minmax(100px, 1fr) )`,
        gridTemplateRows : `repeat(${gameData.boardSize}, minmax(100px, 1fr) )`
    }

    const sendMessage = () => {
        // socket.emit("/chat.sendMessage", { 
        //     message : "siema"
        // })
    }
    const handleSquareClick = (index : number) => {
        const updatedBoard = [...board];
        updatedBoard[index] = {
            ...updatedBoard[index],
            mark : "X"
        }
        setBoard(updatedBoard);
    }
  return (
    <div 
        className="board"
    >
        <div className="board__game" style={gridStyles}>
            {
                board.map((square,index) => (
                    <Square 
                        index={index} 
                        handleSquareClick={handleSquareClick}
                        board={board}
                    />
                ))
            }            
        </div>
    </div>
  )
}

export default Board