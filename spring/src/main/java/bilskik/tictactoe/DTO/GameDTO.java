package bilskik.tictactoe.DTO;

import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GameDTO {
    private String gameCode;
    private int marksToWin;
    private int boardSize;
}
