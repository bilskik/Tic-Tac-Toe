package bilskik.tictactoe.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Objects;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JWTService jwtService;
    private final UserDetailsService userDetailsService;
    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain)
            throws ServletException, IOException {
//        access token to check
        String authHeader = request.getHeader("Authorization");
        String jwtAsParam = request.getParameter("token");
        String jwt;
        System.out.println("jwtAsParam = " + jwtAsParam);
        System.out.println(Objects.equals(jwtAsParam, ""));
        System.out.println(authHeader);
        System.out.println(request);
        if(authHeader == null || !authHeader.startsWith("Bearer ")) {
            if(jwtAsParam == null || jwtAsParam.equals("")) {
                filterChain.doFilter(request,response);
                return;
            }
            else {
                jwt = jwtAsParam;
            }
        }
        else {
            jwt = authHeader.substring(7);
        }
        String username = jwtService.extractUsername(jwt);
        if(username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            System.out.println(jwtService.validateJWT(jwt,username,userDetails));
            if(jwtService.validateJWT(jwt,username,userDetails)) {
                System.out.println("SIEMAAAA");
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );
                authToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
            filterChain.doFilter(request,response);
        }
    }
}
