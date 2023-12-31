//package bilskik.tictactoe.seed;
//
//import bilskik.tictactoe.entities.Game;
//import bilskik.tictactoe.entities.User;
//import bilskik.tictactoe.entities.embedded.Statistics;
//import bilskik.tictactoe.repositories.GameRepository;
//import bilskik.tictactoe.repositories.UserRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Component;
//
//@Component
//@RequiredArgsConstructor
//public class DataLoader implements CommandLineRunner {
//
//    private final PasswordEncoder passwordEncoder;
//    private final UserRepository userRepository;
//    private final GameRepository gameRepository;
//
//    @Override
//    public void run(String... args) throws Exception {
//        loadData();
//    }
//    private void loadData() {
//        Statistics statistics = Statistics.builder()
//                .score(0)
//                .draws(0)
//                .wins(0)
//                .loses(0)
//                .build();
//        Game game = Game.builder()
//                .boardSize(10)
//                .marksToWin(3)
//                .gameCode("q123")
//                .build();
//        gameRepository.save(game);
//        User user = User.builder()
//                .username("xKamil0")
//                .password(passwordEncoder.encode("Kamil123"))
//                .statistics(statistics)
//                .game(game)
//                .build();
//        userRepository.save(user);
//    }
//}
