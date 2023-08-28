package bilskik.tictactoe.security;

import lombok.*;
import org.springframework.stereotype.Service;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RegisterRequest {
    public String username;
    public String email;
    public String password;
}
