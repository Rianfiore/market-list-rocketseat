import { HTMLAttributes } from "react";

type DropdownDataType = {
  icon?: JSX.Element;
  value: string;
};

export interface DropdownSingleProps
  extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  data: DropdownDataType[];
  placeholder?: string;
  label?: string;
  onClick?: () => void;
  onOptionChange?: (option: DropdownDataType | undefined) => void;
}
