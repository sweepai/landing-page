import React from "react"
import { shallow } from "enzyme"
import { App } from "./App"

test("renders learn react link", () => {
  const wrapper = shallow(<App />)
  const navbar = wrapper.find('Navbar').instance()
  expect(navbar.state.breakpointValue).toBeDefined()
})
