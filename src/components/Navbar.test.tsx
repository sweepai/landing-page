import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("renders Navbar correctly", () => {
    const { getByText } = render(<Navbar />);
    // Replace 'Element Text' with the actual text of an element in the Navbar component
    const element = getByText("Element Text");
    expect(element).toBeInTheDocument();
  });

  test("updates state on window resize", () => {
    const { container } = render(<Navbar />);
    // Simulate a window resize event
    fireEvent(window, new Event("resize"));
    // Replace 'stateValue' with the actual state value that should change on window resize
    const stateValue = container.querySelector("stateValue");
    // Replace 'Expected State Value' with the expected state value after window resize
    expect(stateValue).toEqual("Expected State Value");
  });
});
