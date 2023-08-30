import { BlobOptions } from "buffer";
import { playersData, playersRankData } from "../../../../../constraints/boardData";
import PopupInfo from "../../popupinfo/PopupInfo";
import "./ranksboard.css"
import { useEffect, useState } from "react";
interface PlayerRanks {
    id: number,
    username: string,
    statistics : Statistics
}
interface LeaderboardRanks {
    id: number;
    username: string;
    statistics : Statistics
  }
  interface Statistics {
    draws : number;
    loses : number;
    wins : number;
    score : number
  }
type RanksBoardType = {
    type : string;
    playerData : LeaderboardRanks[] | PlayerRanks[] | undefined
}
const Ranksboard = ({ type, playerData} : RanksBoardType) => {
    const [data,setData] = useState<PlayerRanks[] | LeaderboardRanks[]>();
    const [popupShow, setPopupShow] = useState<boolean>(false);

    useEffect(() => {
        if(type === "leaderboard") {
            setData(playerData);
        } else if(type === "rankboard") {
            setData(playerData);
        }
    },[playerData])

    const handleWDLEnter = () => {
        setPopupShow(true)
    }
    const handleWDLLeave = () => {
        setPopupShow(false);
    }
    return (
        <div className="board">
            <div className={`board__description board__description-${type}`}>
                <p className="board__descrpition-rank">Rank</p>
                <p className="board__descrpition-nick">Nick</p>
                {
                    type === "leaderboard" ? 
                    <p 
                        className="board__descrpition-stats" 
                        onMouseEnter={handleWDLEnter} 
                        onMouseLeave={handleWDLLeave}>
                        W/D/L
                    </p> 
                    : <></>
                }
                <p className="board__descrpition-score">Score</p>
            </div>
            {
                popupShow ? <PopupInfo/> : <></>
            }

            <div className="board__data">
            {
                data?.map((elem,index) => {
                    if(type === "leaderboard") {
                        return (
                            <div className={`board__playerdata board__playerdata-${type}`} key={elem.id}>
                                <p className="board__playerdata-rank">{index + 1}.</p>
                                <p className="board__playerdata-nick">{elem.username}</p>
                                <div className="board__stats">
                                    <p className="board__playerdata-wins">{elem.statistics.wins}
                                        <span className="board__playerdata-slash">/</span>
                                    </p>
                                    <p className="board__playerdata-draws">{elem.statistics.draws} 
                                        <span className="board__playerdata-slash">/</span>
                                    </p>
                                    <p className="board__playerdata-loses">{elem.statistics.loses}</p>
                                </div>
                                <p className="board__playerdata-score">{elem.statistics.score}</p>
                            </div>
    
                        )
                    } else {
                        return (
                            <div className={`board__playerdata board__playerdata-${type}`} key={elem.id}>
                                <p className="board__playerdata-rank">{index + 1}.</p>
                                <p className="board__playerdata-nick">{elem.username}</p>
                                <p className="board__playerdata-score">{elem.statistics.score}</p>
                            </div>
                        )
                    }  
                })
            }
            </div>
        </div>
    )

}

export default Ranksboard