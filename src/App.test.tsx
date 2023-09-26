import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { App } from "./App"
import PricingPage from "./components/PricingPage"

test("renders learn react link", () => {
  render(<App />)
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})

test("renders new pricing tier in PricingPage", () => {
  render(<PricingPage />)
  
  const freeTierElement = screen.getByText(/Free/i)
  const plusTierElement = screen.getByText(/🚀 Plus/i)
  const proTierElement = screen.getByText(/💎 Pro/i)
  
  const priceElement = screen.getByText(/\$120 \/ month/i)
  const ticketsElement = screen.getByText(/30 GPT-4 Sweep tickets \/ month/i)
  const discordSupportElement = screen.getByText(/Support Via Discord/i)
  
  // Check that the new tier is displayed between the free and $480 tiers
  const tiers = [freeTierElement, plusTierElement, proTierElement]
  tiers.forEach((tier, index) => {
    expect(tier).toBeInTheDocument()
    if (index < tiers.length - 1) {
      expect(tier.compareDocumentPosition(tiers[index + 1]) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    }
  })
  
  // Check that the price and tickets elements are in the document
  expect(priceElement).toBeInTheDocument()
  expect(ticketsElement).toBeInTheDocument()
  expect(discordSupportElement).toBeInTheDocument()
})
