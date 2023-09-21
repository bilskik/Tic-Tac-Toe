package bilskik.tictactoe.repositories;

import bilskik.tictactoe.entities.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
    Optional<Game> findByGameCode(String gameCode);
}
