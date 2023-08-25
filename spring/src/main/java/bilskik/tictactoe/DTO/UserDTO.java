package bilskik.tictactoe.DTO;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.stat.Statistics;

@Setter
@Getter
public class UserDTO {
    public String username;
    public String email;
    public StatisticsDTO statistics;
}
