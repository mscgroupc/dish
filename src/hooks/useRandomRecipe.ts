import { useQuery } from 'react-query';

export const useRandomRecipe = () =>
  useQuery(['recipes', 'random'], async () => {
    const res = await fetch(
      'https://api.spoonacular.com/recipes/random?apiKey=3a919f863b6f473e93b2473cdd0b6e3d',
    );
    return res.json();
  });
