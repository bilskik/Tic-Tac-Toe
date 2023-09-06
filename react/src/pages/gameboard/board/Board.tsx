import "./board.css"
import io from "socket.io-client";
import { useState } from "react";
import { useDrag } from "react-dnd";
import Square from "../square/Square";
// const socket = io("http://localhost:8080")

const Board = () => {
    const [board,setBoard] = useState(Array(600).fill(null));
    const [,boardRef] = useDrag({
        type : "BOARD"
    })

    const sendMessage = () => {
        // socket.emit("/chat.sendMessage", { 
        //     message : "siema"
        // })
    }
    const handleSquareClick = (index : number) => {

    }
  return (
    <div 
        className="board"
        ref={boardRef}
    >
        <div className="board__game">
            {
                board.map((square,index) => (
                    <>
                        <Square index={index} handleSquareClick={handleSquareClick}/>
                    </>
                ))
            }            
        </div>
    </div>
  )
}

export default Board