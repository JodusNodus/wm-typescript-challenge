import { render, screen } from "@testing-library/react";
import { AppProvidersWrapper } from "context/wrapper";

import Homepage from "./index";

it("renders title", () => {
  render(<Homepage />, { wrapper: AppProvidersWrapper });
  expect(screen.getByText("Most popular cocktails.")).toBeInTheDocument();
});
