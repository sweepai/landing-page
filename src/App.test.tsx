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
  const navElement = screen.getByText(/navbar/i)
  expect(navElement).toBeInTheDocument()
})

test("simulates window resize", () => {
  const { container } = render(<Navbar />)
  fireEvent.resize(window, { target: { innerWidth: 500 } })
  expect(container.firstChild).toHaveStyle("display: none")
})
