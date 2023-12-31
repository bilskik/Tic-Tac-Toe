package bilskik.tictactoe.mapper;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@NoArgsConstructor
@Getter
public class MapperImpl<E,D> implements Mapper<E,D> {

    @Autowired
    private ModelMapper modelMapper;
    private Class<E> entityClass;
    private Class<D> DTOclass;
    public MapperImpl(Class<E> entityClass, Class<D> DTOclass) {
        this.entityClass = entityClass;
        this.DTOclass = DTOclass;
    }
    @Override
    public D toDTO(E entity) {
        return modelMapper.map(entity,DTOclass);
    }

    @Override
    public E toEntity(D dto) {
        return modelMapper.map(dto,entityClass);
    }

}
