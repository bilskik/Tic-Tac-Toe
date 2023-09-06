import "./scoreboard.css"

const ScoreBoard = () => {
  let result1 = 2;
  let result2 = 3;

  return (
    <div className="scoreboard">
      <div className="scoreboard__container">
        <h2 className="scoreboard__gametype">
            Ranked         
        </h2>
        <div className="scoreboard__datacontainer">
          <PlayerData/>
          <p className="scoreboard__results">
            {result1} : {result2}
          </p>
          <PlayerData/>
        </div>
      </div>
    </div>
  )
}


const PlayerData = () => {
  const player1 = "kamil";
  const player2 =  "Natalia"
  let counter = 5;
  return (
    <div className="scoreboard__playerdata">
      <p className="scoreboard__username">
        {player1}
      </p>
      <span className="scoreboard__counter">
        0:45
      </span>
    </div>
  )
}
export default ScoreBoard