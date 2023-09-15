package bilskik.tictactoe.controller;

import bilskik.tictactoe.websockets.GameMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
@CrossOrigin
public class GameController {

    @MessageMapping("/chat")
    @SendTo("/topic/message")
    public GameMessage sendMessage(
            @Payload GameMessage message
    ) {
        return message;
    }
    @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")
    public GameMessage addUser(
            @Payload GameMessage gameMessage,
            SimpMessageHeaderAccessor headerAccessor
    ) {
        //add username in web socket session
        headerAccessor.getSessionAttributes().put("username",gameMessage.getSender());
        return gameMessage;
    }

}
