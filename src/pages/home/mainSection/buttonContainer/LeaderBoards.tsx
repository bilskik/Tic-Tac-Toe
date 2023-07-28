import React, { useState } from 'react'
import Button from '../../../../components/buttons/Button'
import { FaCrown } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import Ranksboard from './board/Ranksboard';
const LeaderBoards = () => {
    const [boardType,setBoardType] = useState("");

    const handleLeaderBoardClick = () => {
        setBoardType("leaderboard");
    }
    const handleRankBoardClick = () => {
        setBoardType("rankboard");
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
            <Ranksboard type={boardType}/>
        </div>
    </>
    )
}

export default LeaderBoards