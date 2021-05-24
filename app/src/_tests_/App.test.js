import React from "react";
import TestRenderer from "react-test-renderer";
import { render, screen, cleanup } from "@testing-library/react";

import Home from "../components/Home";

afterEach(() => {
  cleanup();
});

// smoke test make sure app renders
test("should render home component", () => {
  render(<Home />);
  const homeElement = screen.getByTestId("home-1");
  expect(homeElement).toBeInTheDocument();
});
