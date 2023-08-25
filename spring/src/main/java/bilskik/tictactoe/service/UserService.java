package bilskik.tictactoe.service;

import bilskik.tictactoe.DTO.UserDTO;
import bilskik.tictactoe.entities.User;
import bilskik.tictactoe.entities.embedded.Statistics;
import bilskik.tictactoe.mapper.MapperImpl;
import bilskik.tictactoe.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    @Autowired
    public UserRepository userRepository;
    @Autowired
    public MapperImpl<User,UserDTO> mapper;

    public List<UserDTO> getAllUsers() {
        Statistics statistics = Statistics.builder()
                .wins(2)
                .draws(2)
                .loses(3)
                .build();
        System.out.println();
        System.out.println();
        User user = User.builder()
                .userId(1L)
                .username("Kamil")
                .email("kbilski@onet.pl")
                .password("1234")
                .statistics(statistics)
                .build();
        UserDTO userDTO1 = mapper.toDTO(user);
        System.out.println(userDTO1);
        return List.of(userDTO1);
    }
}
