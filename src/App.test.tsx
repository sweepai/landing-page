import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { App } from "./App"

test("renders learn react link", () => {
  const props = { theme: "light" }; // Add any props that ColorModeSwitcher expects
  render(<App {...props} />)
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})
