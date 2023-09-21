package bilskik.tictactoe.controller;

import bilskik.tictactoe.entities.Game;
import bilskik.tictactoe.service.GameService;
import bilskik.tictactoe.websockets.GameMessage;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class GameController {

    public final SimpMessagingTemplate simpMessagingTemplate;
    public final GameService gameService;

    @MessageMapping("/chat")
    @SendTo("/topic/message")
    public GameMessage sendMessage(
            @Payload GameMessage message
    ) {
        return message;
    }
    @MessageMapping("/private-message")
    public GameMessage receivePrivateGameMessage(
            @Payload GameMessage gameMessage
    ) {
      simpMessagingTemplate.convertAndSendToUser(gameMessage.getSender(), "/private",gameMessage);
      return gameMessage;
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
    @PostMapping("/friendgame/{gameCode}")
    public ResponseEntity<String> registerFriendGame(
            @PathVariable String gameCode,
            @RequestBody Game game
    ) {
        return ResponseEntity.ok(gameService.registerFriendGame(gameCode,game));
    }
}
