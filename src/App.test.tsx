import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { App } from "./App"

test("renders About Us text", () => {
  render(<App />)
  const linkElement = screen.getByText(/About Us/i)
  expect(linkElement).toBeInTheDocument()
})
