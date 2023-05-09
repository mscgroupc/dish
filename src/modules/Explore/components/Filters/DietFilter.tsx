import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Filters } from '../types';

export const DietFilter = ({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}) => (
  <FormControl fullWidth size='small'>
    <InputLabel id='diet-label'>Diet Definitions</InputLabel>
    <Select
      labelId='diet-label'
      id='diet'
      value={filters.diet}
      label='Diet Definitions'
      onChange={(next) => {
        setFilters((filters) => ({ ...filters, diet: next.target.value }));
      }}
    >
      <MenuItem value={'main course'}>Gluten Free</MenuItem>
      <MenuItem value={'ketogenic'}>Ketogenic</MenuItem>
      <MenuItem value={'vegetarian'}>Vegetarian</MenuItem>
      <MenuItem value={'lacto-vegetarianer'}>Lacto-Vegetarian</MenuItem>
      <MenuItem value={'ovo-vegetarian'}>Ovo-Vegetarian</MenuItem>
      <MenuItem value={'vegan'}>Vegan</MenuItem>
      <MenuItem value={'pescetarian'}>Pescetarian</MenuItem>
      <MenuItem value={'paleo'}>Paleo</MenuItem>
      <MenuItem value={'primal'}>Primal</MenuItem>
      <MenuItem value={'low FODMAP'}>Low FODMAP</MenuItem>
      <MenuItem value={'whole30'}>Whole30</MenuItem>
    </Select>
  </FormControl>
);
