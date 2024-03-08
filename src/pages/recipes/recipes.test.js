import { fireEvent, render, screen } from "@testing-library/react";
import {
  AppProvidersWrapper,
} from "context/wrapper";
import { renderWithRouter } from "testUtils";

import Recipes from "./index";
import { Router } from "../../router";

it("renders all cocktails", async () => {
  render(<Recipes />, { wrapper: AppProvidersWrapper });
  expect(screen.getByText("All cocktails.")).toBeInTheDocument();
  const items = await screen.findAllByTestId("cocktail-card");
  expect(items).toHaveLength(8);
});

it("paginates to different cocktails", async () => {
  renderWithRouter(<Router />, { route: "/recipes" });
  const nextButton = await screen.findByTestId("paginate-next");

  fireEvent.click(nextButton);
  await screen.findAllByTestId("cocktail-card");
  expect(window.location.pathname).toBe("/recipes/2");
});

it("shows the correct page from url", async () => {
  renderWithRouter(<Router />, { route: "/recipes/2" });
  const currentPageLink = await screen.findByTestId("current-page-link");
  expect(currentPageLink).toHaveTextContent("2");
});
