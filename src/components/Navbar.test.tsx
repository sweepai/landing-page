import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

test("renders Navbar without errors", () => {
  render(<Navbar />);
  // Add assertions to check if the Navbar component renders correctly
});

test("checks functionality of buttons and links in Navbar", () => {
  render(<Navbar />);
  // Add assertions to check the functionality of buttons and links in the Navbar component
});
