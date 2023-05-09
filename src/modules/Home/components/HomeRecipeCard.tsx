import { useQuery } from 'react-query';
import { RecipeCard } from '../../../components/RecipeCard';
import { Loading } from '../../Loading/Loading';

export const HomeRecipeCard = () => {
  const { data: { recipes } = {}, isFetching } = useQuery(['test'], async () => {
    const res = await fetch(
      'https://api.spoonacular.com/recipes/random?apiKey=3a919f863b6f473e93b2473cdd0b6e3d',
    );
    return res.json();
  });

  if (isFetching || !recipes) {
    return <Loading />;
  }

  const { id, title, image } = recipes[0];

  return <RecipeCard id={id} title={title} image={image} />;
};
