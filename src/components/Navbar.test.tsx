import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
  });

  it("behaves as expected when the state changes", () => {
    const { getByText, rerender } = render(<Navbar />);
    fireEvent.click(getByText("About"));
    rerender(<Navbar />);
    expect(getByText("About")).toHaveClass("active");
  });
});
