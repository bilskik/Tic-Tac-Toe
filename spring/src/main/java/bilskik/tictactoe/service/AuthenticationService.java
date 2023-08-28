package bilskik.tictactoe.service;

import bilskik.tictactoe.entities.User;
import bilskik.tictactoe.repositories.UserRepository;
import bilskik.tictactoe.security.AuthenticationRequest;
import bilskik.tictactoe.security.AuthenticationResponse;
import bilskik.tictactoe.security.JWTService;
import bilskik.tictactoe.security.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;
    public AuthenticationResponse register(RegisterRequest req) {
        var user = User.builder()
                .username(req.getUsername())
                .password(passwordEncoder.encode(req.getPassword()))
                .statistics(req.getStatistics())
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
