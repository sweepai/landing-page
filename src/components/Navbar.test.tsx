import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders without crashing", () => {
    const { container } = render(<Navbar />);
    expect(container).toBeTruthy();
  });

  it("renders the correct elements based on the state of listDisplay and menuDisplay", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText("Sweep AI")).toBeInTheDocument();
    expect(getByText("Documentation")).toBeInTheDocument();
    expect(getByText("About Us")).toBeInTheDocument();
    expect(getByText("Pricing")).toBeInTheDocument();
  });

  it("changes the state of listDisplay and menuDisplay correctly when the window is resized", () => {
    const { getByText } = render(<Navbar />);
    global.innerWidth = 500;
    fireEvent(window, new Event("resize"));
    expect(getByText("Sweep AI")).toBeInTheDocument();
  });

  it("opens the correct link when a navItem is clicked", () => {
    const { getByLabelText } = render(<Navbar />);
    fireEvent.click(getByLabelText("Twitter"));
    expect(window.location.href).toBe("https://twitter.com/sweep__ai");
  });
});
