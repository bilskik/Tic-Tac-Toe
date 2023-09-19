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
    public Long gameDetailsId;
    public char mark;
    public int x;
    public int y;
}
