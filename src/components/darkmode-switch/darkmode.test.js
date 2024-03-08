import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { AppProvidersWrapper } from "context/wrapper";

import { setMedia } from "mock-match-media";
import { act } from "react-dom/test-utils";
import { DarkModeSwitch } from "./index";

it("renders page as dark when system prefers dark mode", () => {
  setMedia({
    "prefers-color-scheme": "dark",
  });
  Object.defineProperty(window, "darkMode", {
    value: true,
  });

  render(<DarkModeSwitch onClick={() => undefined} />, {
    wrapper: AppProvidersWrapper,
  });

  const wrapper = screen.getByTestId("darkmode-wrapper");
  expect(wrapper).toHaveClass("dark");
});

it("renders page as system preference theme until the user changes it", () => {
  setMedia({
    "prefers-color-scheme": "light",
  });

  const onClick = jest.fn();
  render(<DarkModeSwitch onClick={onClick} />, {
    wrapper: AppProvidersWrapper,
  });
  const button = screen.getByTestId("darkmode-switch");
  const wrapper = screen.getByTestId("darkmode-wrapper");

  expect(button).toHaveTextContent("Switch to dark mode.");
  expect(wrapper).toHaveClass("light");

  fireEvent.click(button);
  expect(onClick).toHaveBeenCalled();
  expect(button).toHaveTextContent("Switch to light mode.");
  expect(wrapper).toHaveClass("dark");
});

it("renders theme and changes when an event comes in", async () => {
  setMedia({
    "prefers-color-scheme": "light",
  });

  render(<DarkModeSwitch onClick={() => undefined} />, {
    wrapper: AppProvidersWrapper,
  });

  const wrapper = screen.getByTestId("darkmode-wrapper");
  expect(wrapper).toHaveClass("light");

  act(() => {
    setMedia({
      "prefers-color-scheme": "dark",
    });
  });

  await waitFor(() => expect(wrapper).toHaveClass("dark"));
});
