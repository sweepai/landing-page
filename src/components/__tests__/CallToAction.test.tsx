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
  });

  it('opens the correct URL on "Install Sweep" button click', () => {
    const { getByText } = render(<CallToAction />);
    const button = getByText("Install Sweep");
    window.open = jest.fn();
    fireEvent.click(button);
    expect(window.open).toHaveBeenCalledWith(
      "https://github.com/apps/sweep-ai",
    );
  });

  it('opens the correct URL on "Join our Discord" link click', () => {
    const { getByText } = render(<CallToAction />);
    const link = getByText("Join our Discord");
    window.open = jest.fn();
    fireEvent.click(link);
    expect(window.open).toHaveBeenCalledWith("https://discord.gg/sweep");
  });
});
