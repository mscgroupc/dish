import { apiConfig } from '../../config';

const { baseUrl, apiKey } = apiConfig.spoonacular;

export const fetcher = async (url: string, params?: Record<string, string>) => {
  const queryParams = new URLSearchParams({
    apiKey,
    ...params,
  });

  const res = await fetch(`${baseUrl}${url}?${queryParams.toString()}`);
  return res.json();
};
