import React from "react"
import { screen, fireEvent } from "@testing-library/react"
import { render } from "./test-utils"
import { App, Navbar } from "./App"

test("renders learn react link", () => {
  render(<App />)
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})

test("renders Navbar component", () => {
  render(<Navbar />)
  const navElement = screen.getByText(/Navbar/i)
  expect(navElement).toBeInTheDocument()
})

test("simulates click event on navItem", () => {
  render(<Navbar />)
  fireEvent.click(screen.getByText(/navItem/i))
  expect(screen.getByText(/navItem clicked/i)).toBeInTheDocument()
})
