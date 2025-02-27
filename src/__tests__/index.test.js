import { render, screen } from "@testing-library/react";

import App from "../app";

test("renders lazy component", async () => {
  render(<App />);

  const textToMatch = await screen.findByText(/Most popular cocktails./);
  expect(textToMatch).toBeInTheDocument();
});
