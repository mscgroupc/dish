import { Box, Grid, Toolbar } from '@mui/material';
import { RecipeCard } from '../../../components/RecipeCard';
import { useComplexSearch } from '../../../hooks/useComplexSearch';
import { useRecipeInformationBulk } from '../../../hooks/useRecipeInformationBulk';
import { RecipeInformation } from '../../../types/RecipeInfromation';
import { Loading } from '../../Loading/Loading';
import { EXPLORE_SIDE_PANEL_WIDTH } from '../consts';
import { Filters } from './types';

export const ExplorerSearchResults = ({ filters }: { filters: Filters }) => {
  const { data: { results: recipes } = { results: [] }, isLoading: isLoadingRecipes } =
    useComplexSearch(filters);

  const { data: bulkRecipeInformations, isLoading: isLoadingInformation } =
    useRecipeInformationBulk(recipes);

  if (isLoadingRecipes || isLoadingInformation) {
    return <Loading />;
  }

  if (!bulkRecipeInformations) {
    // ToDo(MSA0-32): add No Recipes Found Message
    return <>No Recipes Found</>;
  }

  return (
    <Box
      component='main'
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${EXPLORE_SIDE_PANEL_WIDTH}px)` } }}
    >
      <Toolbar />
      <Grid container spacing={3}>
        {bulkRecipeInformations.map((recipeInformations: RecipeInformation) => (
          <Grid item key={recipeInformations.id}>
            <RecipeCard recipeInformations={recipeInformations} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
