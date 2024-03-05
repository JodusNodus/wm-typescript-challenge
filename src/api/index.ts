import { Recipe } from "types";

async function getApi<T>(path: string): Promise<T> {
  const resp = await fetch(path);
  if (!resp.ok) {
    throw new Error(`${resp.status}: ${resp.statusText}`);
  }
  return resp.json();
}

export type GetPopularRecipesResponse = { cocktails: Recipe[] };
export const getPopularRecipes = () =>
  getApi<GetPopularRecipesResponse>("/api/recipes/popular");
