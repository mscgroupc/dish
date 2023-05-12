import { useQuery } from 'react-query';
import { fetcher } from '../api/spoonacular/spoonacularAPI';

export const useRandomRecipe = () =>
  useQuery(['recipes', 'random'], async () => {
    return fetcher('/recipes/random');
  });
