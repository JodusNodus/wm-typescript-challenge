import { screen } from "@testing-library/react";
import { renderWithRouter } from "testUtils";

import { Router } from "../../router";

it("renders all cocktails", async () => {
  renderWithRouter(<Router />, { route: "/random-query" });
  expect(await screen.findByTestId("not-found-page")).toBeInTheDocument()
});
