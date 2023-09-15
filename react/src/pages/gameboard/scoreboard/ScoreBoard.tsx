import Stomp from "stompjs"
import SockJs from "sockjs-client"
import { useEffect, useState } from "react"
import "./scoreboard.css"
import useAuth from "../../../hooks/useAuth";
import { send } from "process";



const ScoreBoard = () => {
  let result1 = 2;
  let result2 = 3;
  const { auth } = useAuth();
  const [messages, setMessages] = useState<string[]>([]);
  const [message,setMessage] = useState<string>('');
  const [nickname,setNickname] = useState<string>('');
  console.log(auth.accessToken);
  const headers = {
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${auth.accessToken}`
  }
  let client : Stomp.Client;
  useEffect(() => {
    console.log("Auth token " + auth.accessToken);
    const socket = new SockJs(`http://localhost:8080/ws?token=${auth.accessToken}`);
    client = Stomp.over(socket);
    client.connect(headers, () => {
      client.subscribe("/topic/message", (message) => {
        const receivedMessage = JSON.parse(message.body);
        console.log(receivedMessage)
        setMessages((prevMessage : string[]) => [...prevMessage, receivedMessage])
      })
    })
  },[])

  const sendMessage = () => {
    if(message.trim()) {
      const chatMessage = {
        sender : nickname, 
        content : message
      }
      client.send('/app/chat', {}, JSON.stringify(chatMessage));
      setMessage('');
    }
  }

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
            {result1} : {result2}
          </p>
          <PlayerData/>
        </div>
        <p>Nickname</p>
        <textarea value={nickname} onChange={handleNicknameChange}></textarea>
        <p>Message</p>
        <textarea value={message} onChange={handleMessageChange}></textarea>
        <button onClick={sendMessage}>Send</button>
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