import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { App } from "./App"
import Navbar from "./components/Navbar"

test("renders learn react link", () => {
  render(<App />)
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})

test("renders Navbar without crashing", () => {
  render(<Navbar />)
})

test("renders expected elements in Navbar", () => {
  render(<Navbar />)
  const logoElement = screen.getByAltText(/logo/i)
  const navLinkElement = screen.getByText(/home/i)
  expect(logoElement).toBeInTheDocument()
  expect(navLinkElement).toBeInTheDocument()
})
