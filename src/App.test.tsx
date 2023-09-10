import React from "react";
import { screen } from "@testing-library/react";
import { render } from "./test-utils";
import { App } from "./App";
import Navbar from "./components/Navbar";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn chakra/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Navbar component", () => {
  render(<Navbar />);
  const navbarElement = screen.getByTestId("navbar");
  expect(navbarElement).toBeInTheDocument();
});

test("Navbar component behaves as expected when state changes", () => {
  const { rerender } = render(<Navbar />);
  const navbarElement = screen.getByTestId("navbar");
  expect(navbarElement).toHaveClass("listDisplay");
  rerender(<Navbar />);
  expect(navbarElement).toHaveClass("menuDisplay");
});
