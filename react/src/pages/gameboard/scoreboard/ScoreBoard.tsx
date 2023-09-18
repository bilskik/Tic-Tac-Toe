import Stomp from "stompjs"
import SockJs from "sockjs-client"
import { useEffect, useState, useRef } from "react"
import "./scoreboard.css"
import useAuth from "../../../hooks/useAuth";
import { send } from "process";

type messageType = {
  sender : string,
  content : string
}[]
type messageGetType = {
  sender : string,
  content : string
}

type ScoreBoardProps = {
  token : string
}
const ScoreBoard = ({ token } : ScoreBoardProps) => {

  let result1 = 2;
  let result2 = 3;
  // const client  = useWebSockets();
  const [messages, setMessages] = useState<messageType>([]);
  const [message,setMessage] = useState<string>('');
  const [nickname,setNickname] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);
  let socket = useRef<any>();
  let client = useRef<any>();
  const headers = {
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${token}`
  }
  useEffect(() => {
    console.log("SIEMAAAA!!!")
    socket.current = new SockJs(`http://localhost:8080/ws?token=${token}`);
    client.current = Stomp.over(socket.current);
    client.current.connect(headers, () => {
      setIsConnected(true);
      client.current.subscribe("/topic/message", (message : any ) => {
        const receivedMessage = JSON.parse(message.body);
        console.log(receivedMessage)
        setMessages((prevMessage : messageType) => [...prevMessage, receivedMessage])
      })
    })

    return () => {
      if(client.current && client.current.connected) {
        client.current.disconnect();
        setIsConnected(false);
      }
    }
  },[])

  const sendMessage = () => {
    if(isConnected && message.trim()) {
      const chatMessage : messageGetType = {
        sender : nickname, 
        content : message
      }
      client.current.send('/app/chat', {}, JSON.stringify(chatMessage));
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