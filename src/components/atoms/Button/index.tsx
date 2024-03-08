import { forwardRef } from "react";
import { Add } from "./models/Add";
import { More } from "./models/More";
import { ButtonProps } from "./types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, ...props }, ref) => {
    if (variant === "MORE") {
      return <More {...props} ref={ref} />;
    }

    return <Add {...props} ref={ref} />;
  }
);
