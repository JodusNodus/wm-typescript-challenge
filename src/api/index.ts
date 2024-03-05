import { Recipe } from "types";

async function getApi<T>(
  path: string,
  params?: Record<string, string>
): Promise<T> {
  const urlSearchParams = new URLSearchParams(params);
  const url = params ? `${path}?${urlSearchParams.toString()}` : path;
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`${resp.status}: ${resp.statusText}`);
  }
  return resp.json();
}

export type GetPopularRecipesResponse = { cocktails: Recipe[] };
export const getPopularRecipes = () =>
  getApi<GetPopularRecipesResponse>("/api/recipes/popular");

export type GetAllRecipesResponse = {
  total: number;
  limit: number;
  offset: number;
  data: Recipe[];
};
export const getAllRecipes = (limit: number, offset: number) =>
  getApi<GetAllRecipesResponse>("/api/recipes/all", {
    limit: limit.toString(),
    offset: offset.toString(),
  });
