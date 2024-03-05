import { Recipe, isSpecialIngredient } from "types";

type Props = {
  recipe: Recipe;
};
export const Card = ({ recipe }: Props) => {
  return (
    <div className="flex rounded border border-gray-200 bg-white/50 p-4 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
      <div className="block space-y-2">
        <h2 className="text-2xl font-bold dark:text-white">{recipe.name}</h2>
        {recipe.category ? (
          <span className="mr-1 inline-block rounded bg-pink-200 px-2 py-1 text-xs font-semibold uppercase text-pink-800 last:mr-0">
            {recipe.category}
          </span>
        ) : undefined}

        <h3 className="text-lg font-bold">Ingredients</h3>
        <ul className="list-inside list-disc px-1 text-sm">
          {recipe.ingredients.map((ingredient) => {
            if (isSpecialIngredient(ingredient)) {
              return <li key={ingredient.special}>{ingredient.special}</li>;
            }
            return (
              <li key={ingredient.ingredient}>
                {ingredient.amount} {ingredient.unit} {ingredient.ingredient}
              </li>
            );
          })}
        </ul>

        <h3 className="text-lg font-bold">Preparation</h3>
        <div className="text-sm">{recipe.preparation}</div>
      </div>
    </div>
  );
};
