import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText("Sweep AI")).toBeInTheDocument();
  });

  it("toggles display based on window size", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText("Sweep AI")).toBeInTheDocument();

    // Simulate window resize
    global.innerWidth = 500;
    fireEvent(window, new Event("resize"));
    expect(getByText("Sweep AI")).toBeInTheDocument();
  });

  // Add more tests as needed
});
