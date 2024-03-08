export type ButtonVariantType = "ADD" | "MORE";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType;
  ref?: React.Ref<HTMLButtonElement>;
}
