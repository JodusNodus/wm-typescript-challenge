import { screen } from "@testing-library/react";

import { Router } from "../router";
import { renderWithRouter } from "../testUtils";

test("full app rendering/navigating", async () => {
  const { user } = renderWithRouter(<Router />);

  // Check if the homepage api text is visible
  expect(
    await screen.findByText("Most popular cocktails.")
  ).toBeInTheDocument();

  // Check on the recipes link in the navbar
  await user.click(await screen.findByTestId(/navbar-link--recipes/));

  // Check if the recipes api tekst is visible
  expect(screen.getByText("All cocktails.")).toBeInTheDocument();
});
