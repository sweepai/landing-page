import React from "react";
import { screen, fireEvent } from "@testing-library/react";
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
  const navElement = screen.getByText(/home/i);
  expect(navElement).toBeInTheDocument();
});

test("simulates click event on navItem", () => {
  render(<Navbar />);
  fireEvent.click(screen.getByText(/home/i));
  const clickedElement = screen.getByText(/clicked home/i);
  expect(clickedElement).toBeInTheDocument();
});
