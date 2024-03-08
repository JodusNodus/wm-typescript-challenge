/* eslint-disable import/no-extraneous-dependencies */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppProvidersWrapper } from "context/wrapper";

export function renderWithRouter(ui, { route = "/" } = {}) {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AppProvidersWrapper }),
  };
}
