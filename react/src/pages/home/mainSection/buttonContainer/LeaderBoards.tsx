import React, { useState, useEffect } from 'react'
import Button from '../../../../components/buttons/Button'
import { FaCrown } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import Ranksboard from './board/Ranksboard';
import useFetch from '../../../../hooks/useFetch';
import { LeaderboardRanks, PlayerRanks } from './shared.types';


const LeaderBoards = () => {
    const [boardType,setBoardType] = useState("leaderboard");
    const [playerData, setPlayerData] = useState<LeaderboardRanks[] | PlayerRanks[]>();
    const  { fetchData }  = useFetch({ 
        url : "/users",
        isJWT :  true
    })
    useEffect(() => {
        const fetchDataAndProcess = async () => {
            const data = await fetchData().then(
                response => {
                    setPlayerData(response);
                }
            );
        } 
        fetchDataAndProcess()
    },[])
    // ustalic co kiedy ma byc pobierane dane
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
            <Ranksboard 
                type={boardType}
                playerData={playerData}
            />
        </div>
    </>
    )
}

export default LeaderBoards