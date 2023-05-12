import { Box, Grid, Toolbar } from '@mui/material';
import { RecipeCard } from '../../../components/RecipeCard';
import { useComplexSearch } from '../../../hooks/useComplexSearch';
import { Recipe } from '../../../types';
import { Loading } from '../../Loading/Loading';
import { EXPLORE_SIDE_PANEL_WIDTH } from '../consts';
import { Filters } from './types';

export const ExplorerSearchResults = ({ filters }: { filters: Filters }) => {
  const { data: { results: recipes } = {}, isFetching } = useComplexSearch(filters);

  return (
    <Box
      component='main'
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${EXPLORE_SIDE_PANEL_WIDTH}px)` } }}
    >
      <Toolbar />
      {isFetching || !recipes ? (
        <Loading />
      ) : (
        <Grid container spacing={3}>
          {recipes.map(({ id, title, image }: Recipe) => (
            <Grid item key={id}>
              <RecipeCard id={id} title={title} image={image} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};
