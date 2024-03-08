import { DropdownMenuItemType } from "@/components/atoms/DropdownMenu/types";

export interface DropdownDoubleProps {
  label?: string;
  data: DropdownMenuItemType[];
  onOptionChange?: (value: DropdownMenuItemType) => void;
}
