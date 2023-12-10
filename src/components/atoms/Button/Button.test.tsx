import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Button } from ".";

describe("Button component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId("button");

    expect(button).toBeInTheDocument();
  });

  test("onClick event should be triggered when clicked", () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(<Button onClick={mockOnClick} />);
    const button = getByTestId("button");

    button.click();
    expect(mockOnClick).toHaveBeenCalled();
  });
});
