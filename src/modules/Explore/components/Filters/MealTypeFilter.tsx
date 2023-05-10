import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Filters } from '../types';

export const MealTypeFilter = ({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}) => (
  <FormControl fullWidth size='small'>
    <InputLabel id='type-label'>Meal Type</InputLabel>
    <Select
      labelId='type-label'
      id='type'
      value={filters.type}
      label='Meal Type'
      onChange={(next) => {
        setFilters((filters) => ({ ...filters, type: next.target.value }));
      }}
    >
      <MenuItem value={'main course'}>Main Course</MenuItem>
      <MenuItem value={'side dish'}>Side Dish</MenuItem>
      <MenuItem value={'dessert'}>Dessert</MenuItem>
      <MenuItem value={'appetizer'}>Appetizer</MenuItem>
      <MenuItem value={'salad'}>Salad</MenuItem>
      <MenuItem value={'bread'}>Bread</MenuItem>
      <MenuItem value={'breakfast'}>Breakfast</MenuItem>
      <MenuItem value={'soup'}>Soup</MenuItem>
      <MenuItem value={'beverage'}>Beverage</MenuItem>
      <MenuItem value={'sauce'}>Sauce</MenuItem>
      <MenuItem value={'marinade'}>Marinade</MenuItem>
      <MenuItem value={'fingerfood'}>Fingerfood</MenuItem>
      <MenuItem value={'snack'}>Snack</MenuItem>
      <MenuItem value={'drink'}>Drink</MenuItem>
    </Select>
  </FormControl>
);
