import { render } from "@testing-library/react-native";
import React from "react";
import Index from "../index";

describe("Index component", () => {
  it("renders the expected text", () => {
    const { getByText } = render(<Index />);
    expect(getByText("Edit app/index.tsx to edit tytuy.")).toBeTruthy();
  });
});
