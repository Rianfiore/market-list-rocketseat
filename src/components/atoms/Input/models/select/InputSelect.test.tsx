import { inputSelectMock } from "@/__mocks__/components/atoms";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { InputSelect } from ".";

describe("InputSelect component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<InputSelect {...inputSelectMock} />);
    const input = getByTestId("input-select");

    expect(input).toBeInTheDocument();
  });

  test('should be able to call "onClick" prop in input', () => {
    const { getByTestId } = render(<InputSelect {...inputSelectMock} />);
    const input = getByTestId("input-select-input");

    fireEvent.click(input);

    expect(inputSelectMock.onClick).toHaveBeenCalled();
  });

  test("should render with the correct label", () => {
    const { getByTestId } = render(<InputSelect {...inputSelectMock} />);
    const label = getByTestId("input-select-label");

    expect(label).toBeInTheDocument();

    expect(label).toHaveTextContent(inputSelectMock.label!);
  });

  test("should render with the correct placeholder", () => {
    const { getByTestId } = render(<InputSelect {...inputSelectMock} />);

    const input = getByTestId("input-select-input");

    expect(input).toBeInTheDocument();
    expect(input).toHaveTextContent(inputSelectMock.placeholder!);
  });
});
