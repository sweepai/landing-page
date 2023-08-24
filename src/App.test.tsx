import React from "react"
import { screen, fireEvent } from "@testing-library/react"
import { render } from "./test-utils"
import { App } from "./App"
import CallToAction from "./components/CallToAction"

test("renders learn react link", () => {
  render(<App />)
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})

test("renders CallToAction component", () => {
  render(<CallToAction />)
  const buttonElement = screen.getByRole('button')
  expect(buttonElement).toBeInTheDocument()
})

test("updates state and UI on button click", () => {
  render(<CallToAction />)
  const buttonElement = screen.getByRole('button')
  fireEvent.click(buttonElement)
  expect(buttonElement).toHaveClass('spin')
})
