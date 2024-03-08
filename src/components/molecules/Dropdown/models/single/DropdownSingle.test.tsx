import { dropdownSingleMock } from "@/__mocks__/components/molecules";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { DropdownSingle } from ".";

describe("DropdownSingle component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(
      <DropdownSingle data={dropdownSingleMock.data} />
    );
    const dropdown = getByTestId("dropdown-single");

    expect(dropdown).toBeInTheDocument();
  });

  test('should be able to call "onChange" prop in dropdown menu', async () => {
    const { getByTestId, findAllByTestId } = render(
      <DropdownSingle
        data={dropdownSingleMock.data}
        onOptionChange={dropdownSingleMock.onOptionChange}
      />
    );
    const input = getByTestId("input-select-input");

    fireEvent.click(input);

    const menuOptions = await findAllByTestId("dropdown-single-menu-option");

    fireEvent.click(menuOptions[0]);

    expect(dropdownSingleMock.onOptionChange).toHaveBeenCalled();
  });

  test("should render when user clicks on the input and the menu opens", () => {
    const { getByTestId } = render(
      <DropdownSingle data={dropdownSingleMock.data} />
    );
    const input = getByTestId("input-select-input");

    fireEvent.click(input);

    const menu = getByTestId("dropdown-single-menu");

    expect(menu).toBeInTheDocument();
  });

  test("should render when the menu is open and the options are rendered correctly", async () => {
    const { getByTestId, findAllByTestId } = render(
      <DropdownSingle data={dropdownSingleMock.data} />
    );
    const input = getByTestId("input-select-input");

    fireEvent.click(input);

    // find all options
    const menuOptions = await findAllByTestId("dropdown-single-menu-option");

    // check if the options are rendered with same length as the data
    expect(menuOptions.length).toBe(dropdownSingleMock.data.length);

    // check if the options are rendered with the correct text
    dropdownSingleMock.data.forEach((item, index) => {
      const option = menuOptions[index];

      expect(option).toBeInTheDocument();
      expect(option).toHaveTextContent(item.value);
    });
  });

  test("should render when user clicks outside the menu and the menu closes", () => {
    const { getByTestId } = render(
      <DropdownSingle data={dropdownSingleMock.data} />
    );
    const input = getByTestId("input-select-input");

    fireEvent.click(input);

    const menu = getByTestId("dropdown-single-menu");

    expect(menu).toBeInTheDocument();

    fireEvent.click(input);

    expect(menu).not.toBeInTheDocument();
  });

  test("should render when user clicks on the option and the menu closes", async () => {
    const { getByTestId, findAllByTestId } = render(
      <DropdownSingle data={dropdownSingleMock.data} />
    );
    const input = getByTestId("input-select-input");

    fireEvent.click(input);

    const menu = getByTestId("dropdown-single-menu");

    // find all options
    const menuOptions = await findAllByTestId("dropdown-single-menu-option");

    // click on the first option
    fireEvent.click(menuOptions[0]);

    expect(menu).not.toBeInTheDocument();
  });

  test("should render when user clicks on the option and the input value changes", async () => {
    const { getByTestId, findAllByTestId } = render(
      <DropdownSingle data={dropdownSingleMock.data} />
    );
    const input = getByTestId("input-select-input");

    fireEvent.click(input);

    // find all options
    const menuOptions = await findAllByTestId("dropdown-single-menu-option");

    // click on the first option
    fireEvent.click(menuOptions[0]);

    expect(input).toHaveTextContent(dropdownSingleMock.data[0].value);
  });
});
