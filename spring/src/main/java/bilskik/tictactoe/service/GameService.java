package bilskik.tictactoe.service;

import bilskik.tictactoe.entities.Game;
import bilskik.tictactoe.entities.GameDetails;
import bilskik.tictactoe.repositories.GameDetailsRepository;
import bilskik.tictactoe.repositories.GameRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class GameService {

    public final GameRepository gameRepository;
    public final GameDetailsRepository gameDetailsRepository;
    public void registerFriendGame(String gameCode, Game game) {
        if(game.gameCode != null && !game.gameCode.equals("") && game.boardSize >= 3
                && game.marksToWin >= 3 && game.marksToWin <= 5 && gameCode != null && !gameCode.equals("")) {
            int initBoardSize = game.boardSize * game.boardSize;
            game.gameDetails = new ArrayList<>(initBoardSize);
            game.gameCode = gameCode;
            gameRepository.save(game);
        } else {
            throw new IllegalArgumentException("Game equals null");
        }
    }
}
