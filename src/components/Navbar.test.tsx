import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders the navbar component", () => {
    render(<Navbar />);
    const navbarElement = screen.getByRole("navigation");
    expect(navbarElement).toBeInTheDocument();
  });

  // Add more unit tests as needed
});
