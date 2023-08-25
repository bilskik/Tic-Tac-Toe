package bilskik.tictactoe.mapper;

import bilskik.tictactoe.DTO.StatisticsDTO;
import bilskik.tictactoe.DTO.UserDTO;
import bilskik.tictactoe.entities.User;
import bilskik.tictactoe.entities.embedded.Statistics;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MapperConfig {
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
    @Bean
    public MapperImpl<User, UserDTO> userMapper() {
        return new MapperImpl<>(User.class, UserDTO.class);
    }
    @Bean
    public MapperImpl<Statistics, StatisticsDTO> statisticsMapper() {
        return new MapperImpl<>(Statistics.class, StatisticsDTO.class);
    }
}
