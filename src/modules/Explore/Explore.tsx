import Box from '@mui/material/Box';
import { FilterSidePanel } from './Components/FilterSidePanel';
import { ExplorerSearchResults } from './Components/ExplorerSearchResults';

export const Explore = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <FilterSidePanel />
      <ExplorerSearchResults />
    </Box>
  );
};
