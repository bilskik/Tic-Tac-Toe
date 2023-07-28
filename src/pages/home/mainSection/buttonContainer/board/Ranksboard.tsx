import { playersData, playersRankData } from "../../../../../constraints/boardData";
import "./ranksboard.css"
import { useEffect, useState } from "react";
interface PlayerRanks {
    id: number,
    nick: string,
    score: number
}
interface LeaderboardRanks {
    id: number;
    nick: string;
    wins: number;
    draws: number;
    loses: number;
    score: number;
  }
const Ranksboard = (props : { type : string}) => {
    const [data,setData] = useState<PlayerRanks[] | LeaderboardRanks[]>();
    useEffect(() => {
        if(props.type === "leaderboard") {
            setData(playersData);
        } else if(props.type === "rankboard") {
            setData(playersRankData);
        }
    },[props])
    return (
        <div className="board">
            <div className={`board__description board__description-${props.type}`}>
                <p className="board__descrpition-rank">Rank</p>
                <p className="board__descrpition-nick">Nick</p>
                {
                    props.type === "leaderboard" ? <p className="board__descrpition-stats">W/D/L</p> : <></>
                }
                <p className="board__descrpition-score">Score</p>
            </div>
            <div className="board__data">
            {
                data?.map((elem,index) => {
                    if("wins" in elem) {
                        return (
                            <div className={`board__playerdata board__playerdata-${props.type}`} key={elem.id}>
                                <p className="board__playerdata-rank">{index + 1}.</p>
                                <p className="board__playerdata-nick">{elem.nick}</p>
                                <div className="board__stats">
                                    <p className="board__playerdata-wins">{elem.wins}
                                        <span className="board__playerdata-slash">/</span>
                                    </p>
                                    <p className="board__playerdata-draws">{elem.draws} 
                                        <span className="board__playerdata-slash">/</span>
                                    </p>
                                    <p className="board__playerdata-loses">{elem.loses}</p>
                                </div>
                                <p className="board__playerdata-score">{elem.score}</p>
                            </div>
    
                        )
                    } else {
                        return (
                            <div className={`board__playerdata board__playerdata-${props.type}`} key={elem.id}>
                                <p className="board__playerdata-rank">{index + 1}.</p>
                                <p className="board__playerdata-nick">{elem.nick}</p>
                                <p className="board__playerdata-score">{elem.score}</p>
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