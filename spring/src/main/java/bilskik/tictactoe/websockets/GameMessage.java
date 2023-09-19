package bilskik.tictactoe.websockets;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GameMessage {
    public String sender;
    public String mark;
    public int x;
    public int y;
}
