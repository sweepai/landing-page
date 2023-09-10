import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("renders Navbar component without crashing", () => {
    render(<Navbar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("changes state correctly when window size changes", () => {
    // Initial render
    render(<Navbar />);
    expect(screen.getByRole("navigation")).toHaveClass("large");

    // Simulate window resize
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));

    // Check if state changes correctly
    expect(screen.getByRole("navigation")).toHaveClass("small");
  });
});
