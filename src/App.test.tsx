import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { App } from "./App"

test("renders Navbar dropdown menu", () => {
  render(<App />)
  const dropdownMenu = screen.getByRole('button', { name: /options/i })
  expect(dropdownMenu).toBeInTheDocument()
})

test("renders Navbar dropdown menu items", () => {
  render(<App />)
  const dropdownMenu = screen.getByRole('button', { name: /options/i })
  userEvent.click(dropdownMenu)

  const twitterItem = screen.getByRole('button', { name: /twitter/i })
  expect(twitterItem).toBeInTheDocument()

  const githubItem = screen.getByRole('button', { name: /github/i })
  expect(githubItem).toBeInTheDocument()

  const discordItem = screen.getByRole('button', { name: /discord/i })
  expect(discordItem).toBeInTheDocument()

  const emailItem = screen.getByRole('button', { name: /email/i })
  expect(emailItem).toBeInTheDocument()
})
