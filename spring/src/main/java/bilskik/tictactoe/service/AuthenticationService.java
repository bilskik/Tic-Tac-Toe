package bilskik.tictactoe.service;

import bilskik.tictactoe.entities.User;
import bilskik.tictactoe.entities.embedded.Statistics;
import bilskik.tictactoe.repositories.UserRepository;
import bilskik.tictactoe.security.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;

    private final OAuth2Service oAuth2Service;

    public AuthenticationResponse register(RegisterRequest req) {
        var user = User.builder()
                .username(req.getUsername())
                .password(passwordEncoder.encode(req.getPassword()))
                .statistics(new Statistics(0,0,0,0))
                .build();
        userRepository.save(user);
        AuthenticationResponse authenticationResponse =
                AuthenticationResponse.builder()
                        .token(jwtService.generateJwtToken(user))
                        .build();
        System.out.println(authenticationResponse.getToken());
        return authenticationResponse;
    }


    public AuthenticationResponse login(RegisterRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        User user = userRepository.findUserByUsername(request.getUsername()).orElseThrow();
        return  AuthenticationResponse.builder()
                .token(jwtService.generateJwtToken(user))
                .build();
    }
}
