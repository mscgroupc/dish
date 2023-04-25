import { Box, Grid, Toolbar } from '@mui/material';
import { EXPLORE_SIDE_PANEL_WIDTH } from '../consts';
import { SearchResultsGridItem } from './SearchResultsGridItem';

export const ExplorerSearchResults = () => (
  <Box
    component='main'
    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${EXPLORE_SIDE_PANEL_WIDTH}px)` } }}
  >
    <Toolbar />

    <Grid container spacing={3}>
      {Array.from(Array(16)).map((_, index) => (
        <Grid item key={index}>
          <SearchResultsGridItem />
        </Grid>
      ))}
    </Grid>
  </Box>
);
