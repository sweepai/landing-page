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
  const navbarElement = screen.getByText(/navbar/i);
  expect(navbarElement).toBeInTheDocument();
});

test("updates state on window resize", () => {
  const { container } = render(<Navbar />);
  fireEvent.resize(window, { target: { innerWidth: 500 } });
  if (container.firstChild) {
    const state = (container.firstChild as any).__reactInternalInstance$
      .memoizedState;
    expect(state).toEqual({ listDisplay: "none", menuDisplay: "block" });
  }
});
