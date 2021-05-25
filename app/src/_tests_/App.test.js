import React from "react";
import TestRenderer from "react-test-renderer";
import { render, screen, cleanup } from "@testing-library/react";

import Home from "../components/Home";
import Donate from "../components/Donate";
import Footer from "../components/Footer";

afterEach(() => {
  cleanup();
});

// smoke test make sure app renders
test("should render home component", () => {
  render(<Home />);
  const homeElement = screen.getByTestId("home-1");
  expect(homeElement).toBeInTheDocument();
});

// smoke test make sure donate renders
test("should render Donate component", () => {
  render(<Donate />);
  const donateElement = screen.getByTestId("donate-1");
  expect(donateElement).toBeInTheDocument();
  expect(donateElement).toHaveTextContent(
    "You Can Donate to the Bella Charity Today",
  );
});

// smoke test make sure Footer renders
test("should render Footer component", () => {
  render(<Footer />);
  const footerElement = screen.getByTestId("footer-1");
  expect(footerElement).toBeInTheDocument();
});
