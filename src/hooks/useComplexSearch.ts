import { useQuery } from 'react-query';
import { fetcher } from '../api/spoonacular/spoonacularAPI';
import { Filters } from '../modules/Explore/components/types';

export const useComplexSearch = (filters: Filters) => {
  const { type = '', diet = '' } = filters;
  return useQuery(['recipes', 'complexSearch', filters], async () => {
    return fetcher('/recipes/complexSearch', { type, diet });
  });
};