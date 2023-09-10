import React from "react";
import { screen } from "@testing-library/react";
import { render } from "./test-utils";
import { App } from "./App";
import { Navbar } from "./components/Navbar";

test("Navbar state changes on window resize", () => {
  const { container } = render(<Navbar />);
  expect(container.firstChild).toHaveClass("large");
  window.resizeTo(500, 300);
  expect(container.firstChild).toHaveClass("small");
});
