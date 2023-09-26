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
  const newTierElement = screen.getByText(/New Tier/i)
  const priceElement = screen.getByText(/\$120 \/ month/i)
  const ticketsElement = screen.getByText(/30 GPT-4 Sweep tickets \/ month/i)
  expect(newTierElement).toBeInTheDocument()
  expect(priceElement).toBeInTheDocument()
  expect(ticketsElement).toBeInTheDocument()
})
