package bilskik.tictactoe.service;

import bilskik.tictactoe.DTO.StatisticsDTO;
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
    public MapperImpl<User,UserDTO> userToDTOMapper;
    @Autowired
    public MapperImpl<Statistics, StatisticsDTO> statisticsToDTOMapper;
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
                .password("1234")
                .statistics(statistics)
                .build();
        StatisticsDTO statisticsDTO = statisticsToDTOMapper.toDTO(statistics);
        UserDTO userDTO = userToDTOMapper.toDTO(user);
        userDTO.statistics = statisticsDTO;
        return List.of(userDTO);
    }
}
