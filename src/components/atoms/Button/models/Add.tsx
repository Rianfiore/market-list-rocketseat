import theme from "@/styles/theme";
import { Plus } from "lucide-react";
import { ButtonProps } from "../types";

export function Add({ ...props }: ButtonProps) {
  return (
    <button
      data-testid="button"
      className="bg-brand-purple flex justify-center items-center w-10 h-10 rounded-full hover:bg-brand-purple-dark active:scale-75 active:transition-scale active:duration-[100ms] disabled:pointer-events-none"
      {...props}
    >
      <Plus size={16} color={theme.colors.neutral.gray100} />
    </button>
  );
}
