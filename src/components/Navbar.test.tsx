import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("renders without crashing", () => {
    const { container } = render(<Navbar />);
    expect(container).toBeTruthy();
  });

  test("updates state on window resize", () => {
    const { getByTestId } = render(<Navbar />);
    const navbar = getByTestId("navbar");
    expect(navbar).toHaveClass("large");

    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));
    expect(navbar).toHaveClass("small");
  });

  test("interacts with nav items", () => {
    const { getByText } = render(<Navbar />);
    const navItem = getByText("Home");
    fireEvent.click(navItem);
    expect(navItem).toHaveClass("active");
  });
});
