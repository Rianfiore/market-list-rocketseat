import { buttonMock } from "@/__mocks__/components/atoms";
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
    const { getByTestId } = render(<Button onClick={buttonMock.onClick} />);
    const button = getByTestId("button");

    button.click();
    expect(buttonMock.onClick).toHaveBeenCalled();
  });
});
