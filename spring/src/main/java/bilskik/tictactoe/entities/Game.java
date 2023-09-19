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
    public Long gameId;
    public String gameCode;
    public int marksToWin;
    public int boardSize;
    @OneToMany(
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER
    )
    @JoinColumn(
            referencedColumnName = "gameId"
    )
    public List<GameDetails> gameDetails;

}
