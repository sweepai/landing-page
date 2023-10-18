import React from "react";
import { render } from "./test-utils";
import Banner from "./Banner";

test("renders SWEEP AI INC text", () => {
  const { getByText } = render(<Banner />);
  expect(getByText("SWEEP AI INC")).toBeInTheDocument();
});
