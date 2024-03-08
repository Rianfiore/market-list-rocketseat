import { DropdownMenuItemType } from "@/components/atoms/DropdownMenu/types";
import { HTMLAttributes } from "react";

export interface DropdownSingleProps
  extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  data: DropdownMenuItemType[];
  placeholder?: string;
  label?: string;
  onClick?: () => void;
  onOptionChange?: (option: DropdownMenuItemType) => void;
}
