import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { render } from "./test-utils";
import { App } from "./App";
import { Navbar } from "./components/Navbar";
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn chakra/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Navbar component", () => {
  const { container } = render(<Navbar />);
  expect(container.firstChild).toBeInTheDocument();
});

test("checks initial state of Navbar component", () => {
  render(<Navbar />);
  const navbarList = screen.getByTestId("navbar-list");
  const navbarMenu = screen.getByTestId("navbar-menu");
  const initialListDisplay = window.innerWidth >= 1024 ? "flex" : "none";
  const initialMenuDisplay = window.innerWidth < 1024 ? "flex" : "none";
  expect(navbarList.style.display).toEqual(initialListDisplay);
  expect(navbarMenu.style.display).toEqual(initialMenuDisplay);
});

test("checks state of Navbar component after window resize", () => {
  render(<Navbar />);
  fireEvent.resize(window, { target: { innerWidth: 500 } });
  const navbarList = screen.getByTestId("navbar-list");
  const navbarMenu = screen.getByTestId("navbar-menu");
  const updatedListDisplay = window.innerWidth >= 1024 ? "flex" : "none";
  const updatedMenuDisplay = window.innerWidth < 1024 ? "flex" : "none";
  expect(navbarList.style.display).toEqual(updatedListDisplay);
  expect(navbarMenu.style.display).toEqual(updatedMenuDisplay);
});
