export type NormalIngredient = {
  unit: string;
  amount: number;
  ingredient: string;
};

export type SpecialIngredient = {
  special: string;
};

export type Ingredient = NormalIngredient | SpecialIngredient;

export const isSpecialIngredient = (
  ingredient: Ingredient
): ingredient is SpecialIngredient => "special" in ingredient;
