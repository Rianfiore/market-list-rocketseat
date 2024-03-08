export type InputSelectVariantType = "DEFAULT" | "LEFT-STRAIGHT";

export interface InputSelectProps extends React.HTMLProps<HTMLInputElement> {
  variant?: InputSelectVariantType;
  isOpenedMenu: boolean;
  value?: string;
  placeholder?: string;
  label?: string;
  onClick?: () => void;
  handleCloseMenu?: (isOpenedMenu: boolean) => void;
  inputRef?: React.RefObject<HTMLSpanElement>;
  children?: React.ReactNode;
}
