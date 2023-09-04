import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it("renders the logo", () => {
    const logoElement = screen.getByAltText("logo");
    expect(logoElement).toBeInTheDocument();
  });

  it("renders the Documentation button", () => {
    const documentationButton = screen.getByText("Documentation");
    expect(documentationButton).toBeInTheDocument();
  });

  it("renders the About Us button", () => {
    const aboutUsButton = screen.getByText("About Us");
    expect(aboutUsButton).toBeInTheDocument();
  });

  it("renders the Pricing button", () => {
    const pricingButton = screen.getByText("Pricing");
    expect(pricingButton).toBeInTheDocument();
  });

  // Add more tests as needed
});
