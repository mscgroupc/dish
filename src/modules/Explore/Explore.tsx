import Box from '@mui/material/Box';
import { FilterSidePanel } from './components/FilterSidePanel';
import { ExplorerSearchResults } from './components/ExplorerSearchResults';

export const Explore = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <FilterSidePanel />
      <ExplorerSearchResults />
    </Box>
  );
};
