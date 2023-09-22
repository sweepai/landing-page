import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("renders without crashing", () => {
    render(<Navbar />);
  });

  test("changes state correctly when window size changes", () => {
    render(<Navbar />);
    // Simulate a window resize event
    fireEvent(window, new Event("resize"));
    // Add assertions to check if the state of the Navbar component changes correctly
  });

  test("renders navItems correctly", () => {
    render(<Navbar />);
    // Add assertions to check if the navItems are rendered correctly
  });
});
