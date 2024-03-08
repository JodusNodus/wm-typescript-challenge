// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { server } from "./mocks/server";
import "mock-match-media/jest-setup.cjs";

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen();

  window.scrollTo = jest.fn();
});

afterEach(() => {
  // Reset any runtime handlers tests may use.
  cleanup();
  localStorage.clear();
  server.resetHandlers();
});

afterAll(() => {
  // Clean up once the tests are done.
  server.close();
  jest.clearAllMocks();
});
