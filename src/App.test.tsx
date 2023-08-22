import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { App } from "./App"
import AboutUs from "./components/AboutUs"

test("renders learn react link", () => {
  render(<App />)
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})

test("renders AboutUs component", () => {
  render(<AboutUs />)
  const aboutUsElement = screen.getByText(/About Us/i)
  expect(aboutUsElement).toBeInTheDocument()
})
