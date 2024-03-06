import { render, screen } from "@testing-library/react";
import { AppProvidersWrapper } from "context/wrapper";

import Recipes from "./index";

it("renders title", () => {
  render(<Recipes />, { wrapper: AppProvidersWrapper });
  expect(screen.getByText("All cocktails.")).toBeInTheDocument();
});
