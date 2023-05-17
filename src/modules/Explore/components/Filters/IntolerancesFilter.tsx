import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Filters } from '../types';

export const IntolerancesFilter = ({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}) => (
  <FormControl fullWidth size='small'>
    <InputLabel id='intolerances-label'>Intolerances</InputLabel>
    <Select
      labelId='intolerances-label'
      id='intolerances'
      multiple
      value={filters.intolerances}
      label='Intolerances'
      onChange={(event) => {
        const selectedIntolerances = event.target.value as string[];
        setFilters((filters) => ({ ...filters, intolerances: selectedIntolerances }));
      }}
    >
      <MenuItem value='Dairy'>Dairy</MenuItem>
      <MenuItem value='Egg'>Egg</MenuItem>
      <MenuItem value='Gluten'>Gluten</MenuItem>
      <MenuItem value='Grain'>Grain</MenuItem>
      <MenuItem value='Peanut'>Peanut</MenuItem>
      <MenuItem value='Seafood'>Seafood</MenuItem>
      <MenuItem value='Sesame'>Sesame</MenuItem>
      <MenuItem value='Shellfish'>Shellfish</MenuItem>
      <MenuItem value='Soy'>Soy</MenuItem>
      <MenuItem value='Sulfite'>Sulfite</MenuItem>
      <MenuItem value='Tree Nut'>Tree Nut</MenuItem>
      <MenuItem value='Wheat'>Wheat</MenuItem>
    </Select>
  </FormControl>
);
