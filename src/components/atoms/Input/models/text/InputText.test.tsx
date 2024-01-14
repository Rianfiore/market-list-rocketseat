import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Input } from "../..";

describe("Text Model from Input Component", () => {
  test("should be able to render", () => {
    const { getByTestId } = render(<Input.Text />);

    expect(getByTestId("input-text")).toBeInTheDocument();
  });

  test("should be able to render with placeholder", () => {
    const { getByPlaceholderText } = render(
      <Input.Text placeholder="placeholder" />
    );

    expect(getByPlaceholderText("placeholder")).toBeInTheDocument();
  });

  test("should be able to render with value", () => {
    const { getByDisplayValue } = render(<Input.Text value="value" readOnly />);

    expect(getByDisplayValue("value")).toBeInTheDocument();
  });
});
