import { GetPopularRecipesResponse, getPopularRecipes } from "api";
import { Spinner } from "components";
import { Card } from "components/card";
import { useQuery } from "react-query";

const Homepage = () => {
  const { error, data, isLoading } = useQuery<GetPopularRecipesResponse, Error>(
    "mostPopularRecipes",
    getPopularRecipes
  );
  return (
    <main>
      <h1 className="mb-5 text-3xl font-semibold dark:text-white">
        Most popular cocktails.
      </h1>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : error ? (
        <div>
          <h2 className="text-xl font-semibold">Error: {error.toString()}</h2>
        </div>
      ) : (
        data && (
          <div className="grid grid-flow-row auto-rows-max grid-cols-1 gap-2 md:grid-cols-3 ">
            {data.cocktails.map((recipe) => (
              <Card key={recipe.name} recipe={recipe} />
            ))}
          </div>
        )
      )}
    </main>
  );
};

export default Homepage;
