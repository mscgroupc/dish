import Box from '@mui/material/Box';
import { FilterSidePanel } from './components/FilterSidePanel';
import { ExplorerSearchResults } from './components/ExplorerSearchResults';
import { useState } from 'react';
import { Filters } from './components/types';
import { DEFAULT_RESULTS_COUNT } from './consts';

export const Explore = () => {
  const [filters, setFilters] = useState<Filters>({
    number: DEFAULT_RESULTS_COUNT,
    type: undefined,
    diet: undefined,
    cuisines: [],
    intolerances: [],
  });

  return (
    <Box sx={{ display: 'flex' }}>
      <FilterSidePanel filters={filters} setFilters={setFilters} />
      <ExplorerSearchResults filters={filters} />
    </Box>
  );
};
