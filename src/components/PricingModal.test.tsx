import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PricingModal from "./PricingModal";

test("renders without crashing", () => {
  const { container } = render(<PricingModal />);
  expect(container).toBeInTheDocument();
});

test("renders correct elements", () => {
  const { getByText } = render(<PricingModal />);
  expect(getByText("⚡ Basic")).toBeInTheDocument();
  expect(getByText("💎 Pro")).toBeInTheDocument();
  expect(getByText("🏢 Enterprise")).toBeInTheDocument();
});

test("buttons work as expected", () => {
  const { getByText } = render(<PricingModal />);
  fireEvent.click(getByText("Install"));
  fireEvent.click(getByText("Purchase"));
  fireEvent.click(getByText("Contact us"));
  // Here you should check the expected outcome after the click events.
  // This depends on the functionality of the buttons.
});
