import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("renders correctly", () => {
    render(<Navbar />);
    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();
  });

  test("updates state on viewport change", () => {
    // Simulate a change in viewport size
    window.innerWidth = 500;
    window.dispatchEvent(new Event("resize"));

    render(<Navbar />);
    const navbarElement = screen.getByTestId("navbar");
    // Check that the state of the Navbar component updates accordingly
    // This will depend on how the state is used in the component
  });
});
