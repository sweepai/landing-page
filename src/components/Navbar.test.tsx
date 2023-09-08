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

  it("updates state on window resize", () => {
    const { getByText, rerender } = render(<Navbar />);
    global.innerWidth = 500;
    fireEvent(window, new Event("resize"));
    rerender(<Navbar />);
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
  });
});
