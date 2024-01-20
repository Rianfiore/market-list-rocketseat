import { dropdownSingleMock } from "@/__mocks__/components/atoms";
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

  test('should be able to call "onClick" prop in input', () => {
    const { getByTestId } = render(
      <DropdownSingle
        data={dropdownSingleMock.data}
        onClick={dropdownSingleMock.onClick}
      />
    );
    const input = getByTestId("dropdown-single-input");

    fireEvent.click(input);

    expect(dropdownSingleMock.onClick).toHaveBeenCalled();
  });

  test('should be able to call "onChange" prop in dropdown menu', async () => {
    const { getByTestId, findAllByTestId } = render(
      <DropdownSingle
        data={dropdownSingleMock.data}
        onOptionChange={dropdownSingleMock.onOptionChange}
      />
    );
    const input = getByTestId("dropdown-single-input");

    fireEvent.click(input);

    const menuOptions = await findAllByTestId("dropdown-single-menu-option");

    fireEvent.click(menuOptions[0]);

    expect(dropdownSingleMock.onOptionChange).toHaveBeenCalled();
  });

  test("should render with the correct label", () => {
    const { getByTestId } = render(
      <DropdownSingle
        data={dropdownSingleMock.data}
        label={dropdownSingleMock.label}
      />
    );
    const label = getByTestId("dropdown-single-label");

    expect(label).toBeInTheDocument();

    expect(label).toHaveTextContent(dropdownSingleMock.label);
  });

  test("should render with the correct placeholder", () => {
    const { getByTestId } = render(
      <DropdownSingle
        data={dropdownSingleMock.data}
        placeholder={dropdownSingleMock.placeholder}
      />
    );

    const dropdown = getByTestId("dropdown-single");

    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toHaveTextContent(dropdownSingleMock.placeholder);
  });

  test("should render when user clicks on the input and the menu opens", () => {
    const { getByTestId } = render(
      <DropdownSingle data={dropdownSingleMock.data} />
    );
    const input = getByTestId("dropdown-single-input");

    fireEvent.click(input);

    const menu = getByTestId("dropdown-single-menu");

    expect(menu).toBeInTheDocument();
  });

  test("should render when the menu is open and the options are rendered correctly", async () => {
    const { getByTestId, findAllByTestId } = render(
      <DropdownSingle data={dropdownSingleMock.data} />
    );
    const input = getByTestId("dropdown-single-input");

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
    const input = getByTestId("dropdown-single-input");

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
    const input = getByTestId("dropdown-single-input");

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
    const input = getByTestId("dropdown-single-input");

    fireEvent.click(input);

    // find all options
    const menuOptions = await findAllByTestId("dropdown-single-menu-option");

    // click on the first option
    fireEvent.click(menuOptions[0]);

    expect(input).toHaveTextContent(dropdownSingleMock.data[0].value);
  });
});
