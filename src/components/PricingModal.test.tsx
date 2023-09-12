import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PricingModal from "./PricingModal";

describe("PricingModal", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PricingModal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('handles "Extended trial" button click', () => {
    const { getByText } = render(<PricingModal />);
    const button = getByText("Extended trial");
    window.open = jest.fn();
    fireEvent.click(button);
    expect(window.open).toHaveBeenCalledWith(
      "https://buy.stripe.com/7sI4jlaCR3PaabebIP",
      "_blank",
    );
  });

  it('handles "Install" button click', () => {
    const { getByText } = render(<PricingModal />);
    const button = getByText("Install");
    window.open = jest.fn();
    fireEvent.click(button);
    expect(window.open).toHaveBeenCalledWith(
      "https://github.com/sweepai/sweep#-getting-started",
      "_blank",
    );
  });

  it('handles "Purchase" button click', () => {
    const { getByText } = render(<PricingModal />);
    const button = getByText("Purchase");
    window.open = jest.fn();
    fireEvent.click(button);
    expect(window.open).toHaveBeenCalledWith(
      "https://buy.stripe.com/6oE5npbGVbhC97afZ4",
      "_blank",
    );
  });

  it('handles "Contact us" button click', () => {
    const { getByText } = render(<PricingModal />);
    const button = getByText("Contact us");
    window.open = jest.fn();
    fireEvent.click(button);
    expect(window.open).toHaveBeenCalledWith(
      "https://form.typeform.com/to/wliuvyWE",
      "_blank",
    );
  });
});
