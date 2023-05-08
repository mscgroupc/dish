import { Box, Grid, Toolbar } from '@mui/material';
import { useQuery } from 'react-query';
import { RecipeCard } from '../../../components/RecipeCard';
import { Recipe } from '../../../types';
import { Loading } from '../../Loading/Loading';
import { EXPLORE_SIDE_PANEL_WIDTH } from '../consts';

export const ExplorerSearchResults = () => {
  // ToDO: Use Filters
  const { data: { results: recipes } = {}, isFetching } = useQuery(['test'], async () => {
    const res = await fetch(
      'https://api.spoonacular.com/recipes/complexSearch?apiKey=3a919f863b6f473e93b2473cdd0b6e3d&query=pasta&maxFat=25&number=16',
    );
    return res.json();
  });

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
