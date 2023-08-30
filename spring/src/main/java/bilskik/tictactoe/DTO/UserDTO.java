package bilskik.tictactoe.DTO;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.stat.Statistics;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserDTO {
    public String username;
    public StatisticsDTO statistics;
}
