package bilskik.tictactoe.service;

import bilskik.tictactoe.DTO.StatisticsDTO;
import bilskik.tictactoe.DTO.UserDTO;
import bilskik.tictactoe.entities.User;
import bilskik.tictactoe.entities.embedded.Statistics;
import bilskik.tictactoe.mapper.MapperImpl;
import bilskik.tictactoe.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    public final UserRepository userRepository;
    public final MapperImpl<User,UserDTO> userToDTOMapper;
    public final MapperImpl<Statistics, StatisticsDTO> statisticsToDTOMapper;
    public List<UserDTO> getAllUsers() {
        Statistics statistics = Statistics.builder()
                .wins(2)
                .draws(2)
                .loses(3)
                .score(250)
                .build();
        Statistics statistics2 = Statistics.builder()
                .wins(2)
                .draws(2)
                .loses(3)
                .score(250)
                .build();
        User user = User.builder()
                .userId(1L)
                .username("Kamil")
                .password("1234")
                .statistics(statistics)
                .build();
        User user2 = User.builder()
                .userId(2L)
                .username("Misiek")
                .password("mis")
                .statistics(statistics2)
                .build();
        StatisticsDTO statisticsDTO = statisticsToDTOMapper.toDTO(statistics);
        UserDTO userDTO = userToDTOMapper.toDTO(user);
        userDTO.statistics = statisticsDTO;
        StatisticsDTO statisticsDTO2 = statisticsToDTOMapper.toDTO(statistics2);
        UserDTO userDTO2 = userToDTOMapper.toDTO(user2);
        userDTO2.statistics = statisticsDTO2;
        return List.of(userDTO,userDTO2);
    }
}
