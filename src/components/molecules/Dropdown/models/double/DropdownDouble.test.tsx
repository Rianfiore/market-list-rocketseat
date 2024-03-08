import { dropdownDoubleMock } from "@/__mocks__/components/molecules";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { DropdownDouble } from ".";

describe("DropdownDouble component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<DropdownDouble {...dropdownDoubleMock} />);
    const dropdown = getByTestId("dropdown-double");
    1;
    expect(dropdown).toBeInTheDocument();
  });

  test('should render when "label" is passed', () => {
    const { getByTestId } = render(<DropdownDouble {...dropdownDoubleMock} />);
    const label = getByTestId("dropdown-double-label");

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(dropdownDoubleMock.label!);
  });

  test("should be able to render data when dropdown menu opens", () => {
    const { getByTestId } = render(<DropdownDouble {...dropdownDoubleMock} />);
    const inputSelect = getByTestId("input-select-input");

    fireEvent.click(inputSelect);

    const dropdownMenu = getByTestId("dropdown-menu");

    expect(dropdownMenu).toBeInTheDocument();

    dropdownDoubleMock.data.forEach((option) => {
      expect(dropdownMenu).toHaveTextContent(option.value!);
    });
  });

  test("should be able to not render data when dropdown menu closes", () => {
    const { getByTestId } = render(<DropdownDouble {...dropdownDoubleMock} />);
    const inputSelect = getByTestId("input-select-input");

    fireEvent.click(inputSelect);

    const dropdownMenu = getByTestId("dropdown-menu");

    expect(dropdownMenu).toBeInTheDocument();

    fireEvent.click(inputSelect);

    expect(dropdownMenu).not.toBeInTheDocument();
  });

  test("should be able to select an option", () => {
    const { getByTestId, getAllByTestId } = render(
      <DropdownDouble {...dropdownDoubleMock} />
    );
    const inputSelect = getByTestId("input-select-input");

    fireEvent.click(inputSelect);

    const dropdownMenu = getByTestId("dropdown-menu");

    expect(dropdownMenu).toBeInTheDocument();

    const option = getAllByTestId("dropdown-menu-option")[0];

    fireEvent.click(option);

    expect(dropdownMenu).not.toBeInTheDocument();
  });
});
