import React from "react";
import renderer from "react-test-renderer";
import { render, screen, cleanup } from "@testing-library/react";

import About from "../components/About";

afterEach(() => {
  cleanup();
});

test("should render About component", () => {
  render(<About />);
  const aboutElement = screen.getByTestId("about-1");
  expect(aboutElement).toBeInTheDocument();
  expect(aboutElement).toHaveTextContent("Our Mission");
});

test("should include Mission text", () => {
  render(<About />);
  const aboutElement = screen.getByTestId("about-1");
  expect(aboutElement).toHaveTextContent("Our Mission");
  expect(aboutElement).toContainHTML(
    "<h1 data-testid='about-1'>Our Mission</h1>",
  );
});

//snapshot test
// test('matches snapshot', () => {
// });
