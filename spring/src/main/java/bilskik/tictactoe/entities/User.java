package bilskik.tictactoe.entities;

import bilskik.tictactoe.entities.embedded.Statistics;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long userId;
    public String username;
    public String email;
    public String password;
    @Embedded
    public Statistics statistics;

}
