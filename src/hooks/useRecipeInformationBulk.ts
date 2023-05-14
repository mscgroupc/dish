import { useQuery, UseQueryResult } from 'react-query';
import { fetcher } from '../api/spoonacular/spoonacularAPI';
import { Recipe } from '../types';
import { RecipeInformation } from '../types/RecipeInfromation';

export const useRecipeInformationBulk = (
  recipes: Recipe[],
): UseQueryResult<RecipeInformation[]> => {
  const recipeIds = recipes?.map((recipe: Recipe) => recipe.id).join(',');

  return useQuery({
    queryKey: ['recipes', 'RecipeInformationBulk', recipes],
    queryFn: async () => {
      const response = await fetcher('/recipes/informationBulk', { ids: recipeIds });

      return response as RecipeInformation[];
    },
    enabled: !!recipeIds && recipeIds !== '',
  });
};
