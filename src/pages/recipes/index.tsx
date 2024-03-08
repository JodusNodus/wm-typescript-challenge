import { GetAllRecipesResponse, getAllRecipes } from "api";
import { Spinner } from "components";
import { Card } from "components/card";
import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { ROUTES } from "router";
import useScrollToTopOnPageChange from "utils/navigation";

const CARDS_PER_PAGE = 8;

const Recipes = () => {
  const { page: pageStr = "1" } = useParams();
  const page = React.useMemo(() => {
    const int = parseInt(pageStr, 10);
    if (isNaN(int)) return 1;
    return int;
  }, [pageStr]);

  const { error, data, isLoading } = useQuery<GetAllRecipesResponse, Error>(
    ["allRecipes", page],
    () => getAllRecipes(CARDS_PER_PAGE, (page - 1) * CARDS_PER_PAGE)
  );
  useScrollToTopOnPageChange();

  return (
    <main>
      <h1 className="mb-5 text-3xl font-semibold dark:text-white">
        All cocktails.
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
          <>
            <div className="grid grid-flow-row auto-rows-max grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
              {data.data.map((recipe) => (
                <Card key={recipe.name} recipe={recipe} />
              ))}
            </div>
            <PageControls
              page={page}
              total={Math.ceil(data.total / CARDS_PER_PAGE)}
            />
          </>
        )
      )}
    </main>
  );
};

const controlStyles =
  "px-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white";

const PageControls = ({ page, total }: { page: number; total: number }) => {
  const pages = React.useMemo(() => new Array(total).fill(0), [total]);
  const hidePrev = page <= 1;
  const hideNext = page >= total;
  return (
    <div className="relative mt-5 flex flex-col items-center">
      <div className="flex w-full justify-between">
        <Link
          className={`${controlStyles} ${hidePrev ? "invisible" : ""}`}
          aria-disabled={hidePrev}
          to={`${ROUTES.RECIPES}/${page - 1}`}
          data-testid="paginate-prev"
        >
          &larr; Previous
        </Link>
        <Link
          aria-disabled={hideNext}
          className={`${controlStyles} ${hideNext ? "invisible" : ""}`}
          to={`${ROUTES.RECIPES}/${page + 1}`}
          data-testid="paginate-next"
        >
          Next &rarr;
        </Link>
      </div>
      <ol className="mt-3 flex sm:absolute sm:top-0 sm:mt-0">
        {pages.map((x, i) => {
          const p = i + 1;
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={i}>
              <Link
                className={`${controlStyles} ${
                  p === page ? "font-semibold underline" : ""
                }`}
                data-testid={p === page ? "current-page-link" : undefined}
                to={`${ROUTES.RECIPES}/${p}`}
              >
                {p}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Recipes;
