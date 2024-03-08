import { InputHTMLAttributes } from "react";

export type InputTextVariantType = "DEFAULT" | "RIGHT-STRAIGHT";
export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: InputTextVariantType;
  label?: string;
}
