package bilskik.tictactoe.security;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
public class OAuthRequest {
    public String tokenId;
}

