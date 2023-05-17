import { Box, Divider, Drawer, List, ListItem, Toolbar } from '@mui/material';
import { EXPLORE_SIDE_PANEL_WIDTH } from '../consts';
import { CuisinesFilter } from './Filters/CuisineFilter';
import { DietFilter } from './Filters/DietFilter';
import { IntolerancesFilter } from './Filters/IntolerancesFilter';
import { MealTypeFilter } from './Filters/MealTypeFilter';
import { ResultCountFilter } from './Filters/ResultCountFilter';
import { Filters } from './types';

export const FilterSidePanel = ({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: EXPLORE_SIDE_PANEL_WIDTH }, flexShrink: { sm: 0 } }}
      aria-label='mailbox folders'
    >
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: EXPLORE_SIDE_PANEL_WIDTH },
        }}
        open
      >
        <div>
          <Toolbar />

          <Divider />

          <List>
            {/* ToDo(MSA0-31): add nuber filter */}
            <ListItem>
              <ResultCountFilter filters={filters} setFilters={setFilters} />
            </ListItem>
            <ListItem>
              <MealTypeFilter filters={filters} setFilters={setFilters} />
            </ListItem>
            <ListItem>
              <DietFilter filters={filters} setFilters={setFilters} />
            </ListItem>
            <ListItem>
              <CuisinesFilter filters={filters} setFilters={setFilters} />
            </ListItem>
            <ListItem>
              <IntolerancesFilter filters={filters} setFilters={setFilters} />
            </ListItem>
          </List>

          <Divider />
        </div>
      </Drawer>
    </Box>
  );
};
