package bilskik.tictactoe.websockets;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GameMessage {
    private String content;
    private String receiver;
    private String sender;
    private MessageType messageType;
}
