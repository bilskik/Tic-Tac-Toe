package bilskik.tictactoe.entities.embedded;

import jakarta.persistence.Embeddable;
import lombok.*;

@Embeddable
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Statistics {
    public int wins;
    public int draws;
    public int loses;
}
