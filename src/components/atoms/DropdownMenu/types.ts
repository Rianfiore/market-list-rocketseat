import React from "react";

export type DropdownMenuItemType = {
  icon?: React.ReactNode;
  value?: string;
};

export interface DropdownMenuProps {
  dropdownMenuRef?: React.RefObject<HTMLDivElement>;
  inputWidth?: number;
  data: DropdownMenuItemType[];
  selectedValue: DropdownMenuItemType;
  onOptionChange?: (value: DropdownMenuItemType) => void;
}
