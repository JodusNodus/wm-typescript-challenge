import { render, screen } from "@testing-library/react";
import { AppProvidersWrapper } from "context/wrapper";

import Homepage from "./index";

it("renders most popular cocktails", async () => {
  render(<Homepage />, { wrapper: AppProvidersWrapper });
  expect(screen.getByText("Most popular cocktails.")).toBeInTheDocument();
  const items = await screen.findAllByTestId("cocktail-card");
  expect(items).toHaveLength(5);
});
