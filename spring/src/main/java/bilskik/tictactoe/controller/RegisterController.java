package bilskik.tictactoe.controller;

import bilskik.tictactoe.security.*;
import bilskik.tictactoe.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class RegisterController {

    private final AuthenticationService authenticationService;


    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(authenticationService.register(request));
    }
//    @PostMapping("/oauth/login")
//    public ResponseEntity<AuthenticationResponse> oauthRegister(
//            @RequestBody OAuthRequest request
//    ) throws GeneralSecurityException, IOException {
//        return ResponseEntity.ok(authenticationService.register(request));
//    }
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(authenticationService.login(request));
    }
    @PostMapping("/refresh")
    public ResponseEntity<AuthenticationResponse> refresh(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(authenticationService.refreshToken(request));
    }
}
