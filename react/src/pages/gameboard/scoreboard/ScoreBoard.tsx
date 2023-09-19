
import { useEffect, useState, useRef } from "react"
import "./scoreboard.css"
import useAuth from "../../../hooks/useAuth";
import useWebSockets from "../../../hooks/useWebSockets";
import { useWebSocketsType } from "../shared.types";

const ScoreBoard = () => {
  const { auth } = useAuth(); 
  const webSocketURLConfiguration = {
    webSocketURL : "ws",
    subscriptionPublicChannelURL : "/topic/message",
    subscriptionPrivateChannelURL : `/user/${auth.username}/private`,
    sendURL : "/app/chat"
  }
  const [message,setMessage] = useState<string>('');
  const [nickname,setNickname] = useState<string>('');
  const { messages, sendPrivateMessage } = useWebSockets(webSocketURLConfiguration);
  console.log(messages);
  const handleMessageChange = (e : any) => {
    setMessage(e.target.value)
  }
  const handleNicknameChange = (e : any) => {
    setNickname(e.target.value)
  }

  return (
    <div className="scoreboard">
      <div className="scoreboard__container">
        <h2 className="scoreboard__gametype">
            Ranked         
        </h2>
        <div className="scoreboard__datacontainer">
          <PlayerData/>
          <p className="scoreboard__results">
            1 : 2
          </p>
          <PlayerData/>
        </div>
        <p>Nickname</p>
        <textarea value={nickname} onChange={handleNicknameChange}></textarea>
        <p>Message</p>
        <textarea value={message} onChange={handleMessageChange}></textarea>
        <button onClick={(e) => sendPrivateMessage(message,nickname)}>Send</button>
        { messages.map((msg,index) => (
          <li key={index}>{msg.sender} : {msg.content}</li>
        ))}
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