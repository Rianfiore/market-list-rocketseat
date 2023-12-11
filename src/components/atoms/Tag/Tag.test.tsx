import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Tag } from ".";
import { tagTypeEnum } from "./tag.enum";

describe("Tag component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<Tag type="bakery" />);
    const tag = getByTestId("tag");

    expect(tag).toBeInTheDocument();
    expect(tag).toContainHTML("svg");
  });

  test("should render the correct text", () => {
    const { getByTestId } = render(<Tag type="bakery" />);
    const tag = getByTestId("tag");

    expect(tag).toHaveTextContent(tagTypeEnum.BAKERY);
  });
});
