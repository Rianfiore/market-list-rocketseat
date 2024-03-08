import { dropdownMenuMock } from "@/__mocks__/components/atoms/dropdownMenu";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { DropdownMenu } from ".";

describe("DropdownMenu component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<DropdownMenu {...dropdownMenuMock} />);
    const dropdownMenu = getByTestId("dropdown-menu");

    expect(dropdownMenu).toBeInTheDocument();
  });

  test("should render with options", () => {
    const { getAllByTestId } = render(<DropdownMenu {...dropdownMenuMock} />);
    const dropdownMenuOptions = getAllByTestId("dropdown-menu-option");

    dropdownMenuOptions.forEach((option) => {
      expect(option).toBeInTheDocument();
    });

    expect(dropdownMenuOptions.length).toBe(dropdownMenuMock.data.length);
  });
});
