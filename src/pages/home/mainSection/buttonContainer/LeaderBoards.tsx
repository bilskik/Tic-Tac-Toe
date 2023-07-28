import React, { useState } from 'react'
import Button from '../../../../components/buttons/Button'
import { FaCrown } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import Board from './leaderboard/Leaderboard';
import Rankboard from './rankBoard/Rankboard';
const LeaderBoards = () => {
    const [displayBoard,setDisplayBoard] = useState("");

    const handleLeaderBoardClick = () => {
        setDisplayBoard("leaderboard");
    }
    const handleRankBoardClick = () => {
        setDisplayBoard("rankboard");
    }
    return (
    <>
        <div className='menucontainer__ranks'>
            <Button style='Leaderboard' id="leaderboard" onClick={() => handleLeaderBoardClick()}/>
            <GiTrophyCup className="icons__trophycup"/>
            <Button style='Rank' id="rank" onClick={() => handleRankBoardClick()}/>
            <FaCrown className='icons__crown'/>
        </div>
        <div className="menucontainer_listranks">
            {
                displayBoard === "leaderboard" ? <Board/> : displayBoard === "rankboard" ? <Rankboard/> : <></>
            }
        </div>
    </>
    )
}

export default LeaderBoards