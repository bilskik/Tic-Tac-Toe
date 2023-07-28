import { playersData } from "../../../../../constraints/boardData";
import "./rankboard.css"
const Rankboard = () => {
    //const rankData = useFetch();

    return (    
        <div className='rank'>
            <div className="rank__description">
                <p className="rank__description-rank">Rank</p>
                <p className="rank__description-nick">Nick</p>
                <p className="rank__description-score">Score</p>
            </div>
            <div className="rank__data">
                {
                    playersData.map((elem,index) => {
                        return (
                            <div className="rank__playerdata">
                                <p className="rank__playerdata-rank">{index + 1}.</p>
                                <p className="rank__playerdata-nick">{elem.nick}</p>
                                <p className="rank__playerdata-score">{elem.score}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Rankboard