import { checkboxMock } from "@/__mocks__/components/atoms";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Checkbox } from ".";

describe("Checkbox component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<Checkbox />);
    const checkbox = getByTestId("checkbox");

    expect(checkbox).toBeInTheDocument();
  });

  test("should be unchecked by default", () => {
    const { getByTestId } = render(<Checkbox />);
    const checkbox = getByTestId("checkbox");

    expect(checkbox).not.toBeChecked();
  });

  test("onChange event should be triggered when clicked", () => {
    const { getByTestId } = render(
      <Checkbox onChange={checkboxMock.onChange} />
    );
    const checkbox = getByTestId("checkbox");

    checkbox.click();

    expect(checkboxMock.onChange).toHaveBeenCalled();
  });

  test("should be checked when clicked", () => {
    const { getByTestId } = render(<Checkbox />);
    const checkbox = getByTestId("checkbox");

    checkbox.click();

    expect(checkbox).toBeChecked();
  });

  test("should be unchecked when clicked twice", () => {
    const { getByTestId } = render(<Checkbox />);
    const checkbox = getByTestId("checkbox");

    checkbox.click();
    checkbox.click();

    expect(checkbox).not.toBeChecked();
  });
});
