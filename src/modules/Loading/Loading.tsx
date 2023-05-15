import { Box, CircularProgress } from '@mui/material';
import { EXPLORE_SIDE_PANEL_WIDTH } from '../Explore/consts';

export const Loading = () => (
  <Box
    component='main'
    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${EXPLORE_SIDE_PANEL_WIDTH}px)` } }}
  >
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  </Box>
);
