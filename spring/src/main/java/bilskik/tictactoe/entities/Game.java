package bilskik.tictactoe.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
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
    public long gameId;
    public String gameCode;
    public int marksToWin;
    public int boardSize;
    @OneToMany(
            mappedBy = "game"
    )
    public List<GameDetails> gameDetails;

}
