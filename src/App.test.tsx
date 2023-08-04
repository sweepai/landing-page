import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { App } from "./App"

test("renders App without crashing", () => {
  render(<App />)
  // If the App component renders without throwing an error, the test passes
})
