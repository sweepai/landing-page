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

test("updates state on window resize", () => {
  const { container } = render(<Navbar />)
  window.resizeTo(500, 300)
  const navbarInstance = container.firstChild
  expect(navbarInstance.state.listDisplay).toBe("none")
  expect(navbarInstance.state.menuDisplay).toBe("block")
})

test("renders Navbar component", () => {
  render(<Navbar />)
  const navElement = screen.getByText(/navbar/i)
  expect(navElement).toBeInTheDocument()
})
