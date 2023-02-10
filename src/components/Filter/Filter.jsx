import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { Label, Input } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      <Input
        type="text"
        placeholder="Enter contact name"
        name="filter"
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </Label>
  );
};
