package bilskik.tictactoe.service;

import bilskik.tictactoe.entities.Game;
import bilskik.tictactoe.entities.User;
import bilskik.tictactoe.repositories.GameDetailsRepository;
import bilskik.tictactoe.repositories.GameRepository;
import bilskik.tictactoe.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Objects;
import java.util.Optional;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class GameService {

    public final GameRepository gameRepository;
    public final UserRepository userRepository;
    public final GameDetailsRepository gameDetailsRepository;
    private final int SEED = 100012312;
    private final int BOUND = 2;
    public String registerFriendGame(String gameCode, Game game) {
        Optional<Game> gameOptional = gameRepository.findByGameCode(gameCode);
        if(gameOptional.isEmpty()) {
            String hostMark = initializeGameEntity(gameCode,game);
            return hostMark;
        } else {
            String guestMark = initializeGuestEntity(gameCode,game,gameOptional.get());
            return guestMark;
        }

    }
    private String initializeGameEntity(String gameCode, Game game) {
        if(game.getGameCode() != null && !game.getGameCode().equals("") && game.getBoardSize() >= 3
                && game.getMarksToWin() >= 3 && game.getMarksToWin() <= 5 && gameCode != null && !gameCode.equals("")) {
            int initBoardSize = game.getBoardSize() * game.getBoardSize();
            game.setGameDetails(new ArrayList<>(initBoardSize));
            game.setBoardSize(initBoardSize);
            Optional<User> userOptional = userRepository.findUserByUsername(game.getHost());
            String mark = chooseMark();
            game.setHostMark(mark);
            if(userOptional.isPresent()) {
                userOptional.get().setGame(game);
                gameRepository.save(game);
                return mark;
            } else {
                throw new IllegalArgumentException("Username not found!");
            }
        }
        else {
            throw new IllegalArgumentException("Game equals null");
        }
    }
    private String initializeGuestEntity(String gameCode, Game game, Game gameFromDB ) {
        gameFromDB.setGuest(game.getHost());
        String mark = chooseMark(gameFromDB);
        gameFromDB.setGuestMark(mark);
        gameRepository.save(gameFromDB);
        Optional<User> userOptional = userRepository.findUserByUsername(gameFromDB.getGuest());
        if(userOptional.isPresent()) {
            userOptional.get().setGame(gameFromDB);
            userRepository.save(userOptional.get());
        } else {
            throw new IllegalArgumentException("Guest is not present!");
        }
        return mark;
    }
    private String chooseMark() {
        Random r = new Random(SEED);
        int number = r.nextInt(BOUND);
        if(number == 0) {
            return "X";
        } else {
            return "O";
        }
    }
    private String chooseMark(Game gameFromDB) {
        if(Objects.equals(gameFromDB.getHostMark(), "X")) {
            return "O";
        } else {
            return "X";
        }
    }

}
