import "./board.css"
import { useState } from "react";
import Square from "../square/Square";
import useGame from "../../../hooks/useGame";
import { BoardArrayType } from "../shared.types";
import useWebSockets from "../../../hooks/useWebSockets";
import { WebSocketGameMessage } from "../shared.types";

type BoardProps = {
    boardTotalSize : number,
    loggedUsername : string
}

const Board = ({ boardTotalSize, loggedUsername } : BoardProps) => {
    const { gameData } = useGame();
    const [currMark, setCurrMark] = useState<string>('X');
    const webSocketURLConfiguration = {
        webSocketURL : "ws",
        subscriptionPublicChannelURL : "/topic/message",
        subscriptionPrivateChannelURL : `/user/${loggedUsername}/private`,
        sendURL : "/app/chat"
      }
     const { messages, sendPrivateMessage } = useWebSockets(webSocketURLConfiguration);
    
    const boardArray : BoardArrayType= Array.from({ length : boardTotalSize}, (_, index) => ({
        index : index + 1,
        mark : ''
    }))
    const [board,setBoard] = useState(boardArray);
    const gridStyles = {
        gridTemplateColumns : `repeat(${gameData.boardSize}, minmax(100px, 1fr) )`,
        gridTemplateRows : `repeat(${gameData.boardSize}, minmax(100px, 1fr) )`
    }


    const handleSquareClick = (index : number) => {
        const updatedBoard = [...board];
        updatedBoard[index] = {
            ...updatedBoard[index],
            mark : currMark
        }
        const webSocketMessage : WebSocketGameMessage = {
            sender : loggedUsername,
            mark : currMark,
            index : index
        }
        sendPrivateMessage(webSocketMessage);
        changeCurrMark()
        setBoard(updatedBoard);

    }

    const changeCurrMark = () => {
        if(currMark === 'X') {
            setCurrMark('O')
        } else {
            setCurrMark('X')
        }
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