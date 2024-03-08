import theme from "@/styles/theme";
import { MoreVertical } from "lucide-react";
import { forwardRef, useRef } from "react";
import { ButtonProps } from "../types";

export const More = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={ref || buttonRef}
      data-testid="button"
      className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-neutral-gray300 active:scale-75 active:transition-scale active:duration-[100ms] disabled:pointer-events-none"
      {...props}
    >
      <MoreVertical size={16} color={theme.colors.neutral.gray100} />
    </button>
  );
});
