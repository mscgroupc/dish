import { useQuery } from 'react-query';

export const useRecipeSummary = (id: number) =>
  useQuery(['recipes', 'summary', id], async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/summary?apiKey=3a919f863b6f473e93b2473cdd0b6e3d&query=pasta&maxFat=25&number=16`,
    );
    return res.json();
  });
