import { useQuery } from 'react-query';
import { fetcher } from '../api/spoonacular/spoonacularAPI';

export const useRecipeSummary = (id: number) =>
  useQuery(['recipes', 'summary', id], async () => {
    return fetcher(`/recipes/${id}/summary`);
  });
