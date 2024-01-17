import { DropdownDouble, DropdownSingle } from "./models";
import { DropdownSingleProps } from "./models/single/types";

export function Dropdown(props: DropdownSingleProps) {
  return <DropdownSingle {...props} />;
}

Dropdown.Double = DropdownDouble;
