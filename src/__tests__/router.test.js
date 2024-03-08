import { Suspense } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppProvidersWrapper } from "context/wrapper";

import { Router } from "../router";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AppProvidersWrapper }),
  };
};

test("full app rendering/navigating", async () => {
  const { user } = await renderWithRouter(<Router />);

  // Check if the homepage api text is visible
  expect(
    await screen.findByText("Most popular cocktails.")
  ).toBeInTheDocument();

  // Check on the recipes link in the navbar
  await user.click(await screen.findByTestId(/navbar-link--recipes/));

  // Check if the recipes api tekst is visible
  expect(screen.getByText("All cocktails.")).toBeInTheDocument();
});
