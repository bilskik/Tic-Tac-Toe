package bilskik.tictactoe.config;

import bilskik.tictactoe.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.parameters.P;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Configuration
public class AppConfig {
    @Autowired
    UserRepository userRepository;
    @Bean
    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
                if(userRepository.findByEmail(username).isEmpty()) {
                    throw new UsernameNotFoundException("User not found");
                }
                else {
                    return userRepository.findByEmail(username).get();
                }
            }
        };
    }
}
