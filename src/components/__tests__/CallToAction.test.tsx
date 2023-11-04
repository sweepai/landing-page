import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import CallToAction from "../CallToAction";

describe("CallToAction", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<CallToAction />);
    expect(getByText("Python with AI")).toBeInTheDocument();
  });

  it("toggles spin state and animation on logo click", async () => {
    const { getByAltText } = render(<CallToAction />);
    const logo = getByAltText("Logo");
    await act(async () => {
      fireEvent.click(logo);
    });
    expect(logo).toHaveStyle("animation: spin 0.5s linear");
    fireEvent.click(logo);
    expect(logo).toHaveStyle(
      "animation: bob 0.75s ease-in-out infinite alternate",
    );
  });

  it('opens the correct URL on "Install Sweep" button click', () => {
    const { getByText } = render(<CallToAction />);
    const button = getByText("Install Sweep");
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);
    fireEvent.click(button);
    expect(spy).toHaveBeenCalledWith(
      "https://github.com/apps/sweep-ai",
    );
    spy.mockRestore();
  });

  it('opens the correct URL on "Join our Discord" link click', () => {
    const { getByText } = render(<CallToAction />);
    const link = getByText("Join our Discord");
    window.open = jest.fn();
    fireEvent.click(link);
    expect(window.open).toHaveBeenCalledWith("https://discord.gg/sweep");
  });
});
it("renders the expected elements", () => {
  const { getByText, getByAltText } = render(<CallToAction />);
  expect(getByAltText("Logo")).toBeInTheDocument();
  expect(getByText("Python with AI")).toBeInTheDocument();
  expect(
    getByText(
      "Junior Python developer that uses your entire codebase to write Pull Requests",
    ),
  ).toBeInTheDocument();
  expect(getByText("Install Sweep")).toBeInTheDocument();
  expect(getByText("Join our Discord")).toBeInTheDocument();
  expect(document.querySelector("iframe")).toBeInTheDocument();
});
