package bilskik.tictactoe.mapper;

public interface Mapper<E,D> {
     D toDTO(E entity);

     E toEntity(D dto);
}
