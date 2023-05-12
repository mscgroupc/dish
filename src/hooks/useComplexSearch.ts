import { useQuery } from 'react-query';
import { Filters } from '../modules/Explore/components/types';

export const useComplexSearch = (filters: Filters) => {
  const { type, diet } = filters;
  return useQuery(['recipes', 'complexSearch', filters], async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=3a919f863b6f473e93b2473cdd0b6e3d&type=${type}&diet=${diet}`,
    );
    return res.json();
  });
};
