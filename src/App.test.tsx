import React from "react"
import { screen, fireEvent } from "@testing-library/react"
import { render } from "./test-utils"
import { App, Navbar } from "./App"

test("updates state on window resize", () => {
  const { container } = render(<Navbar />)
  fireEvent.resize(window, { target: { innerWidth: 500 } })
  expect(container.firstChild).toHaveClass('small-screen')
})