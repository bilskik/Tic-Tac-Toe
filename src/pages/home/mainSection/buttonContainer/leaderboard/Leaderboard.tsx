import { playersData } from "../../../../../constraints/boardData";
import "./leaderboard.css"
const Board = () => {
    // const playersData = useFetch();
    return (
        <div className="board">
            <div className="board__description">
                <p className="board__descrpition-rank">Rank</p>
                <p className="board__descrpition-nick">Nick</p>
                <p className="board__descrpition-stats">W/D/L</p>
                <p className="board__descrpition-score">Score</p>
            </div>
            <div className="board__data">
            {
                playersData.map((elem,index) => {
                    return (
                        <div className="board__playerdata" key={elem.id}>
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

                            <p>{elem.score}</p>
                        </div>

                    )
                })
            }
            </div>
        </div>
    )
}

export default Board;