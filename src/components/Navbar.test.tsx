import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("renders Navbar component", () => {
    render(<Navbar />);

    expect(screen.getByText("Sweep AI")).toBeInTheDocument();
    expect(screen.getByText("Documentation")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Pricing")).toBeInTheDocument();
  });

  test("renders social media links", () => {
    render(<Navbar />);

    expect(screen.getByLabelText("Twitter")).toBeInTheDocument();
    expect(screen.getByLabelText("Github")).toBeInTheDocument();
    expect(screen.getByLabelText("Discord")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  test("renders mobile menu button on small screens", () => {
    window.innerWidth = 500;
    render(<Navbar />);

    expect(screen.getByLabelText("Options")).toBeInTheDocument();
  });

  test("does not render mobile menu button on large screens", () => {
    window.innerWidth = 1200;
    render(<Navbar />);

    expect(screen.queryByLabelText("Options")).toBeNull();
  });
});
