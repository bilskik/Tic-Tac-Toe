package bilskik.tictactoe.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long gameId;
    private String gameCode;
    private int marksToWin;
    private int boardSize;
    private String host;
    private String hostMark;
    private String guest;
    private String guestMark;
//    @Embedded
//    private GameHostGuestDetails gameHostGuestDetails;
    @OneToMany(
            mappedBy = "game"
    )
    public List<GameDetails> gameDetails;

}
