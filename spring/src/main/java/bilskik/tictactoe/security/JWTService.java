package bilskik.tictactoe.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.function.Function;

@Component
public class JWTService {
    String KEY = "yJXtNKIY97ERUsFmmBBJeeVaVzsP1Ln+WWRyEhKy";

    public boolean validateJWT(String jwt, String username, UserDetails userDetails) {
        if(jwt != null) {
            return (username.equals(userDetails.getUsername())) && isTokenExpired(jwt);
        }
        return false;
    }

    private Claims extractAllClaims(String jwt) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSigningKey(jwt))
                .build()
                .parseClaimsJws(jwt)
                .getBody();
    }
    private <T> T extractClaim(String jwt, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(jwt);
        return claimsResolver.apply(claims);
    }
    public String extractUsername(String jwt) {
        return extractClaim(jwt, Claims::getSubject);
    }
    private Date extractExpirationDate(String jwt) {
        return extractClaim(jwt, Claims::getExpiration);
    }
    private boolean isTokenExpired(String jwt) {
        return extractExpirationDate(jwt).before(new Date());
    }

    private Key getSigningKey(String jwt) {
        byte [] keyBytes = Decoders.BASE64.decode(KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
