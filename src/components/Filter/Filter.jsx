import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { Label, Input } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </Label>
  );
};
