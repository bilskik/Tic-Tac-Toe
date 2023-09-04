package bilskik.tictactoe.security;

import bilskik.tictactoe.entities.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.Map;
import java.util.function.Function;

@Component
public class JWTService {
    String KEY = "yJXtNKIY97ERUsFmmBBJeeVaVzsP1Ln+WWRyEhKWWWWWAWSDAS12312313123yadsgh";

    public boolean validateJWT(String jwt, String username, UserDetails userDetails) {
        if(jwt != null) {
            return (username.equals(userDetails.getUsername())) && !isTokenExpired(jwt);
        }
        return false;
    }

    private Claims extractAllClaims(String jwt) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSigningKey())
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

    private Key getSigningKey() {
        byte [] keyBytes = Decoders.BASE64.decode(KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
    public String generateJwtToken(
            UserDetails user
    ) {
        return
                Jwts
                        .builder()
                        .setSubject(user.getUsername())
                        .setIssuedAt(new Date(System.currentTimeMillis()))
                        .setExpiration(new Date(System.currentTimeMillis() + 1000*64*132))
                        .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                        .compact();
    }
    public String generateJwtToken(
            Map<String, Object> extraClaims,
            UserDetails user
    ) {
        return
                Jwts
                        .builder()
                        .setClaims(extraClaims)
                        .setSubject(user.getUsername())
                        .setIssuedAt(new Date(System.currentTimeMillis()))
                        .setExpiration(new Date(System.currentTimeMillis() + 10000))
                        .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                        .compact();
    }

}
