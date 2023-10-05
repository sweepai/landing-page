import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText("Sweep AI")).toBeInTheDocument();
  });

  it("renders the correct elements based on the state of listDisplay and menuDisplay", () => {
    const { getByText, queryByText } = render(<Navbar />);
    expect(getByText("Sweep AI")).toBeInTheDocument();
    expect(queryByText("Twitter")).toBeNull();
    fireEvent.resize(window, { target: { innerWidth: 1024 } });
    expect(getByText("Twitter")).toBeInTheDocument();
  });

  it("changes the state of listDisplay and menuDisplay correctly when the window is resized", () => {
    const { getByText, queryByText } = render(<Navbar />);
    expect(getByText("Sweep AI")).toBeInTheDocument();
    expect(queryByText("Twitter")).toBeNull();
    fireEvent.resize(window, { target: { innerWidth: 1024 } });
    expect(getByText("Twitter")).toBeInTheDocument();
    fireEvent.resize(window, { target: { innerWidth: 800 } });
    expect(queryByText("Twitter")).toBeNull();
  });

  it("opens the correct link when a navItem is clicked", () => {
    const { getByLabelText } = render(<Navbar />);
    fireEvent.click(getByLabelText("Twitter"));
    expect(window.location.href).toBe("https://twitter.com/sweep__ai");
  });
});
