import { RecipeCard } from '../../../components/RecipeCard';
import { useRandomRecipe } from '../../../hooks/useRandomRecipe';
import { useRecipeInformationBulk } from '../../../hooks/useRecipeInformationBulk';
import { Loading } from '../../Loading/Loading';

export const HomeRecipeCard = () => {
  const { data: { recipes } = {}, isFetching } = useRandomRecipe();

  const { data: bulkRecipeInformations = [], isLoading: isLoadingInformation } =
    useRecipeInformationBulk(recipes);

  if (isFetching || isLoadingInformation) {
    return <Loading />;
  }

  const recipeInformations = bulkRecipeInformations[0];

  if (!recipeInformations) {
    // ToDo(MSA0-32): add No Recipes Found Message
    return <>No Recipes Found</>;
  }

  return <RecipeCard recipeInformations={recipeInformations} />;
};
