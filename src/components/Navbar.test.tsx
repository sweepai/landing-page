import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("renders correctly", () => {
    render(<Navbar />);
    const logoElement = screen.getByAltText("logo");
    expect(logoElement).toBeInTheDocument();
  });

  test("updates state correctly when window size changes", () => {
    render(<Navbar />);
    const buttonGroupElement = screen.getByRole("group");
    expect(buttonGroupElement).toHaveStyle("display: flex");
    global.innerWidth = 1024;
    fireEvent(window, new Event("resize"));
    expect(buttonGroupElement).toHaveStyle("display: none");
  });
});
