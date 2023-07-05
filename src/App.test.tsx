import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { App } from "./App"

test("renders Navbar component", () => {
  render(<App />);
  const navbarElement = screen.getByText('Sweep AI');
  expect(navbarElement).toBeInTheDocument();
});

test("renders Features component", () => {
  render(<App />);
  const featuresElement = screen.getByText('Clean up your tech debt, automatically');
  expect(featuresElement).toBeInTheDocument();
});

test("renders Examples component", () => {
  render(<App />);
  const examplesElement = screen.getByText('Example tickets handled by Sweep');
  expect(examplesElement).toBeInTheDocument();
});

test("renders Testimonials component", () => {
  render(<App />);
  const testimonialsElement = screen.getByText('What our users are saying');
  expect(testimonialsElement).toBeInTheDocument();
});

test("renders Conclusion component", () => {
  render(<App />);
  const conclusionElement = screen.getByText('Ready to get started?');
  expect(conclusionElement).toBeInTheDocument();
});

