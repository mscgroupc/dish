import Box from '@mui/material/Box';
import { FilterSidePanel } from './components/FilterSidePanel';
import { ExplorerSearchResults } from './components/ExplorerSearchResults';
import { useState } from 'react';
import { Filters } from './components/types';

export const Explore = () => {
  const [filters, setFilters] = useState<Filters>({ number: 2, type: undefined, diet: undefined });

  return (
    <Box sx={{ display: 'flex' }}>
      <FilterSidePanel filters={filters} setFilters={setFilters} />
      <ExplorerSearchResults filters={filters} />
    </Box>
  );
};
