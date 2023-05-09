import {
  Box,
  Divider,
  Drawer,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  Toolbar,
} from '@mui/material';
import { EXPLORE_SIDE_PANEL_WIDTH } from '../consts';

export const FilterSidePanel = () => (
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
          {Array.from(Array(8)).map((_, index) => (
            <ListItem key={index}>
              <FormControl fullWidth size='small'>
                <InputLabel id='demo-select-small-label'>Cuisine</InputLabel>
                <Select
                  labelId='demo-select-small-label'
                  id='demo-select-small'
                  value={5}
                  label='Cuisine'
                  onChange={(next) => {
                    console.log(next);
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
          ))}
        </List>

        <Divider />
      </div>
    </Drawer>
  </Box>
);
