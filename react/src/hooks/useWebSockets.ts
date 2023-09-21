import Stomp from "stompjs"
import SockJs from "sockjs-client"
import useAuth from './useAuth'
import { useEffect, useRef, useState } from "react";
import { useWebSocketsType } from "../pages/gameboard/shared.types";
import { WebSocketGameMessage } from "../pages/gameboard/shared.types";
type messageType = {
    sender : string,
    content : string
  }[]
type messageGetType = {
    sender : string,
    content : string
}
type webArray = WebSocketGameMessage[]
const useWebSockets = (props : useWebSocketsType) => {
    const { auth } = useAuth();
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [messages, setMessages] = useState<webArray>([]);
    let socket = useRef<WebSocket>();
    let client = useRef<Stomp.Client | null>(null);
    
    useEffect(() => {
        socket.current = new SockJs(`http://localhost:8080/ws?token=${auth.accessToken}`);
        client.current = Stomp.over(socket.current);
        client.current.connect({}, onConnect, onError)
    },[])

    const onConnect = () => {
        setIsConnected(true);
        if(client.current !== null) {
            client.current.subscribe(`${props.subscriptionPrivateChannelURL}`, onPrivateMessage)
        }
    }

    const onError = () => {
        console.log("ERROR!")
    }

    // const onPublicMessage = (message : any) => {
    //     const receivedMessage = JSON.parse(message.body);
    //     setMessages((prevMessage : messageType) => [...prevMessage, receivedMessage])
    // }

    const onPrivateMessage = (message : any) => {
        console.log(message.body);
        const receivedMessage = JSON.parse(message.body);
        setMessages((prevMessage : webArray) => [...prevMessage, receivedMessage])
    }

    const sendMessage = (message : string, nickname : string) => {
        if(isConnected && message.trim()) {
            const chatMessage : messageGetType = {
                sender : nickname, 
                content : message
            }
            if(client.current !== null) {
                client.current.send(`${props.sendURL}`, {}, JSON.stringify(chatMessage));
            }
        }
    }
    const sendPrivateMessage = (gameMessage : WebSocketGameMessage) => {
        if(isConnected) {
            if(client.current !== null) {
                client.current.send("/app/private-message",{},JSON.stringify(gameMessage))
            }
        }
    }
    return {
     isConnected, messages, sendPrivateMessage
    }
}

export default useWebSockets