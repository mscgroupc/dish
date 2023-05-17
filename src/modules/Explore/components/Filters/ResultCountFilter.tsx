import { FormControl, TextField } from '@mui/material';
import { Filters } from '../types';

export const ResultCountFilter = ({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}) => (
  <FormControl fullWidth size='small'>
    <TextField
      size='small'
      id='result-count'
      label='Result Count'
      type='number'
      value={filters.number}
      onChange={(event) => {
        const count = parseInt(event.target.value, 10);
        setFilters((filters) => ({ ...filters, number: count }));
      }}
    />
  </FormControl>
);
