import { RecipeCard } from '../../../components/RecipeCard';
import { useRandomRecipe } from '../../../hooks/useRandomRecipe';
import { Loading } from '../../Loading/Loading';

export const HomeRecipeCard = () => {
  const { data: { recipes } = {}, isFetching } = useRandomRecipe();

  if (isFetching || !recipes) {
    return <Loading />;
  }

  const { id, title, image } = recipes[0];

  return <RecipeCard id={id} title={title} image={image} />;
};
