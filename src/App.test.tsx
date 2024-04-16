import React from "react";
import { screen } from "@testing-library/react";
import { render } from "./test-utils";
import { App } from "./App";
import PricingPage from "./components/PricingPage";
import Footer from "./components/Footer";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn chakra/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders pricing tiers in PricingPage", () => {
  render(<PricingPage />);

  const basicTierElement = screen.getByText(/Basic/i);
  const proTierElement = screen.getByText(/Pro/i);
  const enterpriseTierElement = screen.getByText(/Enterprise/i);

  // Check that each tier is rendered
  expect(basicTierElement).toBeInTheDocument();
  expect(proTierElement).toBeInTheDocument(); 
  expect(enterpriseTierElement).toBeInTheDocument();

  // Check tier order on larger screens
  const tiers = [basicTierElement, proTierElement, enterpriseTierElement];
  tiers.forEach((tier, index) => {
    if (index < tiers.length - 1) {
      expect(
        tier.compareDocumentPosition(tiers[index + 1]) &
        Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy();
    }
  });
});

test("renders SWEEP AI INC in Footer", () => {
  render(<Footer />);
  const textElement = screen.getByText(/© 2023 SWEEP AI, Inc./i);
  expect(textElement).toBeInTheDocument();
});
