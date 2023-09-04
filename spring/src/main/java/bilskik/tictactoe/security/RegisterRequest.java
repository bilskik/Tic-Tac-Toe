package bilskik.tictactoe.security;

import bilskik.tictactoe.entities.embedded.Statistics;
import lombok.*;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RegisterRequest {
    public String username;
    public String password;
//    public Statistics statistics;
}
