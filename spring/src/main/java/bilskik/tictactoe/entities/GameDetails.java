package bilskik.tictactoe.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GameDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long gameDetailsId;
    public String mark;
    public int gameIndex;
    @ManyToOne
    @JoinColumn(
            name = "gameId"
    )
    public Game game;
}
